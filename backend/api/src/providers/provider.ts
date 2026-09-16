/** Normalized internal email representation. Messages are converted to this
 * shape before they reach HALO's analysis engine, so the engine has no
 * provider-specific code. */
export interface NormalizedEmail {
  providerMessageId: string;
  accountId: string;
  sender: string;
  recipients: string[];
  subject: string;
  receivedAt: string;
  bodyText: string;
  bodyHtml: string | null;
  headers: Record<string, string>;
  urls: string[];
  attachmentMetadata: { filename: string; contentType: string; sizeBytes: number }[];
}

export interface TokenSet {
  accessToken: string;
  refreshToken: string | null;
  expiresAt: string;
}

export interface UserProfile {
  email: string;
  displayName: string | null;
}

/** The mailbox adapter implements this interface. Callers depend only on
 * this abstraction and never on provider-specific implementation details. */
export interface MailboxProvider {
  readonly name: "google";

  isConfigured(): boolean;

  /** Real, callable now -- constructing an OAuth authorization URL needs
   * only a client ID (not secret), so this works and is tested even
   * without real credentials configured (it just reports not-configured
   * honestly in that case). */
  getAuthorizationUrl(state: string, redirectUri: string): string | null;

  /** Needs a real client secret + a real `code` from the provider's
   * actual consent screen -- cannot be exercised end-to-end in this
   * sandbox. Implemented for real against the provider's actual token
   * endpoint; will work once real credentials are configured. */
  handleCallback(code: string, redirectUri: string): Promise<TokenSet>;

  refreshToken(refreshToken: string): Promise<TokenSet>;

  getUserProfile(accessToken: string): Promise<UserProfile>;

  /** windowDays limits the initial scan to recent mail, per the "avoid
   * downloading an entire lifetime mailbox" requirement. */
  fetchMessages(accessToken: string, accountId: string, windowDays: number): Promise<NormalizedEmail[]>;

  revokeAccess(accessToken: string): Promise<void>;
}

import type { MetadataService } from "./MetadataService";
import type { OidcClientSettingsStore } from "./OidcClientSettings";
/**
 * @internal
 */
export interface ExchangeCodeArgs {
    client_id?: string;
    client_secret?: string;
    redirect_uri?: string;
    grant_type?: string;
    code: string;
    code_verifier?: string;
}
/**
 * @internal
 */
export interface ExchangeCredentialsArgs {
    client_id?: string;
    client_secret?: string;
    grant_type?: string;
    scope?: string;
    username: string;
    password: string;
}
/**
 * @internal
 */
export interface ExchangeRefreshTokenArgs {
    client_id?: string;
    client_secret?: string;
    grant_type?: string;
    refresh_token: string;
    scope?: string;
    timeoutInSeconds?: number;
}
/**
 * @internal
 */
export interface RevokeArgs {
    token: string;
    token_type_hint?: "access_token" | "refresh_token";
}
/**
 * @internal
 */
export declare class TokenClient {
    private readonly _settings;
    private readonly _metadataService;
    private readonly _logger;
    private readonly _jsonService;
    constructor(_settings: OidcClientSettingsStore, _metadataService: MetadataService);
    exchangeCode({ grant_type, redirect_uri, client_id, client_secret, ...args }: ExchangeCodeArgs): Promise<Record<string, unknown>>;
    exchangeCredentials({ grant_type, client_id, client_secret, scope, ...args }: ExchangeCredentialsArgs): Promise<Record<string, unknown>>;
    exchangeRefreshToken({ grant_type, client_id, client_secret, timeoutInSeconds, ...args }: ExchangeRefreshTokenArgs): Promise<Record<string, unknown>>;
    /**
     * Revoke an access or refresh token.
     *
     * @see https://datatracker.ietf.org/doc/html/rfc7009#section-2.1
     */
    revoke(args: RevokeArgs): Promise<void>;
}
//# sourceMappingURL=TokenClient.d.ts.map
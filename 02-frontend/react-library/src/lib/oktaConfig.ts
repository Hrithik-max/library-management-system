export const oktaConfig = {
    clientId: '0oaif17sywVQDo5I05d7',
    issuer: 'https://dev-96831586.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
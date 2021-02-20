export interface ISignInProps {
  clientId: string;
  scope: string;
  redirectUri: string;
}

export const SignInData: Partial<ISignInProps> = {
  clientId: '0b05ada88d3a8667fccf',
  redirectUri: 'https://www.jandevelop.com/oauth_redirect',
};

export const CLIENT_SECRET = '5a61ec9f1f785e1dabf4b44f6270c516089477c1';

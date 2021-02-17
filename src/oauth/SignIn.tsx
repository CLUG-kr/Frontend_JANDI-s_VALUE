import React, { useEffect } from 'react';
import { toQuery } from 'utils/url';
import { ISignInProps } from 'oauth/AuthData';

const SignIn: React.FC<Partial<ISignInProps>> = ({
  clientId,
  scope,
  redirectUri,
}) => {
  useEffect(() => {
    const search = toQuery({
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
    });
    window.location.href = `https://github.com/login/oauth/authorize?${search}`;
  }, []);

  return <></>;
};

export default SignIn;

import React, { useEffect } from 'react';
import { toQuery } from 'utils/url';
import { ISignInData } from 'models/AuthModel';

const SignIn: React.FC<Partial<ISignInData>> = ({
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

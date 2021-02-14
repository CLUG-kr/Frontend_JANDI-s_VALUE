import axios from 'axios';
import qs from 'qs';
import React, { useEffect } from 'react';
import { toQuery } from '../utils/url';

export interface ISignInProps {
  clientId: string;
  scope: string;
  redirectUri: string;
}

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
    alert(`https://github.com/login/oauth/authorize?${search}`);
    window.location.href = `https://github.com/login/oauth/authorize?${search}`;
  }, []);

  return <></>;
};

export default SignIn;

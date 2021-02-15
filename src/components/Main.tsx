import { Route, Switch, useHistory } from 'react-router-dom';
import SignIn, { ISignInProps } from '../oauth/SignIn';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { toParams, toQuery } from '../utils/url';
import axios from 'axios';
import ReactJson from 'react-json-view';

const SignInData: Partial<ISignInProps> = {
  clientId: '0b05ada88d3a8667fccf',
  redirectUri: 'https://frontend-jandi-s-value.vercel.app/oauth_redirect',
};

const CLIENT_SECRET = '0d5ed981f1e024e5a0e6e0e5e9ffa73d1fb1afc7';

const Main: React.FC = () => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useState({});
  const getGitHubAccessToken = async (body: { [key: string]: any }) => {
    const res = await axios.post('http://3.34.194.121:8000/oauth/', body);
    return res.data;
  };
  const body = useMemo(
    () => ({
      ...toParams(history.location.search),
      client_id: SignInData.clientId,
      client_secret: CLIENT_SECRET,
    }),
    [history.location.search],
  );

  useEffect(() => {
    getGitHubAccessToken(body).then(res => {
      setAccessToken(res);
    });
  }, [body]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Jandi GitHub OAuth Test</h1>
          <button
            onClick={() => {
              history.replace('/signin');
            }}
          >
            SignIn
          </button>
        </Route>
        <Route path="/signin">
          <SignIn
            clientId={SignInData.clientId}
            redirectUri={SignInData.redirectUri}
          />
        </Route>
        <Route path="/oauth_redirect">
          <div>
            <h1>아래의 코드를 Body에 입력해서 사용하세요.</h1>
            <h3>GitHub API Get Access Token Response</h3>
            <div
              style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}
            >
              <ReactJson src={accessToken} />
            </div>
            <h3>요청한 Body</h3>
            <div
              style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}
            >
              <ReactJson src={body} />
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Main;

import { Route, Switch, useHistory } from 'react-router-dom';
import SignIn, { ISignInProps } from '../oauth/SignIn';
import React from 'react';

const SignInData: Partial<ISignInProps> = {
  clientId: '0b05ada88d3a8667fccf',
  redirectUri: 'http://localhost:3000/oauth_redirect',
};

const Main: React.FC = () => {
  const history = useHistory();
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
          <span>Hi</span>
        </Route>
      </Switch>
    </>
  );
};

export default Main;

import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../oauth/SignIn';
import React from 'react';
import Intro from './intro/Intro';
import GitHubAuthRedirect from 'oauth/GitHubAuthRedirect';
import { SignInData } from 'oauth/AuthData';
import ConditionalRoute from 'components/layout/ConditionalRoute';
import { useLocalStorage } from '@rehooks/local-storage';
import { message } from 'antd';

const Main: React.FC = () => {
  const [accessToken] = useLocalStorage<string>('access_token', '');

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={({ location }) => (
            <Redirect
              to={{
                pathname: '/app',
                state: { from: location },
              }}
            />
          )}
        />
        <ConditionalRoute
          path="/intro"
          redirectPath="/app"
          condition={!(!!accessToken && accessToken !== '')}
          onFalse={() => {
            message.error('이미 로그인 정보가 있습니다.');
          }}
        >
          <Intro />
        </ConditionalRoute>
        <Route path="/signin">
          <SignIn
            clientId={SignInData.clientId}
            redirectUri={SignInData.redirectUri}
          />
        </Route>
        <Route path="/oauth_redirect">
          <GitHubAuthRedirect />
        </Route>
        <ConditionalRoute
          path="/app"
          redirectPath="/intro"
          condition={!!accessToken && accessToken !== ''}
          onTrue={() => {
            console.log(
              '너네가 그렇게 원하는, 엑-세-스-토-큰이다!!',
              accessToken,
            );
            message.info('로그인이 정상 처리되었습니다.');
          }}
        >
          <div>TEST</div>
        </ConditionalRoute>
      </Switch>
    </>
  );
};

export default Main;

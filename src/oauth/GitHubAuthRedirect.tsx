import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toParams } from 'utils/url';
import { CLIENT_SECRET, SignInData } from 'oauth/AuthData';
import { Spin } from 'antd';
import tw from 'twin.macro';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';

const GitHubAuthRedirect: React.FC = () => {
  const [accessToken] = useLocalStorage<string>('access_token', '');
  const history = useHistory();
  const getGitHubAccessToken = async (body: { [key: string]: any }) => {
    const res = await axios.post('https://www.jandevelop.com/oauth/', body);
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
      if (res.hasOwnProperty('access_token')) {
        writeStorage('access_token', res['access_token']);
      }
    });
  }, [body]);

  useEffect(() => {
    // 엑세스 토큰이 정상적으로 온 경우
    if (accessToken !== '' && !!accessToken) {
      setTimeout(() => history.replace('/app'), 1000);
    }
  }, [accessToken]);

  return (
    <div css={tw`w-full h-full flex justify-center items-center`}>
      <Spin size="large" />
    </div>
  );
};

export default GitHubAuthRedirect;

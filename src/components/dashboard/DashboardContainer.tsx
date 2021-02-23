import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'utils/url';
import { useLocalStorage } from '@rehooks/local-storage';
import axios from 'axios';
import { SERVER_HOST } from 'utils/constants';
import Dashboard from 'components/dashboard/Dashboard';
import { IDashboardData } from 'models/DashboardModel';
import { message, Spin } from 'antd';
import tw from 'twin.macro';
import { gtag } from 'utils/usermetric';

const DashboardContainer: React.FC = () => {
  const history = useHistory();
  const query = useQuery();

  const [repository, setRepository] = useState('');
  const isRepoAvailable = useMemo(() => !!repository && repository !== '', [
    repository,
  ]);
  const [accessToken] = useLocalStorage<string>('access_token', '');

  const [data, setData] = useState<IDashboardData>();

  const [isFetching, setIsFetching] = useState(true);

  const getData = async (repository: string): Promise<IDashboardData> => {
    const profile = (
      await axios.get(SERVER_HOST + `/dashboard?access_token=${accessToken}`)
    ).data;

    const history = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/commit?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    const tendency = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/tendency?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    const analytics_contribution = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/contribution?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    const analytics_day = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/day?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    const analytics_language = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/language?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    const analytics_time = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/time?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    return {
      repository,
      profile,
      history,
      tendency,
      analytics: {
        contribution: analytics_contribution,
        day: analytics_day,
        language: analytics_language,
        time: analytics_time,
      },
    };
  };

  useEffect(() => {
    const _repo = query.get('repository');
    if (_repo) {
      setRepository(_repo);
    } else {
      history.replace('/');
    }
  }, [query]);

  // Header > Profile
  useEffect(() => {
    if (isRepoAvailable) {
      (async () => {
        try {
          setIsFetching(true);
          const _data = await getData(repository);
          setData(_data);
          gtag('event', 'enter_dashboard', {
            page_title: window.document.title,
            service_username: _data?.profile.username || 'UNKNOWN',
            repository: _data?.repository || 'UNKNOWN',
          });
          setIsFetching(false);
        } catch (err) {
          message.error('통신 오류가 발생하였습니다.');
          console.error('통신 오류 발생', err);
        }
      })();
    }
  }, [isRepoAvailable]);

  return isFetching || !data ? (
    <div css={tw`w-full h-full flex justify-center items-center`}>
      <Spin />
    </div>
  ) : (
    <Dashboard data={data} />
  );
};

export default DashboardContainer;

import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'utils/url';
import { useLocalStorage } from '@rehooks/local-storage';
import axios from 'axios';
import { SERVER_HOST } from 'utils/network';
import Dashboard from 'components/dashboard/Dashboard';
import { IDashboardData } from '../../models/DashboardModel';

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
    // Profile
    const profile = (
      await axios.get(SERVER_HOST + `/dashboard?access_token=${accessToken}`)
    ).data;

    const tendency = (
      await axios.get(
        SERVER_HOST +
          `/dashboard/tendency?access_token=${accessToken}&repository_name=${repository}`,
      )
    ).data;

    return {
      profile,
      tendency,
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
          setData(await getData(repository));
          setIsFetching(false);
        } catch (err) {
          console.error('통신 오류 발생', err);
        }
      })();
    }
  }, [isRepoAvailable]);

  return isFetching || !data ? <span>Loading</span> : <Dashboard data={data} />;
};

export default DashboardContainer;

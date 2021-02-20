import React, { useEffect, useMemo, useState } from 'react';
import Header from 'components/layout/header/Header';
import { useQuery } from 'utils/url';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import axios from 'axios';
import { SERVER_HOST } from 'utils/network';
import { useLocalStorage } from '@rehooks/local-storage';
import { IProfile } from '../../models/DashboardModel';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const query = useQuery();

  const [repository, setRepository] = useState('');
  const isAvailable = useMemo(() => !!repository && repository !== '', [
    repository,
  ]);
  const [accessToken] = useLocalStorage<string>('access_token', '');

  const [profile, setProfile] = useState<IProfile | null>(null);

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
    if (isAvailable) {
      axios
        .get(SERVER_HOST + `/dashboard?access_token=${accessToken}`)
        .then(res => {
          setProfile(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [isAvailable]);

  return (
    <>
      {!isAvailable && <Spin tip="데이터를 불러오는 중입니다." />}
      <Header profile={profile} />
    </>
  );
};

export default Dashboard;

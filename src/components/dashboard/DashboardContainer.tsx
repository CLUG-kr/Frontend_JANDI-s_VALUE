import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'utils/url';
import { DEBUG_ACCESS_TOKEN, SERVER_HOST } from 'utils/constants';
import Dashboard from 'components/dashboard/Dashboard';
import { IDashboardData } from 'models/DashboardModel';
import { message, Spin } from 'antd';
import tw from 'twin.macro';
import { gtag } from 'utils/usermetric';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajaxGet } from 'rxjs/internal-compatibility';
import { useLocalStorage } from '@rehooks/local-storage';

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

  const getData = (repository: string): Observable<IDashboardData> => {
    const apis = [
      ajaxGet(SERVER_HOST + `/dashboard?access_token=${accessToken}`).pipe(
        map(res => res?.response || null),
      ),
      ajaxGet(
        SERVER_HOST +
          `/dashboard/commit?access_token=${accessToken}&repository_name=${repository}`,
      ).pipe(map(res => res?.response || null)),
      ajaxGet(
        SERVER_HOST +
          `/dashboard/tendency?access_token=${accessToken}&repository_name=${repository}`,
      ).pipe(map(res => res?.response || null)),
      combineLatest([
        ajaxGet(
          SERVER_HOST +
            `/dashboard/contribution?access_token=${accessToken}&repository_name=${repository}`,
        ).pipe(map(res => res?.response || null)),
        ajaxGet(
          SERVER_HOST +
            `/dashboard/day?access_token=${accessToken}&repository_name=${repository}`,
        ).pipe(map(res => res?.response || null)),
        ajaxGet(
          SERVER_HOST +
            `/dashboard/language?access_token=${accessToken}&repository_name=${repository}`,
        ).pipe(map(res => res?.response || null)),
        ajaxGet(
          SERVER_HOST +
            `/dashboard/time?access_token=${accessToken}&repository_name=${repository}`,
        ).pipe(map(res => res?.response || null)),
      ]).pipe(
        map(res => {
          const keys = ['contribution', 'day', 'language', 'time'];
          return res.reduce((acc, curr, idx) => {
            acc[keys[idx]] = curr;
            return acc;
          }, {});
        }),
      ),
    ];

    return combineLatest(apis).pipe(
      map(res => {
        const keys = ['profile', 'history', 'tendency', 'analytics'];
        const result = res.reduce((acc, curr, idx) => {
          acc[keys[idx]] = curr;
          return acc;
        }, {});
        return {
          repository,
          ...result,
        };
      }),
    );
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
      setIsFetching(true);
      getData(repository).subscribe(
        _data => {
          console.log(_data);
          setData(_data);
          gtag('event', 'enter_dashboard', {
            page_title: window.document.title,
            service_username: _data?.profile.username || 'UNKNOWN',
            repository: _data?.repository || 'UNKNOWN',
          });
          setIsFetching(false);
        },
        _ => {
          message.error('통신 오류가 발생하였습니다.');
          history.replace('/');
        },
      );
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

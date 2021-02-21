import React from 'react';
import Header from 'components/layout/header/Header';
import { Divider } from 'antd';
import { IDashboardData } from '../../models/DashboardModel';
import History from 'components/dashboard/History';
import styled from '@emotion/styled';
import Tendency from 'components/dashboard/Tendency';

interface IDashboardProps {
  data: IDashboardData;
}

const Contents = styled.div`
  padding: 30px 32px;
`;

const Dashboard: React.FC<IDashboardProps> = ({ data }) => {
  return (
    <>
      <Header profile={data.profile} />
      <Contents>
        <History today={1} yesterday={2} weekAgo={3} total={4} />
        <Divider />
        <Tendency tendency={data.tendency} />
        <Divider />
      </Contents>
    </>
  );
};

export default Dashboard;

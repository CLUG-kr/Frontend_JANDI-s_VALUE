import React from 'react';
import Header from 'components/layout/header/Header';
import { Divider } from 'antd';
import { IDashboardData } from '../../models/DashboardModel';
import { Spin } from 'antd';
import styled from '@emotion/styled';
import { SERVER_HOST } from 'utils/network';

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
      <Header profile={profile} />
    </>
  );
};

export default Dashboard;

import React from 'react';
import Header from 'components/layout/header/Header';
import { Divider } from 'antd';
import { IDashboardData } from '../../models/DashboardModel';
import History from 'components/dashboard/History';
import styled from '@emotion/styled';
import Tendency from 'components/dashboard/Tendency';
import Footer from 'components/layout/footer/Footer';
import Analytics from 'components/dashboard/Analytics';

interface IDashboardProps {
  data: IDashboardData;
}

const DashboardWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

const Contents = styled.div`
  padding: 30px 32px;
`;

const Dashboard: React.FC<IDashboardProps> = ({ data }) => {
  return (
    <DashboardWrapper>
      <Header profile={data.profile} />
      <Contents>
        <History today={1} yesterday={2} weekAgo={3} total={4} />
        <Divider />
        <Tendency tendency={data.tendency} username={data.profile.username} />
        <Divider />
        <Analytics analytics={data.analytics} />
      </Contents>
      <Footer />
    </DashboardWrapper>
  );
};

export default Dashboard;

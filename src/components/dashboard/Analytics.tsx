import React from 'react';
import { IAnalytics } from '../../models/DashboardModel';
import AnalyticsAsDay from 'components/dashboard/charts/AnalyticsAsDay';
import AnalyticsAsLanguage from 'components/dashboard/charts/AnalyticsAsLanguage';
import tw from 'twin.macro';
import AnalyticsAsTime from 'components/dashboard/charts/AnalyticsAsTime';

interface IAnalyticsProps {
  analytics: IAnalytics;
}

const Analytics: React.FC<IAnalyticsProps> = ({ analytics }) => {
  return (
    <div css={tw`grid grid-cols-2`}>
      <AnalyticsAsDay data={analytics.day} />
      <AnalyticsAsLanguage data={analytics.language} />
      <AnalyticsAsTime data={analytics.time} />
    </div>
  );
};

export default Analytics;

import React from 'react';
import { IAnalytics } from '../../models/DashboardModel';

interface IAnalyticsProps {
  analytics: IAnalytics;
}

const Analytics: React.FC<IAnalyticsProps> = ({ analytics }) => {
  return <>{analytics}</>;
};

export default Analytics;

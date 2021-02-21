import React, { useEffect, useMemo } from 'react';
import { Bar } from '@ant-design/charts';
import { IAnalyticsAsContribution } from '../../../models/DashboardModel';
import { BarConfig } from '@ant-design/charts/es/bar';

interface IAnalyticsAsContributionProps {
  data: IAnalyticsAsContribution[];
}

const AnalyticsAsContribution: React.FC<IAnalyticsAsContributionProps> = ({
  data,
}) => {
  const config = useMemo<BarConfig>(
    () => ({
      data: data,
      width: 370,
      xField: 'value',
      yField: 'username',
      seriesField: 'username',
      legend: { position: 'top-left' },
    }),
    [data],
  );
  return <Bar {...config} />;
};

export default AnalyticsAsContribution;

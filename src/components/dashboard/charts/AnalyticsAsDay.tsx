import React, { useMemo } from 'react';
import { Column } from '@ant-design/charts';
import { ColumnConfig } from '@ant-design/charts/es/column';
import { IAnalyticsAsDay } from 'models/DashboardModel';

interface IAnalyticsAsDayProps {
  data: IAnalyticsAsDay[];
}

const AnalyticsAsDay: React.FC<IAnalyticsAsDayProps> = ({ data }) => {
  const config = useMemo<ColumnConfig>(
    () => ({
      data: data,
      width: 370,
      xField: 'day',
      yField: 'value',
      label: {
        position: 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      meta: {
        day: { alias: '요일' },
        value: { alias: '커밋 수' },
      },
    }),
    [data],
  );
  return <Column {...config} />;
};

export default AnalyticsAsDay;

import React, { useMemo } from 'react';
import { Line } from '@ant-design/charts';
import { IAnalyticsTime } from '../../../models/DashboardModel';

interface IAnalyticsAsTimeProps {
  data: IAnalyticsTime[];
}

const AnalyticsAsTime: React.FC<IAnalyticsAsTimeProps> = ({ data }) => {
  const config = useMemo(
    () => ({
      data: data,
      xField: 'time',
      yField: 'value',
      label: {},
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: { showMarkers: false },
      state: {
        active: {
          style: {
            shadowColor: 'yellow',
            shadowBlur: 4,
            stroke: 'transparent',
            fill: 'red',
          },
        },
      },
      theme: {
        geometries: {
          point: {
            diamond: {
              active: {
                style: {
                  shadowColor: '#FCEBB9',
                  shadowBlur: 2,
                  stroke: '#F6BD16',
                },
              },
            },
          },
        },
      },
      interactions: [{ type: 'marker-active' }],
    }),
    [data],
  );
  return <Line {...config} />;
};

export default AnalyticsAsTime;

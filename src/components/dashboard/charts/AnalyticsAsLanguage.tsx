import React, { useMemo } from 'react';
import { Pie } from '@ant-design/charts';
import { PieConfig } from '@ant-design/charts/es/pie';
import { IAnalyticsAsLanguage } from '../../../models/DashboardModel';

interface IAnalyticsAsLanguageProps {
  data: IAnalyticsAsLanguage[];
}

const AnalyticsAsLanguage: React.FC<IAnalyticsAsLanguageProps> = ({ data }) => {
  const config = useMemo<PieConfig>(
    () => ({
      appendPadding: 10,
      data: data,
      width: 370,
      angleField: 'value',
      colorField: 'language',
      radius: 0.8,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
      },
      interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    }),
    [data],
  );
  return <Pie {...config} />;
};

export default AnalyticsAsLanguage;

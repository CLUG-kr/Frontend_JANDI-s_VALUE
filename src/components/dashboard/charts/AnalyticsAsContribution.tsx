import React, { useEffect, useMemo } from 'react';
import { WordCloud } from '@ant-design/charts';
import { IAnalyticsAsContribution } from '../../../models/DashboardModel';
import { WordCloudConfig } from '@ant-design/charts/es/wordCloud';

interface IAnalyticsAsContributionProps {
  data: IAnalyticsAsContribution[];
}

const AnalyticsAsContribution: React.FC<IAnalyticsAsContributionProps> = ({
  data,
}) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  const config = useMemo<WordCloudConfig>(
    () => ({
      data: data,
      width: 370,
      wordField: 'username',
      weightField: 'value',
      colorField: 'username',
      wordStyle: {
        fontFamily: 'Inter',
        fontSize: [15, 40],
        rotation: 0,
      },
      interactions: [{ type: 'element-active' }],
      state: { active: { style: { lineWidth: 0 } } },
    }),
    [data],
  );
  return <WordCloud {...config} />;
};

export default AnalyticsAsContribution;

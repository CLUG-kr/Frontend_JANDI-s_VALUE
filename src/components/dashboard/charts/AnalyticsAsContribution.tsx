import React, { useMemo } from 'react';
import { WordCloud } from '@ant-design/charts';
import { IAnalyticsAsContribution } from '../../../models/DashboardModel';
import { WordCloudConfig } from '@ant-design/charts/es/wordCloud';

interface IAnalyticsAsContributionProps {
  data: IAnalyticsAsContribution[];
}

const AnalyticsAsContribution: React.FC<IAnalyticsAsContributionProps> = ({
  data,
}) => {
  const config = useMemo<WordCloudConfig>(
    () => ({
      data: data,
      wordField: 'username',
      weightField: 'value',
      colorField: 'username',
      wordStyle: {
        fontFamily: 'Inter',
        fontSize: [15, 60],
        rotation: 0,
      },
      random: function random() {
        return 0.5;
      },
    }),
    [data],
  );
  return <WordCloud {...config} />;
};

export default AnalyticsAsContribution;

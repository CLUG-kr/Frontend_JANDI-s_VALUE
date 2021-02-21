import React from 'react';
import { IAnalytics } from '../../models/DashboardModel';
import AnalyticsAsDay from 'components/dashboard/charts/AnalyticsAsDay';
import AnalyticsAsLanguage from 'components/dashboard/charts/AnalyticsAsLanguage';
import tw from 'twin.macro';
import AnalyticsAsTime from 'components/dashboard/charts/AnalyticsAsTime';
import styled from '@emotion/styled';
import AnalyticsAsContribution from 'components/dashboard/charts/AnalyticsAsContribution';

interface IAnalyticsProps {
  analytics: IAnalytics;
}

const AnalyticsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Analytics: React.FC<IAnalyticsProps> = ({ analytics }) => {
  return (
    <div css={tw`grid grid-cols-1 lg:grid-cols-2 gap-6`}>
      <AnalyticsItem>
        <h3
          css={tw`w-full text-gray-800 text-xl font-bold tracking-tight mb-4`}
        >
          컨트리뷰션 분석 그래프
        </h3>
        <AnalyticsAsContribution data={analytics.contribution} />
      </AnalyticsItem>
      <AnalyticsItem>
        <h3
          css={tw`w-full text-gray-800 text-xl font-bold tracking-tight mb-4`}
        >
          요일별 커밋 경향 그래프
        </h3>
        <AnalyticsAsDay data={analytics.day} />
      </AnalyticsItem>
      <AnalyticsItem>
        <h3
          css={tw`w-full text-gray-800 text-xl font-bold tracking-tight mb-4 mt-8`}
        >
          언어 사용 경향 그래프
        </h3>
        <AnalyticsAsLanguage data={analytics.language} />
      </AnalyticsItem>
      <AnalyticsItem>
        <h3
          css={tw`w-full text-gray-800 text-xl font-bold tracking-tight mb-4 mt-8`}
        >
          시간별 커밋 경향 그래프
        </h3>
        <AnalyticsAsTime data={analytics.time} />
      </AnalyticsItem>
    </div>
  );
};

export default Analytics;

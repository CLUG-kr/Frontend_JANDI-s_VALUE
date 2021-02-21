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
    <div css={tw`grid grid-cols-2`}>
      <AnalyticsItem>
        <AnalyticsAsContribution data={analytics.contribution} />
        <h3 css={tw`text-gray-800 text-lg tracking-tight`}>
          컨트리뷰션 분석 그래프
        </h3>
      </AnalyticsItem>
      <AnalyticsItem>
        <AnalyticsAsDay data={analytics.day} />
        <h3 css={tw`text-gray-800 text-lg tracking-tight`}>
          요일별 커밋 경향 그래프
        </h3>
      </AnalyticsItem>
      <AnalyticsAsLanguage data={analytics.language} />
      <AnalyticsItem>
        <h3 css={tw`text-gray-800 text-lg tracking-tight`}>
          언어 사용 경향 그래프
        </h3>
      </AnalyticsItem>
      <AnalyticsItem>
        <AnalyticsAsTime data={analytics.time} />
        <h3 css={tw`text-gray-800 text-lg tracking-tight`}>
          시간별 커밋 경향 그래프
        </h3>
      </AnalyticsItem>
    </div>
  );
};

export default Analytics;

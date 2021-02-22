import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { IHistory } from 'models/DashboardModel';

interface IHistoryProps {
  history: IHistory;
}

const HistoryWrapper = styled.div`
  text-align: left;

  ${tw`tracking-tight`}
`;

const PrimaryText = styled.span`
  ${tw`text-primary font-bold`}
`;

const History: React.FC<IHistoryProps> = ({ history }) => {
  return (
    <HistoryWrapper>
      <h1 css={tw`text-gray-800 mb-6 text-4xl md:text-5xl font-bold`}>
        오늘 <PrimaryText>{history.today}</PrimaryText>개 커밋 달성
      </h1>
      <div css={tw`flex flex-col space-y-1 text-gray-800`}>
        <span css={tw`text-lg`}>
          어제 총 <PrimaryText>{history.yesterday}</PrimaryText>개 커밋 달성
        </span>
        <span css={tw`text-lg`}>
          일주일 전 오늘은 <PrimaryText>{history.weekAgo}</PrimaryText>개 커밋
          달성
        </span>
      </div>
    </HistoryWrapper>
  );
};

export default History;

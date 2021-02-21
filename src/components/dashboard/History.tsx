import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface IHistoryProps {
  today: number;
  yesterday: number;
  weekAgo: number;
  total: number;
}

const HistoryWrapper = styled.div`
  text-align: left;

  ${tw`tracking-tight`}
`;

const PrimaryText = styled.span`
  ${tw`text-primary font-bold`}
`;

const History: React.FC<IHistoryProps> = ({
  today,
  yesterday,
  weekAgo,
  total,
}) => {
  return (
    <HistoryWrapper>
      <h1 css={tw`text-gray-800 mb-6 text-5xl font-bold`}>
        오늘 <PrimaryText>{today}</PrimaryText>개 커밋 달성
      </h1>
      <div css={tw`flex flex-col space-y-1 text-gray-800`}>
        <span css={tw`text-lg`}>
          어제 총 <PrimaryText>{yesterday}</PrimaryText>개 커밋 달성
        </span>
        <span css={tw`text-lg`}>
          일주일 전 오늘은 <PrimaryText>{weekAgo}</PrimaryText>개 커밋 달성
        </span>
        <span css={tw`text-lg`}>
          총 커밋 수 <PrimaryText>{total}</PrimaryText>개
        </span>
      </div>
    </HistoryWrapper>
  );
};

export default History;

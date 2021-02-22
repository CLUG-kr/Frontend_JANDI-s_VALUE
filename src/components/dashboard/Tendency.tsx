import React, { useMemo } from 'react';
import SearchIcon from 'assets/icons/search.svg';
import tw from 'twin.macro';
import { ITendency, TendencyType } from 'models/DashboardModel';
import Dawn from 'assets/images/dawn.png';
import Morning from 'assets/images/morning.png';
import Night from 'assets/images/night.png';
import styled from '@emotion/styled';

interface ITendencyProps {
  tendency: ITendency;
  username: string;
}

const TendencyImage = styled.div<{ image: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url(${props => props.image}) center;
  background-size: cover;

  ${tw`rounded-xl h-48 md:h-72`}
`;

const TendencyImageText = styled.h1<{ type: TendencyType }>`
  word-break: keep-all;
  text-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
  
  ${tw`text-2xl md:text-4xl text-white font-bold leading-snug p-2 rounded-lg`}
}`;

const Tendency: React.FC<ITendencyProps> = ({ tendency, username }) => {
  const developerType = useMemo(() => {
    switch (tendency.type) {
      case '새벽':
        return '눈 침침한 올빼미형';
      case '아침':
        return '종달새형';
      case '낮':
        return '이상한';
      case '밤':
        return '올빼미형';
    }
  }, [tendency.type]);

  const tendencyImage = useMemo(() => {
    switch (tendency.type) {
      case '새벽':
        return Dawn;
      case '아침':
        return Morning;
      case '낮':
        return Morning;
      case '밤':
        return Night;
    }
  }, [tendency.type]);

  return (
    <div css={tw`space-y-4`}>
      <div css={tw`flex items-center space-x-4`}>
        <img src={SearchIcon} alt="search" />
        <span css={tw`text-base text-gray-800 text-left`}>
          제가 <span css={tw`text-primary font-bold`}>{username}</span>님의 개발
          성향을 분석해봤어요!
        </span>
      </div>
      <TendencyImage image={tendencyImage}>
        <TendencyImageText type={tendency.type}>
          당신은 주로 {tendency.type}에 활동하는
          <br />
          {developerType} 개발자이군요!
        </TendencyImageText>
      </TendencyImage>
    </div>
  );
};

export default Tendency;

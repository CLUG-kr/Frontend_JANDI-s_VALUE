import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { GithubFilled, RightOutlined } from '@ant-design/icons';
import { BackgroundGradient } from 'styles/Common';

const RepoSelectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${BackgroundGradient}
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  ${tw`py-32`}
`;

const RepoBtnGroup = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${tw`mt-12`}
`;

const RepoBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1rem;
  transition: all 0.2s;

  ${tw`text-white text-left rounded-lg`}

  &:hover {
    ${tw`bg-gray-100 text-gray-800 font-bold`}
  }
  &:focus {
    outline: none;
  }
`;

const RepoSelection: React.FC = () => {
  const data = [
    'asd',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
    'asdsad',
  ];
  return (
    <RepoSelectionWrapper>
      <InnerWrapper>
        <GithubFilled css={tw`text-7xl mb-8 text-white`} />
        <h1 css={tw`text-5xl font-bold text-white tracking-tight\t`}>
          레포지터리를 선택해주세요.
        </h1>
        <RepoBtnGroup>
          {data.map(i => (
            <RepoBtn>
              {i}
              <RightOutlined />
            </RepoBtn>
          ))}
        </RepoBtnGroup>
      </InnerWrapper>
    </RepoSelectionWrapper>
  );
};

export default RepoSelection;

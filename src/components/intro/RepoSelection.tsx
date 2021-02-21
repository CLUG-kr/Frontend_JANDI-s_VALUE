import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { GithubFilled, RightOutlined } from '@ant-design/icons';
import { BackgroundGradient } from 'styles/Common';
import axios from 'axios';
import { useLocalStorage } from '@rehooks/local-storage';
import { SERVER_HOST } from 'utils/network';
import { Spin } from 'antd';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

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

  ${tw`py-32 px-6`}
`;

const RepoBtnGroup = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${tw`mt-12`}
`;

const RepoBtn = styled.button`
  width: 100%;
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

const SpinStyle = css`
  .ant-spin-dot-item {
    background: white !important;
  }
`;

const RepoSelection: React.FC = () => {
  const [accessToken] = useLocalStorage<string>('access_token', '');

  useEffect(() => {
    if (accessToken !== '' && !!accessToken) {
      axios
        .get(SERVER_HOST + `/repolist/?access_token=${accessToken}`, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then(res => {
          console.log(res);
          setRepositoryList(res.data.repositories);
        })
        .catch(err => console.log(err));
    }
  }, [accessToken]);

  const [repositoryList, setRepositoryList] = useState([]);

  return (
    <RepoSelectionWrapper>
      <InnerWrapper>
        <GithubFilled css={tw`text-7xl mb-8 text-white`} />
        <h1 css={tw`text-3xl font-bold text-white tracking-tight md:text-5xl`}>
          레포지터리를 선택해주세요.
        </h1>
        <RepoBtnGroup>
          {repositoryList?.length ? (
            repositoryList.map(i => (
              <Link to={`/dashboard?repository=${i}`}>
                <RepoBtn>
                  {i}
                  <RightOutlined />
                </RepoBtn>
              </Link>
            ))
          ) : (
            <Spin css={SpinStyle} />
          )}
        </RepoBtnGroup>
      </InnerWrapper>
    </RepoSelectionWrapper>
  );
};

export default RepoSelection;

import React from 'react';
import Logo from 'assets/images/logo.svg';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import tw from 'twin.macro';
import Footer from 'components/layout/footer/Footer';
import { useHistory } from 'react-router-dom';
import { BackgroundGradient } from 'styles/Common';

const IntroJumbotron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;

  ${BackgroundGradient}
`;

const IntroWrapper = styled.div`
  text-align: center;
  ${tw`space-y-8 pt-28`}
`;

const IntroLogo = styled.img`
  margin: 0 auto;
`;

const Intro: React.FC = () => {
  const history = useHistory();

  return (
    <IntroWrapper>
      <IntroLogo src={Logo} alt="Logo" />
      <IntroJumbotron />
      <Button
        className="jandi-btn--gray"
        type="text"
        size="large"
        icon={<GithubOutlined />}
        onClick={() => {
          history.replace('/signin');
        }}
      >
        GitHub 로그인
      </Button>
      <Footer />
    </IntroWrapper>
  );
};

export default Intro;

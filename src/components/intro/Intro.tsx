import React from 'react';
import Logo from 'assets/images/logo.svg';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import tw from 'twin.macro';
import Footer from 'components/layout/footer/Footer';
import { useHistory } from 'react-router-dom';

const IntroJumbotron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  //background: linear-gradient(98.75deg, #44d680 19.63%, #2ccba5 71.49%);

  background: linear-gradient(-45deg, #44d680, #1dc4ca, #53d078, #3deac1);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const IntroJumbotronText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
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

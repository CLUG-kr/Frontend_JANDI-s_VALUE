import React from 'react';
import styled from '@emotion/styled';
import JandevelopLogo from 'assets/images/jandevelop-logo.svg';
import tw from 'twin.macro';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 6rem 0 4rem;
`;

const LogoImage = styled.img`
  height: 1.5rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LogoImage src={JandevelopLogo} alt="Jandevelop Logo" />
      <span css={tw`text-gray-500 mt-1 text-xs text-center`}>
        Copyright(c) 2021. JANDevelopers. All rights reserved.
      </span>
    </FooterWrapper>
  );
};

export default Footer;

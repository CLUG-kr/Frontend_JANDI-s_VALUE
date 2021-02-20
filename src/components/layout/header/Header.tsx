import styled from '@emotion/styled';
import React from 'react';
import Logo from 'assets/images/logo.svg';
import tw from 'twin.macro';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 32px;
`;

const HeaderLogo = styled.img`
  width: 45px;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo src={Logo} alt="logo" />
      </HeaderWrapper>
    </>
  );
};

export default Header;

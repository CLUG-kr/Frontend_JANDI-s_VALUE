import styled from '@emotion/styled';
import React from 'react';
import Logo from 'assets/images/logo.svg';
import tw from 'twin.macro';
import { IProfile } from '../../../models/DashboardModel';
import { Avatar, Button } from 'antd';
import Title from 'antd/es/typography/Title';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 16px;
`;

const HeaderLogo = styled.img`
  width: 45px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  transition: background 0.4s;

  > * + * {
    margin-left: 0.7rem;
  }

  ${tw`-mr-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer`}
`;

const ProfileDescription = styled.div`
  text-align: left;
`;

interface IHeaderProps {
  profile: IProfile | null;
}

const Header: React.FC<IHeaderProps> = ({ profile }) => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo src={Logo} alt="logo" />
        <a href={`https://github.com/${profile?.username}`} target="_blank">
          <Profile>
            <Avatar
              size={24}
              icon={<img src={profile?.profile_img_url} alt="profile image" />}
            />
            <ProfileDescription>
              <Title level={5} css={tw`mb-0! text-gray-800!`}>
                {profile?.username || '불러오는 중'}
              </Title>
            </ProfileDescription>
          </Profile>
        </a>
      </HeaderWrapper>
    </>
  );
};

export default Header;

import styled from '@emotion/styled';
import React from 'react';
import Logo from 'assets/images/logo.svg';
import tw from 'twin.macro';
import { IProfile } from 'models/DashboardModel';
import { Avatar, Button, Tooltip } from 'antd';
import Title from 'antd/es/typography/Title';
import { LogoutOutlined, SwapOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from '@rehooks/local-storage';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 16px;

  ${tw`md:flex-row flex-col`}
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

  ${tw`-ml-3 md:m-0 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer`}
`;

const ProfileDescription = styled.div`
  text-align: left;
  ${tw`-space-y-1`}
`;

interface IHeaderProps {
  profile: IProfile | null;
  repository: string;
}

const Header: React.FC<IHeaderProps> = ({ profile, repository }) => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useLocalStorage<string>(
    'access_token',
    '',
  );

  const changeRepository = () => {
    history.replace('/repo_selection');
  };

  const signOut = () => {
    setAccessToken('');
    history.replace('/intro');
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo src={Logo} alt="logo" />
        <div css={tw`flex justify-center items-center space-x-2`}>
          <a
            href={`https://github.com/${profile?.username}/${repository}`}
            target="_blank"
          >
            <Profile>
              <Avatar
                size={36}
                icon={
                  <img src={profile?.profile_img_url} alt="profile image" />
                }
              />
              <ProfileDescription>
                <span css={tw`text-xs mb-0! text-gray-600!`}>
                  {profile?.username || '불러오는 중'}
                </span>
                <Title
                  level={5}
                  css={tw`mb-0! text-gray-800! overflow-hidden! overflow-ellipsis! whitespace-nowrap! md:w-full w-40`}
                >
                  {repository || '불러오는 중'}
                </Title>
              </ProfileDescription>
            </Profile>
          </a>
          <Tooltip placement="bottom" title="레포지터리 변경">
            <Button
              shape="circle"
              icon={<SwapOutlined />}
              onClick={changeRepository}
            />
          </Tooltip>
          <Tooltip placement="bottom" title="로그아웃">
            <Button
              shape="circle"
              icon={<LogoutOutlined />}
              onClick={signOut}
            />
          </Tooltip>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;

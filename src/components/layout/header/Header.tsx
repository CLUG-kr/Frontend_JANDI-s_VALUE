import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import Logo from 'assets/images/logo.svg';
import tw from 'twin.macro';
import { IProfile } from '../../../models/DashboardModel';
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

  ${tw`px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer`}
`;

const ProfileDescription = styled.div`
  text-align: left;
`;

interface IHeaderProps {
  profile: IProfile | null;
}

const Header: React.FC<IHeaderProps> = ({ profile }) => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useLocalStorage<string>(
    'access_token',
    '',
  );

  const changeRepository = useCallback(() => {
    history.replace('/repo_selection');
  }, [history]);
  const signOut = useCallback(() => {
    setAccessToken('');
    history.replace('/intro');
  }, [history]);

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo src={Logo} alt="logo" />
        <div css={tw`flex justify-center items-center space-x-2`}>
          <a href={`https://github.com/${profile?.username}`} target="_blank">
            <Profile>
              <Avatar
                size={24}
                icon={
                  <img src={profile?.profile_img_url} alt="profile image" />
                }
              />
              <ProfileDescription>
                <Title level={5} css={tw`mb-0! text-gray-800!`}>
                  {profile?.username || '불러오는 중'}
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
          <Tooltip placement="bottom" title="로그아웃 (현재 미지원)">
            <Button
              shape="circle"
              icon={<LogoutOutlined />}
              disabled
              onClick={signOut}
            />
          </Tooltip>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;

import React from 'react';
import { SidebarData } from '../data/SidebarData';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SidebarContentsContainer = styled.section`
  padding-left: 2rem;
  padding-top: 1.5rem;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(NavLink)`
  margin-top: 2px;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Font Happiness Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.3s;

  &:hover {
    background-color: #D9D9D9;
    color: #00D26D; /* 호버 시 글자 색을 바꿉니다. */
  }

  &.active {
    color: #00D26D; /* 활성화된 링크의 글자색 */
  }
`;

const SidebarHeader = styled.div`
  font-family: "Font Happiness Sans", sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SidebarLogoContainer = styled(CenteredBox)`
  width: 100%;
  height: 192px;
  cursor: pointer;
  background-color: #00D25D;
`;

const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const SidebarLogo = styled.img`
  width: 71.98px;
  height: 43.15px;
`;

const SidebarTitle = styled.span`
  font-family: "Happiness Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
`;

const Spacer = styled.div`
  height: 2rem;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLogoContainer>
        <NavLink to="/">
          <SidebarLogo
            src={require("../assets/images/Homelogo.png")}
            alt="쑨 로고"
          />
        </NavLink>
        <LogoTextContainer>
          <SidebarTitle>쑨 관리자 센터</SidebarTitle>
        </LogoTextContainer>
      </SidebarLogoContainer>

      <SidebarContentsContainer>
        <SidebarHeader>쑨 기획 챌린지</SidebarHeader>
        {SidebarData.map((item, index) => {
          if (
            item.path === '/AdminMakeChallenge' ||
            item.path === '/AdminManageChallenge'
          ) {
            return (
              <div key={index}>
                <SidebarLink to={item.path} activeClassName="active">
                  {item.title}
                </SidebarLink>
              </div>
            );
          }
          return null;
        })}
        <Spacer />

        <SidebarHeader>일반 챌린지</SidebarHeader>
        {SidebarData.map((item, index) => {
          if (
            item.path === '/OriginPlanChallenge' ||
            item.path === '/OriginDoneChallenge'
          ) {
            return (
              <div key={index}>
                <SidebarLink to={item.path} activeClassName="active">
                  {item.title}
                </SidebarLink>
              </div>
            );
          }
          return null;
        })}
        <Spacer />

        <SidebarHeader>회원 관리</SidebarHeader>
        {SidebarData.map((item, index) => {
          if (
            item.path === '/UserList' ||
            item.path === '/ReportManage'
          ) {
            return (
              <div key={index}>
                <SidebarLink to={item.path} activeClassName="active">
                  {item.title}
                </SidebarLink>
              </div>
            );
          }
          return null;
        })}

        <Spacer />
        <SidebarHeader>배너</SidebarHeader>
        {SidebarData.map((item, index) => {
          if (
            item.path === '/MakeBanner' ||
            item.path === '/ManageBanner'
          ) {
            return (
              <div key={index}>
                <SidebarLink to={item.path} activeClassName="active">
                  {item.title}
                </SidebarLink>
              </div>
            );
          }
          return null;
        })}
        
      </SidebarContentsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

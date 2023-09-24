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

const SidebarLogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 192px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: #00D26D;
`;

const SidebarLogo = styled.img`
  width: 71.98px;
  height: 43.15px;
  position: absolute;
  top: 53px;
  left: 82px;
`;

const SidebarTitle = styled.span`
  width: 92px;
  height: 29px;
  position: absolute;
  top: 110px;
  left: 72px;
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
          <SidebarTitle>쑨 관리자 센터</SidebarTitle>
        </NavLink>
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

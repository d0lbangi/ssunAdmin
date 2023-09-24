import React from "react";
import styled from "styled-components";
import ContentPage from "./ContentPage";
import Sidebar from './Sidebar'

const Wrapper = styled.div`
  /* 화면 크기 설정 */
  // width: 1440px;
  width: 100%;
  height: 1024px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0; /* 여백 제거 */
`;

const SidebarCol = styled.div`
  /* 좌측 패널 스타일 설정 */
  background-color: #D9D9D9;
  // grid-column: span 3;

  @media (min-width: 768px) {
    /* 화면 너비가 768px 이상일 때 스타일 변경 */
    grid-column: span 2;
  }
`;

const ContentCol = styled.div`
  /* 우측 패널 스타일 설정 */
  background-color: pink;
  grid-column: span 9;

  @media (min-width: 768px) {
    /* 화면 너비가 768px 이상일 때 스타일 변경 */
    grid-column: span 10;
  }
`;

const MainPage = () => {
  return (
    <Wrapper>
      <SidebarCol>
        {/* Sidebar 컴포넌트 */}
        <Sidebar />
      </SidebarCol>

      <ContentCol>
        {/* NavPage 컴포넌트 */}
        <ContentPage />
      </ContentCol>
    </Wrapper>
  );
};

export default MainPage;

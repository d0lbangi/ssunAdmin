import React from 'react';
import styled from 'styled-components';

const AdminContainer = styled.section`
  position: relative;
  display: flex;
  background: linear-gradient(0deg, #E5E5E5, #E5E5E5),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
  justify-content: flex-start;
  align-items: flex-start;
  width: 1440px;
  height: 960px;
  top: 47px;
  left: 125px;
  border: 1.2px solid #E5E5E5;
  padding: 0;
`;

const ChallengeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  gap: 1rem; /* 아이템 간격 추가 */
  flex-wrap: wrap; /* 아이템 줄 바꿈 */
`;

const InfoItem = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  background: #ffffff;
  color: #000000;
  margin-bottom: 1rem;
`;

const InfoItemName = styled.div`
  margin-right: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
`;

const InfoContent = styled.div`
  flex: 4;
`;

const BannerTitle = styled(InfoContent)``;
const SearchPeriod = styled(InfoContent)``;
const Filtering = styled(InfoContent)``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const Button = styled.button`
  width: 128px;
  height: 40px;
  border: 1px solid #9F9F9F;
  cursor: pointer;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  background-color: #D9D9D9; /* 기본 배경색 */
  transition: background-color 0.3s ease;
  margin-right: 1rem;

  &:active {
    background-color: #00D26D; /* 클릭 시 배경색 변경 */
  }
`;


const AdminMakeChallenge = () => {
  return (
    <React.Fragment>
      <AdminContainer>
        <ChallengeInfo>
          <InfoItem>
            <InfoItemName>배너제목</InfoItemName>
            <BannerTitle>내용</BannerTitle>
          </InfoItem>
          <InfoItem>
            <InfoItemName>조회기간</InfoItemName>
            <SearchPeriod>내용</SearchPeriod>
          </InfoItem>
          <InfoItem>
            <InfoItemName>필터링</InfoItemName>
            <Filtering>내용</Filtering>
          </InfoItem>
          
          <ButtonContainer>
            <Button>검색</Button>
          </ButtonContainer>
        </ChallengeInfo>
      </AdminContainer>
    </React.Fragment>
  );
};

export default AdminMakeChallenge;

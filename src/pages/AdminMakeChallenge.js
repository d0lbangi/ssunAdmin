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

const Thumbnail = styled(InfoContent)``;
const Category = styled(InfoContent)``;
const Difficulty = styled(InfoContent)``;
const ChallengeName  = styled(InfoContent)``;
const Details = styled(InfoContent)``;
const Participants = styled(InfoContent)``;
const ChallengeFee = styled(InfoContent)``;
const ChallengePeriod = styled(InfoContent)``;
const VerificationType = styled(InfoContent)``;

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
            <InfoItemName>썸네일</InfoItemName>
            <Thumbnail>내용</Thumbnail>
          </InfoItem>
          <InfoItem>
            <InfoItemName>카테고리</InfoItemName>
            <Category>내용</Category>
          </InfoItem>
          <InfoItem>
            <InfoItemName>난이도</InfoItemName>
            <Difficulty>내용</Difficulty>
          </InfoItem>
          <InfoItem>
            <InfoItemName>챌린지명</InfoItemName>
            <ChallengeName>내용</ChallengeName>
          </InfoItem>
          <InfoItem>
            <InfoItemName>상세설명</InfoItemName>
            <Details>내용</Details>
          </InfoItem>
          <InfoItem>
            <InfoItemName>참가인원</InfoItemName>
            <Participants>내용</Participants>
          </InfoItem>
          <InfoItem>
            <InfoItemName>도전비</InfoItemName>
            <ChallengeFee>내용</ChallengeFee>
          </InfoItem>
          <InfoItem>
            <InfoItemName>챌린지 기간</InfoItemName>
            <ChallengePeriod>내용</ChallengePeriod>
          </InfoItem>
          <InfoItem>
            <InfoItemName>인증 형태</InfoItemName>
            <VerificationType>내용</VerificationType>
          </InfoItem>
          <ButtonContainer>
            <Button>미리보기</Button>
            <Button>만들기</Button>
          </ButtonContainer>
        </ChallengeInfo>
      </AdminContainer>
    </React.Fragment>
  );
};

export default AdminMakeChallenge;

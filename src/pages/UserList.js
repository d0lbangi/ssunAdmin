import React, { useState } from 'react';
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
  gap: 1rem;
  flex-wrap: wrap;
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
  margin-left: 2rem;
  flex: 1;
  display: flex;
  align-items: center;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;

const InfoContent = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
`;

const UserSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
`;

const UserSearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #9F9F9F;
  padding: 0rem 0rem 0rem 1rem;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  border-radius: 12px 0 0 12px;
  cursor: text;
`;

const SearchButton = styled.button`
  width: 96px;
  height: 42px;
  border-radius: 0 12px 12px 0;
  border: 1px solid #9F9F9F;
  cursor: pointer;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  background: linear-gradient(0deg, #00D26D, #00D26D), linear-gradient(0deg, #9F9F9F, #9F9F9F);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 1024px;
  height: 6rem;
  top: 12rem;
  left: 1.875rem;
  background: #D9D9D9;
  position: absolute;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #9F9F9F;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #9F9F9F;
`;

const UserList = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`검색어: ${searchText}`);
  };

  

  return (
    <React.Fragment>
      <AdminContainer>
        <ChallengeInfo>
          <InfoItem>
            <InfoItemName>회원 조회</InfoItemName>
            <InfoContent>
              <UserSearchContainer>
                <UserSearchInput
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <SearchButton onClick={handleSearch}>검색</SearchButton>
              </UserSearchContainer>
            </InfoContent>
          </InfoItem>
        </ChallengeInfo>
              <Table>
        <thead>
          <tr>
            <TableHeader>User ID</TableHeader>
            <TableHeader>닉네임</TableHeader>
            <TableHeader>본명</TableHeader>
            <TableHeader>챌린지 참여횟수</TableHeader>
            <TableHeader>연락처</TableHeader>
            <TableHeader>성공횟수</TableHeader>
            <TableHeader>성공률</TableHeader>
            <TableHeader>주소</TableHeader>
            <TableHeader colSpan="2">신고내역(신고자/내용)</TableHeader>

          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <React.Fragment key={user.userId}>
              <tr>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.nickname}</TableCell>
                <TableCell>{user.realName}</TableCell>
                <TableCell>{user.challengeCount}</TableCell>
                <TableCell>{user.contact}</TableCell>
                <TableCell>{user.successCount}</TableCell>
                <TableCell>{user.successRate}</TableCell>
                <TableCell>{user.address}</TableCell>
                {user.report.map((report, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <>
                        <TableCell>{report.reporter}</TableCell>
                        <TableCell>{report.content}</TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell></TableCell>
                        <TableCell>{report.reporter}</TableCell>
                        <TableCell>{report.content}</TableCell>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      </AdminContainer>
    </React.Fragment>
  );
};

export default UserList;

const userData = [
  {
    userId: 1,
    nickname: '닉네임1',
    realName: '본명1',
    challengeCount: 3,
    contact: '연락처1',
    successCount: 2,
    successRate: '50%',
    address: '주소1',
    report: [{ reporter: '신고자1', content: '내용1' }],
  },
  {
    userId: 2,
    nickname: '닉네임2',
    realName: '본명2',
    challengeCount: 5,
    contact: '연락처2',
    successCount: 4,
    successRate: '80%',
    address: '주소2',
    report: [{ reporter: '신고자2', content: '내용2' }],
  },
  {
    userId: 3,
    nickname: '닉네임3',
    realName: '본명3',
    challengeCount: 2,
    contact: '연락처3',
    successCount: 1,
    successRate: '25%',
    address: '주소3',
    report: [{ reporter: '신고자3', content: '내용3' }],
  },
];
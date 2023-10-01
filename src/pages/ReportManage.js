import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const InfoContent = styled.div`
  flex: 6;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 216px;
  height: 32px;
  border: 1px solid #9F9F9F;
  padding: 0.25rem 0rem 0.25rem 1rem;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  border-radius: 12px;
  cursor: text;
`;

const CalendarIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.25rem;
`;

const DatePickerWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DatePickerStyled = styled(DatePicker)`
  width: 100px;
  height: 32px;
  border: 1px solid #9F9F9F;
  padding: 0rem 0rem 0rem 1rem;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 34px;
  left: 0;
  opacity: 0;
  z-index: -1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
  background-color: ${(props) => (props.active ? '#00D26D' : '#D9D9D9')};
  transition: background-color 0.3s ease;

  &:active {
    background-color: #00D26D;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-direction: row;
  margin-right: 1.1rem;
`;

const FilterLabel = styled.div`
  font-family: 'Happiness Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 1.1rem;
`;

const FilterButton = styled.button`
  width: 120px;
  height: 32px;
  border: 1px solid #9F9F9F;
  cursor: pointer;
  font-family: 'Happiness Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  background-color: ${(props) => (props.active ? '#00D26D' : '#D9D9D9')};
  transition: background-color 0.3s ease;

  &:active {
    background-color: #00D26D;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #9F9F9F;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #9F9F9F;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 1024px;
  height: 6rem;
  top: 12rem;
  left: 1.875rem;
  background: #D9D9D9;
  position: absolute;
  margin-top: 12rem;
`;

const AdminMakeChallenge = () => {
  const [nickName, setNickName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [statusFilter, setStatusFilter] = useState('전체');
  const [contentFilter, setContentFilter] = useState('전체');

  const handleSearch = () => {
    // 검색 기능을 구현하세요.
    console.log(`검색: ${handleSearch}`);
  };

  const handleFilterStatus = (status) => {
    // 상태 필터링 기능을 구현하세요.
    setStatusFilter(status);
    console.log(`상태 필터링: ${status}`);
  };

  const handleFilterContent = (content) => {
    // 신고내용 필터링 기능을 구현하세요.
    setContentFilter(content);
    console.log(`신고내용 필터링: ${content}`);
  };

  return (
    <React.Fragment>
      <AdminContainer>
        <ChallengeInfo>
          <InfoItem>
            <InfoItemName>닉네임</InfoItemName>
            <InfoContent>
              <InputContainer>
                <Input
                  type="text"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  placeholder="닉네임을 입력하세요"
                />
              </InputContainer>
            </InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoItemName>조회 기간</InfoItemName>
            <InfoContent>
              <InputContainer>
                <DatePickerWrapper>
                  <Input
                    id="startDate"
                    type="text"
                    value={startDate ? startDate.toLocaleDateString() : ''}
                    onClick={() => document.getElementById('startDatePicker').click()}
                    readOnly
                    placeholder="시작 날짜"
                  />
                  <CalendarIcon onClick={() => document.getElementById('startDatePicker').click()}>
                    📅
                  </CalendarIcon>
                  <DatePickerStyled
                    id="startDatePicker"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="시작 날짜"
                    popperPlacement="bottom"
                    showYearDropdown
                    scrollableYearDropdown
                  />
                </DatePickerWrapper>
                ~
                <DatePickerWrapper>
                  <Input
                    id="endDate"
                    type="text"
                    value={endDate ? endDate.toLocaleDateString() : ''}
                    onClick={() => document.getElementById('endDatePicker').click()}
                    readOnly
                    placeholder="종료 날짜"
                  />
                  <CalendarIcon onClick={() => document.getElementById('endDatePicker').click()}>
                    📅
                  </CalendarIcon>
                  <DatePickerStyled
                    id="endDatePicker"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="종료 날짜"
                    popperPlacement="bottom"
                    showYearDropdown
                    scrollableYearDropdown
                  />
                </DatePickerWrapper>
              </InputContainer>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoItemName>필터링</InfoItemName>
            <InfoContent>
              <InputContainer>
                <FilterContainer>
                  <FilterLabel>처리상태</FilterLabel>
                  <FilterButton
                    onClick={() => handleFilterStatus('전체')}
                    active={statusFilter === '전체'}
                  >
                    전체
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterStatus('접수')}
                    active={statusFilter === '접수'}
                  >
                    접수
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterStatus('처리완료')}
                    active={statusFilter === '처리완료'}
                  >
                    처리완료
                  </FilterButton>
                </FilterContainer>
                <FilterContainer>
                  <FilterLabel>신고내용</FilterLabel>
                  <FilterButton
                    onClick={() => handleFilterContent('전체')}
                    active={contentFilter === '전체'}
                  >
                    전체
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterContent('방해')}
                    active={contentFilter === '방해'}
                  >
                    방해
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterContent('욕설')}
                    active={contentFilter === '욕설'}
                  >
                    욕설
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterContent('성희롱')}
                    active={contentFilter === '성희롱'}
                  >
                    성희롱
                  </FilterButton>
                  <FilterButton
                    onClick={() => handleFilterContent('이단/사이비')}
                    active={contentFilter === '이단/사이비'}
                  >
                    이단/사이비
                  </FilterButton>
                </FilterContainer>
              </InputContainer>
            </InfoContent>
          </InfoItem>

          <ButtonContainer>
            <Button onClick={handleSearch}>검색</Button>
          </ButtonContainer>
        </ChallengeInfo>

        <Table>
        <thead>
          <tr>
            <TableHeader>User ID</TableHeader>
            <TableHeader>신고일자</TableHeader>
            <TableHeader>신고자</TableHeader>
            <TableHeader>피신고자</TableHeader>
            <TableHeader>내용</TableHeader>
            <TableHeader>처리상태</TableHeader>
            <TableHeader>이용정지 기간</TableHeader>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <React.Fragment key={user.userId}>
              <tr>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.reportDate}</TableCell>
                <TableCell>{user.reporter}</TableCell>
                <TableCell>{user.reportedUser}</TableCell>
                <TableCell>{user.content}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.suspensionPeriod}</TableCell>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
        </Table>
      </AdminContainer>
    </React.Fragment>
  );
};

export default AdminMakeChallenge;

const userData = [
  {
    userId: 1,
    reportDate: '2023-10-01',
    reporter: '신고자1',
    reportedUser: '피신고자1',
    content: '내용1',
    status: '처리완료',
    suspensionPeriod: '2023-10-05',
  },
  {
    userId: 2,
    reportDate: '2023-10-02',
    reporter: '신고자2',
    reportedUser: '피신고자2',
    content: '내용2',
    status: '접수',
    suspensionPeriod: '2023-10-06',
  },
  {
    userId: 3,
    reportDate: '2023-10-03',
    reporter: '신고자3',
    reportedUser: '피신고자3',
    content: '내용3',
    status: '처리완료',
    suspensionPeriod: '2023-10-07',
  },
];

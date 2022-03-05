import styled from 'styled-components';
import MypageNavbar from './pageComponents/MypageComponents/MypageNavbarComponent'
import MypageEditUserInfoManage from './pageComponents/MypageComponents/MypageEditUserInfoManage';

const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: 50px repeat(9, minmax(auto, 1fr) );
`;
const SubMenu = styled.div`
 grid-row: 1/1;
 grid-column: 1/11;
 height: 2.5vw;
 align-items: center;
`;
const EditPage = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: 40px repeat(7, minmax(auto, 1fr)) 120px;
 grid-row: 2/11;
 grid-column: 1/11;
 background-color:${props => props.theme.recordBgColor};
`;
const EditAccountContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(9, minmax(auto, 1fr));
 grid-row: 2/9;
 grid-column: 3/8;
 background-color: #fff;
 @media (max-width: 700px) {
  display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(9, minmax(auto, 1fr));
 grid-row: 2/9;
 grid-column: 1/10;
 background-color: #fff;
} 
`;
const Header = styled.h2`
 grid-row: 1/2;
 grid-column:2/4;
 font-weight: 400;
 padding: 16px 0px;
 @media (max-width: 1200px) {
 grid-row: 1/2;
 grid-column:2/4;
 font-weight: 400;
 font-size:1.2em;
 padding: 16px 0px;
} 
@media (max-width: 1000px) {
 grid-row: 1/2;
 grid-column:2/4;
 font-weight: 400;
 font-size:1em;
 padding: 16px 0px;
} 
@media (max-width: 800px) {
 grid-row: 1/2;
 grid-column:2/4;
 font-weight: 400;
 font-size:0.8em;
 padding: 16px 0px;
} 
`;
const UserInfoManage = styled.div`
 grid-row: 2/5 ;
 grid-column: 2/10;
 border-top: 1px solid ${props => props.theme.MypageLineColor};
`;
const ConnectedAccount = styled.h3`
 grid-row: 5/6;
 grid-column:2/4;
 font-weight: 400;
 padding: 16px 0px;
 @media (max-width: 1000px) {
 grid-row: 5/6;
 grid-column:2/4;
 font-weight: 400;
 font-size: 0.9em;
 padding: 16px 0px;
} 
@media (max-width: 800px) {
 grid-row: 5/6;
 grid-column:2/4;
 font-weight: 400;
 font-size: 0.6em;
 padding: 16px 0px;
} 
 `;
const ConnectedAccountContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: repeat(1, minmax(auto, 1fr));
 grid-row: 6/7;
 grid-column:2/10;
 border-top: 1px solid ${props => props.theme.MypageLineColor};
 `;
const GithubAccount = styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 1/2;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`;
const GithubAccountName = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;
`;
const GithubAccountValue = styled.div`
 grid-row:1;
 grid-column:2/5;
 padding: 19px 0px 4px 16px;
 color: ${props => props.theme.MypageSubColor};
`;
const GithubAccountButtonDiv = styled.div`
 grid-row:1;
 grid-column:5/6;
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
`;
const GithubAccountButton = styled.button`
 grid-row:3/9;
 grid-column:3/9;
 color: ${props => props.theme.MypageButtonColor};
 border: 1px solid ${props => props.theme.MypageButtonColor};
 background-color: #fff;
 border-radius: 3px;
 font-size: 14px;
 font-weight:1000;
 cursor: pointer;
`;
const AccessOrDenyButtonDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(15, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 8/9;
 grid-column: 2/10;
`;
const DenyButton = styled.button`
 grid-row: 2/10;
 grid-column: 4/8;
 background-color: #fff;
 color: #1e2022;
 border: 1px solid #dddfe4;
 cursor: pointer;
 border-radius: 3px;
`;
const AccessButton = styled.button`
 grid-row: 2/10;
 grid-column: 9/13;
 background-color: #1ea1f7;
 border: none;
 color: #fff;
 font-weight: 700;
 cursor: pointer;
 border-radius: 3px;
`;
function Mypage() {

  return (
    <Container>
      <SubMenu>
        <MypageNavbar></MypageNavbar>
      </SubMenu>
      <EditPage>
        <EditAccountContainer>
          <Header>개인정보관리</Header>
          <UserInfoManage>
            <MypageEditUserInfoManage></MypageEditUserInfoManage>
          </UserInfoManage>
          <ConnectedAccount>소셜계정연결</ConnectedAccount>
          <ConnectedAccountContainer>
            <GithubAccount>
              <GithubAccountName>Github</GithubAccountName>
              <GithubAccountValue>연결되지않음</GithubAccountValue>
              <GithubAccountButtonDiv>
                <GithubAccountButton>연결</GithubAccountButton>
              </GithubAccountButtonDiv>
            </GithubAccount>
          </ConnectedAccountContainer>
          <AccessOrDenyButtonDiv>
            <DenyButton>취소</DenyButton>
            <AccessButton>저장</AccessButton>
          </AccessOrDenyButtonDiv>
        </EditAccountContainer>
      </EditPage>
    </Container>
  )
}

export default Mypage;

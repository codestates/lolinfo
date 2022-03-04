import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: 50px repeat(9, minmax(auto, 1fr) );
`
const SubMenu = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 1/1;
 grid-column: 1/11;
 height: 3vw;
 align-items: center;
`
const Edit = styled.div`
 grid-row: 1/1;
 grid-column: 1/2;
 font-size: 1rem;
 margin: 0 0.6em;
`
const ChangePassword = styled.div`
 grid-row: 1/1;
 grid-column: 2/3;
 font-size: 1rem;
 margin: 0 0.6em;
`
const DeleteAccount = styled.div`
 grid-row: 1/1;
 grid-column: 3/4;
 font-size: 1rem;
 margin: 0 0.6em;
`
const EditPage = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: 40px repeat(7, minmax(auto, 1fr));
 grid-row: 2/11;
 grid-column: 1/11;
 background-color:${props => props.theme.recordBgColor};

`
const EditAccountContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(12, minmax(auto, 1fr));
 grid-row: 2/9;
 grid-column: 3/8;
 background-color: #fff;
`
const Header = styled.h2`
 grid-row: 1/2;
 grid-column:2/4;
 font-weight: 400;
 padding: 16px 0px;
`
const UserInfoManage = styled.div`
 display: grid;
 grid-row: 2/5 ;
 grid-column: 2/10;
 border-top: 1px solid ${props => props.theme.MypageLineColor};
`

const EmailDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 1/2;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`
const EmailDivname = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;
`
const EmailValue = styled.div`
 grid-row:1;
 grid-column:2/5;
 padding: 19px 0px 4px 16px;
 color: ${props => props.theme.MypageSubColor};
`
const CreateIdDiv= styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 2/3;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`

const CreateIdDivName = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;
`
const CreateIdValue = styled.div`
 grid-row:1;
 grid-column:2/5;
 padding: 19px 0px 4px 16px;
 color: ${props => props.theme.MypageFontColor};
`

const NickName = styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 3/4;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`
const NickNameDiv = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;

`
const NickNameValue = styled.div`
 display: grid;
 grid-template-columns: repeat(30, minmax(auto, 1fr));
 grid-template-rows: repeat(9, minmax(auto, 1fr));
 grid-row:1;
 grid-column:2/5;
`
const NickNameValueDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(20, minmax(auto, 1fr));
 grid-template-rows: repeat(9, minmax(auto, 1fr));
 grid-row:2/8;
 grid-column:2/20;
`
const NickNameValueinput = styled.input`
 padding: 10px;
 grid-row:2/10;
 grid-column:1/20;
`
const ConnectedAccount = styled.h3`
 grid-row: 6/7;
 grid-column:2/4;
 font-weight: 400;
 padding: 16px 0px;
 `
 const ConnectedAccountContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: repeat(3, minmax(auto, 1fr));
 grid-row: 7/10;
 grid-column:2/10;
 border-top: 1px solid ${props => props.theme.MypageLineColor};
 `
 const FaceBookAccount = styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 1/2;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`
const FaceBookAccountName = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;
`
const FaceBookAccountValue = styled.div`
 grid-row:1;
 grid-column:2/5;
 padding: 19px 0px 4px 16px;
 color: ${props => props.theme.MypageSubColor};
`

const FaceBookAccountButtonDiv = styled.div`
 grid-row:1;
 grid-column:5/6;
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
`
const FaceBookAccountButton = styled.button`
 grid-row:3/9;
 grid-column:3/9;
 color: ${props => props.theme.MypageButtonColor};
 border: 1px solid ${props => props.theme.MypageButtonColor};
 background-color: #fff;
 border-radius: 3px;
 font-size: 14px;
 font-weight:1000;
 cursor: pointer;
`

const GoogleAccount = styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 2/3;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`
const GoogleAccountName = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;
`
const GoogleAccountValue = styled.div`
 grid-row:1;
 grid-column:2/5;
 padding: 19px 0px 4px 16px;
 color: ${props => props.theme.MypageSubColor};
`
const GoogleAccountButtonDiv = styled.div`
 grid-row:1;
 grid-column:5/6;
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
`
const GoogleAccountButton = styled.button`
 grid-row:3/9;
 grid-column:3/9;
 color: ${props => props.theme.MypageButtonColor};
 border: 1px solid ${props => props.theme.MypageButtonColor};
 background-color: #fff;
 border-radius: 3px;
 font-size: 14px;
 font-weight:1000;
 cursor: pointer;
`
const GithubAccount = styled.div`
 display: grid;
 grid-template-columns: repeat(5, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 3/4;
 grid-column: 1/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`
const GithubAccountName = styled.div`
 grid-row:1;
 grid-column:1/2;
 background-color: ${props => props.theme.recordBgColor};
 font-weight: 400;
 font-size: 16px;
 text-align: left;
 color: ${props => props.theme.MypageFontColor};
 padding: 24px 0px 4px 16px;
`
const GithubAccountValue = styled.div`
 grid-row:1;
 grid-column:2/5;
 padding: 19px 0px 4px 16px;
 color: ${props => props.theme.MypageSubColor};
`
const GithubAccountButtonDiv = styled.div`
 grid-row:1;
 grid-column:5/6;
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
`
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
`
const AccessOrDenyButtonDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(15, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 11/12;
 grid-column: 2/10;
`
const DenyButton = styled.button`
 grid-row: 2/10;
 grid-column: 4/8;
 background-color: #fff;
 color: #1e2022;
 border: 1px solid #dddfe4;
 cursor: pointer;
 border-radius: 3px;
`
const AccessButton = styled.button`
 grid-row: 2/10;
 grid-column: 9/13;
 background-color: #1ea1f7;
 border: none;
 color: #fff;
 font-weight: 700;
 cursor: pointer;
 border-radius: 3px;
`
function Mypage(){

    return(
        <Container>
            <SubMenu>
                    <Link to="/mypage/edit"> <Edit >개인정보 관리</Edit></Link>
                    <Link to="/mypage/changePassword"> <ChangePassword>비밀번호 변경</ChangePassword></Link>
                    <Link to="/mypage/deleteAccount"> <DeleteAccount>회원 탈퇴</DeleteAccount> </Link>
            </SubMenu>
            <EditPage>
                <EditAccountContainer>
                    <Header>개인정보관리</Header>
                    <UserInfoManage>
                      <EmailDiv>
                        <EmailDivname>이메일</EmailDivname>
                        <EmailValue>myidisteemo123</EmailValue>
                      </EmailDiv>
                      <CreateIdDiv>
                        <CreateIdDivName>생성일</CreateIdDivName>
                        <CreateIdValue>2022년 8월 15일</CreateIdValue>
                      </CreateIdDiv>
                      <NickName>
                        <NickNameDiv>닉네임</NickNameDiv>
                        <NickNameValue>
                          <NickNameValueDiv>
                            <NickNameValueinput placeholder="hide on bush"></NickNameValueinput>
                          </NickNameValueDiv>
                        </NickNameValue>
                      </NickName>
                    </UserInfoManage>
                    <ConnectedAccount>소셜계정연결</ConnectedAccount>
                    <ConnectedAccountContainer>
                      <FaceBookAccount>
                        <FaceBookAccountName>FaceBook</FaceBookAccountName>
                        <FaceBookAccountValue>연결되지않음</FaceBookAccountValue>
                        <FaceBookAccountButtonDiv>
                          <FaceBookAccountButton>연결</FaceBookAccountButton>
                        </FaceBookAccountButtonDiv>
                      </FaceBookAccount>
                      <GoogleAccount>
                        <GoogleAccountName>Google</GoogleAccountName>
                        <GoogleAccountValue>연결되지않음</GoogleAccountValue>
                        <GoogleAccountButtonDiv>
                          <GoogleAccountButton>연결</GoogleAccountButton>
                        </GoogleAccountButtonDiv>
                      </GoogleAccount>
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

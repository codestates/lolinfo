import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: 50px repeat(10, minmax(auto, 1fr)) 150px;
 background-color:${props => props.theme.recordBgColor};
`
const SubMenu = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 grid-row: 1/1;
 grid-column: 1/12;
 height: 3vw;
 align-items: center;
 background-color:#fff;
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
const ChangePwPage = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: 40px repeat(9, minmax(auto, 1fr)) ;
 grid-row: 2/12;
 grid-column: 1/12;
 background-color:${props => props.theme.recordBgColor};
`
const ChangePasswordContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(7, minmax(auto, 1fr));
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
const SmallHeader = styled.h4`
 grid-row: 2/3;
 grid-column:2/10;
 font-weight: 400;
 color: ${props => props.theme.MypageSmallHeader};
`
const ChangePasswordDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row:3/9;
 grid-column:2/10;
`
const CurrentPassword =styled.div`
 display: grid;
 grid-template-columns: repeat(20, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row:1/3;
 grid-column:2/9;
`
const CurrentPasswordInput = styled.input`
 grid-row:3/9;
 grid-column:4/18;
`
const NewPassword =styled.div`
 display: grid;
 grid-template-columns: repeat(20, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row:3/5;
 grid-column:2/9;
`
const NewPasswordInput = styled.input`
 grid-row:3/9;
 grid-column:4/18;
`
const NewPasswordCheck =styled.div`
 display: grid;
 grid-template-columns: repeat(20, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row:5/7;
 grid-column:2/9;
`
const NewPasswordCheckInput = styled.input`
 grid-row:3/9;
 grid-column:4/18;
`
const SubmitButtonDiv =styled.div`
 display: grid;
 grid-template-columns: repeat(20, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row:7/9;
 grid-column:2/9;
`
const SubmitButton = styled.button`
 grid-row:3/9;
 grid-column:4/18;
 background-color: #dddfe4;
 color: #fff;
 font-weight: 700;
 border: 0;
 cursor: pointer;
`
function ChangePasswordPage(){

    return(
        <Container>
            <SubMenu>
                    <Link to="/mypage/edit"> <Edit >개인정보 관리</Edit></Link>
                    <Link to="/mypage/changePassword"> <ChangePassword>비밀번호 변경</ChangePassword></Link>
                    <Link to="/mypage/deleteAccount"> <DeleteAccount>회원 탈퇴</DeleteAccount> </Link>
            </SubMenu>
            <ChangePwPage>
                <ChangePasswordContainer>
                    <Header>비밀번호 변경</Header>
                    <SmallHeader>개인정보 보호를 위해 비밀번호를 주기적으로 변경해주세요.</SmallHeader>
                    <ChangePasswordDiv>
                        <CurrentPassword>
                            <CurrentPasswordInput placeholder="현재 비밀번호 입력"></CurrentPasswordInput>
                        </CurrentPassword>
                        <NewPassword>
                            <NewPasswordInput placeholder="신규 비밀번호 입력"></NewPasswordInput>
                        </NewPassword>
                        <NewPasswordCheck>
                            <NewPasswordCheckInput placeholder="신규 비밀번호 재입력"></NewPasswordCheckInput>
                        </NewPasswordCheck>
                        <SubmitButtonDiv>
                            <SubmitButton>확인</SubmitButton>
                        </SubmitButtonDiv>
                    </ChangePasswordDiv>
                </ChangePasswordContainer>
            </ChangePwPage>
        

        </Container>
    )
}

export default ChangePasswordPage;
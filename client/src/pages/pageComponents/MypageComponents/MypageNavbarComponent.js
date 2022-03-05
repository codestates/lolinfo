import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: repeat(auto, minmax(auto, 1fr));
 height: 3vw;
`;
const Edit = styled.div`
 grid-row: 1/2;
 grid-column: 1/3;
 font-size: 1rem;
 text-align: center;
@media (max-width: 900px) {
 grid-row: 1/2;
 grid-column: 1/3;
 font-size: 0.8rem;
 text-align: center;
} 
`;
const ChangePassword = styled.div`
 grid-row: 1/2;
 grid-column: 3/5;
 font-size: 1rem;
 text-align: center;
 @media (max-width: 900px) {
  grid-row: 1/2;
 grid-column: 3/5;
 font-size: 0.8rem;
 text-align: center;
} 
`;
const DeleteAccount = styled.div`
 grid-row: 1/2;
 grid-column: 5/7;
 font-size: 1rem;
 text-align: center;
 @media (max-width: 900px) {
 grid-row: 1/2;
 grid-column: 5/7;
 font-size: 0.8rem;
 text-align: center;
} 
`;

function MypageNavbar() {
    return (
        <Container>
            <Edit ><Link to="/mypage/edit"> 개인정보 관리</Link></Edit>
            <ChangePassword> <Link to="/mypage/changePassword">비밀번호 변경 </Link> </ChangePassword>
            <DeleteAccount> <Link to="/mypage/deleteAccount"> 회원 탈퇴</Link> </DeleteAccount>
        </Container>
    )
}

export default MypageNavbar;

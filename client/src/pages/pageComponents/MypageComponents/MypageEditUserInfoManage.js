import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

function MypageEditUserInfoManage({ setChange }) {
    const userInfo = useSelector((state) => state.user.payload);
    const day = userInfo.createdAt.slice(0, 10)
    return (
        <Container>
            <EmailDiv>
                <EmailDivname>이메일</EmailDivname>
                <EmailValue>{userInfo.email}</EmailValue>
            </EmailDiv>
            <CreateIdDiv>
                <CreateIdDivName>생성일</CreateIdDivName>
                <CreateIdValue>{day}</CreateIdValue>
            </CreateIdDiv>
            <NickName>
                <NickNameDiv>닉네임</NickNameDiv>
                <NickNameValue>
                    <NickNameValueDiv>
                        <NickNameValueinput
                            onChange={(e) => setChange(e.target.value)}
                            placeholder={userInfo.name}></NickNameValueinput>
                    </NickNameValueDiv>
                </NickNameValue>
            </NickName>
        </Container>
    )
}

const Container = styled.div`
     display: grid;
     grid-template-columns: repeat(auto, minmax(auto, 1fr));
     grid-template-rows: repeat(auto, minmax(auto, 1fr));
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
    `;
const EmailValue = styled.div`
     grid-row:1;
     grid-column:2/5;
     padding: 19px 0px 4px 16px;
     color: ${props => props.theme.MypageSubColor};
    `;
const CreateIdDiv = styled.div`
     display: grid;
     grid-template-columns: repeat(5, minmax(auto, 1fr));
     grid-template-rows: repeat(auto, minmax(auto, 1fr));
     grid-row: 2/3;
     grid-column: 1/10;
     border-bottom: 1px solid ${props => props.theme.MypageLineColor};
    `;
const CreateIdDivName = styled.div`
     grid-row:1;
     grid-column:1/2;
     background-color: ${props => props.theme.recordBgColor};
     font-weight: 400;
     font-size: 16px;
     text-align: left;
     color: ${props => props.theme.MypageFontColor};
     padding: 24px 0px 4px 16px;
    `;
const CreateIdValue = styled.div`
     grid-row:1;
     grid-column:2/5;
     padding: 19px 0px 4px 16px;
     color: ${props => props.theme.MypageFontColor};
    `;
const NickName = styled.div`
     display: grid;
     grid-template-columns: repeat(5, minmax(auto, 1fr));
     grid-template-rows: repeat(auto, minmax(auto, 1fr));
     grid-row: 3/4;
     grid-column: 1/10;
     border-bottom: 1px solid ${props => props.theme.MypageLineColor};
    `;
const NickNameDiv = styled.div`
     grid-row:1;
     grid-column:1/2;
     background-color: ${props => props.theme.recordBgColor};
     font-weight: 400;
     font-size: 16px;
     text-align: left;
     color: ${props => props.theme.MypageFontColor};
     padding: 24px 0px 4px 16px;
    `;
const NickNameValue = styled.div`
     display: grid;
     grid-template-columns: repeat(30, minmax(auto, 1fr));
     grid-template-rows: repeat(9, minmax(auto, 1fr));
     grid-row:1;
     grid-column:2/5;
    `;
const NickNameValueDiv = styled.div`
     display: grid;
     grid-template-columns: repeat(20, minmax(auto, 1fr));
     grid-template-rows: repeat(9, minmax(auto, 1fr));
     grid-row:2/8;
     grid-column:2/20;
    `;
const NickNameValueinput = styled.input`
     padding: 10px;
     grid-row:2/10;
     grid-column:1/20;
    `;

export default MypageEditUserInfoManage;
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


axios.defaults.withCredentials = true;

function DeleteModal({ setDeleteModal, setloginFailState, setDeleteModalConfirm }) {

    const [inputName, setInputName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [checkMessage, setCheckMessage] = useState("")

    const close = () => {
        setDeleteModal("");
    }

    const infoSandler = async () => {
        if (!checkMessage === "영구삭제") {
            return setloginFailState("change")
        }
        const LoginReturnValue = await axios.delete(process.env.REACT_APP_API_URL + "/users/remove", { data: { email: inputName, password: inputPassword } });

        if (LoginReturnValue.status === 204) {
            setDeleteModal("");
            return setDeleteModalConfirm("change")
        }
    };
    return (
        <div>
            <Container>
                <TitleOPGG>삭제페이지</TitleOPGG>
                <IDInput type="text" placeholder="Username or Email" required onChange={(e) => setInputName(e.target.value)} />
                <PasswordInput placeholder="Enter your Password" onChange={(e) => setInputPassword(e.target.value)} />
                <ConfirmMessage placeholder="영구삭제를 입력해주세요" onChange={(e) => setCheckMessage(e.target.value)} />
                <CloseButton onClick={close}>종료</CloseButton>
                <DeleteButton onClick={infoSandler}>삭제</DeleteButton>
                <TextMessage>정말로 삭제하실건가요?</TextMessage>
            </Container>
        </div>
    );
}


const Container = styled.div`
  min-width: 320px;
  height: 430px;
  row-gap: 2%;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  display: grid;
  grid-template-columns: 1fr repeat(6, 30px) 1.1fr;
  grid-template-rows: 20px 30px repeat(6, 1fr);
`;
const TitleOPGG = styled.div`
  grid-column: 1/9;
  grid-row: 2;
  font-size: large;
  letter-spacing: ${(props) => props.theme.titleLetterSpace};
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  text-align: center;
`;
const IDInput = styled.input`
  border: solid;
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 3/4;
  font-size: large;
  text-align: center;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;
const PasswordInput = styled.input.attrs((_) => ({
    type: "password",
}))`
  border: solid;
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 4/5;
  font-size: large;
  text-align: center;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  };
`;
const ConfirmMessage = styled.input`
  border: solid;
  padding: 5px;
  min-width: 200px;
  max-width: 300px;
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.inputBorderColor};
  grid-column: 2/5;
  grid-row: 5/6;
  font-size: large;
  text-align: center;
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`

const CloseButton = styled.button`
  cursor: pointer;
  grid-column: 2/3;
  grid-row: 7/8;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
`;
const DeleteButton = styled.button`
  cursor: pointer;
  grid-column: 6/7;
  grid-row: 7/8;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
`;
const TextMessage = styled.div`
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  font-size: 12px;
  grid-column: 2/8;
  grid-row: 8/9;
  text-align: center;
`;

export default DeleteModal;

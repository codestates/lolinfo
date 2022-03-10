import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function AlertModal({ setLoginState, visible, children }) {

  const downFunction = () => {
    setLoginState("")
  }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className="modal-outside" visible={visible}>
        <ModalInner className="modal-inside">
          <Header>LOLINFO</Header>
          <InsideContainer>
            <Sub>{children}</Sub>
            <ModalButton onClick={() => downFunction()}>확인</ModalButton>
          </InsideContainer>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}
AlertModal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(auto, 1fr));
  grid-template-rows: 50px repeat(6, minmax(auto, 1fr));
  box-sizing: border-box;
  position: relative;
  width: 450px;
  height: 300px;
  border-radius:10px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: white;
  font-size:20px;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.3); 
  background-color:#264db5; //배경색
`;
const Header = styled.h1`
  width:100%;
  height:50px;  //헤드 영역 높이
  grid-row: 1/2;
  grid-column: 1/8;
  align-items:center;
  justify-content:center;
`
const InsideContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  grid-template-rows: 50px repeat(3, minmax(auto, 1fr));
  grid-row: 2/8;
  grid-column: 1/8;
  background-color: #fff;
  width:100%;
  padding:30px; 
  border-radius: 0px 0px 10px 10px;
`
const Sub = styled.div`
  grid-row: 2/4;
  grid-column: 1/6;
  text-align:center;        //제목 중앙정렬
  word-break:break-word;    //단어가 짤리지 않음
  overflow-y:auto;          //내부요소가 지정한 세로 값보다 클 경우 스크롤 생성
  min-height:100px;         //최소 높이
  max-height:200px;         //최대 높이
  
`
const ModalButton = styled.button`
  grid-row: 4/5;
  grid-column: 3/4;
  box-sizing: border-box;
  position: relative;
  width: 100px;
  height: 40px;
  border-radius:10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  cursor:pointer;
`;

export default AlertModal;

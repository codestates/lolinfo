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
        <ModalInner className="modal-inside">{children}
          <ModalButton onClick={() => downFunction()}>확인</ModalButton>
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  width: 350px;
  height: 200px;
  border-radius:10px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: white;
  font-size:20px;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,.3); 
`;

const ModalButton = styled.button`
box-sizing: border-box;
  position: relative;
  width: 70px;
  height: 40px;
  border-radius:10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  cursor:pointer;
`;

export default AlertModal;

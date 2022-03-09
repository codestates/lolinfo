import React, { useEffect } from "react";
import styled from "styled-components";
import { getRecord } from "../store/GameRecord";
import { setPrevRecord } from "../store/PrevRecord";
import { useDispatch } from "react-redux";

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(1fr, auto);
  grid-template-rows: minmax(1fr, auto);
  justify-content: center;
  height: 15vh;

  background-color: ${(props) => props.theme.recordBgColor};

  padding: 1rem;
  margin: 1rem 3% 1rem 3%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.recordBgColor};
  margin: 1rem 3% 1rem 3%;
  height: 74vh;

  .loader {
    border: 16px solid Gainsboro;
    border-top: 16px solid MediumSeaGreen;
    border-radius: 50%;
    width: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s cubic-bezier(0.35, 0.73, 1, 0.47) infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading({ schBarInput, prevRecord }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (schBarInput === "") return;
    if (schBarInput !== prevRecord) {
      const matchUrl = process.env.REACT_APP_API_URL + "/games/match?nickname=";
      dispatch(getRecord("get", matchUrl, schBarInput));
      dispatch(setPrevRecord(schBarInput));
    }
  }, []);

  return (
    <div>
      <ProfileWrapper></ProfileWrapper>
      <Wrapper>
        <div className="loader"></div>
      </Wrapper>
    </div>
  );
}

export default Loading;

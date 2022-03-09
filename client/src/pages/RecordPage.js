import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserProfile from "./pageComponents/UserProfile";
import RecentChart from "./pageComponents/RecentChart";
import RecentGameLog from "./pageComponents/RecentGameLog";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { profileDummyData, dummyChartData, extractData, extractProfileData } from "../resource/RecordPagehelp";
import axios from "axios";
import { getRecord } from "../store/GameRecord";
import { setPrevRecord } from "../store/PrevRecord";
import RecordPageModal from "./pageComponents/RecordPageModal";

const Content = styled.div`
  display: grid;
  background-color: #fff;
  margin: 0.5rem 0.5rem 0rem 0.5rem;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 3fr) minmax(auto, 8fr);
  grid-template-rows: minmax(auto, 1fr);
  grid-template-areas: "RecentChart RecentGameLog";

  background-color: ${(props) => props.theme.recordBgColor};
  padding: 1rem 0rem 3rem 0rem;

  @media all and (max-width: ${(props) => props.theme.recordBoxOneCol}) {
    grid-template-columns: minmax(auto, 1fr);
    grid-template-areas: "RecentGameLog";
    padding: 1rem 1rem 3rem 1rem;
  }

  > .RecentChart {
    grid-area: RecentChart;
  }

  > .RecentGameLog {
    grid-area: RecentGameLog;
  }
`;

const LogWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: minmax(1fr, auto);
  grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
  flex-direction: column;
  gap: 1rem;

  background-color: ${(props) => props.theme.recordBgColor};
`;

function RecordPage({ setHistory, schBarInput, setSchBarInput }) {
  axios.defaults.withCredentials = false;
  const { loading, payload, error } = useSelector((state) => state.gameRecord);
  const { prevRecord } = useSelector((state) => state.prevRecord);

  useEffect(() => {
    setHistory("/record");
  }, []);

  let isDummy = false;

  if (loading || schBarInput !== prevRecord) return <Loading schBarInput={schBarInput} prevRecord={prevRecord} />;
  if (error || schBarInput === "") {
    isDummy = true;
  }

  console.log(loading, prevRecord, schBarInput, payload);
  const { chartData, needs } = extractData(payload, schBarInput);
  const profileData = extractProfileData(payload, needs);

  return (
    <div>
      <Content>
        {error ? <RecordPageModal text={"찾을 수 없는 유저입니다"} /> : null}
        <UserProfile profileData={isDummy ? profileDummyData : profileData} />
        <BoxWrapper name="BoxWrapper">
          <RecentChart className="RecentChart" chartData={isDummy ? dummyChartData : chartData} />
          <div>
            <LogWrapper className="RecentGameLog">
              {needs.map((v) => {
                return <RecentGameLog key={v.gameId} data={v} />;
              })}
            </LogWrapper>
          </div>
        </BoxWrapper>
      </Content>
    </div>
  );
}

export default RecordPage;

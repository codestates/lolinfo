import React, { useEffect } from "react";
import styled from "styled-components";
import UserProfile from "./pageComponents/UserProfile";
import RecentChart from "./pageComponents/RecentChart";
import RecentGameLog from "./pageComponents/RecentGameLog";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../store/GameProfile";
import { getRecord } from "../store/GameRecord";

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

function RecordPage() {
  // const { data: profile } = useSelector((state) => state.gameProfile);
  const { data: record } = useSelector((state) => state.gameRecord);
  console.log("record=", record);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("profile:::", profile);
  // }, [profile]);
  // useEffect(() => {
  //   console.log("record:::", record);
  // }, [record]);

  useEffect(() => {
    // const profileUrl = "http://localhost:80/games/player?nickname=";
    // dispatch(getProfile("get", profileUrl, "고양이"));

    const matchUrl = "http://localhost:80/games/match?nickname=";
    dispatch(getRecord("get", matchUrl, "고양이"));
  }, [dispatch]);

  if (record.loading) return <div>로딩중...</div>;
  if (!record.data) return <div>data null!...</div>;

  return (
    <div>
      <Content>
<<<<<<< HEAD
        <UserProfile info={profile.data} />
=======
        {/* <UserProfile /> */}
>>>>>>> c8110497bb007752869a01c8020b0ecd4fd6f404
        <BoxWrapper name="BoxWrapper">
          <RecentChart className="RecentChart" />
          <div>
            <LogWrapper className="RecentGameLog">
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
              <RecentGameLog />
            </LogWrapper>
          </div>
        </BoxWrapper>
      </Content>
    </div>
  );
}

export default RecordPage;

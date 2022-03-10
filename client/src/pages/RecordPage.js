import React, { useEffect } from "react";
import { Content, BoxWrapper, LogWrapper } from "./pageComponents/componentStyle/RecordPageStyle";
import UserProfile from "./pageComponents/UserProfile";
import RecentChart from "./pageComponents/RecentChart";
import RecentGameLog from "./pageComponents/RecentGameLog";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { profileDummyData, dummyChartData, extractData, extractProfileData } from "../resource/RecordPagehelp";
import axios from "axios";
import RecordPageModal from "./pageComponents/RecordPageModal";

function RecordPage({ setHistory, schBarInput, setSchBarInput }) {
  axios.defaults.withCredentials = false;
  const { loading, payload, error } = useSelector((state) => state.gameRecord);
  const { prevRecord } = useSelector((state) => state.prevRecord);

  useEffect(() => {
    setHistory("/record");
  }, []);

  let isDummy = false;
  // console.log("로딩전", "loading", loading, "prevRecord", prevRecord, "schBarInput", schBarInput, payload);
  if (loading || schBarInput !== prevRecord) return <Loading schBarInput={schBarInput} prevRecord={prevRecord} />;
  if (error || schBarInput === "") {
    isDummy = true;
  }

  // console.log("로딩후", loading, prevRecord, schBarInput, payload);
  let profileData;
  const { chartData, needs, err } = extractData(payload, schBarInput);
  if (!err) profileData = extractProfileData(payload, needs);
  if (!profileData || err) isDummy = true;

  return (
    <div>
      <Content>
        {true ? <RecordPageModal text={"찾을 수 없는 유저입니다"} /> : null}
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

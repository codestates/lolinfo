import React, { useEffect } from "react";
import styled from "styled-components";
import RecentChart from "./pageComponents/RecentChart";
import RecentGameLog from "./pageComponents/RecentGameLog";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../store/GameProfile";
import { getRecord } from "../store/GameRecord";

const Content = styled.div`
    display: flex;
    height: 90vh;
    background-color: #fff;
    margin: 0.5rem 0.5rem 0rem 0.5rem;
    overflow: hidden;
    justify-content: center;
`;

const BoxWrapper = styled.div`
    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
    grid-template-columns: minmax(auto, 3fr) minmax(auto, 7fr);
    background-color: ${(props) => props.theme.recordBgColor};
    width: 55vw;

    padding: 1rem 0rem 3rem 0rem;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    // color: #f5f5f5;

    //767
    @media all and (max-width: ${(props) => props.theme.recordMobileH}) {
        grid-template-columns: minmax(auto, 1fr);
        width: ${(props) => props.theme.media1};
    }

    @media all and (max-width: 1200px) {
        width: 80vw;
    }

    @media (min-width: 767px) and (max-width: 850px) {
        width: 90vw;
    }

    @media all and (max-width: 767px) {
        width: 75vw;
    }

    @media all and (max-width: 560px) {
        width: 90vw;
    }

    @media all and (max-width: 480px) {
        width: 95vw;
    }
`;

function RecordPage() {
<<<<<<< HEAD
  const { data: profile } = useSelector((state) => state.gameProfile);
  const { data: record } = useSelector((state) => state.gameRecord);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("profile:::", profile);
  }, [profile]);
  useEffect(() => {
    console.log("record:::", record);
  }, [record]);

  useEffect(() => {
    const profileUrl = "http://localhost:80/games/player?nickname=";
    dispatch(getProfile("get", profileUrl, "고양이"));

    const matchUrl = "http://localhost:80/games/match?nickname=";
    dispatch(getRecord("get", matchUrl, "고양이"));
  }, [dispatch]);

  return (
    <div>
      <Content>
        <UserProfile />
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
=======
    const [widthSize, setWidthSize] = useState(0);
    const resizeListener = () => {
        if (window.innerWidth <= 480) {
            // console.log(window.innerWidth);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", resizeListener);
    }, []);

    return (
        <div>
            <Content>
                <BoxWrapper name="BoxWrapper">
                    <RecentChart />
                    <RecentGameLog />
                </BoxWrapper>
            </Content>
        </div>
    );
>>>>>>> upstream/main
}

export default RecordPage;

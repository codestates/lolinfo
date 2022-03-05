import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";
const RecentWapper = styled.div`
  display: grid;
  grid-template-columns: minmax(3rem, auto);
  grid-template-rows: repeat(8, minmax(1rem, auto));
  grid-template-areas:
    "title-record"
    "CircleGraph"
    "title-team"
    "TeamRate"
    "title-gamelength"
    "GameTimeRate"
    "title-KDA"
    "TotalKDA";

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #24292ed0;

  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media all and (max-width: ${(props) => props.theme.recordMobileH}) {
    display: none;
  }

  > .title-record {
    grid-area: title-record;
  }

  > .CircleGraph {
    grid-area: CircleGraph;
  }

  > .title-team {
    grid-area: title-team;
  }

  > .TeamRate {
    grid-area: TeamRate;
  }

  > .title-gamelength {
    grid-area: title-gamelength;
  }

  > .GameTimeRate {
    grid-area: GameTimeRate;
  }

  > .title-KDA {
    grid-area: title-KDA;
  }

  > .TotalKDA {
    grid-area: TotalKDA;
  }
`;
const CircleGraphWapper = styled.div`
  position: relative;
  width: 150px;
  margin: auto;
`;

const TeamRate = styled.div`
  > svg > rect {
    border-radius: 20%;
  }

  .DodgerBlue {
    fill: DodgerBlue;
    color: white;
  }

  .FireBrick {
    fill: FireBrick;
    color: white;
  }
`;

const GameTimeRate = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  border-radius: 10%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CircleGraph = styled.div`
  display: inline-flex;
  width: 140px;
  height: 140px;
  background: ${(props) => props.theme.recordBgColor};
  // border-radius: 100%;

  > .progress-circle {
    position: absolute;
    z-index: 6;
    top: 14px;
    left: 14px;
    height: 80%;
    width: 80%;
    background: conic-gradient(
      #00ffff 0deg
        ${(props) => {
          return String(props.rate) + `%`;
        }},
      #cadcff 0deg
    );
    border-radius: 100%;

    display: grid;
    place-items: center;
  }

  > .progress-circle:before {
    // inner circle
    content: "";
    position: absolute;
    height: 70%;
    width: 70%;
    background-color: ${(props) => props.theme.recordBgColor};
    border-radius: 100%;
  }

  > .percent {
    position: relative;
    top: 55px;
    left: 52px;
    z-index: 10;
  }
`;

const TotalKDAWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.1rem;
`;

const TotalKDA = styled.span`
  display: grid;
  grid-template-columns: repeat(6, minmax(1rem, auto));
  grid-template-rows: repeat(2, minmax(1rem, auto));
  grid-template-areas:
    "kill spe1 death spe2 assist icon"
    "average average average kill-assist kill-assist kill-assist";

  justify-content: center;

  margin: auto;
  margin-top: 0rem;
  align-items: center;

  > .kill {
    grid-area: kill;
  }

  > .death {
    grid-area: death;
  }

  > .assist {
    grid-area: assist;
  }

  > .icon {
    grid-area: icon;
  }

  > .average {
    grid-area: average;
    font-size: minmax(0.5rem, auto);
    margin-right: 0.2rem;
  }

  > .kill-assist {
    grid-area: kill-assist;
    font-size: minmax(0.5rem, auto);
    margin-left: 0.2rem;
  }
`;

const Icon = styled.img`
  object-fit: cover;
  width: ${(props) => String(props.size) + "px"};
  height: ${(props) => String(props.size) + "px"};
  filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
`;

function RecentChart() {
  const [rate, setRate] = useState(0);
  const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

  useEffect(() => {
    const fn = async () => {
      await sleep(15);
      if (rate < 85) {
        setRate(rate + 1);
      }
    };
    fn();
  }, [rate]);

  useEffect(() => {
    const data = [100, 75];
    const color = ["FireBrick", "DodgerBlue"];
    d3.select(".teamGraph")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("rx", 5)
      .attr("height", 20)
      .attr("class", (d, i) => color[i])
      .attr("width", 10)
      .transition()
      .duration(1500)
      .attr("width", (d) => (d * 140) / 100);

    d3.select(".FireBrick").attr("y", 24);
    d3.select(".DodgerBlue").attr("y", 88);

    const xScale = d3.scaleLinear().domain([0, 100]).range([5, 140]);
    const xAxis = d3.axisBottom(xScale).tickSize(5).ticks(2);
    const xAxisSVG = d3.select("svg").append("g").attr("transform", "translate(0, 130)");
    xAxis(xAxisSVG);

    const yScale = d3.scaleBand().domain(["red", "blue"]).range([0, 130]);
    const yAxisSVG = d3.select("svg").append("g");
    const yAxis = d3.axisRight(yScale).tickSize(5).ticks(2);
    yAxis(yAxisSVG); //y
  }, []);

  return (
    <RecentWapper name="RecentWapper">
      <span className="title-record">{"4전 3승 1패"}</span>
      <CircleGraphWapper className="CircleGraph" name="CircleGraphWapper">
        <CircleGraph rate={rate} name="CircleGraph">
          <div className="progress-circle"></div>
          <span className="percent">{rate + "%"}</span>
        </CircleGraph>
      </CircleGraphWapper>
      <span className="title-team">팀별 승률</span>
      <TeamRate className="TeamRate">
        <svg className="teamGraph" width="150" height="150"></svg>
      </TeamRate>
      <span className="title-gamelength">게임 길이별 승률</span>
      <GameTimeRate className="GameTimeRate" />
      <span className="title-KDA">KDA</span>
      <TotalKDAWrapper className="TotalKDAWrapper">
        <TotalKDA>
          <span className="kill">{44}</span>
          <span>{"/"}</span>
          <span className="death">{1}</span>
          <span>{"/"}</span>
          <span className="assist">{33}</span>
          <Icon className="icon" size={20} src="https://www.lolog.me/images/icon/mask-icon-offense.png" alt="icon" />
          <span className="average">평점:{`${88.2}`}</span>
          <span className="kill-assist">킬관여:{`70%`}</span>
        </TotalKDA>
      </TotalKDAWrapper>
    </RecentWapper>
  );
}

export default RecentChart;

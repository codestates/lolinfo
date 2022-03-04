import React, { useState, useEffect } from "react";
import { RecentWapper, CircleGraphWapper, CircleGraph, TeamRate, GameTimeRate, TotalKDAWrapper, TotalKDA, Icon } from "./componentStyle/RecentChartStyle";
import * as d3 from "d3";

function RecentChart() {
  const [rate, setRate] = useState(0);
  const [graphSize, setGraphSize] = useState(150);
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
      .attr("width", 5)
      .transition()
      .duration(1500)
      .attr("width", (d) => (d * 140) / 100);

    d3.select(".FireBrick").attr("y", 23);
    d3.select(".DodgerBlue").attr("y", 87);

    const xScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([3, graphSize - 10]);

    const margin = 20;

    const xAxis = d3.axisBottom(xScale).tickSize(5).ticks(2);
    const xAxisSVG = d3
      .select("svg")
      .append("g")
      .attr("transform", `translate(0,${graphSize - margin})`);
    xAxis(xAxisSVG);

    const yScale = d3
      .scaleBand()
      .domain(["red", "blue"])
      .range([0, `${graphSize - margin}`]);
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
        <svg className="teamGraph" width={graphSize} height={graphSize}></svg>
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

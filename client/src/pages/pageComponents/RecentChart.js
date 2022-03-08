import React, { useState, useEffect } from "react";
import { RecentWapper, CircleGraphWapper, CircleGraph, TeamRate, GameTimeRate, TotalKDAWrapper, TotalKDA, Icon } from "./componentStyle/RecentChartStyle";
import * as d3 from "d3";

function RecentChart({ chartData }) {
  const [rate, setRate] = useState(0);
  const [graphSize, setGraphSize] = useState(150);
  const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

  useEffect(() => {
    let isUnmount = false;

    const fn = async () => {
      await sleep(15);
      if (rate < chartData.victoryRate) {
        if (!isUnmount) setRate(rate + 1);
      }
    };
    fn();

    return () => {
      isUnmount = true;
    };
  }, [rate]);

  useEffect(() => {
    const { blueRate, RedRate } = chartData;

    const data = [RedRate, blueRate];
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
    yAxis(yAxisSVG);
  }, []);

  useEffect(() => {
    const { rate25, rate30, rate35, rate35more } = chartData;

    const width = 190;
    const height = 160;
    const margin = { top: 30, left: 20, bottom: 20, right: 50 };
    const svg = d3.select(".GameTimeRate").append("svg").attr("width", width).attr("height", height);

    const data = [
      { len: "0-25", value: rate25 },
      { len: "25-30", value: rate30 },
      { len: "30-35", value: rate35 },
      { len: "35분+", value: rate35more },
    ];

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.len))
      .range([0, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g) => {
      return g.attr("transform", `translate(${margin.left}, ${height - margin.bottom})`).call(d3.axisBottom(x).tickSizeOuter(0));
    };

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(
          d3
            .axisLeft(y)
            .tickValues([0, 20, 40, 60, 80, 100])
            .tickSize(-width + margin.right),
        )
        .call((g) => g.select(".domain").remove())
        .attr("class", "grid");

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (data) => x(data.len) + x.bandwidth() / 2 + 12.5)
      .attr("width", 15)
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .attr("height", 1)
      .attr("y", -1)
      .transition()
      .duration(1800)
      .delay((data, i) => i * 150)
      .attr("height", (data) => (data.value * (height - margin.top - margin.bottom)) / 100)
      .attr("y", (data) => (-data.value * (height - margin.top - margin.bottom)) / 100)
      .attr("class", (data) => {
        if (data.value > 50) return "high";
        else return "low";
      })
      .attr("rx", 2);
  }, []);

  const { k, d, a, totalGame, totalWin, totalLose, kp } = chartData;

  return (
    <div>
      <RecentWapper name="RecentWapper">
        <span className="title-record">{`${totalGame}전 ${totalWin}승 ${totalLose}패`}</span>
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
        <GameTimeRate className="GameTimeRate"></GameTimeRate>
        <span className="title-KDA">KDA</span>
        <TotalKDAWrapper className="TotalKDAWrapper">
          <TotalKDA>
            <span className="kill">{`${k}`}</span>
            <span>{"/"}</span>
            <span className="death">{`${d}`}</span>
            <span>{"/"}</span>
            <span className="assist">{`${a}`}</span>
            <Icon className="icon" size={20} src="https://www.lolog.me/images/icon/mask-icon-offense.png" alt="icon" />
            <span className="average">평점:{`${(k + a / d || 0).toFixed(2)}`}</span>
            <span className="kill-assist">킬관여:{`${kp}%`}</span>
          </TotalKDA>
        </TotalKDAWrapper>
      </RecentWapper>
    </div>
  );
}

export default RecentChart;

import React, { useState, useEffect, useRef } from "react";
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
    object-fit: cover;
    width: 120px;
    height: 120px;
    border-radius: 10%;
    margin-top: 1rem;
    margin-bottom: 1rem;

    > .border {
        border: 1px solid black;
    }
    .red {
        color: red;
    }

    .blue {
        color: blue;
    }

    .yellow {
        color: yellow;
    }

    > .bold {
        font-weight: bold;
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

const data = [
    { team: "red", rate: 80 },
    { team: "blue", rate: 20 },
];

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

    const svgRef = useRef(null);
    useEffect(() => {
        d3.select(".target").transition().duration(800).style("color", "#f00").text("RED");
        d3.select(".sample").transition().duration(500).delay(1000).style("color", "blue");
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
            <TeamRate ref={svgRef} className="TeamRate">
                <div>
                    <p className="target">fase</p>
                    <p className="sample">slow</p>
                </div>
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

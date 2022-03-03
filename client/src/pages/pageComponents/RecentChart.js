import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const RecentWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #24292ed0;

  width: 100%;

  @media all and (max-width: ${props => props.theme.recordMobileH}) {
    display: none;
  }
`;
const CircleGraphWapper = styled.div`
  position: relative;
  width: 150px;
  margin: auto;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
`;

const TeamVictoryRate = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  border-radius: 10%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TimeVictoryRate = styled.img`
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
  background: ${props => props.theme.recordBgColor};
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
        ${props => {
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
    content: '';
    position: absolute;
    height: 70%;
    width: 70%;
    background-color: ${props => props.theme.recordBgColor};
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
  grid-template-columns: 1fr 1fr;
  font-size: 1.1rem;
`;

const TotalKDA = styled.span`
  display: inline-flex;
  grid-column-start: 1;
  grid-column-end: 3;

  margin: auto;
  margin-top: 0.2rem;
  margin-right: 5px;
  margin-bottom: 5px;
  align-items: center;
  word-spacing: 8px;
`;

const Icon = styled.img`
  object-fit: cover;
  width: ${props => String(props.size) + 'px'};
  height: ${props => String(props.size) + 'px'};
  filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
`;

function RecentChart() {
  const [rate, setRate] = useState(0);
  const sleep = n => new Promise(resolve => setTimeout(resolve, n));

  useEffect(() => {
    const fn = async () => {
      await sleep(15);
      if (rate < 87) {
        setRate(rate + 1);
      }
    };
    fn();
  }, [rate]);

  return (
    <RecentWapper name="RecentWapper">
      <span>{'2전 3승 1패'}</span>
      <CircleGraphWapper name="CircleGraphWapper">
        <CircleGraph rate={rate} name="CircleGraph">
          <div className="progress-circle"></div>
          <span className="percent">{rate + '%'}</span>
        </CircleGraph>
      </CircleGraphWapper>
      <span>팀별 승률</span>
      <TeamVictoryRate />
      <span>게임 길이별 승률</span>
      <TimeVictoryRate />
      <span>KDA</span>
      <TotalKDAWrapper>
        <TotalKDA>
          <span>{`${44} / ${1} / ${33}`}&nbsp;</span>
          <Icon size={20} src="https://www.lolog.me/images/icon/mask-icon-offense.png" alt="icon" />
        </TotalKDA>
        <span>평점:{`${' ' + 88.2}`}</span>
        <span>킬관여:{`70%`}</span>
      </TotalKDAWrapper>
    </RecentWapper>
  );
}

export default RecentChart;

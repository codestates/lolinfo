import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  background-color: ${props => props.theme.mainColor};
  height: 10vh;
`;

const Content = styled.div`
  display: flex;
  height: 90vh;
  background-color: #fff;
  margin: 0.5rem 0.5rem 0rem 0.5rem;

  justify-content: center;
`;

const BoxWrapper = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
  grid-template-columns: minmax(auto, 3fr) minmax(auto, 7fr);
  background-color: ${props => props.theme.recordBgColor};
  width: ${props => props.theme.recordBoxWrapper};

  padding: 1rem 0rem 3rem 0rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  // color: #f5f5f5;

  @media all and (max-width: ${props => props.theme.recordBoxOneCol}) {
    grid-template-columns: minmax(auto, 1fr);
  }
`;

const RecentChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #24292ed0;

  width: 100%;

  @media all and (max-width: ${props => props.theme.recordBoxOneCol}) {
    display: none;
  }
`;

const LogWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const RecentGameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65px, 3fr));
  grid-template-rows: repeat(auto-fill, minmax(1fr, 2fr));
  background: #aedce1;
  width: 100%;
  height: 10vh;
  margin: 0;
`;

const RecentGameResult = styled.div`
  display: grid;
  grid-template-rows: 1.3rem 1fr 1fr 1fr;
  grid-template-columns: 15px 1fr;
  width: 100%;

  > * {
    color: #24292ed0;
    font-weight: 200;
    margin: 0;
    padding: 0;
  }

  > .shape {
    width: 0px;
    height: 0px;
    border-top: solid 1rem #018795;
    border-right: solid 1rem transparent;
    grid-row: 1/2;
    grid-column: 1/2;
  }
  > .game-result {
    color: #018795;
    font-weight: 700;
    grid-row: 1/2;
    grid-column: 2/2;
  }
  > .time {
    font-size: 0.3rem;
    grid-row: 2/3;
    grid-column: 2/2;
    margin-top: 3px;
  }
  > .category {
    font-size: 0.8rem;
    font-weight: 550;
    grid-row: 3/4;
    grid-column: 2/2;
  }
  > .date {
    font-size: 0.3rem;
    padding: 0 0 3px 0;
    grid-row: 4/5;
    grid-column: 2/2;
    margin-top: 1px;
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

const ChampWrapper = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  align-items: center;

  > .champ-icon {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    grid-column: 2/4;
    grid-row: 2/4;

    border: 2px solid #018795;
    box-shadow: inset 0px 0px 2px 5px #018795;
  }

  > .champ-icon.win {
    border: 2px solid #018795;
    box-shadow: inset 0px 0px 2px 5px #018795;
  }

  > .champ-icon.lose {
    border: 2px solid #dc143c;
    box-shadow: inset 0px 0px 2px 5px #dc143c;
  }

  > .champ-level {
    position: relative;
    top: -4px;
    left: -1px;
    width: 15px;
    height: 13px;
    background-color: #24292e;
    border-radius: 100%;

    grid-column: 3/4;
    grid-row: 3/4;

    color: white;
    font-size: 7px;
    font-weight: 2;
  }
`;

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
  justify-content: center;
  align-items: center;
  margin: 0 0;

  @media all and (max-width: ${props => props.theme.recordFirstNone}) {
    display: none;
  }

  > .rune-spell {
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: absolute;
  }

  > .rune-spell > .rune-img {
    background: #000;
    border-radius: 50%;

    object-fit: cover;
    width: 22px;
    height: 22px;

    position: relative;
    top: 10px;
    left: 20px;
  }

  > .rune-spell > .rune-img.sub {
    width: 13px;
    height: 13px;

    position: relative;
    top: -1px;
    left: 34px;
  }

  > .rune-spell > .spell-img {
    object-fit: cover;
    width: 19px;
    height: 19px;

    position: relative;
    top: 4px;
    left: 12px;

    border: 1px solid #000;
  }

  > .rune-spell > .spell-img.sub {
    width: 19px;
    height: 19px;

    position: relative;
    top: -17px;
    left: 32px;
  }
`;

const KDAWrapper = styled.div`
  grid-column: 4/6;
  grid-row: 1/2;
  justify-content: center;
  display: grid;
  grid-template-columns: minmax(auto, 50%) minmax(auto, 50%);
  grid-template-rows: minmax(auto, 33%) minmax(auto, 33%) minmax(auto, 33%);
  width: 100%;
  font-size: ${props => props.theme.kdaFontSize};
  margin: 0;

  @media all and (max-width: ${props => props.theme.recordFirstNone}) {
    grid-column: 3/5;
    grid-row: 1/2;
  }

  > .kdakda {
    grid-row: 1/2;
    grid-column: 1/3;

    display: grid;
    grid-template-columns: repeat(6, minmax(5%, auto));
    margin: 0 0;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
  }

  > .kdakda.icon {
  }
`;

const AverageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.kdaFontMedium};
  margin: 0 0 0 0;
  padding: 0 0 0 0;

  > .AveTxt {
    font-weight: 600;

    @media all and (max-width: 1350px) {
      font-size: ${props => props.theme.kdaFontSmall};
      font-weight: 500;
    }

    @media all and (max-width: 480px) {
      font-size: ${props => props.theme.kdaFontSmall};
      font-weight: 400;
  }
`;

const KillAsiWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;

  margin: 0 0 0 0;
  padding: 0 0 0 0;

  font-size: ${props => props.theme.kdaFontMedium};
  color: tomato;

  > .Kill-A {
    font-weight: 600;

    @media all and (max-width: 1350px) {
      font-size: ${props => props.theme.kdaFontSmall};
      font-weight: 500;
    }

    @media all and (max-width: 480px) {
      font-size: ${props => props.theme.kdaFontSmall};
      font-weight: 400;
    }
  }
`;

const KillCntWrapper = styled.div`
  color: #fff;
  grid-column: 1/3;
  grid-row: 3/4;

  display: grid;
  align-items: center;
  justify-content: center;

  > .medal {
    line-height: 1.8;
    border-radius: 20%;
    boder: none;
    background-color: tomato;

    font-size: 0.7rem;
    font-weight: 600;

    width: 50px;
    height: 20px;

    margin-bottom: 0.1rem;
  }
`;

const EtcWrapper = styled.div`
  grid-column: 6/8;
  grid-row: 1/2;
  display: grid;

  grid-template-columns: repeat(7, minmax(1rem, auto));
  grid-template-rows: repeat(2, minmax(1rem, auto));
  // grid-template-areas:
  //   'item item item item item item item'
  //   'cs cs cs icon1 gold gold icon2';

  font-size: ${props => props.theme.kdaFontMedium};

  @media all and (max-width: ${props => props.theme.recordFirstNone}) {
    grid-column: 5/7;
  }

  justify-content: center;
  align-items: center;
  margin: 0 auto;

  > img {
    object-fit: cover;
    width: 1.1rem;
    height: 1.1rem;
  }

  > .cs {
    grid-column: 1/4;
    grid-row: 2/3;
  }

  > .icon {
    object-fit: cover;
    width: 1rem;
    height: 1rem;

    filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
  }

  > .icon1 {
    grid-column: 4/5;
    grid-row: 2/3;
  }

  > .icon2 {
    grid-column: 7/8;
    grid-row: 2/3;
  }

  > .gold {
    grid-column: 5/7;
    grid-row: 2/3;
  }
`;

function RecordPage() {
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
    <div>
      <NavBar />
      <Content>
        <BoxWrapper name="BoxWrapper">
          <RecentChart name="RecentChart">
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
          </RecentChart>
          <LogWrapper name="LogWrapper">
            <RecentGameWrapper name="RecentGameWrapper">
              <RecentGameResult>
                <div className="shape"></div>
                <div className="game-result">승리</div>
                <div className="time">11:54</div>
                <div className="category">AI대전</div>
                <div className="date">2/27</div>
              </RecentGameResult>
              <ChampWrapper>
                <img className="champ-icon " src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/Seraphine.png" alt="champicon" />
                <span className="champ-level">{10}</span>
              </ChampWrapper>
              <SkillWrapper>
                <div className="rune-spell">
                  <img
                    className="rune-img"
                    src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
                    rune-id="8229"
                    alt="rune icon"
                  ></img>
                  <img
                    className="rune-img sub"
                    src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png"
                    rune-id="8100"
                    alt="sub-rune icon"
                  ></img>
                  <img
                    className="spell-img"
                    src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/spell/SummonerHaste.png"
                    spell-name="SummonerHaste"
                    alt="spell-icon"
                  ></img>
                  <img
                    className="spell-img sub"
                    src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/spell/SummonerHeal.png"
                    spell-name="SummonerHeal"
                    alt="spell-icon sub"
                  ></img>
                </div>
              </SkillWrapper>
              <KDAWrapper name="KDAWrapper">
                <div className="kdakda">
                  <span>{19}</span>
                  <span>{'/'}</span>
                  <span>{0}</span>
                  <span>{'/'}</span>
                  <span>{23}</span>
                  <Icon className="kdakda icon" size={15} src="https://www.lolog.me/images/icon/mask-icon-offense.png" alt="icon" />
                </div>
                <AverageWrapper>
                  <span className="AveTxt">평점:</span>
                  <span className="AveTxt">{34.5}</span>
                </AverageWrapper>
                <KillAsiWrapper>
                  <span className="Kill-A">킬관여</span>
                  <span className="Kill-A">33%</span>
                </KillAsiWrapper>
                <KillCntWrapper>
                  <div className="medal">펜타킬</div>
                </KillCntWrapper>
              </KDAWrapper>
              <EtcWrapper name="EtcWrapper">
                <img
                  className="item item-first tooltipstered"
                  src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3041.png"
                  item-id="3041"
                  alt="item"
                />
                <img className="item tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3011.png" item-id="3011" alt="item" />
                <img className="item tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3020.png" item-id="3020" alt="item" />
                <img className="item tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3108.png" item-id="3108" alt="item" />
                <img className="item tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/1056.png" item-id="1056" alt="item" />
                <img className="item tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/6616.png" item-id="6616" alt="item" />
                <img className="item tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3340.png" item-id="3340" alt="item" />
                <span className="cs">38 (3.5)</span>
                <img className="icon icon1" src="https://www.lolog.me/images/icon/mask-icon-cs.png" alt="i" />
                <span className="gold">9,240</span>
                <img className="icon icon2" src="https://www.lolog.me/images/icon/mask-icon-gold.png" alt="i" />
              </EtcWrapper>
            </RecentGameWrapper>
          </LogWrapper>
        </BoxWrapper>
      </Content>
    </div>
  );
}

export default RecordPage;

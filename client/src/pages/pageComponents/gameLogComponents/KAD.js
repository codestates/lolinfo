import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  object-fit: cover;
  width: ${(props) => String(props.size) + "px"};
  height: ${(props) => String(props.size) + "px"};
  filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
`;

const KDAWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(5.5rem, 40%) minmax(5rem, 60%);
  grid-template-rows: minmax(auto, 33%) minmax(auto, 33%) minmax(auto, 33%);
  grid-template-areas:
    "kdakda kdakda"
    "AverageWrapper KillAsiWrapper"
    "KillCntWrapper KillCntWrapper";

  width: 100%;
  font-size: ${(props) => props.theme.kdaFontDefault};
  margin: 0;

  > .kdakda {
    grid-area: kdakda;

    display: grid;
    grid-template-columns: repeat(6, minmax(5%, auto));
    margin: 0 0;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
  }

  > .AverageWrapper {
    grid-area: AverageWrapper;
  }

  > .KillAsiWrapper {
    grid-area: KillAsiWrapper;
  }

  > .KillCntWrapper {
    grid-area: KillCntWrapper;
  }

  @media all and (max-width: 652px) {
    font-size: ${(props) => props.theme.kdaFontSmall};
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
  font-size: ${(props) => props.theme.kdaFontMedium};
  margin: 0 0 0 0;
  padding: 0 0 0 0;

  > .AveText {
    font-weight: 600;

    @media all and (max-width: 1350px) {
      font-size: ${(props) => props.theme.kdaFontSmall};
      font-weight: 500;
    }

    @media all and (max-width: 480px) {
      font-size: ${(props) => props.theme.kdaFontSmall};
      font-weight: 400;
    }
  }

  > .AveText.trans {
    transform: translateX(25%);
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

  font-size: ${(props) => props.theme.kdaFontMedium};
  color: tomato;

  > .KillText {
    font-weight: 600;

    @media all and (max-width: 1350px) {
      font-size: ${(props) => props.theme.kdaFontSmall};
      font-weight: 500;
    }

    @media all and (max-width: 480px) {
      font-size: ${(props) => props.theme.kdaFontSmall};
      font-weight: 400;
    }
  }

  > .KillText.trans {
    transform: translateX(-10%);
  }
`;

const KillCntWrapper = styled.div`
  color: #fff;

  display: grid;
  align-items: center;
  justify-content: center;

  > .medal {
    line-height: 1.8;
    border-radius: 20%;
    /* boder: none; */
    background-color: tomato;

    font-size: 0.7rem;
    font-weight: 600;

    width: 50px;
    height: 20px;

    margin-bottom: 0.1rem;
  }
`;
function KDA({ kills, deaths, assists, quadraKills, pentaKills, tripleKills, doubleKills, totalKill }) {
  let achive = "";
  if (pentaKills) achive = "펜타킬";
  else if (quadraKills) achive = "쿼드라킬";
  else if (tripleKills) achive = "트리플킬";
  else if (doubleKills) achive = "더블킬";

  return (
    <KDAWrapper name="KDAWrapper">
      <div className="kdakda">
        <span>{kills}</span>
        <span>{"/"}</span>
        <span>{deaths}</span>
        <span>{"/"}</span>
        <span>{assists}</span>
        <Icon className="kdakda icon" size={15} src="https://www.lolog.me/images/icon/mask-icon-offense.png" alt="icon" />
      </div>
      <AverageWrapper className="AverageWrapper">
        <span className="AveText trans">평점:</span>
        <span className="AveText">{((kills + assists) / (deaths || 1)).toFixed(2)}</span>
      </AverageWrapper>
      <KillAsiWrapper className="KillAsiWrapper">
        <span className="KillText">킬관여:</span>
        <span className="KillText trans">{(((kills + assists) / totalKill) * 100).toFixed(0)}%</span>
      </KillAsiWrapper>
      {achive === "" ? null : (
        <KillCntWrapper className="KillCntWrapper">
          <div className="medal">{achive}</div>
        </KillCntWrapper>
      )}
    </KDAWrapper>
  );
}

export default KDA;

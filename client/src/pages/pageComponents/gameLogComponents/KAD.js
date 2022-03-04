import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  object-fit: cover;
  width: ${props => String(props.size) + 'px'};
  height: ${props => String(props.size) + 'px'};
  filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
`;

const KDAWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 50%) minmax(auto, 50%);
  grid-template-rows: minmax(auto, 33%) minmax(auto, 33%) minmax(auto, 33%);
  width: 100%;
  font-size: ${props => props.theme.kdaFontSize};
  margin: 0;

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
function KDA() {
  return (
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
  );
}

export default KDA;

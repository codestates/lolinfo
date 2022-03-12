import React from "react";
import styled from "styled-components";

const EtcWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(1.5rem, auto));
  grid-template-rows: repeat(2, minmax(1rem, auto));
  grid-template-areas:
    "item item item item item item item"
    "cs cs cs icon1 gold gold icon2";

  font-size: ${(props) => props.theme.kdaFontMedium};

  justify-content: center;
  align-items: center;
  margin: 0 auto;

  > .item > img {
    object-fit: cover;
    width: 1.5rem;
    height: 1.5rem;

    transform: translateY(10px);
  }

  > .item > svg {
    width: 1.5rem;
    height: 1.5rem;
    float: left;
    background-color: #011925;
    border: solid 1px #463714;
    border-left: none;
    transform: translateY(10px);
  }

  > .icon > img {
    object-fit: cover;
    width: 1.2rem;
    height: 1.2rem;
    transform: translateY(3px);
    filter: invert(85%) sepia(50%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(50%);
  }

  > .item {
    grid-area: item;
  }
  > .cs {
    grid-area: cs;
    font-size: 0.9rem;
  }
  > .icon1 {
    grid-area: icon1;
  }

  > .gold {
    grid-area: gold;
    font-size: 0.9rem;
  }

  > .icon2 {
    grid-area: icon2;
  }
`;

function Etc({ item, goldEarned, totalMinionsKilled, oneGameTime }) {
  const version = "12.4.1";
  oneGameTime = oneGameTime.split(".");
  return (
    <EtcWrapper name="EtcWrapper">
      <div className="item">
        {item.map((v, i) => {
          if (v === 0)
            return (
              <svg key={i}>
                <rect className="tooltipstered"></rect>
              </svg>
            );
          return <img key={i} className="tooltipstered" src={`https://ddragon.bangingheads.net/cdn/${version}/img/item/${v}.png`} item-id={v} alt="item" />;
        })}
      </div>
      <div className="cs">
        <span>{totalMinionsKilled}</span>
        <span>{`(${(totalMinionsKilled / (oneGameTime[0] || 1)).toFixed(1)})`}</span>
      </div>
      <div className="icon">
        <img className="icon1" src="https://www.lolog.me/images/icon/mask-icon-cs.png" alt="i" />
      </div>
      <span className="gold">{goldEarned.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      <div className="icon">
        <img className="icon2" src="https://www.lolog.me/images/icon/mask-icon-gold.png" alt="i" />
      </div>
    </EtcWrapper>
  );
}

export default Etc;

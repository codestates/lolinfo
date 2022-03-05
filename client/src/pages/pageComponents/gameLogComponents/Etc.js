import React from "react";
import styled from "styled-components";

const EtcWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(1.3rem, auto));
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

function Etc() {
  return (
    <EtcWrapper name="EtcWrapper">
      <div className="item">
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3041.png" item-id="3041" alt="item" />
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3011.png" item-id="3011" alt="item" />
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3020.png" item-id="3020" alt="item" />
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3108.png" item-id="3108" alt="item" />
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/1056.png" item-id="1056" alt="item" />
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/6616.png" item-id="6616" alt="item" />
        <img className="tooltipstered" src="https://ddragon.bangingheads.net/cdn/11.20.1/img/item/3340.png" item-id="3340" alt="item" />
      </div>
      <div className="cs">
        <span>38</span>
        <span>(3.5)</span>
      </div>
      <div className="icon">
        <img className="icon1" src="https://www.lolog.me/images/icon/mask-icon-cs.png" alt="i" />
      </div>
      <span className="gold">9,240</span>
      <div className="icon">
        <img className="icon2" src="https://www.lolog.me/images/icon/mask-icon-gold.png" alt="i" />
      </div>
    </EtcWrapper>
  );
}

export default Etc;

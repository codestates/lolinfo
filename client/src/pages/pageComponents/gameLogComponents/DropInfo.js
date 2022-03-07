import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;

  &.win {
    border: 1px solid rgba(1, 135, 149, 0.3);
  }

  &.lose {
    border: 1px solid rgba(229, 19, 60, 0.3);
  }

  > .arrow-back {
    align-items: end;

    padding: 0 0.2rem;

    display: grid;
    grid-template-rows: repeat(1, minmax(5px, auto));
  }

  > .arrow-back > .arrow {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 11px solid ${(props) => (props.className === "win" ? "#018795" : "#e5133c")};

    padding: 0 0 0.35rem 0;
    cursor: pointer;
  }
`;

function DropInfo({ result }) {
  return (
    <Wrapper className={`${result}`}>
      <div className="arrow-back">
        <div className="arrow"></div>
      </div>
    </Wrapper>
  );
}

export default DropInfo;

import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: grid;

  > .arrow-back {
    align-items: end;
    background-color: #75d8e1;
    padding: 0 0.2rem;

    display: grid;
    grid-template-rows: repeat(1, minmax(5px, auto));
  }

  > .arrow-back > .arrow {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 11px solid #018795;

    padding: 0 0 0.35rem 0;
    cursor: pointer;
  }
`;

function DropInfo() {
  return (
    <Wrapper className="DropInfo">
      <div className="arrow-back">
        <div className="arrow"></div>
      </div>
    </Wrapper>
  );
}

export default DropInfo;

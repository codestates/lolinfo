import React from 'react';
import styled from 'styled-components';

const SH1 = styled.h1`
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
`

const SButton = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin-right: 10px;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
`

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <SH1>{number}</SH1>
      <SButton onClick={onIncrease}>+1</SButton>
      <SButton onClick={onDecrease}>-1</SButton>
    </div>
  );
}

export default Counter;
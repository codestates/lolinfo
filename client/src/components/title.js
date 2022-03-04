import React from 'react';
import styled from 'styled-components';

const TitleOPGG = styled.div`
  min-width: 320px;
  padding-top: 25px;
  padding-bottom: 10px;
  color: white;
  background: ${props => props.theme.mainColor};
  text-align: center;
  font: caption;
  font-size: 1.5em;
`;
function MainTitle() {
  return <TitleOPGG>O P G G</TitleOPGG>;
}

export default MainTitle;

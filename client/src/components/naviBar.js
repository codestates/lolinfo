import React from 'react';
import styled from 'styled-components';

function NaviBar({sticky, naviMenu}) {
  return (
    <div>
      <NaviContainer className={sticky ? 'naviBar-sticky' : null}>
        {menuNameList.map((x, i) => (
          <Menu key={i} order={i} onClick={() => naviMenu(i)}>
            {x}
          </Menu>
        ))}
      </NaviContainer>
    </div>
  );
}
const menuNameList = ['메인', '게시판', '전적', '랭킹', '오픈채팅', '로그인'];
const NaviContainer = styled.div`
  min-width: 320px;
  background: ${props => props.theme.mainColor};
  display: grid;
  grid-template-columns: repeat(5, 1fr) 1fr 1fr;
  grid-template-rows: 5px 50px 5px;
  @keyframes slowDown {
    from {
      transform: translateY(-3rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  &.naviBar-sticky {
    grid-template-columns: repeat(4, 0.8fr) 1fr 1fr 1fr;
    grid-template-rows: 5px 30px 5px;
    position: fixed;
    top: 0;
    width: 96%;
    // height: 50%;
    animation: slowDown 0.5s ease-in-out;
  }
`;

const Menu = styled.button`
  color: ${props => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${props => props.theme.mainColor};
  border: none;
  cursor: pointer;
  grid-column: ${props => (props.order === menuNameList.length - 1 ? menuNameList.length + 1 : props.order + 1)} /
    ${props => (props.order === menuNameList.length - 1 ? menuNameList.length + 2 : props.order + 2)};
  grid-row: 2/3;
`;

export default NaviBar;

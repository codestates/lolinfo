import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NaviBar({ sticky, setLoginModal }) {
  const userInfo = useSelector((state) => state.user);
  console.log("userInfo:::", userInfo);

  let navigate = useNavigate();
  return (
    <div>
      <NaviContainer sticky={sticky} className={sticky ? "naviBar-sticky" : "navibar-nomal"}>
        {menuNameList.map((ele, menuIdx) => (
          <Menu
            key={menuIdx}
            order={menuIdx}
            onClick={() => {
              if (menuIdx === 0) navigate("/");
              else if (menuIdx === 1) navigate("/board");
              else if (menuIdx === 2) navigate("/record");
              else if (menuIdx === 3) navigate("/rank");
              else if (menuIdx === 4) navigate("/chat");
              else setLoginModal("login");
            }}
          >
            {ele}
          </Menu>
        ))}
      </NaviContainer>
    </div>
  );
}
const menuNameList = ["메인", "게시판", "전적", "랭킹", "오픈채팅", "로그인"];
const NaviContainer = styled.div`
  z-index: 998;
  min-width: 320px;
  background: ${(props) => props.theme.mainColor};
  display: grid;
  grid-template-columns: repeat(5, 1fr) 1fr 1fr;
  grid-template-rows: 5px 40px 5px;
  @keyframes slowDown {
    from {
      transform: translateY(-7rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
  &.naviBar-sticky {
    position: fixed;
    top: 0;
    width: 100%;
    animation: slowDown 0.7s ease-in-out;
  }
`;

const Menu = styled.button`
  color: ${(props) => props.theme.fontColorForLoginPageAndSignupPage};
  background: ${(props) => props.theme.mainColor};
  border: none;
  cursor: pointer;
  grid-column: ${(props) => (props.order === menuNameList.length - 1 ? menuNameList.length + 1 : props.order + 1)} / ${(props) => (props.order === menuNameList.length - 1 ? menuNameList.length + 2 : props.order + 2)};
  grid-row: 2/3;
`;

export default NaviBar;

import React from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom'



function NaviBar({sticky,naviMenu}){
  let navigate = useNavigate();
  function onClickMenu(order){
    console.log(order)
    if(order===0){//메인
      // avigate
    }
    else if(order===1){//게시판
      
    }
    else if(order===2){//전적
      navigate('/record')
    }
    else if(order===3){//랭킹

    }
    else if(order===4){//오픈채팅

    }
  }
    return(
        <div >
            <NaviContainer className={sticky ? "naviBar-sticky" : null}>
        {
            menuNameList.map((x,i)=><Menu key={i} order={i} onClick={()=>{naviMenu(i);onClickMenu(i)}}>{x}</Menu>)
        }
            </NaviContainer>
        </div>
    )
}
const menuNameList=['메인','게시판','전적','랭킹','오픈채팅','로그인']
const NaviContainer=styled.div`
min-width: 320px;
background:${(props)=>props.theme.mainColor};
color:${(props)=>props.theme.fontColor};
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
    };

    &.naviBar-sticky {
      grid-template-columns: repeat(4, 0.8fr)1fr 1fr 1fr;
      grid-template-rows: 5px 30px 5px;
      position: fixed;
      top: 0;
      width: 96%;
      // height: 50%;
      animation: slowDown 0.5s ease-in-out;
    }    
`


const Menu=styled.button`
background:${(props)=>props.theme.mainColor};
color:${(props)=>props.theme.fontColor};
border:none;
cursor: pointer;
// &:hover {
//   auto;
// }
grid-column: ${props=>props.order===menuNameList.length-1?menuNameList.length+1:props.order+1}/
            ${props=>props.order===menuNameList.length-1?menuNameList.length+2:props.order+2};
grid-row: 2/3;
`

export default NaviBar
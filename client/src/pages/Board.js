import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import CardContainer from "../containers/CardContainer";

import { lighten } from "polished";
import { Fire as Hot } from "@styled-icons/remix-line/Fire";
import { Time } from "@styled-icons/boxicons-regular/Time";
import { Recommend } from "@styled-icons/material/Recommend";
import { NewMessage } from "@styled-icons/entypo/NewMessage";
import { CheckSquare } from "@styled-icons/bootstrap/CheckSquare";

const colorStyles = css`
  ${({ theme }) => {
    const { mainColor, subColor } = theme;
    return css`
      background: ${subColor};
      :hover {
        * {
          color: ${lighten(0.2, mainColor)};
        }
        color: ${lighten(0.2, mainColor)};
      }

      > :active {
        color: ${lighten(0.4, mainColor)};
      }
    `;
  }}
`;

const Form = styled.form`
  grid-area: form;
  display: ${({ active }) => (active ? "grid" : "none")};
  grid-template-columns: 1fr 28rem;
  grid-template-areas:
    ". title"
    "submit text";
  justify-items: end;
`;

const WriteContainer = styled.div`
  grid-area: title;
  width: 100%;
  display: grid;
  grid-template-areas:
    ".    .    button"
    "form form form";

  form .title {
    grid-area: title;
    height: 3rem;
    width: 15rem;

    margin: 5px 0px;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    border: 3px solid silver;
  }

  form .body {
    grid-area: text;
    //option
    resize: none;
    line-height: inherit;

    //style
    height: 5rem;
    width: 28rem;
    font-size: 16px;

    margin: 5px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid silver;
  }
`;

const Button = styled.button`
  grid-area: button;
  justify-self: end;
  border-style: none;
  cursor: pointer;
  ${colorStyles}
`;

const SubmitButton = styled(Button)`
  grid-area: submit;
  justify-self: end;
  align-self: end;
  margin: 8px 7px;
`;

const NewIcon = styled(NewMessage)`
  width: 30px;
  height: 30px;
`;

const StLink = styled(Link)`
  text-decoration: none;

  ${colorStyles}
  &:visited,
  &:link,
  &:active,
  &:-webkit-any-link {
    color: black;
    text-decoration: none;
  }
`;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.subColor};
  height: 100%;
  padding: 2rem 0.4445rem;
`;

const OrderBy = styled.div`
  grid-area: top;
  > ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;

    > li {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      margin-left: 0.5rem;
      margin-right: 3rem;
      font-size: 1.2rem;
    }
  }
`;

const HotIcon = styled(Hot)`
  ${colorStyles}
`;

const TimeIcon = styled(Time)`
  ${colorStyles}
`;

const RecommendIcon = styled(Recommend)`
  ${colorStyles}
`;

const BodyRow = styled.div`
  display: grid;
  grid-template-areas:
    ". title ."
    ". top ."
    ". bodytitle ."
    ". body ."
    ". more .";
  width: 100%;
  height: auto;

  text-align: center;

  padding: 0rem 1rem;
`;

const StH2 = styled.h2`
  grid-area: bodytitle;
  text-align: left;
  padding-left: 1rem;
  color: white;
  max-height: 3rem;
`;

const keyword = "최근";

function Board({ setHistory }) {
  const [isWriteFormVisible, setWriteFormVisible] = useState(false);

  useEffect(() => {
    setHistory("/board");
  }, []);
  const writeButtonHandler = () => {
    setWriteFormVisible(!isWriteFormVisible);
  };

  return (
    <StWrapper>
      <BodyRow>
        <WriteContainer>
          <Button onClick={writeButtonHandler}>
            <NewIcon />
          </Button>
          <Form
            active={isWriteFormVisible}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input placeholder="제목" className="title" />
            <SubmitButton type="submit">
              <CheckSquare size="2rem" />
            </SubmitButton>
            <textarea placeholder="내용" className="body" />
          </Form>
        </WriteContainer>
        <OrderBy>
          <ul>
            <li>
              <StLink to="?sort=popular">
                <HotIcon size="1.2rem" title="인기" />
                <span>인기</span>
              </StLink>
            </li>
            <li>
              <StLink to="">
                <TimeIcon size="1.2rem" title="최근" />
                <span> 최근</span>
              </StLink>
            </li>
            <li>
              <StLink to="?sort=likes">
                <RecommendIcon size="1.2rem" title="추천" />
                <span> 추천</span>
              </StLink>
            </li>
          </ul>
        </OrderBy>
        <StH2>{keyword} 게시판</StH2>
        <CardContainer />
      </BodyRow>
    </StWrapper>
  );
}

export default Board;

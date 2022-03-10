import styled from "styled-components";
import Card from "../components/Card";
import React from "react";

const CardWrapper = styled.div`
  grid-area: body;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5px;
  width: 100%;
  height: fit-content;
  padding: 0.4rem;
`;

function displayedAt(createdAt) {
  const milliSeconds = new Date() - createdAt;
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

function CardContainer({ boardList }) {
  return (
    <CardWrapper>
      {boardList.map((board) => {
        const time = displayedAt(new Date(board.createdAt));
        return <Card key={board.id} time={time} title={board.title} body={board.body} userName={board.User.name} userEmail={board.User.email} />;
      })}
    </CardWrapper>
  );
}

export default React.memo(CardContainer);

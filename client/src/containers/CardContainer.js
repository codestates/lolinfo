import styled from "styled-components";
import Card from "../components/Card";

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

function CardContainer() {
  return (
    <CardWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardWrapper>
  );
}

export default CardContainer;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import RecentChart from './pageComponents/RecentChart';
import RecentGameLog from './pageComponents/RecentGameLog';

const Content = styled.div`
  display: flex;
  height: 90vh;
  background-color: #fff;
  margin: 0.5rem 0.5rem 0rem 0.5rem;
  overflow: hidden;
  justify-content: center;
`;

const BoxWrapper = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
  grid-template-columns: minmax(auto, 3fr) minmax(auto, 7fr);
  background-color: ${props => props.theme.recordBgColor};
  width: 55vw;

  padding: 1rem 0rem 3rem 0rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  // color: #f5f5f5;

  //767
  @media all and (max-width: ${props => props.theme.recordMobileH}) {
    grid-template-columns: minmax(auto, 1fr);
    width: ${props => props.theme.media1};
  }

  @media all and (max-width: 1200px) {
    width: 80vw;
  }

  @media (min-width: 767px) and (max-width: 850px) {
    width: 90vw;
  }

  @media all and (max-width: 767px) {
    width: 75vw;
  }

  @media all and (max-width: 560px) {
    width: 90vw;
  }

  @media all and (max-width: 480px) {
    width: 95vw;
  }
`;

function RecordPage() {
  const [widthSize, setWidthSize] = useState(0);
  const resizeListener = () => {
    if (window.innerWidth <= 480) {
      // console.log(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
  }, []);

  return (
    <div>
      <Content>
        <BoxWrapper name="BoxWrapper">
          <RecentChart />
          <RecentGameLog />
        </BoxWrapper>
      </Content>
    </div>
  );
}

export default RecordPage;

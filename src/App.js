import './App.css';
import Countdown from 'react-countdown';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return <span className='Countdown'>
    <DaysContainer>
      {days} dni
    </DaysContainer>
    <TimeContainer>
      <HourContainer><div>{hours}</div><div className='TimeUnit'>g</div></HourContainer>
      <MinuteContainer><div>{minutes}</div><div className='TimeUnit'>m</div></MinuteContainer>
      <SecondContainer><div>{seconds}</div><div className='TimeUnit'>s</div></SecondContainer>
    </TimeContainer>
  </span>;
};

const A = styled.a`
  width: fit-content;
  color: black;
  text-align: left;
  &:hover {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

const MiddleImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SideImg = styled.img`
  height: 100%;
  width: min-content;
`;

const Links = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
`;

const SidePicture = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fefefe;
  align-content: center;
  justify-content: center;
`;

const MiddlePicture = styled.div`
  max-height: 25%;
`;

const MainContent = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  color: black;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: calc(20px + 2vmin);
  width: 50vw;
  
  ::-webkit-scrollbar{
    width: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #e3b3da;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar{
    width: 0px;
    background-color: transparent;
    }    
    ::-webkit-scrollbar-thumb{
    background-color: transparent;
    }
  }
`;

const Initials = styled.div`
  font-size: calc(40px + 5vmin);
  padding: 3rem 1rem 1rem 1rem;
  white-space: nowrap;
`;

const WeddingDate = styled.div`
  font-size: calc(5px + 4vmin);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  row-gap: 20px;
`;

const WeddingCountdown = styled.div`
  font-size: calc(10px + 5vmin);
  border-left: 0px;
  border-right: 0px;
  border-top: 0.5px;
  border-bottom: 0.5px;
  border-style: solid;
  padding: 20px;
  min-width: 180px;
`;

const DaysContainer = styled.div`

`;
const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: xx-large;
  row-gap: 10px;
`;
const HourContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
`;
const MinuteContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
`;
const SecondContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
`;


const WeddingApp = styled.div`
  height: 100vh;
  margin: 0%;
  overflow: hidden;
  background-color: ##fefefe;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 601px)' });
  return (
    <WeddingApp>
      <Helmet>
        <title>Ślub Kasi i Tomka</title>
      </Helmet>
      {!isMobile && (<SidePicture>
        <SideImg src='photos/tomek_profil.jpg' alt='Tomek'></SideImg>
      </SidePicture>)}
      {isMobile && (<MiddlePicture><MiddleImg src='photos/kasia_gora.jpg' alt='Kasia'></MiddleImg></MiddlePicture>)}
      <MainContent className='box'>
        <Initials>K & T</Initials>
        <p>Do ślubu zostało:</p>
        <WeddingCountdown>
          <Countdown
            date={new Date(Date.UTC(2023, 7, 29, 15, 0, 0, 0))}
            renderer={renderer} />
        </WeddingCountdown>
        <WeddingDate>
          <span>29 | 07 | 2023</span>
          <span>16:00</span>
        </WeddingDate>
        <Links>
          <A target={'_blank'} href='https://goo.gl/maps/X16KL9MjJcvoeVw39'>Kościół➔</A>
          <A target={'_blank'} href='https://goo.gl/maps/f5TWSABHb1XdiAks8'>Sala weselna➔</A>
        </Links>
      </MainContent>
      {isMobile && (<MiddlePicture><MiddleImg src='photos/tomek_dol.jpg' alt='Tomek'></MiddleImg></MiddlePicture>)}
      {!isMobile && (<SidePicture>
        <SideImg src='photos/kasia_profil.jpg' alt='Kasia'></SideImg>
      </SidePicture>)}
    </WeddingApp>
  );
}

export default App;

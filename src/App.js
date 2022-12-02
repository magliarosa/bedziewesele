import './App.css';
import Countdown from 'react-countdown';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return <span className='Countdown'><div>{days} dni</div> {hours}:{minutes}:{seconds}</span>;
};

const A = styled.a`
  color: white;
  &:hover {
    color: white;
  }
  &:visited {
    color: white;
  }
`;

const Links = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Ślub Kasi i Tomka</title>
      </Helmet>
      <header className="App-header">
        <p className='Initials'>K & T</p>
        <p>Do ślubu zostało:</p>
        <Countdown
          date={new Date(Date.UTC(2023, 7, 29, 14, 0, 0, 0))}
          renderer={renderer} />
        <p className='WeddingDate'>
          29 | 07 | 2023
        </p>
        15:00
      </header>
      <content>
        <Links>
          <A target={'_blank'} href='https://goo.gl/maps/X16KL9MjJcvoeVw39'>Kościół</A>
          <A target={'_blank'} href='https://goo.gl/maps/f5TWSABHb1XdiAks8'>Sala weselna</A>
        </Links>
      </content>
    </div>
  );
}

export default App;

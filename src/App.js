import './App.css';
import Countdown from 'react-countdown';
import { Helmet } from 'react-helmet';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <span className='Countdown'><div>{days} dni</div> {hours}:{minutes}:{seconds}</span>;
};

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
          date={new Date(Date.UTC(2023,7,29,14,0,0,0))}
          renderer={renderer}/> 
        <p className='WeddingDate'>
          29 | 07 | 2023
        </p>
        15:00
      </header>
    </div>
  );
}

export default App;

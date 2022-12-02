import './App.css';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <span className='Countdown'><div>{days} dni</div> {hours}:{minutes}:{seconds}</span>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='Initials'>K & T</p>
        <p>Do ślubu zostało:</p>
        <Countdown 
          date={'2023-07-29T15:00:00'}
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

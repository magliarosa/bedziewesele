import logo from './logo.svg';
import './App.css';
import DateCountdown from 'react-date-countdown-timer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <DateCountdown dateTo='January 01, 2023 00:00:00 GMT+03:00' callback={()=>alert('Hello')}  /> */}
        <p className='WeddingDate'>
          29 | 07 | 2023
        </p>
      </header>
    </div>
  );
}

export default App;

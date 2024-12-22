/* eslint-disable no-unused-vars */
import './App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useRef } from 'react';
 
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
 
  const handleToggle = () => {
    if (isRunning) {
      console.log(timerRef.current)
      clearInterval(timerRef.current);
      console.log(timerRef.current)
      setIsRunning(false);
    } else {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 2000);
      }, 2000);
    }
  };
 
  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };
 
  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };
 
  return (
    <div className="app">
      <div className='container'>
        <div className='total_amount_card' style={{ backgroundImage: `linear-gradient(to right, rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))` }}>
          <div className='right'>
            <svg onClick={handleReset} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="17" height="17"><path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" /></svg>
          </div>
          <div className='card_text '>
            <h3 className='total_amount_heading'>{formatTime(time)}</h3>
          </div>
        </div>
        <form>
          <div className='button_collection'>
            <Stack className='center_button' spacing={2} direction="row">
              <Button onClick={handleToggle} variant="contained" className='btn_one'>
                {isRunning ? (
 
                  <svg width="25" height="25" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="13" height="50" rx="2" fill="#656565" />
                    <rect x="25" width="14" height="50" rx="2" fill="#656565" />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.5 39.4737C88.8334 43.7076 88.8333 54.2924 81.5 58.5263L41 81.909C33.6666 86.1429 24.5 80.8505 24.5 72.3827L24.5 25.6173C24.5 17.1495 33.6667 11.8571 41 16.091L81.5 39.4737Z" fill="#656565" />
                  </svg>
                )}
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default App;
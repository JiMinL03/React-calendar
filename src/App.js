import Calendar from "react-calendar";
import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Cunstom></Cunstom>
    </div>
  );
}


function Cunstom() {
  const [date, setCalendar] = useState(new Date());
  return (
    <div className="container">
      <Calendar onChange={setCalendar} value={date} selectRange={true}></Calendar>

      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toLocaleDateString('ko-KR')}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toLocaleDateString('ko-KR')}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toLocaleDateString('ko-KR')}
        </p>
      )}
    </div>
  );
}
export default App;

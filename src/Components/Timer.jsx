import React, { useEffect, useState } from 'react'

 const Timer =(props)=> {

const [seconds, setSeconds] = useState(59);
const [minites, setMinites] = useState(60);
const [Hours, setHours] = useState(12);
const [Days, setDays] = useState(30);

useEffect(() => {
  if (seconds > 0) {
    setTimeout(() => setSeconds(seconds - 1), 1000);
  }
  if (seconds === 0) {
    setMinites((minites) => minites - 1);
    setSeconds(60);
  }
  if (minites === 0) {
    setHours((hours) => hours - 1);
    setMinites(60);
  }
  if (Hours === 0) {
    setDays((days) => days - 1);
    setHours(12);
  }
  if (Days === 0) {
    setDays(0);
  }
});

return ( <div className="slide-page-row1">
            <div className="time">
              <span className="days">
                <span className="number">{Days}</span>
                <br />
                Days
              </span>
              <span className="hours">
                <span className="number">{Hours}</span>
                <br /> Hours{" "}
              </span>
              <span className="minites">
                <span className="number">{minites}</span> <br />
                Minites{" "}
              </span>
              <span className="seconds">
                <span className="number">{seconds}</span> <br /> seconds
              </span>
            </div>
            </div>);
}

 
  export default Timer;
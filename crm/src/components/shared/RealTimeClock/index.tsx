// libraries
import React, { useEffect, useState } from 'react';
import moment from 'moment';

type ClockProps = {
  start: Date;
  format: string,
};
const reloadTime = 1000;
const shift = 1;

const RealTimeClock: React.FC<ClockProps> = ({ start, format }) => {
  const [time, setTime] = useState(moment(start));

  useEffect(() => {
    const timerId = setInterval(() => setTime((prevTime) => moment(prevTime).add(shift, 'seconds')), reloadTime);

    return () => clearInterval(timerId);
  }, []);

  return (
    <span>{ time.format(format) }</span>
  );
};

export default RealTimeClock;

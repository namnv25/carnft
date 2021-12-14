import { useState, useEffect } from 'react';
import Text from '../Text';
interface TimerProps {
  initialMinute: number;
  initialSeconds: number;
  initialHours?: number;
  initialDays?: number;
}
export const Timer = (props: TimerProps) => {
  const {
    initialMinute = 0,
    initialSeconds = 0,
    initialHours = 0,
    initialDays = 0,
  } = props;

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [hours, setHours] = useState(initialHours);
  const [days, setDays] = useState(initialDays);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          }
        } else {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(myInterval);
            }
          }
        } else {
          setDays(days - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {minutes === 0 && seconds === 0 && days === 0 && hours === 0 ? null : (
        <Text type="body-2" color="neutral-0">
          {days}:{hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </>
  );
};

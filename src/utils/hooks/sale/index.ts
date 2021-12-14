import { useMount, useUpdateEffect } from '@umijs/hooks';
import dayjs from 'dayjs';
import clone from 'lodash/clone';
import { useMemo, useState } from 'react';

interface SaleCountdownProps {
  startDate: Date;
  endDate: Date;
  nonUpdate?: boolean;
}

export const useSaleCountdown = (props: SaleCountdownProps) => {
  const [isCounting, setIsCounting] = useState(false);
  const [remain, setRemain] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const start = useMemo(() => dayjs(props.startDate), []);
  const end = useMemo(() => dayjs(props.endDate), []);

  useUpdateEffect(() => {
    let timer: any;

    if (isCounting) {
      timer = setTimeout(() => {
        const now = dayjs(new Date());
        const cloneEnd = dayjs(end);
        const days = cloneEnd.diff(now, 'days');
        const hours = cloneEnd.subtract(days, 'days').diff(now, 'hours');
        const minutes = cloneEnd
          .subtract(days, 'days')
          .subtract(hours, 'hours')
          .diff(now, 'minutes');
        const seconds = cloneEnd
          .subtract(days, 'days')
          .subtract(hours, 'hours')
          .subtract(minutes, 'minutes')
          .diff(now, 'seconds');
        if (!days && !hours && !minutes && !seconds) {
          setIsCounting(false);
        }
        if (!props?.nonUpdate) {
          setRemain({
            days,
            hours,
            minutes,
            seconds,
          });
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [remain, isCounting]);

  useMount(() => {
    const now = dayjs(new Date());

    if (now.isSame(start) || (now.isAfter(start) && now.isBefore(end))) {
      setIsCounting(true);
    }
  });

  return {
    isCounting,
    remain,
  };
};

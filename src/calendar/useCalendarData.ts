import { useEffect, useState } from 'react';

export const useCalendarData = () => {
  const [shift, setShift] = useState(0);
  const [dates, setDates] = useState<Date[]>([]);
  const [monthName, setMonthName] = useState<string>('');
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const firstDay = new Date(date);

    firstDay.setDate(date.getDate() - (day === 0 ? 6 : day - 1) + shift);

    const arr: Date[] = [];
    for (let index = 0; index < 7; index++) {
      const weekDate = new Date(firstDay);
      weekDate.setDate(firstDay.getDate() + index);
      arr.push(weekDate);
    }

    setDates(arr);
    setMonthName(firstDay.toLocaleString("default", { month: "short" }));
    setYear(firstDay.getFullYear());

  }, [shift])

  return {
    dates,
    monthName,
    year,
    shift,
    setShift
  };
}

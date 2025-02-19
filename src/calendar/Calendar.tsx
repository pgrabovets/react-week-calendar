import s from "./styles.module.css";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarDays from "./CalendarDays/CalendarDays";
import CalendarEvents from "./CalendarEvents/CalendarEvents";
import { useCalendarData } from "./useCalendarData";
import { eventsData } from "./data/events";

import type { EventData } from "./types";

const Calendar = () => {
  const { dates, shift, setShift, monthName, year } = useCalendarData();

  const handleNext = () => {
    setShift(shift + 7);
  };

  const handlePrev = () => {
    setShift(shift - 7);
  };

  const events: EventData[] = eventsData.map((item, index) => {
    return { ...item, id: String(index), element: null };
  });

  console.log(eventsData);

  return (
    <div className={s.calendar_app}>
      <CalendarHeader
        month={monthName}
        year={year}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <div className={s.calendar_content}>
        <CalendarDays dates={dates} />
        <CalendarEvents dates={dates} events={events} />
      </div>
    </div>
  );
};

export default Calendar;

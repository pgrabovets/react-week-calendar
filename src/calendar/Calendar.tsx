import s from "./styles.module.css";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarDays from "./CalendarDays/CalendarDays";
import CalendarEvents from "./CalendarEvents/CalendarEvents";
import { useCalendarData } from "./useCalendarData";
import { splitEvents } from "./utils";

import type { EventData } from "./types";

type CalendarProps = {
  events: EventData[]
}

const Calendar = ({ events }: CalendarProps) => {
  const { dates, shift, setShift, monthName, year } = useCalendarData();

  const handleNext = () => {
    setShift(shift + 7);
  };

  const handlePrev = () => {
    setShift(shift - 7);
  };

  const splitedEvents = splitEvents(events);

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
        <CalendarEvents dates={dates} events={splitedEvents} />
      </div>
    </div>
  );
};

export default Calendar;

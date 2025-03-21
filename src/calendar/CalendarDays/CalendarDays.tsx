import s from "./CalendarDays.module.css";
import CalendarDay from "./CalendarDay";

type CalendarDaysProps = {
  dates: Date[];
};

const CalendarDays = ({ dates }: CalendarDaysProps) => {
  const isToday = (day: Date) => {
    const today = new Date();
    return today.toDateString() === day.toDateString();
  };

  const getShortWeekName = (date: Date) => {
    return date.toLocaleString("default", { weekday: "short" });
  };

  return (
    <div className={s.calendar_days}>
      <div className={s.calendar_days_left}></div>
      {dates.map((item) => (
        <CalendarDay
          key={item.toISOString()}
          name={getShortWeekName(item)}
          day={item.getDate()}
          active={isToday(item)}
        />
      ))}
    </div>
  );
};

export default CalendarDays;

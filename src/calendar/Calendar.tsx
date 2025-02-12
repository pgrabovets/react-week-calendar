import s from './styles.module.css';
import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';
import CalendarEvents from './CalendarEvents/CalendarEvents';
import { useCalendarData } from './useCalendarData';

const Calendar = () => {
  const {dates, shift, setShift, monthName, year} = useCalendarData();

  const handleNext = () => {
    setShift(shift + 7)
  }

  const handlePrev = () => {
    setShift(shift - 7)
  }

  return (
    <div className={s.calendar_app}>
      <CalendarHeader month={monthName} year={year} onNext={handleNext} onPrev={handlePrev}  />
      <div className={s.calendar_content}>
        <CalendarDays dates={dates} />
        <CalendarEvents />
      </div>
    </div>
  )
}

export default Calendar;
import s from "./CalendarEvents.module.css";

type CalendarEventProps = {
  start: string;
  end: string;
  children?: React.ReactNode;
};

const CalendarEvent = ({ start, end, children }: CalendarEventProps) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const TOP_OFFSET = 32;
  const SLOT_HEIGHT = 98.7;

  const getEventPosition = (date: Date) => {
    const MINUTES_PER_HOUR = 60;
    return Math.trunc(
      date.getHours() * SLOT_HEIGHT +
        date.getMinutes() * (SLOT_HEIGHT / MINUTES_PER_HOUR) +
        TOP_OFFSET
    );
  };

  const getEventHeight = (): number => {
    const HOURS_PER_DAY = 24;

    if (startDate.getDate() === endDate.getDate()) {
      return getEventPosition(endDate) - getEventPosition(startDate);
    }

    return HOURS_PER_DAY * SLOT_HEIGHT + TOP_OFFSET - getEventPosition(startDate);
  };

  const top = getEventPosition(startDate);
  const height = getEventHeight();

  return (
    <div
      style={{ top: top, height: height }}
      className={s.calendar_event}
    >
      {children}
    </div>
  );
};

export default CalendarEvent;

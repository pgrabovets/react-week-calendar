import s from "./CalendarEventCard.module.css";

type CalendarEventCardProps = {
  title: string;
  start: string;
  end: string;
};

const CalendarEventCard = ({ title, start, end }: CalendarEventCardProps) => {
  const formatTime = (time: string) => {
    const timeObj = new Date(time);
    return timeObj.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getEventTimeString = (start: string, end: string): string => {
    return `${formatTime(start)} - ${formatTime(end)}`;
  };

  return (
    <div className={s.calendar_event_card}>
      <div className={s.calendar_event_card_content}>
        <div className={s.calendar_event_title}>{title}</div>
        <div className={s.calendar_event_time}>
          {getEventTimeString(start, end)}
        </div>
      </div>
    </div>
  );
};

export default CalendarEventCard;

import s from "./CalendarEvents.module.css";
import CalendarEvent from "./CalendarEvent";
import type { EventData } from "../types";

type CalendarEventsProps = {
  dates: Date[];
  events: EventData[];
};

const CalendarEvents = ({ dates, events }: CalendarEventsProps) => {
  const formatHours = (value: number) => {
    if (value === 0) {
      return "12AM";
    }

    if (value < 13) {
      return value + "AM";
    }
    if (value > 12 && value < 24) {
      return (value % 12) + "PM";
    }
    return "";
  };

  const createRowsData = () => {
    const rows: {
      index: number;
      label: string;
    }[] = [];

    for (let index = 0; index < 24; index++) {
      rows[index] = {
        index: index,
        label: formatHours(index),
      };
    }
    return rows;
  };

  const rows = createRowsData();

  const isSameDate = (date1: Date, date2: Date) => {
    return date1.toDateString() === date2.toDateString();
  };

  return (
    <div className={s.calendar_events}>
      <div className={s.time_row}>
        <div></div>
      </div>
      <div className={s.week_events_grid}>
        <div className={s.horisontal_lines}>
          <div></div>
          {rows.map((item) => (
            <div key={item.index}>
              <span className={s.time_label}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={s.vertical_lines}>
          {dates.map((item) => (
            <div key={item.toISOString()} className={s.line}>
              {events.map((event) =>
                isSameDate(item, new Date(event.start)) ? (
                  <CalendarEvent
                    key={event.id}
                    start={event.start}
                    end={event.end}
                  />
                ) : null
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarEvents;

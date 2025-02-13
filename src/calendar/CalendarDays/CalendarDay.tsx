import s from "./CalendarDays.module.css";

type Props = {
  name: string;
  day: number;
  active?: boolean;
};

const CalendarDays = ({ name, day }: Props) => {
  return (
    <div className={s.calendar_day}>
      <span>
        {name} {day}
      </span>
    </div>
  );
};

export default CalendarDays;

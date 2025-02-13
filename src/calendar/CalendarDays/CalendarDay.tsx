import s from "./CalendarDays.module.css";

type Props = {
  name: string;
  day: number;
  active?: boolean;
};

const CalendarDays = ({ name, day, active = false }: Props) => {
  return (
    <div className={s.calendar_day}>
      <span>{name}</span>
      <span className={active ? `${s.current_day}` : ""}>{day}</span>
    </div>
  );
};

export default CalendarDays;

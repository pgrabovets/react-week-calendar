import s from "./CalendarHeader.module.css";
import CalendarNavButton from "../CalendarNavButton/CalendarNavButton";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";

type CalendarHeaderProps = {
  month: string;
  year: number;
  onNext?: () => void;
  onPrev?: () => void;
};

const CalendarHeader = ({
  onNext,
  onPrev,
  month,
  year,
}: CalendarHeaderProps) => {
  return (
    <div className={s.calendar_header}>
      <CalendarNavButton onClick={onPrev}>
        <ChevronLeft />
      </CalendarNavButton>
      <span>
        {month} {year}
      </span>
      <CalendarNavButton onClick={onNext}>
        <ChevronRight />
      </CalendarNavButton>
    </div>
  );
};

export default CalendarHeader;

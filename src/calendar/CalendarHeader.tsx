import s from './styles.module.css';

type CalendarHeaderProps = {
  month: string
  year: number
  onNext?: () => void
  onPrev?: () => void
}

const CalendarHeader = ({onNext, onPrev, month, year }: CalendarHeaderProps) => {
  return (
    <div className={s.calendar_header}>
      <button onClick={onPrev}>Prev</button>
      <span>{ month } {year}</span>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default CalendarHeader;

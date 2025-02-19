import s from "./CalendarNavButton.module.css";

type CalendarNavButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const CalendarNavButton = ({ onClick, children }: CalendarNavButtonProps) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button className={s.nav_button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CalendarNavButton;

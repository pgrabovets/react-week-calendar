import s from './styles.module.css';

const CalendarEvents = () => {

  const formatHours = (value: number) => {
    if (value === 0) {
      return '12AM';
    }

    if (value < 13) {
      return value + 'AM';
    }
    if (value > 12 && value < 24) {
      return value % 12 + 'PM';
    }
    return '';
  }

  const createRowsData = () => {
    const rows: {
      index: number
      label: string
    }[] = [];

    const size = 48;

    for (let index = 0; index < size; index++) {
      let label = '';

      if (index % 2 === 0 ) {
        label = formatHours(index/ 2);
      }

      rows[index] = {
        index: index,
        label: label
      };
    }
    return rows;
  }

  const rows = createRowsData();

  return (
    <div className={s.calendar_events}>
      <div className={s.time_row}><div></div></div>
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
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default CalendarEvents;

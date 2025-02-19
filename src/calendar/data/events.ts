const now = new Date();

const getEventTime = (now: Date, shift: number): string => {
  const time = new Date(now.getTime() + shift );
  return time.toISOString();
}

export const eventsData = [
  {
    title: "Meeting with recruiter",
    start: getEventTime(now, -4 * 3600 * 1000),
    end: getEventTime(now, -3 * 3600 * 1000)
  },
  {
    title: "Test today long title event",
    start: getEventTime(now, 0),
    end: getEventTime(now, 2 * 3600 * 1000),
  },
];

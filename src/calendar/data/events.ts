const now = new Date();

const getEventEndISOString = (date: Date, duration: number) => {
  const timestamp = date.getTime();
  const end = new Date(timestamp + duration);
  return end.toISOString();
};

export const eventsData = [
  {
    title: "Test today event",
    start: now.toISOString(),
    end: getEventEndISOString(now, 1 * 3600 * 1000),
  },
];

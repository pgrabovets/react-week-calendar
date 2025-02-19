import type { EventData } from "./types";

export const splitEvents = (events: EventData[]) => {
  const splitedEvents: EventData[] = [];
  events.forEach((event) => {
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);

    if (startDate.getDate() === endDate.getDate()) {
      splitedEvents.push(event);
      return;
    }

    if (startDate.getDate() < endDate.getDate()) {
      const endTimeDate = new Date(event.start);
      endTimeDate.setHours(24);
      endTimeDate.setMinutes(0);
      endTimeDate.setSeconds(0);
      endTimeDate.setMilliseconds(0);

      const part1: EventData = {
        ...event,
        end: endTimeDate.toISOString()
      }
      splitedEvents.push(part1);

      const startTimeDate = new Date(event.end);
      startTimeDate.setHours(0);
      startTimeDate.setMinutes(0);
      startTimeDate.setSeconds(0);
      startTimeDate.setMilliseconds(0);

      const part2: EventData = {
        ...event,
        start: startTimeDate.toISOString(),
      }
      splitedEvents.push(part2);
      return;
    }
  })

  return splitedEvents;
}
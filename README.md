# React Week Calendar
Week Events Calendar for you React + TS application
- No external dependencies
- Full control to customize and edit calendar component to your needs

## Demo 
[demo](http://pgrabovets.github.io/react-week-calendar/)

![calendar image](http://pgrabovets.github.io/react-week-calendar/calendar-example-1.png)

## Example of usage
You can clone this repo and copy directory src/calendar to you prodject.

```ts
export type EventData = {
  title: string;
  start: string;
  end: string;
  element: React.JSX.Element | null;
};
```

```tsx
import { eventsData } from "./calendar/data/events";
import Calendar from "./calendar";
import CustomEventCard from "./components/CustomEventCard/CustomEventCard";

import type { EventData } from "./calendar/types";

function App() {
  const events: EventData[] = eventsData.map((item) => {
    return {
      ...item,
      element: (
        <CustomEventCard
          title={item.title}
          start={item.start}
          end={item.end}
        />
      ),
    };
  });

  return (
    <div>
      <Calendar events={events} />
    </div>
  );
}

export default App;
```


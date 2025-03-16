# React Week Calendar
Week Events Calendar for your React + TS application
- No external dependencies
- Full control to customize and edit the calendar component to your needs

## Demo 
[demo](http://pgrabovets.github.io/react-week-calendar/)

![calendar screenshot](http://pgrabovets.github.io/react-week-calendar/calendar-example-1.png)

## Example of Usage
You can clone this repo and copy the src/calendar directory to your project.

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


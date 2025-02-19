import "./App.css";
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

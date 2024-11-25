import { useState } from "react";
import CitySelector from "./CitySelector";

const TabsRendering = () => {
  const [city, setCity] = useState("");
  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={() => setCity("London")}>
          London
        </button>
        <button className="tablinks" onClick={() => setCity("Paris")}>
          Paris
        </button>
        <button className="tablinks" onClick={() => setCity("Tokyo")}>
          Tokyo
        </button>
        <CitySelector city={city} />
      </div>
    </>
  );
};

export default TabsRendering;

// ### **Exercise 9: Tabs with Conditional Rendering**
// **Task:**
// Create a tabbed interface where:
// - Clicking on a tab (e.g., "Home," "Profile," "Settings") displays its respective content.
// - Only one tab content is visible at a time.

// **Hints:**
// - Use `useState` to track the active tab.

import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect } from "react";

function App() {
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: [],
  });

  const [activities, setActivities, { isPersistent }] = useLocalStorageState(
    "activities",
    {
      defaultValue: [],
    }
  );

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const JSONdata = await response.json();
      setWeather(JSONdata);
    }

    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isGoodWeather === weather.isGoodWeather
  );

  return (
    <div>
      <header>
        <h1>All Weather Activities App</h1>
      </header>

      <h2>{`Location: ${weather.location}`}</h2>
      <h2>{`Temp ${weather.temperature} Condition ${weather.condition}`}</h2>
      <h3>
        {weather.isGoodWeather
          ? "Good Weather Outside."
          : "Bad Weather Outside."}
        You can do the following
      </h3>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      {!isPersistent && <span>Changes aren't currently persisted.</span>}
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

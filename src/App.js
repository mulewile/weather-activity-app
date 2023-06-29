import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { StyledHeader } from "./components/Header";
import { StyledWeatherBar } from "./components/WeatherBar";
import { StyledCondition } from "./components/Condition";

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
      <StyledHeader>
        <h1>All Weather Activities</h1>
      </StyledHeader>
      <StyledWeatherBar>
        <p>
          LOCATION <span>{weather.location}</span> Temp
          <span>{weather.temperature} °C</span> Condition {weather.condition}
        </p>
      </StyledWeatherBar>

      <StyledCondition>
        {weather.isGoodWeather
          ? "Good Weather Outside."
          : "Bad Weather Outside."}
        You can do the following
      </StyledCondition>
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

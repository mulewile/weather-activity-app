import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const initialActivities = [
  { activity: "Hiking", isGoodWeather: true },
  { activity: "Swimming", isGoodWeather: true },
  { activity: "Picnic", isGoodWeather: true },
  { activity: "Cycling", isGoodWeather: false },
  { activity: "Indoor Gaming", isGoodWeather: false },
  { activity: "Barbecue", isGoodWeather: true },
];

const isGoodWeather = true;
function App() {
  const [activities, setActivities, { isPersistent }] = useLocalStorageState(
    "activities",
    {
      defaultValue: [],
    }
  );

  console.log("form activities", activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isGoodWeather === isGoodWeather
  );
  console.log("filtered", filteredActivities);

  return (
    <div>
      <header>
        <h1>All Weather Activities App</h1>
      </header>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      {!isPersistent && <span>Changes aren't currently persisted.</span>}
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

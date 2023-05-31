import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
const initialActivities = [
  {
    id: "28djdh72",
    activity: "Jogging",
    isGoodWeather: true,
  },
  {
    id: "dknseu2",
    activity: "Reading",
    isGoodWeather: false,
  },
  {
    id: "dkwi02ksk",
    activity: "Rowing",
    isGoodWeather: true,
  },
];

function App() {

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],});

  console.log(activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity}]);

  }

  return (
    <div>
      <header>
        <h1>All Weather Activities App</h1>
      </header>
      <ul>
        {activities.map((activity) =>(<li key={activity.id}>{activity.activity}</li>))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

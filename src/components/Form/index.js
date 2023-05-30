import { v4 as uuidv4 } from "uuid";

export default function Form({ onAddActivity }) {

  function handleSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const activityObjectData = Object.fromEntries(formData);
  
    const id = uuidv4(); 
    const isGoodWeather = event.target.elements.isGoodWeather.checked;
    const activityData = { ...activityObjectData, id: id, isGoodWeather: isGoodWeather };
    onAddActivity(activityData);
    event.target.reset();
    event.target.elements.activity.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Weather Based Activities</h3>
      <label htmlFor="activity">Activity</label>
      <input type="text" id="activity" name="activity" required />
      <label htmlFor="isGoodWeather">Good Weather</label>
      <input type="checkbox" id="isGoodWeather" name="isGoodWeather" />
      <button type="submit">Add</button>
    </form>
  );
}

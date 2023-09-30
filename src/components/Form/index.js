import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="checkbox"] {
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    align-items: center;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const activityObjectData = Object.fromEntries(formData);

    const id = uuidv4();
    const isGoodWeather = event.target.elements.isGoodWeather.checked;
    const activityData = {
      ...activityObjectData,
      id: id,
      isGoodWeather: isGoodWeather,
    };

    onAddActivity(activityData);
    event.target.reset();
    event.target.elements.activity.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Add Weather Based Activities</h3>
      <label htmlFor="activity">Activity</label>
      <input type="text" id="activity" name="activity" required />
      <label htmlFor="isGoodWeather">Ideal for Good Weather</label>
      <input type="checkbox" id="isGoodWeather" name="isGoodWeather" />
      <button type="submit">Add</button>
    </StyledForm>
  );
}

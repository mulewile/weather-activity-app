import { v4 as uuidv4 } from "uuid";

export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h3>
        {isGoodWeather ? "Good Weather Outside." : "Bad Weather Outside."} You
        can do the following
      </h3>
      <ul>
        {activities.map((activity) => (
          <li key={uuidv4()}>{activity.activity}</li>
        ))}
      </ul>
    </>
  );
}

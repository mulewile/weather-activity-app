import { v4 as uuidv4 } from "uuid";

export default function List({ activities }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={uuidv4()}>{activity.activity}</li>
        ))}
      </ul>
    </>
  );
}

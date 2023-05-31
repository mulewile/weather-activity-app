export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h3>{isGoodWeather? "Good Weather Outside." : "Bad Weather Outside."} You can do the followng</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.activity}</li>
        ))}
      </ul>
    </>
  );
}

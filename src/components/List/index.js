import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Button from "../Button";

const StyledList = styled.ul`
  max-width: 365px;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  background-color: whitesmoke;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 60%;
  padding: 0.5rem;
`;

export default function List({ activities, onDeleteActivity }) {
  return (
    <>
      <StyledList>
        {activities.map((activity) => (
          <StyledListItem key={uuidv4()}>
            {activity.activity}
            <Button text="X" onClick={() => onDeleteActivity(activity.id)} />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

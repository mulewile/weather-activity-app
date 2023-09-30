import styled from "styled-components";

export const StyledWeatherBar = styled.div`
  max-width: 365px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 5px;
  margin-top: 2rem;

  p {
    font-weight: bold;
    font-size: 1rem;
  }

  span {
    color: blue;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: salmon;
  color: white;
  padding: 0.2rem 0.5rem;
  border: none;
  cursor: pointer;
  margin-left: 5rem;
`;

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

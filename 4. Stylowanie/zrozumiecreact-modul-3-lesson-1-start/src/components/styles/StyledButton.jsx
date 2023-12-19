import styled from "styled-components";

const WIDTH = 100;

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: ${WIDTH}px;
  color: ${({ $primary }) => ($primary ? "salmon" : "white")};
  transition: background 0.3s;
  margin: ${({ $margin }) => $margin + "px"};

  &:hover {
    color: ${({ $primary }) => ($primary ? "white" : "salmon")};
    background: ${({ $primary }) => ($primary ? "salmon" : "white")};
  }
`;

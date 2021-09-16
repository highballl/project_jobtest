import styled from "styled-components";

export const ProgressBar = styled.div`
  width: 100%;
  background-color: lightgrey;
  height: 18px;
  display: flex;
  border-radius: 15px;
`;

export const LeftBar = styled.div`
  background-color: #00aabb;
  margin: 0;
  max-width: 100%;
  border-radius: 15px;
  width: ${(props) => props.progressNum}%;
  transition: width 0.75s ease-in-out;
`;
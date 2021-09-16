import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const QuestionWrapper = styled.div`
  text-align: center;
  background-color: rgba(153, 153, 255, 0.5);
  width: 85%;
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 0.75em;
  padding: 0.8em 0 0.8em 0;
  border-radius: 15px;
  font-size: 15px;
  animation: ${fadeIn} 0.5s ease-in-out;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const RadioWrapper = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  margin-top: 5px;
  background-color: none;
  border-radius: 10px;
  font-size: 13px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
  padding: 10px 0 10px 0;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Radio = styled.input`
  background-color: #9966ff;
  vertical-align: -2px;
  @media screen and (max-width: 500px) {
    vertical-align: -3px;
  }
`;

export const RadioColumn = styled.div`
  align-items: center;
`;
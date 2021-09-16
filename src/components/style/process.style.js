import styled from "styled-components";

export const ProcessWrapper = styled.div`
  background-color: white;
  padding: 0;
  height: 650px;
  width: 500px;
  overflow: hidden;
  padding: 0;
  margin: auto;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    width: 350px;
    margin-top: 15px;
  }
`;

export const ProHeader = styled.div`
  background-color: white;
  padding: 5px 0 5px 0;
  font-size: 20px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const HeaderLeft = styled.div`
  text-align: left;
  padding-left: 10px;
`;

export const HeaderRight = styled.div`
  text-align: right;
  padding-right: 10px;
`;

export const QWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 0;
  box-sizing: border-box;
  opacity: 1;
`;

export const ButtonWrapper = styled.div`
  background-color: white;
  padding: 0 0 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonLeft = styled.div`
  text-align: left;
  padding-left: 15px;
`;

export const ButtonRight = styled.div`
  text-align: right;
  padding-right: 15px;
`;

export const Button = styled.input`
  background-color: white;
  border-radius: 3px;
  border: 1px solid #9999ff;
  width: 100px;
  height: 35px;
  color: #9999ff;
  font-weight: bold;
  cursor: pointer;
  :disabled {
    cursor: default;
    opacity: 0.3;
  }
  @media screen and (max-width: 500px) {
    font-size: 11px;
    width: 75px;
    height: 25px;
  }
`;
import styled from "styled-components";

export const ExWrapper = styled.div`
  text-align: center;
  height: 400px;
  width: 500px;
  margin: auto;
  overflow: hidden;
  padding: 0;
  @media screen and (max-width: 800px) {
    height: 425px;
    margin-top: 30px;
  }
  @media screen and (max-width: 500px) {
    width: 350px;
    height: 350px;
    margin-top: 30px;
  }
  margin-top: 20vh;
`;

export const ExHeader = styled.div`
  width: 100%;
  text-align: left;
  padding: 0;
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

export const ExDesc = styled.div`
  color: rgba(100, 100, 100, 1);
  line-height: 20px;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    font-size: 11px;
    margin-top: 0;
  }
`;

export const ExQ = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  color: rgba(100, 100, 100, 1);
  @media screen and (max-width: 500px) {
    font-size: 11px;
    margin-top: 0;
  }
`;

export const RadioWrapper = styled.div`
  align-items: center;
  width: 50%;
  margin: auto;
  margin-top: 33px;
  border-radius: 10px;
  border: solid 1px rgba(153, 153, 255, 0.5);
  font-size: 14px;
  padding: 15px 0 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 500px) {
    font-size: 11px;
    vertical-align: 10px;
  }
`;

export const Radio = styled.input`
  background-color: #9966ff;
  color: rgba(153, 153, 255, 1);
  @media screen and (max-width: 500px) {
    font-size: 11px;
    vertical-align: -3px;
  }
`;

export const RadioColumn = styled.div`
  margin: auto;
  align-items: center;
`;

export const SubmitWrapper = styled.div`
  padding: 0;
`;

export const Submit = styled.input`
  background-color: white;
  padding: 0;
  border-radius: 3px;
  border: 1px solid #9999ff;
  width: 100px;
  height: 35px;
  color: #9999ff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
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
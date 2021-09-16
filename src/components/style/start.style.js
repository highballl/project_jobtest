import styled from "styled-components";

export const StartWrapper = styled.div`
  height: 100vh;
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  background-color: white;
  padding: 0;
  margin: auto;
  @media screen and (max-width: 500px) {
    justify-content: start;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 0;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const InputWrapper = styled.div`
  padding: 0;
`;

export const TooltipName = styled.div`
  visibility: ${(props) => props.visible};
  margin: auto;
  width: 250px;
  padding: 0;
  text-align: center;
  font-size: 13px;
  font-weight: light;
  color: rgba(100, 70, 180, 1);
  background-color: rgba(100, 70, 180, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  animation: visibility 0.5s ease-out;
  @media screen and (max-width: 500px) {
    font-size: 10px;
    width: 200px;
  }
`;
export const TooltipGender = styled(TooltipName)`
  margin-top: 5px;
  margin-left: -12px;
  height: 20px;
  width: 150px;
  padding-top: 2px;
  padding-left: 4px;
  align-content: center;
  visibility: ${(props) => props.visible};
  @media screen and (max-width: 500px) {
    padding-top: 4px;
  }
`;

export const Name = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 13px;
  margin-top: 15px;
  margin-left: 40px;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const InputText = styled.input`
  background-color: white;
  color: rgba(0, 0, 0, 255);
  border: 1px solid lightgrey;
  box-sizing: border-box;
  border-radius: 5px;
  width: 70%;
  height: 25px;
`;

export const RadioWrapper = styled.div`
  align-items: center;
  width: 125px;
  margin: auto;
  font-size: 14px;
  padding: 0;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const Gender = styled.div`
  margin-top: 15px;
  padding: 0;
  font-weight: bold;
  font-size: 13px;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const SubmitWrapper = styled.div`
  background-color: white;
  padding: 0;
  margin-top: 25px;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;
export const Submit = styled.input`
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
export const Radio = styled.input`
  background-color: #9966ff;
  padding: 0;
  margin-left: -8px;
`;
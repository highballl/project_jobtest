import styled from "styled-components";

export const CompleteWrapper = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 10%;
  background-color: #ddddff;
  border-radius: 15px;
  width: 500px;
  height: 400px;
  overflow: hidden;
  padding: 15px 50px 15px 50px;
  line-height: 22px;
  > h3 {
    padding-top: 13px;
  }
  > p {
    padding: 20px 30px 0 30px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 313px;
    font-size: 12px;
    line-height: 13px;
    margin-top: 10px;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const Button = styled.input`
  background-color: white;
  border-radius: 3px;
  border: 1px solid #9999ff;
  width: 160px;
  height: 35px;
  color: #9999ff;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 10px;
    width: 80px;
    height: 25px;
  }
`;
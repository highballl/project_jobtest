import styled from "styled-components";

export const ResultMain = styled.div`
  width: 500px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  line-height: 20px;
  @media screen and (max-width: 500px) {
    font-size: 11px;
    width: 100%;
    box-sizing: border-box;
    line-height: 13px;
  }
`;

export const SubTitle = styled.p`
  padding: 10px;
  background: rgba(153, 153, 255, 0.3);
  color: black;
  font-size: 16px;
  font-weight: bold;
  width: 85%;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    width: 85vw;
  }
`;
export const MainTitle = styled.p`
  background: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  &#main {
    font-size: 25px;
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-top: 20px;
  }
`;

export const Table = styled.table`
  margin: auto;
  margin-top: 10px;
  border: 1px solid lightgrey;
  border-collapse: collapse;
  width: 85%;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 11px;
  }
`;
export const Tbody = styled.tbody`
  border: 1px solid lightgrey;
  padding: 5px;
`;
export const Td = styled.td`
  border: 1px solid lightgrey;
  padding: 5px;
  font-size: 15px;
  &#index {
    width: 90px;
  }
  &#field {
  }
  &#user {
    font-size: 13px;
    width: 150px;
    @media screen and (max-width: 500px) {
      font-size: 11px;
    }
  }
  &#user_value {
    font-size: 13px;
    @media screen and (max-width: 500px) {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const SubmitWrapper = styled.div`
  background-color: white;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    margin-bottom: 30px;
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
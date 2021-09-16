import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { CompleteWrapper, Button } from "./style/complete.style.js";
import { deleteValues, addValues } from "../store/manageWholeValues";
import { deleteHighValues, addHighValues } from "../store/manageHighValues";
import { deleteLowValues, addLowValues } from "../store/manageLowValues";
import {
  deleteSortedValues,
  addSortedValues,
} from "../store/manageSortedValues";
import { API_KEY, inspectNum } from "../constants";
//import { createSelector } from "@reduxjs/toolkit";

function Complete() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [highValues, setHighValues] = useState([]);
  // turn raw data(wonScore) into final one(type: array - [integer1, integer2])
  const [lowValues, setLowValues] = useState([]);

  const dispatch = useDispatch();

//   const numGender = createSelector(
//     (state) => state.manageUser.user.gender,
//     (gender) => {
//       let num = 0;
//       gender === "남" ? (num = 100323) : (num = 100324);
//       //get ready for Final Data
//       console.log("num", num);
//       return num;
//     }
//   );

  const { user } = useSelector((state) => ({
    user: {
      id: state.manageUser.user.id,
      name: state.manageUser.user.name,
      gender: state.manageUser.user.gender,
      date: state.manageUser.user.date,
      answers: state.storeAnswer.answer,
    },
  }));

  const stringAnswer = useSelector((state) => state.stringAnswer.stringAnswer);

  const numGender = useCallback(() => {
    let num = 0;
    user.gender === "남" ? (num = 100323) : (num = 100324);
    //get ready for Final Data
    console.log("num", num);
    return num;
  }, [user]);

  useEffect(() => {
    numGender();
  }, [numGender]);

  const finalData = useMemo(
    () => ({
      apikey: API_KEY,
      qestrnSeq: inspectNum,
      trgetSe: 100209,
      name: user.name,
      gender: numGender,
      school: "",
      grade: "",
      email: "",
      startDtm: user.id,
      answers: stringAnswer,
    }),
    [user, numGender, stringAnswer]
  );

  const fetchResultURLandScore = useCallback(async () => {
    try {
      setLoading(true);

      //send Final Data
      const sendFinalData = await axios.post(
        "http://www.career.go.kr/inspct/openapi/test/report?apikey=0ca989ea0cdba7b9ebcd61df636335d6&qestrnSeq=6",
        finalData
      );
      const getWonScoreAddress = sendFinalData.data.RESULT.url;
      const SEQ = getWonScoreAddress.split("=")[1];

      //get WonScore
      const resWonScore = await axios.get(
        "https://www.career.go.kr/inspct/api/psycho/report",
        { params: { seq: SEQ } }
      );
      const getWonScore = resWonScore.data.result.wonScore;
      console.log("get wonScore: ", getWonScore, "typeof:", typeof getWonScore);

      //get WholeValues
      const forTemp = getWonScore.slice(0, getWonScore.length - 1); //remove last blank
      const tempScore = forTemp.split(" ");
      const wholeVal = tempScore.map((elem) => parseInt(elem[2]));
      console.log("wholeValues:", wholeVal);

      //sort Values
      let sortedVal = [];
      for (let number in wholeVal) {
        sortedVal.push([number, wholeVal[number]]);
      }
      sortedVal.sort(function (a, b) {
        return b[1] - a[1]; //descend
      });
      console.log("sortedVal:", sortedVal);

      const VALUES = [
        "능력발휘",
        "자율성",
        "보수",
        "안정성",
        "사회적 인정",
        "사회봉사",
        "자기계발",
        "창의성",
      ]; // 0-7
      const high1 = VALUES[sortedVal[0][0]];
      const high2 = VALUES[sortedVal[1][0]];
      const low1 = VALUES[sortedVal[7][0]];
      const low2 = VALUES[sortedVal[6][0]];
      setHighValues([high1, high2]);
      setLowValues([low1, low2]);

      dispatch(addValues(wholeVal)); //Unsorted Values for Graph!
      dispatch(addHighValues([high1, high2]));
      dispatch(addLowValues([low1, low2]));
      dispatch(addSortedValues(sortedVal)); //Sorted Values for Jobs
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }, [finalData, dispatch]);

  useEffect(() => {
    fetchResultURLandScore();
    return () => (
      setLoading(false), // cleanup function
      deleteValues(),
      deleteHighValues(),
      deleteLowValues(),
      deleteSortedValues()
    );
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  if (loading) return <h4>로딩중...</h4>;
  if (error) return <h4>에러가 발생했어요...!</h4>;

  return (
    <CompleteWrapper>
      <h3>검사가 완료되었습니다.</h3>
      <p>
        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
        생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해
        볼 기회를 제공합니다.
      </p>
      <p>
        검사결과, {user.name}님은 {highValues[0]}(와)과 {highValues[1]}을(를) 더
        중요한 가치로 보고 있습니다. <br></br>
        반면에 {lowValues[0]}, {lowValues[1]}은(는) 상대적으로 덜 중요하게
        생각합니다.
      </p>
      <p>아래 '결과보기' 버튼을 누르면 자세한 결과를 확인할 수 있습니다.</p>
      <Link to="/result">
        <Button type="button" value="결과보기" onSubmit={onSubmitHandler} />
      </Link>
    </CompleteWrapper>
  );
}

export default Complete;
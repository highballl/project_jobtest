import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../store/manageUser";
import { delStringAns } from "../store/stringAnswer";
import { deleteAnswer } from "../store/storeAnswer";
import { deleteHighValues } from "../store/manageHighValues";
import { deleteLowValues } from "../store/manageLowValues";
import { deleteValues } from "../store/manageWholeValues";
import { deleteSortedValues } from "../store/manageSortedValues";
import Graph from "./Graph.js";
import {
  ResultMain,
  Table,
  Tbody,
  Td,
  MainTitle,
  SubTitle,
  SubmitWrapper,
  Submit,
} from "./style/result.style";

function Result() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rawJobsByCareer, setRawJobsByCareer] = useState([]);
  //const [jobsByCareer, setJobsByCareer] = useState([]); // sort job data by career
  const [rawJobsByMajor, setRawJobsByMajor] = useState([]);
  //const [jobsByMajor, setJobsByMajor] = useState([]); // sort job data by major

  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({
    user: {
      id: state.manageUser.user.id,
      name: state.manageUser.user.name,
      gender: state.manageUser.user.gender,
      date: state.manageUser.user.date,
      answers: state.storeAnswer.answer,
    },
  }));

  const sortedValues = useSelector(
    (state) => state.manageSortedValues.sortedValues
  ); // already sorted
  const wholeValues = useSelector((state) => state.manageWholeValues.values); // didn't sorted, raw
  const highValues = useSelector((state) => state.manageHighValues.highValues);
  const lowValues = useSelector((state) => state.manageLowValues.lowValues);

  //Get Job Data by Career and Majors
  const fetchJobs = useCallback( async() => {
    try {
      setLoading(true);
      const VAL1 = parseInt(sortedValues[0][0]) + 1;
      const VAL2 = parseInt(sortedValues[1][0]) + 1;

      // setRawJobsByCareer
      const resJobCareer = await axios.get(
        "https://inspct.career.go.kr/inspct/api/psycho/value/jobs?",
        { params: { no1: VAL1, no2: VAL2 } }
      );
      const careerResult = resJobCareer.data;
      setRawJobsByCareer(careerResult);

      // setRawJobsByMajor
      const resJobMajor = await axios.get(
        "https://inspct.career.go.kr/inspct/api/psycho/value/majors?",
        { params: { no1: VAL1, no2: VAL2 } }
      );
      const majorResult = resJobMajor.data;
      setRawJobsByMajor(majorResult);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }, [sortedValues]);

  useEffect(() => {
    fetchJobs();
  }, []);

  // Sort Job Data By Career - setJobByCareer
  const sortJobsByCareer = useCallback(() => {
    const career = [
      "middleSchool",
      "highSchool",
      "college",
      "univ",
      "graduate",
    ];
    const newJobsByCareer = [];
    for (let i = 0; i < career.length; i++) {
      const temp = rawJobsByCareer.filter((list) => list[2] === i + 1);
      const careerTemp = temp.map((list) => list[1]);
      newJobsByCareer.push(careerTemp);
    }
    return newJobsByCareer;
  }, [rawJobsByCareer]);

  const jobsByCareer = useMemo(() => sortJobsByCareer(), [sortJobsByCareer]);

  // Sort Job Data By Major - setJobByMajor
  const sortJobsByMajor = useCallback(() => {
    const majors = [
      "계열무관",
      "인문",
      "사회",
      "교육",
      "공학",
      "자연",
      "의학",
      "예체능",
    ];
    const newJobsByMajor = [];
    for (let i = 0; i < majors.length; i++) {
      const temp = rawJobsByMajor.filter((list) => list[2] === i + 1);
      const majorTemp = temp.map((list) => list[1]);
      newJobsByMajor.push(majorTemp);
    }
    return newJobsByMajor;
  }, [rawJobsByMajor]);
  const jobsByMajor = useMemo(() => sortJobsByMajor(), [sortJobsByMajor]);

  const onDeleteUser = () => {
    dispatch(deleteUser());
    dispatch(delStringAns());
    dispatch(deleteAnswer());
    dispatch(deleteValues());
    dispatch(deleteSortedValues());
    dispatch(deleteHighValues());
    dispatch(deleteLowValues());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const CAREERS = ["중졸이하", "고졸", "전문대졸", "대졸", "대학원졸"];
  const MAJORS = [
    "계열무관",
    "인문",
    "사회",
    "교육",
    "공학",
    "자연",
    "의학",
    "예체능",
  ];

  if (loading) return <h4>로딩중...</h4>;
  if (error) return <h4>에러가 발생했어요...!</h4>;

  return (
    <ResultMain>
      <MainTitle id="main">직업가치관검사 결과표</MainTitle>
      <div id="underline"></div>
      <div id="desc">
        검사결과, {user.name}님은 {highValues[0]}(와)과 {highValues[1]}(을)를 
        <br></br>더 중요한 가치로 보고 있습니다. <br></br>
        반면에 {lowValues[0]}, {lowValues[1]}(은)는 상대적으로 덜 중요하게
        생각합니다.
      </div>
      <div name="user_info">
        <Table>
            <Tbody id="user_head">
              <Td id="user">이름</Td>
              <Td id="user">성별</Td>
              <Td id="user">검사일</Td>
            </Tbody>
            <Tbody>
              <Td id="user_value">{user.name}</Td>
              <Td id="user_value">{user.gender}</Td>
              <Td id="user_value">{user.date}</Td>
            </Tbody>
        </Table>
      </div>
      <div name="result_desc">
        <MainTitle>직업가치관결과</MainTitle>
        <Graph values={wholeValues} />
      </div>
      <div name="result_job">
        <MainTitle>가치관과 관련이 높은 직업</MainTitle>
        <SubTitle>종사자 평균 학력별</SubTitle>
        <Table>
          <Tbody name="table_header">
            <Td id="index">분야</Td>
            <Td id="field">직업</Td>
          </Tbody>
          {jobsByCareer.map((jobsbycareer, index) =>
            jobsbycareer.length !== 0 ? (
              <Tbody>
                <Td id="index">{CAREERS[index]}</Td>
                <Td id="field">{jobsbycareer.join(", ")}</Td>
              </Tbody>
            ) : (
              <></>
            )
          )}
        </Table>
      </div>
      <div name="result_major">
        <SubTitle>종사자 평균 전공별</SubTitle>
        <Table>
          <Tbody name="table_header">
            <Td id="index">분야</Td>
            <Td id="field">직업</Td>
          </Tbody>
          {jobsByMajor.map((jobsbymajor, index) =>
            jobsbymajor.length !== 0 ? (
              <Tbody>
                <Td id="index">{MAJORS[index]}</Td>
                <Td id="field">{jobsbymajor.join(", ")}</Td>
              </Tbody>
            ) : (
              <></>
            )
          )}
        </Table>
      </div>
      <SubmitWrapper>
        <Link to="/">
          <Submit
            type="button"
            value="다시 검사하기"
            onClick={onDeleteUser}
            onSubmit={onSubmitHandler}
          />
        </Link>
      </SubmitWrapper>
    </ResultMain>
  );
}

export default Result;
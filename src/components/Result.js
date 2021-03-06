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
      "????????????",
      "??????",
      "??????",
      "??????",
      "??????",
      "??????",
      "??????",
      "?????????",
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

  const CAREERS = ["????????????", "??????", "????????????", "??????", "????????????"];
  const MAJORS = [
    "????????????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "?????????",
  ];

  if (loading) return <h4>?????????...</h4>;
  if (error) return <h4>????????? ???????????????...!</h4>;

  return (
    <ResultMain>
      <MainTitle id="main">????????????????????? ?????????</MainTitle>
      <div id="underline"></div>
      <div id="desc">
        ????????????, {user.name}?????? {highValues[0]}(???)??? {highValues[1]}(???)??? 
        <br></br>??? ????????? ????????? ?????? ????????????. <br></br>
        ????????? {lowValues[0]}, {lowValues[1]}(???)??? ??????????????? ??? ????????????
        ???????????????.
      </div>
      <div name="user_info">
        <Table>
            <Tbody id="user_head">
              <Td id="user">??????</Td>
              <Td id="user">??????</Td>
              <Td id="user">?????????</Td>
            </Tbody>
            <Tbody>
              <Td id="user_value">{user.name}</Td>
              <Td id="user_value">{user.gender}</Td>
              <Td id="user_value">{user.date}</Td>
            </Tbody>
        </Table>
      </div>
      <div name="result_desc">
        <MainTitle>?????????????????????</MainTitle>
        <Graph values={wholeValues} />
      </div>
      <div name="result_job">
        <MainTitle>???????????? ????????? ?????? ??????</MainTitle>
        <SubTitle>????????? ?????? ?????????</SubTitle>
        <Table>
          <Tbody name="table_header">
            <Td id="index">??????</Td>
            <Td id="field">??????</Td>
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
        <SubTitle>????????? ?????? ?????????</SubTitle>
        <Table>
          <Tbody name="table_header">
            <Td id="index">??????</Td>
            <Td id="field">??????</Td>
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
            value="?????? ????????????"
            onClick={onDeleteUser}
            onSubmit={onSubmitHandler}
          />
        </Link>
      </SubmitWrapper>
    </ResultMain>
  );
}

export default Result;
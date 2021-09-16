import Question from "./Question";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addStringAns } from "../store/stringAnswer";
import {
  ProcessWrapper,
  ProHeader,
  HeaderLeft,
  HeaderRight,
  QWrapper,
  ButtonWrapper,
  ButtonLeft,
  Button,
  ButtonRight,
} from "./style/process.style";
import { ProgressBar, LeftBar } from "./style/progressBar.style";
import { API_KEY, inspectNum } from "../constants";

function Process() {
  const offset = 5;

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [pageNum, setPageNum] = useState(0);
  const [qItem01, setQItem01] = useState([]);
  const [qItem02, setQItem02] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [deactivated, setDeactivated] = useState(true);
  const storedAnswers = useSelector((state) => state.storeAnswer.answer);

  const maxPageNum = Math.floor(Object.keys(data).length / 5);
  const progressNum = (pageNum / maxPageNum) * 100;

  const dispatch = useDispatch();

  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.career.go.kr/inspct/openapi/test/questions`,
        { params: { apikey: API_KEY, q: inspectNum } }
      );
      const result = res.data.RESULT;
      setData(result);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const newQItem01 = useMemo(() => data.map((q) => q.answer01), [data]);
  const newQItem02 = useMemo(() => data.map((q) => q.answer02), [data]);

  useEffect(() => {
    setQItem01(newQItem01);
    setQItem02(newQItem02);
  }, [data, pageNum, newQItem01, newQItem02]);

  const checkFullAnswers = useCallback(() => {
    const keys = Object.keys(storedAnswers);
    const lenNum = pageNum === maxPageNum ? 3 : 5;
    const arr = Array.from(
      { length: lenNum },
      (_, i) => pageNum * offset + i + 1
    );
    const qNum = arr.map((val) => "B" + val);
    const result = [[0] * lenNum];
    keys.map((key) =>
      qNum.map((q, index) => (key === q ? (result[index] = 1) : result[index]))
    );

    const reducer = (accumulator, curr) => accumulator + curr;
    result.reduce(reducer) === lenNum
      ? setDeactivated(false)
      : setDeactivated(true);
  }, [storedAnswers, pageNum, maxPageNum]);

  useEffect(() => {
    checkFullAnswers();
  }, [storedAnswers, pageNum, checkFullAnswers]);

  const holdAnswer = useSelector((state) => state.storeAnswer.answer);

  const arr = useMemo(() => Array.from({ length: 5 }, (_, i) => i + 1), []);
  const cardNum = useMemo(
    () => arr.map((num) => pageNum * offset + num),
    [pageNum, arr]
  );

  const questionRendering = useCallback(() => {
    const rendering = cardNum.map((num, index) =>
      num <= data.length ? (
        <Question
          key={index}
          cardNumber={num}
          name="`$qItem{num}`"
          questionItem01={Object.values(qItem01[num - 1]).join("")}
          questionItem02={Object.values(qItem02[num - 1]).join("")}
        />
      ) : (
        <></>
      )
    );
    setQuestions(rendering);
  }, [cardNum, qItem01, qItem02]);

  useEffect(() => {
    questionRendering();
  }, [questionRendering]);

  function stringifyAnswer() {
    // sort answers
    let sortedAnswer = [];
    for (let number in holdAnswer) {
      sortedAnswer.push([number, holdAnswer[number]]);
    }
    sortedAnswer.sort(function (a, b) {
      return a[1] - b[1];
    });
    // stringify answers
    let tempString = [];
    tempString = sortedAnswer.map((key) => tempString + key[0] + "=" + key[1]);
    tempString = tempString.join(" ");
    dispatch(addStringAns(tempString));
  }

  const goBack = (e) => {
    e.preventDefault();
  };

  const toTheNextLevel = (e) => {
    e.preventDefault();
  };

  if (loading) return <h4>로딩중...</h4>;
  if (error) return <h4>에러가 발생했어요...!</h4>;

  return (
    <ProcessWrapper>
      <form>
        <ProHeader>
          <HeaderLeft>검사진행</HeaderLeft>
          <HeaderRight>{progressNum}%</HeaderRight>
        </ProHeader>
        <ProgressBar>
          <LeftBar progressNum={progressNum} />
        </ProgressBar>
        <QWrapper>{questions}</QWrapper>
        <ButtonWrapper>
          <ButtonLeft>
            {pageNum === 0 ? (
              <Link to="/example">
                <Button
                  name="back"
                  type="button"
                  value="이전"
                  onSubmit={goBack}
                />
              </Link>
            ) : (
              <Button
                name="back"
                type="button"
                value="이전"
                onClick={() => {
                  setPageNum(pageNum - 1);
                }}
              />
            )}
          </ButtonLeft>
          <ButtonRight>
            {pageNum === maxPageNum ? (
              <Link to="/complete">
                <Button
                  name="forward"
                  type="button"
                  value="다음"
                  onSubmit={toTheNextLevel}
                  onClick={stringifyAnswer}
                  disabled={deactivated}
                />
              </Link>
            ) : (
              <Button
                name="forward"
                type="button"
                value="다음"
                onClick={() => {
                  setPageNum(pageNum + 1);
                }}
                disabled={deactivated}
              />
            )}
          </ButtonRight>
        </ButtonWrapper>
      </form>
    </ProcessWrapper>
  );
}

export default Process;
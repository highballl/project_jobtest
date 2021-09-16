import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../store/storeAnswer";
import {
  QuestionWrapper,
  RadioWrapper,
  RadioColumn,
  Radio,
} from "./style/question.style";

function Question(props) {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input01Value, setInput01Value] = useState(-1);
  const [input02Value, setInput02Value] = useState(-1);

  const dispatch = useDispatch();
  const cardNum = props.cardNumber;
  const select01 = props.questionItem01;
  const select02 = props.questionItem02;

  const storedAnswers = useSelector((state) => state.storeAnswer.answer);

  const onChangeInputFirst = (e) => {
    const responseAnswer = e.target.value;
    const questionNum = "B" + cardNum;
    const newAnswer = { q: questionNum, a: responseAnswer };
    dispatch(addAnswer(newAnswer));
    setInput1(true);
    setInput2(false);
  };

  const onChangeInputSecond = (e) => {
    const responseAnswer = e.target.value;
    const questionNum = "B" + cardNum;
    const newAnswer = { q: questionNum, a: responseAnswer };
    dispatch(addAnswer(newAnswer));
    setInput2(true);
    setInput1(false);
  };

  // initialize checked when moving page
  const setInputNums = useCallback(() => {
    const input01Num = (cardNum - 1) * 2 + 1;
    const input02Num = (cardNum - 1) * 2 + 2;
    setInput01Value(input01Num);
    setInput02Value(input02Num);
  }, [cardNum]);

  const compareAnswers = useCallback(() => {
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => parseInt(object[key]) === value);
    }
    const key1 = getKeyByValue(storedAnswers, input01Value);
    const key2 = getKeyByValue(storedAnswers, input02Value);

    if (storedAnswers !== 0 && !!key1) {
      return setInput1(true), setInput2(false);
    } else if (storedAnswers !== 0 && !!key2) {
      return setInput1(false), setInput2(true);
    } else {
      return setInput1(false), setInput2(false);
    }
  }, [storedAnswers, input01Value, input02Value]);

  useEffect(() => {
    setInputNums();
  }, [setInputNums]);

  useEffect(() => {
    compareAnswers();
  }, [compareAnswers]);

  return (
    <QuestionWrapper>
      <div>
        Q{cardNum}. 두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.
      </div>
      <RadioWrapper>
        <RadioColumn>
          <Radio
            type="radio"
            name={cardNum - 1}
            value={input01Value}
            checked={input1}
            onChange={onChangeInputFirst}
          />{" "}
          {select01}
        </RadioColumn>
        <RadioColumn>
          <Radio
            type="radio"
            name={cardNum - 1}
            value={input02Value}
            checked={input2}
            onChange={onChangeInputSecond}
          />{" "}
          {select02}
        </RadioColumn>
      </RadioWrapper>
    </QuestionWrapper>
  );
}

export default Question;
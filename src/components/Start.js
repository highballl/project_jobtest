import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/manageUser";
import {
  StartWrapper,
  Title,
  InputWrapper,
  TooltipName,
  Name,
  InputText,
  RadioWrapper,
  Gender,
  TooltipGender,
  Radio,
  SubmitWrapper,
  Submit,
} from "./style/start.style";

function Start() {
  const [checkName, setCheckName] = useState("");
  const [checkGender, setCheckGender] = useState("");
  const [checkUser, setCheckUser] = useState({});
  const [block, setBlock] = useState(true);
  const [newId, setNewId] = useState("");
  const [newDate, setNewDate] = useState("");
  const [isNameVisible, setIsNameVisible] = useState("visible");
  const [isGenderVisible, setIsGenderVisible] = useState("visible");
  const dispatch = useDispatch();

  //Set Today
  useEffect(() => {
    const dayjs = require("dayjs");
    const today = new Date();
    const dateString = dayjs(today).format("YYYY-MM-DD");
    setNewDate(dateString);
    setNewId(Date.now);
  }, []);

  //Initialize User Data
  useEffect(() => {
    setCheckUser(checkUser);
  }, [checkUser]);

  // Update User Data and Set Block by Input Data
  useEffect(() => {
    const newUser = {
      name: checkName,
      gender: checkGender,
      date: newDate,
      id: newId,
    };
    setCheckUser(newUser);
    if (!checkName) {
      setBlock(true);
    } else {
      if (!checkGender) {
        setBlock(true);
      } else {
        setBlock(false);
      }
    }
  }, [checkName, checkGender, newDate, newId]);

  const onChangeHandler = (e) => {
    const newCheckName = e.target.value;
    setIsNameVisible("hidden");
    // check: is name have special symbols?
    const specialSymbols = /[`~!@#$%^&*|\\'";:/?]/;
    const blank = /\s/;
    !!specialSymbols.test(newCheckName) || !!blank.test(newCheckName)
      ? setIsNameVisible("visible")
      : setCheckName(newCheckName);
  };

  const onClickHandler = (e) => {
    const newCheckGender = e.target.value;
    setCheckGender(newCheckGender);
    setIsGenderVisible("hidden");
  };

  const onSubBtn = () => {
    dispatch(addUser(checkUser));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <StartWrapper>
        <Title>?????????????????????</Title>
        <InputWrapper>
          <TooltipName visible={isNameVisible}>
            ????????? ????????? ??????????????????.<br></br> ?????? ??? ??????????????? ????????? ???
            ????????????.
          </TooltipName>
          <Name>??????</Name>
          <InputText type="text" value={checkName} onChange={onChangeHandler} />
          <RadioWrapper>
            <Gender>??????</Gender>
            <Radio
              type="radio"
              name="gender"
              id="male"
              value="???"
              onClick={onClickHandler}
            />{" "}
            ??????<br></br>
            <Radio
              type="radio"
              name="gender"
              id="female"
              value="???"
              onClick={onClickHandler}
            />{" "}
            ??????<br></br>
            <TooltipGender visible={isGenderVisible}>
              ????????? ??????????????????.
            </TooltipGender>
          </RadioWrapper>
        </InputWrapper>
        <SubmitWrapper>
          <Route>
            <Link to="/Prepare">
              <Submit
                type="button"
                value="????????????"
                disabled={block}
                onClick={onSubBtn}
              />
            </Link>
          </Route>
        </SubmitWrapper>
      </StartWrapper>
    </form>
  );
}

export default Start;
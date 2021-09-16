import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExWrapper,
  ExHeader,
  HeaderLeft,
  HeaderRight,
  ExDesc,
  ExQ,
  RadioWrapper,
  RadioColumn,
  Radio,
  SubmitWrapper,
  Submit,
} from "./style/prepare.style";
import { ProgressBar, LeftBar } from "./style/progressBar.style";

function Prepare() {
  const [block, setBlock] = useState(true);

  const onClickHandler = (e) => {
    setBlock(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ExWrapper>
      <ExHeader>
        <HeaderLeft>검사예시</HeaderLeft>
        <HeaderRight>0%</HeaderRight>
      </ExHeader>
      <ProgressBar>
        <LeftBar progressNum={0} />
      </ProgressBar>
      <ExDesc>
        직업과 관련된 두 개의 가치 중에서
        <br></br>
        자기에게 더 중요한 가치에 표시하세요.
        <br></br>
        <br></br>
        가치의 뜻을 잘 모르겠다면
        <br></br>
        문항 아래에 있는 가치의 설명을 확인해 보세요.
        <br></br>
      </ExDesc>
      <ExQ>
        두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.
        <RadioWrapper>
          <RadioColumn>
            <Radio
              type="radio"
              name="worth"
              value="능력발휘"
              onClick={onClickHandler}
            />{" "}
            능력발휘
          </RadioColumn>
          <RadioColumn>
            <Radio
              type="radio"
              name="worth"
              value="자율성"
              onClick={onClickHandler}
            />{" "}
            자율성
          </RadioColumn>
        </RadioWrapper>
      </ExQ>
      <SubmitWrapper>
        <Link to="/Process">
          <Submit
            type="button"
            value="검사시작"
            submit="submit"
            onSubmit={onSubmitHandler}
            disabled={block}
          />
        </Link>
      </SubmitWrapper>
    </ExWrapper>
  );
}

export default Prepare;
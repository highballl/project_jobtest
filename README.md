# 2기 - 직업심리검사 - 박지윤

[개발 블로그](https://highballl.oopy.io)<br />
[e-mail : jyp0293@gmail.com](jyp0293@gmail.com)


## 기술 스택 및 라이브러리
- react "^17.0.2"
- react-dom "^17.0.2"
- react-router-dom "^5.2.0"
- axios "^0.21.1"
- redux "^4.1.1"
- react-redux "^7.2.4"
- redux-devtools-extension": "^2.13.9"
- @redux/toolkit "^1.6.1"
- prettier: "^2.3.2"
- styled-components "^5.3.0"
- @nivo/radar "^0.73.0"
- dayjs "^1.10.6"




## 파일 구조

- src > App.js, index.js  


### 컴포넌트 - 각 페이지 렌더링 및 기능 구현

- src > components
    - Start.js : 유저 정보 입력 페이지
    - Prepare.js : 예시 문항 제공 페이지
    - Process.js : 심리 검사 진행 페이지
        - Question.js : 질문 문항 수록 페이지
    - Complete.js : 검사 종료 페이지
    - Result.js : 검사 결과 안내 페이지  

### 스타일 컴포넌트 파일 

- src > components > styles 
    - start.style.js
    - prepare.style.js
    - process.style.js
    - progressBar.style.js
    - question.style.js
    - complete.style.js
    - result.style.js 

### 상수 저장
- src > constants 
    - index.js


### 리듀서

- src > store
    - index.js : combineReducer
    - manageUser.js : userdata 관리
    - storeAnswer.js : 답변(raw data) 저장
    - stringAnswer.js : 답변을 문자열로 변환하기
    - manageWholeValues.js : 답으로 날아오는 wonScore를 가공한 데이터, 그래프 그리기 용도, 가치 인덱스 순서에 맞추어 가중치만 저장된 배열을 관리
    - manageSortedValues.js : wonScore를 가공, 2차원 배열[["인덱스":값],[]..] 형태로 저장, 가치별 가중치(값)를 기준으로 내림차순으로 정리된 데이터를 관리
    - manageHighValues.js : 완료 및 결과 페이지에 뿌릴 "가장 중요하게 생각하는 가치(문자열)" 데이터 관리
    - manageLowValues.js : 완료 및 결과 페이지에 뿌릴 "가장 덜 중요하게 생각하는 가치(문자열)" 데이터 관리


## 기능 구현 체크

- **검사 시작 시, 유저 설정** : Start.js 

    `**필수**`

- [x] 이름을 입력할 수 있는 input form을 구현합니다. `21.08.16` 
- [x] 성별을 선택할 수 있는 input form을 구현합니다. `21.08.16`
- [x] 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 검사 시작 버튼이 비활성화 되어야 합니다. `21.08.16`

    **`선택`** 

- [x] 이름을 올바르게 입력하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다. `21.08.25`  
- [x] 성별을 선택하지 않았을 경우, 이에 대한 안내 메세지를 출력합니다. `21.08.25`  

- **검사 예시 페이지** : Ex.js  

    `**필수**` 
- [x] 검사를 시작하기 전 앞으로의 진행 방식에 대해서 설명하는 페이지를 구현합니다. `21.08.16`
- [x] 진행 방식에 대한 검사 예제 문항이 한 문항을 화면에 표시합니다. `21.08.16`
- [x] 검사 시작 버튼을 구현합니다. `21.08.16`

    **`선택`**  
- [x] 검사 예제 문항을 진행하지 않으면 검사 시작 버튼이 비활성화 되어야 합니다. `before 21.08.21`
- [x] 검사 예시 페이지부터는 진행 표시줄(Progress bar)가 포함 되어야 있어야 하며, 검사 예시 페이지는 0%로 측정되어야 합니다.(진행 표시줄의 형태는 무관합니다.) `21.08.21`

- **검사 진행 페이지** : Process.js 

    `**필수**` 

- [x] 페이지 당 5개의 문항이 보여야 합니다. `21.08.19?`
- [x] 페이지 내 문항을 모두 진행하기 전까지는 "다음" 버튼이 비활성화 상태여야 합니다. `21.08.25`

    **`선택`** 

- [x] 각 문항을 선택할 때 마다 진행 표시줄과 퍼센트(%)가 갱신되어야 합니다. `21.08.19` 
- [x] "이전" 버튼을 클릭했을 때, 이전 페이지 문항에서 선택한 값이 유지된 상태여야 합니다. `21.08.24`

- **검사 완료 페이지** : Complete.js 

    `**필수**` 

- [x] 검사가 완료되었다는 문구를 포함해야 하며, 검사결과에 대한 간단한 문장을 포함해야 합니다.  
   Ex) 사용자는 XX 성향이므로 XX 직업에 적합합니다. `21.08.24`  

- **결과표 페이지** : Result.js 

    `**필수**`  

- [x] 유저의 기본 정보를 포함해야 합니다. (이름, 성별, 검사일) `21.08.16`
- [x] 직업가치관결과에 대하여 항목 별로 수치를 표기해야 합니다. (ex. 막대 그래프) `21.08.23`
- [x] 가치관과 관련이 높은 직업을 결과에 따라 분류하여 표기해야 합니다. `21.08.20`
- [x] "다시 검사하기" 버튼 클릭 시, 진행했던 항목에 대한 기록은 모두 초기화되어야 합니다. `21.08.20`
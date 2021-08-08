# Summary

간단한 todoapp을 통해 유저가 원하는 할일목록을 추가, 수정(완료체크), 삭제합니다.
할일목록을 로컬에 저장하고 불러옵니다.

<br>

## 사용기술

 React, Typescript, styled-components

<br>

## 구현목록

1. 할일 추가 기능
2. 할일 완료 체크 기능
3. 할일 마우스호버시 UI 변경
4. 할일 삭제
5. 할일 로컬스토리지 저장

<br>

#### [추가] 
todo 목록 관련 상태들은 모두 App 컴포넌트에서 관리합니다.
useState를 사용하여 todos로 일정리스트를 정의했습니다.
Form 컴포넌트에서 input에 입력되는 값도 App 컴포넌트에서 관리합니다.
useState를 사용하여 newTodo로 input의 value 값을 정의했습니다.
할일 추가시 form 태그의 onSumbit 속성을 통해 enter이벤트 발생시,
handleAddTodo 함수가 input의 value값을 파라미터가 되어 호출됩니다.
고유값으로 id, 할일 내용을 text, 할일 완료여부는 done을 각 항목객체의 속성값으로 사용했습니다.
id는 new Date()객체로 간단하게 설정해주었습니다

#### [삭제] 
배열 내장함수인 filter를 사용하여, 불변성을 지키면서 id값이 일치하는 요소를 삭제합니다.
Item 하위컴포넌트로 handleRemove함수를 props로 전달해줍니다.
Item 하위컴포넌트에서는 클릭시 id를 파라미터로 넣어 호출하도록 설정합니다.

#### [완료여부 변경]
배열 내장함수인 map을 사용하여, id값이 일치하는 요소의 경우, 해당 속성값만 불린이 반대로 바뀌도록 설정해줍니다.

#### [저장]
웹스토리지 객체인 localStorage에는 영구적으로 값을 저장할 수 있습니다.
useEffect의 의존배열에 todos라는 할일목록을 넣어, 해당값이 변경될때마다 호출되어
로컬스토리지에 저장되도록 합니다. 
입력시에는 문자형 데이터타입으로 저장해주어야 해서 JSON.stringify(todos)로 하고
읽을때는 JSON.parse(savedTodos)로 읽을수 있도록 변경을 가합니다. 

<br>

## 미구현목록
- Drag & Drop 으로 할일 순서변경 
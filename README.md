# React_practice
___
## useState
- 상태를 관리한다.
- 초기값을 넣어줘야한다. 
- 초기값을 가져오는데 시간이 걸리거나 리소스 소비가 있으면 함수로 넣어줄 수 있다. 함수를 넣어줄 경우 lazy initialize를 사용할 수 있다.
___
## useEffect
- 두개의 매개변수, 함수와 배열
- 함수에 사용하려는 기능 명세
- 두번째 배열은 dependency array로 사용된다.
  -  빈배열을 넣으면 한번만 호출된다.
  - 아무것도 넣지 않으면 렌더 시 마다 계속 불린다.
  - 변수를 넣어주면 해당 변수가 변경될 때마다 호출된다.
___
## customHook
- 반복되는 것은 함수로 만든다(프로그래밍 기본적인 생각)
  -  Hook 또한 반복적으로 실행되면 customHook으로 만들어서 반복되는 작업을 줄여준다.
- 이름은 use로 시작하고 Camel case로 작성한다.
___
## 16. Hook flow 1
> Source code: [Hook flow1] (https://github.com/FdongFdong/react_practice/blob/main/part1/16_Hook_flow1.html)
- useEffect
  - 선언해둔 위치에 따라서 호출되는 순서가 달라진다.
  - Render가 끝난 다음에 useEffect가 불린다.
  - useEffect(sideEffect: 부수효과): 사이드 이펙트이기 때문에 다 그려진 후 이펙트가 동작을 한다.
- useState
  - useState로 만들어진 함수는 이전 값을 가지고 들어온다.
    - setState 시 prev이 주입된다.
    - 이전 값(초기값)을 가지고 상태를 변경할 수 있다.

- App Render 시작
- App useState 동작
- App Render 종료
- App useEffect 동작

___
## 17. Hook flow 2
> Source code: [Hook flow2](https://github.com/FdongFdong/react_practice/blob/main/part1/17_Hook_flow2.html)

- 자식이 없을 경우
  1. 부모 Render 시작
  2. 부모 useState 동작
  3. 부모 Render 종료
  4. 부모 useEffect 동작

- 자식이 있을 경우
  1. 부모 Render 시작
  2. 부모 useState 동작
  3. 부모 Render 종료
     1. 자식 Render 시작
     2. 자식 useState 동작
     3. 자식 Render 종료
     4. 자식 useEffect 동작
  4. 부모 useEffect 동작

> 자식의 useEffect까지 모두 동작되고 나서 부모의 useEffect가 동작한다.

### clean up 적용
useEffect함수에서 리턴을 하면 clean up이 동작된다.
- useEffect에 기능을 넣어뒀을 경우 리액트가 알아서 종료시켜주게 할 수 있다.
  - 언마운트 될 때 로컬스토리지를 지우라는 등의 명령을 할 수 있음



1. 부모 Render 시작
2. 부모 useState 동작
3. 부모 Render 종료
    1. 자식 Render 시작
    2. 자식 useState 동작
    3. 자식 Render 종료
4. 부모 useEffect [Celan up] 동작
 
   1. 자식 useEffect 동작
5. 부모 useEffect 동작
  

- 자식 엘리먼트를 지울 경우
  1. 부모 Render 시작
  2. 부모 Render 종료
     1. 자식 useEffect [Clean up] 동작
  3. 부모 useEffect [Clean up] 동작
  4. 부모 useEffect 동작
___
## 19. Element 스타일 입히기
> Source code : [Element 스타일 입히기] (https://github.com/FdongFdong/react_practice/blob/main/part1/19.Element_Style.html)
1. className은 문자열이다.
2. style은 객체, 카멜케이스, className보다 우선순위가 높다.
___
## 20. Ref로 DOM 다루기
> Source code : [RefHook으로 DOM 다루기] (https://github.com/FdongFdong/react_practice/blob/main/part1/20_Ref_DOM.html)
DOM 조작하기

방법 1. document.getElementById
방법 2. useRef Hook 사용하기

왜? 리액트는 useRef라는 별도의 방법을 제공할까?
1. 리액트는 바닐라 스크립트와 다르게 virtual DOM 등을 이용해 DOM을 조작한다.
2. document를 직접 이용해 DOM에 도달하면 리액트 자체적으로 비효율이 나올 수 있다고 생각하기 때문에 -> 리액트 자체적인 최적화를 위해
___
## 21. Form 1
> Source code : [Form 다루기 1] (https://github.com/FdongFdong/react_practice/blob/main/part1/21_Form1.html)

1. Form은 onSubmit을 이용해서 기능을 부여한다.
2. submit할 때 새로고침이 일어나니 preventDefault()로 새로고침이 일어나지 않게 해준다.
3. 리액트에서는 for 대신 htmlFor를 사용해야한다.
4. 기본 값을 넣기 위해서는 value가 아닌 defaultValue를 사용해야 한다.
5. console.div(element)을 하면 구조를 확인할 수 있다.
___
## 22. Form 2
> Source code : [Form 다루기 2] (https://github.com/FdongFdong/react_practice/blob/main/part1/22_Form2.html)

1. validation 체크는 onChange에서 하면 편리하다
2. input 태그의 value를 리액트 컴포넌트에서 관리하는 것을 말한다.
___
## 23.Error
다양한 에러들이 일어날 수 있으며 자바스크립트에 대한 에러가 리액트에서 나타날 수도 있다.
> Source code : [Error 다루기](https://github.com/FdongFdong/react_practice/blob/main/part1/23_Error.html)

1. class 컴포넌트로 ErrorBoundary를 만들어서 Error이 생기는 컴포넌트를 제어할 수 있다.
   - 함수형 컴포넌트로 만들지 못하는 이유는 에러를 처리하는 함수(getDerivedStateFromError())를 클래스 컴포넌트가 제공하기 때문이다.

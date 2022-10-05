# react_practice


## useState
- 상태를 관리한다.
- 초기값을 넣어줘야한다. 
- 초기값을 가져오는데 시간이 걸리거나 리소스 소비가 있으면 함수로 넣어줄 수 있다. 함수를 넣어줄 경우 lazy initialize를 사용할 수 있다.
## useEffect
- 두개의 매개변수, 함수와 배열
- 함수에 사용하려는 기능 명세
- 두번째 배열은 dependency array로 사용된다.
  -  빈배열을 넣으면 한번만 호출된다.
  - 아무것도 넣지 않으면 렌더 시 마다 계속 불린다.
  - 변수를 넣어주면 해당 변수가 변경될 때마다 호출된다.

## customHook
- 반복되는 것은 함수로 만든다(프로그래밍 기본적인 생각)
  -  Hook 또한 반복적으로 실행되면 customHook으로 만들어서 반복되는 작업을 줄여준다.

## 16. Hook flow
- useEffect
  - 선언해둔 위치에 따라서 호출되는 순서가 달라진다.
  - Render가 끝난 다음에 useEffect가 불린다.
  - useEffect(sideEffect: 부수효과): 사이드 이펙트이기 때문에 다 그려진 후 이펙트가 동작을 한다.
- useState
  - useState로 만들어진 함수는 이전 값을 가지고 들어온다.
    - setState 시 prev이 주입된다.
    - 이전 값(초기값)을 가지고 상태를 변경할 수 있다.

import React from 'react';

import styled from 'styled-components';

// 재사용성과 속도면에서 컴포넌트 바깥으로 빼는 것이 좋다.
// -> 컴포넌트 안에 선언하면 매번 리렌더링되기 때문에 많이 느려짐
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReverseButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

// &는 자기자신
const Thing = styled.div.attrs(() => ({
  tabIndex: 0,
}))`
  color: blue;

  &:hover {
    color: red;
  }
  & ~ & {
    background: tomato;
  }
  & + & {
    background: lime;
  }
  &.something {
    background: orange;
  }
  .something-else & {
    border: 1px solid;
  }
`;

const StyledComponentExample = () => {
  return (
    <>
      <>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </>

      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button onClick={() => alert('normal')}>Normal</Button>
      <Button onClick={() => alert('Primary')} primary>
        Primary
      </Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      {/* as="a" a태그와 동일한 기능 */}
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
      <br />
      <Button as={ReverseButton}>
        Custom Button with Normal Button styles
      </Button>
    </>
  );
};

export default StyledComponentExample;

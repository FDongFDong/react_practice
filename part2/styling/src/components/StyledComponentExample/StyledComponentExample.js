import React from 'react';
import { useState } from 'react';
import styled, {
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
button{
  background-color: pink
}`;
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

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  border: 2px solid => props.size;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const PasswordInput = styled(Input).attrs({
  type: 'password',
})`
  border: 2px solid aqua;
`;

// 애니메이션은 keyframes를 쓰면 좀 더 편하다.
const rotate = keyframes`
from { 
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;

// 애니메이션은 2초간격으로 linear하게 무한히
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem, 1rem;
  font-size: 1.2rem;
`;

const Button2 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

Button2.defaultProps = {
  theme: {
    color: 'red',
    borderColor: 'blue',
  },
};

const defaultTheme = {
  color: 'green',
  borderColor: 'green',
};
const redTheme = {
  color: 'red',
  borderColor: 'red',
};
const StyledComponentExample = () => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <>
      {/* global하게 효과를 줄 수 있다. */}
      {/* <GlobalStyle /> */}
      <div>
        <button onClick={() => setTheme(redTheme)}>red Theme</button>
        <button onClick={() => setTheme(defaultTheme)}>Default Theme</button>
        <br />
        <ThemeProvider theme={theme}>
          <Button2>Normal</Button2>
          <Button2>Themed</Button2>
        </ThemeProvider>
      </div>
      <div>
        <Rotate>&lt; ✓&gt;</Rotate>
      </div>

      <div>
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        <PasswordInput placeholder="A bigger password input" size="2em" />
      </div>
      <div>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </div>
      <div>
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
      </div>
    </>
  );
};

export default StyledComponentExample;

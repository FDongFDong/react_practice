import React from 'react';

import styled from 'styled-components';
const StyledComponentExample = () => {
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
  return (
    <>
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

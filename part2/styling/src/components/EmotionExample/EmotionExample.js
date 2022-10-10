import React from 'react';
/** @jsxImportSource @emotion/react */
import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// styled 컴포넌트
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const style = css`
  color: hotpink;
`;
// css에 미리 만들어놓은 값을 주입할 수 있다.
// props도 사용할 수 있다.
const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text
    {children}
  </div>
);
// css 객체로 전달할 수도 있다.
const anotherStyle = css({
  textDecoration: 'underline',
});
// 배열로도 전달할 수 있다.
const AnotherComponent = () => (
  <div css={[anotherStyle, style]}>Some text with an underline.</div>
);
const color = 'white';

const P = (props) => (
  <p
    className={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'Sans-Serif',
      color: 'black',
    }}
    {...props}
  />
);

const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray',
    }}
    {...props}
  />
);
const EmotionExample = () => {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <div>
        <Button>Hello</Button>
      </div>
      <div>
        <SomeComponent />
        <AnotherComponent />
      </div>
      <div>
        <P>ppppp</P>
        <ArticleText>ppppp</ArticleText>
      </div>
      <div>
        {/* media Queries */}
        <p
          css={css`
            font-size: 30px;
            @media (min-width: 420px) {
              font-size: 50px;
            }
          `}
        >
          Some text!
        </p>
      </div>
      <div>
        {/* Global */}
        <Global
          styles={{
            '.some-class': {
              fontSize: 50,
              textAlign: 'center',
            },
          }}
        />
      </div>
      <div>
        {/* keyframes */}
        <div
          css={css`
            animation: ${bounce} 1s ease infinite;
          `}
        >
          some bouncing text!
        </div>
      </div>
    </>
  );
};

export default EmotionExample;

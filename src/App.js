import React from "react";
import { range } from "lodash";
import styled, { keyframes, css } from "styled-components";

const array = range(1, 10);

//BASICS

//LEFT-TO-RIGHT OR RIGHT-TO-LEFT

//L2R OR R2L AND:
//SCALE-UP AND/OR FADE-IN
//BLUR IN

//---------------------------

//ADVANCED

//MOVE-UP (translate each item upwards by {index}px, each item moves up further than other)
//MOVE-DOWN (translate each item down by {index}px, each item moves down further than other)

const App = () => {
  return (
    <Container>
      {/* user provides their own array from props  */}
      {array.map((item, index) => {
        return (
          <Item
            key={item}
            toTop
            blurIn
            translate={index * 10}
            delay={`0.${index}`}
            duration={0.4}
          >
            {item}
          </Item>
        );
      })}
    </Container>
  );
};

const animateItem = (
  toLeft,
  toRight,
  toTop,
  toBottom,
  translate,
  fadeIn,
  blurIn
) => keyframes`
    0% {
        ${toLeft && `transform : translateX(${translate}px);`}
        ${toRight && `transform : translateX(-${translate}px);`}
        ${toTop && `transform : translateY(${translate}px);`}
        ${toBottom && `transform : translateY(-${translate}px);`}
        ${fadeIn && `opacity: 0;`}
        ${blurIn && `filter: blur(10px);`}
    }

    100% {
        ${toLeft && `translateX(0px);`}
        ${toRight && `translateX(0px);`}
        ${toTop && `translateY(0px);`}
        ${toBottom && `translateY(0px);`}
        ${fadeIn && `opacity: 1;`}
        ${blurIn && `filter: blur(0px);`}
    }
`;

// add juggle effect https://www.cardsagainsthumanity.com/lab/
const Item = styled.div`
  border-radius: 3px;
  height: 50px;
  width: 100px;
  background: black;
  color: white;
  margin: 10px auto;
  ${({
    toLeft,
    toRight,
    toTop,
    toBottom,
    translate,
    fadeIn,
    blurIn,
    duration,
    delay
  }) =>
    css`
      animation-name: ${animateItem(
        toLeft,
        toRight,
        toTop,
        toBottom,
        translate,
        fadeIn,
        blurIn
      )};
      animation-duration: ${duration}s;
      animation-fill-mode: both;
      animation-delay: ${delay}s;
    `};
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export default App;

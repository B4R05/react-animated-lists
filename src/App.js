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
            toBottom={true}
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

const moveHorizontal = (cssProperty, pixelValue) => keyframes`
    0% {
        ${cssProperty} : translateX(${pixelValue}px);
    }

    100% {
        ${cssProperty} :  translateX(0px);
    }
`;

const moveVertical = (cssProperty, pixelValue) => keyframes`
    0% {
        ${cssProperty} : translateY(${pixelValue}px);
    }

    100% {
        ${cssProperty} :  translateY(0px);
    }
`;

//transform translateX should go to zero
const Item = styled.div`
  height: 50px;
  width: 100px;
  background: black;
  color: white;
  margin: 10px auto;
  ${props =>
    props.toLeft &&
    css`
      transform: translateX(${props.translate}px);
      animation-name: ${moveHorizontal("transform", props.translate)};
      animation-duration: ${props.duration}s;
      animation-fill-mode: forwards;
      animation-delay: ${props.delay}s;
    `};
  ${props =>
    props.toRight &&
    css`
      transform: translateX(-${props.translate}px);
      animation-name: ${moveHorizontal("transform", -props.translate)};
      animation-duration: ${props.duration}s;
      animation-fill-mode: forwards;
      animation-delay: ${props.delay}s;
    `};
  ${props =>
    props.toBottom &&
    css`
      transform: translateY(-${props.translate}px);
      animation-name: ${moveVertical("transform", -props.translate)};
      animation-duration: ${props.duration}s;
      animation-fill-mode: forwards;
      animation-delay: ${props.delay}s;
    `};
  ${props =>
    props.toTop &&
    css`
      transform: translateY(${props.translate}px);
      animation-name: ${moveVertical("transform", props.translate)};
      animation-duration: ${props.duration}s;
      animation-fill-mode: forwards;
      animation-delay: ${props.delay}s;
    `};
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export default App;

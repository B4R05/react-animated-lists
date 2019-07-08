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
            fromRight={true}
            translate={index * 10}
            time={`0.${index}`}
          >
            {item}
          </Item>
        );
      })}
    </Container>
  );
};

const move = (cssProperty, pixelValue) => keyframes`
    0% {
        ${cssProperty} : translateX(${pixelValue}px);
    }

    100% {
        ${cssProperty} :  translateX(0px);
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
    props.fromRight &&
    css`
      transform: translateX(${props.translate}px);
      animation: ${move("transform", props.translate)} 0.4s ${props.time}s
        forwards;
    `};
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export default App;

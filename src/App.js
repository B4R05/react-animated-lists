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
          <Item key={item} leftToRight={true} margin={index * 10} time={index}>
            {item}
          </Item>
        );
      })}
    </Container>
  );
};

const move = (cssProperty, pixelValue) => keyframes`
    0% {
        ${cssProperty} : ${pixelValue}px;
    }
    100% {
        ${cssProperty} : 0px;
    }
`;

const Item = styled.div`
  height: 50px;
  width: 100px;
  background: black;
  color: white;
  margin: 10px auto;
  ${props =>
    props.leftToRight &&
    css`
      margin-left: 0px;
      animation: ${move("margin-left", props.margin)} 0.2s linear;
    `};
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export default App;

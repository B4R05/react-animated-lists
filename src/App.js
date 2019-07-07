import React from "react";
import { range } from "lodash";
import styled from "styled-components";

const array = range(1, 10);

const App = () => {
  return (
    <Container>
      {array.map((item, index) => {
        return (
          <Item margin={index * 10} transition={index}>
            {item}
          </Item>
        );
      })}
    </Container>
  );
};

const Item = styled.div`
  height: 50px;
  width: 100px;
  background: black;
  color: white;
  margin: 10px auto;
  margin-left: ${props => props.margin}px;
  transition: 2s ease-out;
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export default App;

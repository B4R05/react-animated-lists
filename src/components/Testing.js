import React from "react";
import { range } from "lodash";
import styled from "styled-components";
import UserChildItem from "./UserChildItem";
import ReactAnimatedList from "./ReactAnimatedList";

const userArray = range(1, 10);

const objArray = [
  {
    title: "acds",
    text: "qwert432"
  },
  {
    title: "aacds",
    text: "qrt432"
  },
  {
    title: "21ds",
    text: "q37s2"
  },
  {
    title: "3",
    text: "q32"
  },
  {
    title: "123",
    text: "qw001"
  }
];

const Testing = () => {
  return (
    <UserContainer>
      {/* user provides their own array as normal  */}
      {objArray.map((item, index) => {
        return (
          <ReactAnimatedList
            toLeft
            fadeIn
            blurIn
            key={index}
            translate={index}
            delay={index}
          >
            <UserChildItem obj={item}>{item.title}</UserChildItem>
          </ReactAnimatedList>
        );
      })}
    </UserContainer>
  );
};

const UserContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export default Testing;

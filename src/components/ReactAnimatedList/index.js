import React from "react";
import AnimatedItem from "./styles";

const ReactAnimatedList = props => {
  return (
    <AnimatedItem
      {...props}
      translate={props.translate * 10}
      delay={`0.${props.delay}`}
      duration={0.4}
    >
      {props.children}
    </AnimatedItem>
  );
};

export default ReactAnimatedList;

import React from "react";
import AnimatedItem from "./styles";

const ReactAnimatedList = props => {
  return (
    <AnimatedItem
      {...props}
      translate={props.translate}
      delay={props.delay}
      duration={props.duration}
    >
      {props.children}
    </AnimatedItem>
  );
};

export default ReactAnimatedList;

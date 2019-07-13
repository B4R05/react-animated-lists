import React, { PureComponent } from "react";
import styled from "styled-components";

class UserChildItem extends PureComponent {
  handleClick = () => {
    alert("you clicked!");
  };

  render() {
    return (
      <Child onClick={this.handleClick}>
        this is text: {this.props.obj.text}
      </Child>
    );
  }
}

const Child = styled.div`
  border-radius: 3px;
  height: 50px;
  width: 100px;
  background: black;
  color: white;
  margin: 10px auto;

  &:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;

export default UserChildItem;

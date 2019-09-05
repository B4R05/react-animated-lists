import React, { PureComponent } from "react";
import styled from "styled-components";

class UserChildItem extends PureComponent {
  handleClick = () => {
    alert("you clicked!");
  };

  render() {
    return <Child onClick={this.handleClick}>{this.props.obj.title}</Child>;
  }
}

const Child = styled.div`
  border-radius: 3px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: black;
  color: white;
  margin: 25px auto;
  margin-left: 10px;
  transition: 0.5s;
  color: white;

  &:hover {
    transform: scale(1.2);
  }
`;

export default UserChildItem;

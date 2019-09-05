import React from "react";
import { range } from "lodash";
import styled, { keyframes, css } from "styled-components";
import GithubCorner from "react-github-corner";
import UserChildItem from "../UserChildItem";
import ReactAnimatedList from "../ReactAnimatedList";
import CarbonCode from "./CarbonCode";

const userArray = range(1, 10);

const objArray = [
  {
    title: "1",
    text: ""
  },
  {
    title: "2",
    text: ""
  },
  {
    title: "3",
    text: ""
  },
  {
    title: "4",
    text: ""
  },
  {
    title: "5",
    text: ""
  },
  {
    title: "6",
    text: ""
  }
];

//DIRECTION
// toLeft,
// toRight,
// toTop,
// toBottom,

//TRANSLATE
// translate,

//INTRO FX
// fadeIn,
// blurIn,
//easingFunction
// blurValue

//https://www.reddit.com/r/webdev/search?q=flair_name%3A%22Showoff%20Saturday%22&restrict_sr=1

class Testing extends React.Component {
  state = {
    direction: "toLeft",
    introFX: "fadeIn",
    clicked: false,
    value: 5
  };

  handleDirection = dir => {
    this.setState({ direction: dir, clicked: true }, () =>
      setTimeout(() => this.setState({ clicked: false }), 300)
    );
  };

  handleRange = e => {
    this.setState({ value: e.target.value });
  };

  handleIntroFX = dir => {
    this.setState({ introFX: dir });
  };

  renderDirectionName = () =>
    this.state.direction === "toLeft"
      ? "left"
      : this.state.direction === "toRight"
        ? "right"
        : this.state.direction === "toTop"
          ? "top"
          : this.state.direction === "toBottom"
            ? "bottom"
            : "";

  renderText = () => {
    if (this.state.introFX === "bounceIn") {
      return (
        <Text>
          The value of the <code>easingFunction</code> prop is <br />
          <code>cubic-bezier(0.68, -0.55, 0.265, 1.95)</code> to the{" "}
          {this.renderDirectionName()}
        </Text>
      );
    }

    if (this.state.introFX === "blurInFadeInBounceIn") {
      return (
        <Text>
          Both the <code>fadeIn</code> and <code>blurIn</code> props are{" "}
          <code>true</code> and the value of the <code>easingFunction</code>{" "}
          prop is <br />
          <code>cubic-bezier(0.68, -0.55, 0.265, 1.95)</code> to the{" "}
          {this.renderDirectionName()}
        </Text>
      );
    }

    if (this.state.introFX === "fadeIn") {
      return (
        <Text>
          The <code>fadeIn</code> prop is <code>true</code> to the{" "}
          {this.renderDirectionName()}!
        </Text>
      );
    }

    if (this.state.introFX === "blurIn") {
      return (
        <Text>
          The <code>blurIn</code> prop is <code>true</code> to the{" "}
          {this.renderDirectionName()}!
        </Text>
      );
    }

    if (this.state.introFX === "blurInFadeIn") {
      return (
        <Text>
          Both the <code>fadeIn</code> and <code>blurIn</code> props are{" "}
          <code>true</code> to the {this.renderDirectionName()}!
        </Text>
      );
    }
  };

  render() {
    return (
      <>
        <GithubCorner
          href="https://github.com/username/repo"
          bannerColor="#F0DB4F"
          octoColor="#272c34"
        />
        <NavBar>
          <NavSection>
            <NavItem style={{ fontSize: 24 }}>DIRECTION</NavItem>
          </NavSection>
          <NavSection>
            <NavItem style={{ fontSize: 24 }}>TRANSLATE</NavItem>
          </NavSection>
          <NavSection>
            <NavItem style={{ fontSize: 24 }}>INTRO FX</NavItem>
          </NavSection>
        </NavBar>
        <NavBar>
          <NavSection>
            <NavItem
              isActive={this.state.direction === "toLeft"}
              onClick={() => this.handleDirection("toLeft")}
            >
              TO LEFT
            </NavItem>
            <NavItem
              isActive={this.state.direction === "toRight"}
              onClick={() => this.handleDirection("toRight")}
            >
              TO RIGHT
            </NavItem>
            <NavItem
              isActive={this.state.direction === "toTop"}
              onClick={() => this.handleDirection("toTop")}
            >
              TO TOP
            </NavItem>
            <NavItem
              isActive={this.state.direction === "toBottom"}
              onClick={() => this.handleDirection("toBottom")}
            >
              TO BOTTOM
            </NavItem>
          </NavSection>
          <NavSection>
            <NavItem>
              <input
                type="range"
                onChange={this.handleRange}
                value={this.state.value}
                name="points"
                min="0"
                max="20"
              />
            </NavItem>
          </NavSection>
          <NavSection>
            <NavItem
              isActive={this.state.introFX === "fadeIn"}
              onClick={() => this.handleIntroFX("fadeIn")}
            >
              FADE IN
            </NavItem>
            <NavItem
              isActive={this.state.introFX === "blurIn"}
              onClick={() => this.handleIntroFX("blurIn")}
            >
              BLUR IN
            </NavItem>
            <NavItem
              isActive={this.state.introFX === "blurInFadeIn"}
              onClick={() => this.handleIntroFX("blurInFadeIn")}
            >
              BLUR & FADE!
            </NavItem>
            <NavItem
              isActive={this.state.introFX === "bounceIn"}
              onClick={() => this.handleIntroFX("bounceIn")}
            >
              BOUNCE
            </NavItem>
            <NavItem
              isActive={this.state.introFX === "blurInFadeInBounceIn"}
              onClick={() => this.handleIntroFX("blurInFadeInBounceIn")}
            >
              BLUR & FADE & BOUNCE!
            </NavItem>
          </NavSection>
        </NavBar>
        {this.renderText()}
        <UserContainer>
          {/* user provides their own array as normal  */}
          <AnimatedItemsContainer>
            {objArray.map((item, index) => {
              return (
                <ReactAnimatedList
                  toLeft={this.state.direction === "toLeft" && true}
                  toRight={this.state.direction === "toRight" && true}
                  toTop={this.state.direction === "toTop" && true}
                  toBottom={this.state.direction === "toBottom" && true}
                  fadeIn={
                    this.state.introFX === "fadeIn" ||
                    this.state.introFX === "blurInFadeIn" ||
                    this.state.introFX === "blurInFadeInBounceIn"
                  }
                  blurIn={
                    this.state.introFX === "blurIn" ||
                    this.state.introFX === "blurInFadeIn" ||
                    this.state.introFX === "blurInFadeInBounceIn"
                  }
                  easingFunction={
                    (this.state.introFX === "bounceIn" &&
                      "cubic-bezier(0.68, -0.55, 0.265, 1.95)") ||
                    (this.state.introFX === "blurInFadeInBounceIn" &&
                      "cubic-bezier(0.68, -0.55, 0.265, 1.95)")
                  }
                  key={index}
                  translate={this.state.value}
                  delay={index}
                >
                  <UserChildItem obj={item}>{item.title}</UserChildItem>
                </ReactAnimatedList>
              );
            })}
          </AnimatedItemsContainer>
        </UserContainer>
      </>
    );
  }
}

const fadeIn = () => keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Text = styled.h2`
  font-family: "Permanent Marker", cursive;
  color: "black";
  text-align: center;
`;

const SideBar = styled.div`
  height: 600px;
  width: 200px;
  background: limegreen;
  color: white;
  border-radius: 5px;
`;

const NavBar = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  margin: 0;
  background-color: #272c34;
  font-family: "Permanent Marker", cursive;
`;

const NavItem = styled.div`
  padding: 10px;
  display: inline-block;
  color: ${props => (props.isActive ? "#F0DB4F" : "white")};
  cursor: pointer;
  letter-spacing: 1px;
`;

const NavSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #4a4a4a;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
  text-align: center;
  font-family: "Permanent Marker", cursive;
`;

const AnimatedItemsContainer = styled.div``;

const UserContainer = styled.div`
  font-family: "Permanent Marker", cursive;
  background: #f0db4f;
  text-align: center;
  height: -webkit-fill-available;
  width: 100%;
  display: flex;
  transition: 1s;
  justify-content: space-around;
`;

export default Testing;

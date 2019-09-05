import React from "react";
import styled, { keyframes } from "styled-components";

class CarbonCode extends React.Component {
  state = {
    opacity: 1
  };

  componentDidUpdate() {
    this.setState({ opacity: 1 });
  }

  render() {
    return (
      <Container
        style={{
          transition: "0.2s",
          opacity: this.props.parentClicked ? 0 : 1
        }}
      >
        <Carbon
          src={`https://carbon.now.sh/embed/?bg=rgba(255%2C255%2C255%2C0)&t=one-dark&wt=none&l=jsx&ds=true&dsyoff=13px&dsblur=36px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fm=Fira%20Code&fs=14px&lh=152%25&si=false&es=4x&wm=false&code=const%2520MyComponent%2520%253D%2520()%2520%253D%253E%2520%257B%250A%2520%2520return%2520(%250A%2520%2520%2520%2520%2520%2520%253CMyContainer%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%257BobjArray.map((item%252C%2520index)%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520(%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CReactAnimatedList%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520${
            this.props.direction
          }%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fadeIn%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520easingFunction%253D%2522cubic-bezier(0.68%252C%2520-0.55%252C%25200.265%252C%25201.95)%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520key%253D%257Bindex%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520translate%253D%257B${
            this.props.translate
          }%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520delay%253D%257Bindex%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CUserChildItem%2520obj%253D%257Bitem%257D%253E%257Bitem.title%257D%253C%252FUserChildItem%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FReactAnimatedList%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D)%257D%250A%2520%2520%2520%2520%2520%2520%253C%252FMyContainer%253E%250A%2520%2520)%253B%250A%257D%253B%250A`}
        />
      </Container>
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

const Container = styled.div``;

const Carbon = styled.iframe`
  width: 804px;
  height: 623px;
  border: 0;
  overflow: hidden;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

export default CarbonCode;

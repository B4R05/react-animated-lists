import styled, { keyframes, css } from "styled-components";

//TODO:

//scaleIn
//scaleDown intro iphone style

//final testing cases
//test with react router, clicking on card leads to a page

//wrtie documentation
//live interactive examples
//README
//separate page for demos

//make it a light library, just the bare essentials needed to work
//remove from create-react-App
//publish to npm

//contact react blogs to spread the word

const DEFAULT_START_BLUR = 10;
const DEFAULT_START_OPACITY = 0;
const DEFAULT_END_OPACITY = 1;
const DEFAULT_END_BLUR = 0;
const DEFAULT_END_TRANSLATE = 0;

const animateItem = ({
  toLeft,
  toRight,
  toTop,
  toBottom,
  translate,
  fadeIn,
  blurIn,
  blurValue,
  scaleIn
}) => keyframes`
    0% {
      ${scaleIn && `transform: scale(0.5);`}
        ${toLeft && `transform : translateX(${translate}px);`}
        ${toRight && `transform : translateX(-${translate}px);`}
        ${toTop && `transform : translateY(${translate}px);`}
        ${toBottom && `transform : translateY(-${translate}px);`}
        ${fadeIn && `opacity: ${DEFAULT_START_OPACITY};`}
        ${blurIn && `filter: blur(${blurValue || DEFAULT_START_BLUR}px);`}
    }

    100% {
        ${scaleIn && `transform: scale(1);`}
        ${toLeft && `translateX(${DEFAULT_END_TRANSLATE}px);`}
        ${toRight && `translateX(${DEFAULT_END_TRANSLATE}px);`}
        ${toTop && `translateY(${DEFAULT_END_TRANSLATE}px);`}
        ${toBottom && `translateY(${DEFAULT_END_TRANSLATE}px);`}
        ${fadeIn && `opacity: ${DEFAULT_END_OPACITY};`}
        ${blurIn && `filter: blur(${DEFAULT_END_BLUR}px);`}
    }
`;

// add juggle effect https://www.cardsagainsthumanity.com/lab/
const AnimatedItem = styled.div`
  ${props =>
    css`
      animation-name: ${animateItem(props)};
      animation-duration: ${props.duration}s;
      animation-fill-mode: both;
      animation-delay: ${props.delay}s;
      animation-timing-function: ${props.easingFunction};
    `};
`;

export default AnimatedItem;

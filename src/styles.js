import styled, { keyframes, css } from "styled-components";

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
  blurValue
}) => keyframes`
    0% {
        ${toLeft && `transform : translateX(${translate}px);`}
        ${toRight && `transform : translateX(-${translate}px);`}
        ${toTop && `transform : translateY(${translate}px);`}
        ${toBottom && `transform : translateY(-${translate}px);`}
        ${fadeIn && `opacity: ${DEFAULT_START_OPACITY};`}
        ${blurIn && `filter: blur(${blurValue || DEFAULT_START_BLUR}px);`}
    }

    100% {
        ${toLeft && `translateX(${DEFAULT_END_TRANSLATE}px);`}
        ${toRight && `translateX(${DEFAULT_END_TRANSLATE}px);`}
        ${toTop && `translateY(${DEFAULT_END_TRANSLATE}px);`}
        ${toBottom && `translateY(${DEFAULT_END_TRANSLATE}px);`}
        ${fadeIn && `opacity: ${DEFAULT_END_OPACITY};`}
        ${blurIn && `filter: blur(${DEFAULT_END_BLUR}px);`}
    }
`;

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

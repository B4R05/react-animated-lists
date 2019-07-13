import styled, { keyframes, css } from "styled-components";

const animateItem = ({
  toLeft,
  toRight,
  toTop,
  toBottom,
  translate,
  fadeIn,
  blurIn
}) => keyframes`
    0% {
        ${toLeft && `transform : translateX(${translate}px);`}
        ${toRight && `transform : translateX(-${translate}px);`}
        ${toTop && `transform : translateY(${translate}px);`}
        ${toBottom && `transform : translateY(-${translate}px);`}
        ${fadeIn && `opacity: 0;`}
        ${blurIn && `filter: blur(10px);`}
    }

    100% {
        ${toLeft && `translateX(0px);`}
        ${toRight && `translateX(0px);`}
        ${toTop && `translateY(0px);`}
        ${toBottom && `translateY(0px);`}
        ${fadeIn && `opacity: 1;`}
        ${blurIn && `filter: blur(0px);`}
    }
`;

const bounce = () => keyframes`
0% {
  transform: translateY(10px);
}

25% {
    transform: translateY(-20px);
}

50% {
    transform: translateY(5px);
}

100% {
    transform: translateY(0px);
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
    `};
`;

export default AnimatedItem;

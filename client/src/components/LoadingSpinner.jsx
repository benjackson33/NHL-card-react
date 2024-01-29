import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the spinning animation
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinning puck
const SpinnerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  border: 4px solid #000000;
  background: #000000;
  // border-top: 4px solid transparent;
  animation: ${spinAnimation} 1s linear infinite;
`;

const SpinnerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage
        src="https://assets.nhle.com/logos/nhl/svg/NHL_light.svg"
        alt="Spinner"
      />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;

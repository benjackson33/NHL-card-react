// LoadingSpinner.js
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
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #000000;
  border-top: 4px solid transparent;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return <SpinnerContainer />;
};

export default LoadingSpinner;

import { css } from '@emotion/react';

export const BackgroundGradient = css`
  background: linear-gradient(-45deg, #44d680, #1dc4ca, #53d078, #3deac1);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

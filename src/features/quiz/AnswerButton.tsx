import React, { useContext } from "react";

const AnswerButton: React.FC = ({ children }) => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <circle cx="42" cy="40" r="38" stroke="#F8F8F8" strokeWidth="4" />
    </g>
    {children}
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const TrueButton = () => (
  <AnswerButton>
    <path
      d="M60.2849 27.0451L34.6712 52.9548L23.7151 42.0523"
      stroke="#F8F8F8"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </AnswerButton>
);

export const FalseButton = () => (
  <AnswerButton>
    <>
      <path
        d="M26.2461 24.4783L57.7537 55.5214"
        stroke="#F8F8F8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.2461 55.5215L57.7537 24.4783"
        stroke="#F8F8F8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  </AnswerButton>
);

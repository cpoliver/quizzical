import React from "react";

import { colors } from "../theme";

type Props = {
  color?: string;
};

export const Tick: React.FC<Props> = ({ color = colors.primary }) => (
  <path
    d="M60.2849 27.0451L34.6712 52.9548L23.7151 42.0523"
    stroke={color}
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Cross: React.FC<Props> = ({ color = colors.primary }) => (
  <>
    <path
      d="M26.2461 24.4783L57.7537 55.5214"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.2461 55.5215L57.7537 24.4783"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

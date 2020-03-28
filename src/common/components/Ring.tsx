import React from "react";

import { colors } from "../theme";

type RingProps = {
  count?: number;
  total?: number;
  thickness?: number;
};

export const Ring: React.FC<RingProps> = ({
  count = 10,
  total = 10,
  thickness = 4,
}) => {
  const percent = count / total;

  const size = 100;
  const radius = size / 2;
  const normalizedRadius = radius - thickness * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - percent * circumference;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: "rotate(-180deg)" }}
    >
      <circle
        stroke={colors.faded}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeWidth={thickness}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
      <circle
        stroke={colors.primary}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset: offset,
        }}
        strokeWidth={thickness}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
    </svg>
  );
};

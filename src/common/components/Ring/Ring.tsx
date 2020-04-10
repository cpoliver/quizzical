import React from "react";

import { colors } from "../../theme";

type RingProps = {
  count?: number;
  total?: number;
  thickness?: number;
  spinner?: boolean;
};

export const Ring: React.FC<RingProps> = ({
  count = 10,
  total = 10,
  thickness = 4,
  spinner = false,
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
      <defs>
        <linearGradient id="spinner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,1)" />
        </linearGradient>
      </defs>
      <circle
        stroke={spinner ? "url(#spinner)" : colors.faded}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeWidth={thickness}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
      {!spinner && (
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
      )}
    </svg>
  );
};

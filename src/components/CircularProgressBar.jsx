// import React from 'react'
import PropTypes from "prop-types";

const CircularProgressBar = ({ percent, size = 3, strokeWidth = 0.25 }) => {
  const radius = size / 2 - strokeWidth;
  const p = 2 * Math.PI * radius;
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          fill="none"
          stroke={percent >= 80 ? "green" : percent >= 50 ? "yellow" : "red"}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${p}vw`}
          strokeDashoffset={`${p - (percent / 100) * p}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize={`1.2vw`}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percent: PropTypes.any,
  size: PropTypes.any,
  strokeWidth: PropTypes.any,
};

export default CircularProgressBar;

import React from "react";
import ReactConfetti from "react-confetti";

import { useWindowSize } from "@hooks/useWindowSize";

export interface ConfettiProps {
  start: boolean;
  variant?: "top" | "bottom";
}

export default function Confetti({ start, variant }: ConfettiProps) {
  const { width, height } = useWindowSize();

  const _variant = variant
    ? variant
    : height && width && height > 1.5 * width
    ? "bottom"
    : variant;

  return width && height ? (
    <ReactConfetti
      style={{ zIndex: 1401 }}
      numberOfPieces={400}
      recycle={false}
      run={start}
      width={width}
      height={height}
      confettiSource={{
        h: height,
        w: width,
        x: 0,
        y:
          _variant === "top"
            ? height * 0.25
            : _variant === "bottom"
            ? height * 0.75
            : height * 0.5,
      }}
      initialVelocityX={15}
      initialVelocityY={30}
      gravity={0.45}
      tweenDuration={100}
      wind={0.05}
    />
  ) : null;
}

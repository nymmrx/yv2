import React from "react";
import {
  DialogContent,
  DialogOverlay,
  DialogOverlayProps,
} from "@reach/dialog";
import { useTransition, animated } from "react-spring";

import "@reach/dialog/styles.css";
import clsx from "clsx";

export interface ModalProps extends DialogOverlayProps {
  className?: string;
}

export default function Modal({
  children,
  isOpen,
  className,
  ...props
}: ModalProps) {
  const AnimatedDialogOverlay = animated(DialogOverlay) as typeof DialogOverlay;
  const AnimatedDialogContent = animated(DialogContent) as typeof DialogContent;
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translate3d(0,-24px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,-0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,24px,0)" },
    config: { duration: 250 },
  });
  return (
    <div>
      {transitions.map(
        ({ item, props: style }) =>
          item && (
            <AnimatedDialogOverlay
              {...props}
              style={{ opacity: style.opacity }}
            >
              <AnimatedDialogContent
                style={{ transform: style.transform }}
                className={clsx("rounded-lg", className)}
              >
                {children}
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  );
}

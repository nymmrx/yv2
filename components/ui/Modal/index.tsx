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
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });
  return (
    <div>
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <AnimatedDialogOverlay
              {...props}
              key={key}
              style={{ opacity: style.opacity }}
            >
              <AnimatedDialogContent
                aria-label={"Modal"}
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

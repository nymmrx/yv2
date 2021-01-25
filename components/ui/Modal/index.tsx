import React from "react";
import { DialogOverlay, DialogOverlayProps } from "@reach/dialog";
import { useTransition, animated } from "react-spring";

import "@reach/dialog/styles.css";
import ThemeProvider from "@comp/provider/DarkModeProvider";

export type ModalProps = DialogOverlayProps;

export default function Modal({ children, isOpen, ...props }: ModalProps) {
  const AnimatedDialogOverlay = animated(DialogOverlay) as typeof DialogOverlay;
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1.5 },
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
              <ThemeProvider>{children}</ThemeProvider>
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  );
}

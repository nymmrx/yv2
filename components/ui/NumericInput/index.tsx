import React, { forwardRef, Ref, RefObject, useCallback } from "react";
import clsx from "clsx";

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

export interface NumericInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "ref" | "onChange" | "as"> {
  onChange: (input: string) => void;
  value: string | number;
}

const NumericInput = forwardRef(function NumericInput(
  { onChange, className, ...props }: NumericInputProps,
  ref: Ref<HTMLInputElement>
) {
  const enforcer = useCallback(
    (next: string) => {
      if (next === "" || inputRegex.test(escapeRegExp(next))) {
        onChange(next);
      }
    },
    [onChange]
  );

  return (
    <input
      ref={ref}
      onChange={(event) => enforcer(event.target.value.replace(/,/g, "."))}
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={"0.0"}
      minLength={1}
      maxLength={79}
      spellCheck="false"
      className={clsx(
        "outline-none border-none overflow-ellipsis bg-transparent text-xl font-mono",
        className
      )}
      {...props}
    />
  );
});

export default NumericInput;

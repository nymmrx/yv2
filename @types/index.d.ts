declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };

  export default string;
}

type NoChildren<T> = Omit<T, "children">;
type WithChildren<T> = T & {
  children?: React.ReactNode;
};

type Wrap<T> = {
  value: G;
};

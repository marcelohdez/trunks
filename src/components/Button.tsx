import { ReactNode } from "react";

const Button = (props: { children: ReactNode }) => (
  <button
    className="
    bg-trunks-100 dark:bg-trunks-950 p-1 rounded-md
    border-t border-trunks-200 dark:border-trunks-800
    hover:bg-trunks-200 dark:hover:bg-trunks-800
    "
  >
    {props.children}
  </button>
);

export { Button };

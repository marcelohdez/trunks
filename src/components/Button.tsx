import { ReactNode } from "react";

const Button = (props: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}) => (
  <button
    className="
    bg-trunks-100 dark:bg-trunks-950 py-1 px-2 rounded-md
    border-t border-trunks-200 dark:border-trunks-800
    hover:bg-trunks-200 dark:hover:bg-trunks-800
    "
    type={props.type}
  >
    {props.children}
  </button>
);

export { Button };

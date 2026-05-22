import React from "react";
import styles from "./Heading.module.css";

// type HeadingProps = {
//   children: string;
// };

type HeadingProps = {
  children: React.ReactNode;
};

//export function Heading(props: HeadingProps) {
export function Heading({ children }: HeadingProps) {
  console.log(children);

  //return <h1 className={styles.heading}>{props.children}</h1>;
  return <h1 className={styles.heading}>{children}</h1>;
}

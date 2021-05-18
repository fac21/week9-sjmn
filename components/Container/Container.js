import styles from "./Container.module.css";

export default function Container({ children, className }) {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return <div className={containerClassName}>{children}</div>;
}

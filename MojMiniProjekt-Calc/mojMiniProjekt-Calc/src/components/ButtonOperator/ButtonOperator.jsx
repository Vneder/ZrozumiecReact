import styles from "./ButtonOperator.module.css";

export function ButtonOperator({ text, setter, prevValue }) {
  return (
    <button
      className={styles.operator}
      value={text}
      onClick={(e) => setter(prevValue + e.target.value)}
    >
      {text}
    </button>
  );
}

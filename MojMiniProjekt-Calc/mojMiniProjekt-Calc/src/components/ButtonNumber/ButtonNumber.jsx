import styles from "./ButtonNumber.module.css";

export function ButtonNumber({ text, setter, prevValue }) {
  return (
    <button
      className={styles.number}
      value={text}
      onClick={(e) => setter(prevValue + e.target.value)}
    >
      {text}
    </button>
  );
}

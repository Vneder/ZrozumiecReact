import styles from "./ButtonClear.module.css";

export function ButtonClear({ text, setter }) {
  return (
    <button
      className={styles.clear}
      value={text}
      //   onClick={(e) => setter(prevValue + e.target.value)}
      onClick={() => setter("")}
    >
      {text}
    </button>
  );
}

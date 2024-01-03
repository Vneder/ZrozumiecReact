import styles from "./ButtonEquals.module.css";

export function ButtonEquals({ text, setter, prevValue }) {
  return (
    <button
      className={styles.equals}
      value={text}
      onClick={() => setter(eval(prevValue))}
    >
      {text}
    </button>
  );
}

{
  /* <button
  className={styles.equals}
  value={"="}
  onClick={() => setValue(eval(value))}
>
  =
</button>; */
}

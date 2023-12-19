import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={styles.form}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className={styles.input}
      />
      {/* <button className={styles.button}>Dodaj</button> */}
      <Button>Dodaj</Button>
    </form>
  );
}

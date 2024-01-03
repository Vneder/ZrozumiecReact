import { useState } from "react";
import styles from "./App.module.css";
import { ButtonNumber } from "./components/ButtonNumber/ButtonNumber";
import { ButtonOperator } from "./components/ButtonOperator/ButtonOperator";
import { ButtonClear } from "./components/ButtonClear/ButtonClear";
import { ButtonEquals } from "./components/ButtonEquals/ButtonEquals";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <input className={styles.display} type="text" value={value} />
          <div className={styles.panel}>
            <ButtonNumber text="1" setter={setValue} prevValue={value} />
            <ButtonNumber text="2" setter={setValue} prevValue={value} />
            <ButtonNumber text="3" setter={setValue} prevValue={value} />
            <ButtonOperator text="+" setter={setValue} prevValue={value} />

            <ButtonNumber text="4" setter={setValue} prevValue={value} />
            <ButtonNumber text="5" setter={setValue} prevValue={value} />
            <ButtonNumber text="6" setter={setValue} prevValue={value} />
            <ButtonOperator text="-" setter={setValue} prevValue={value} />

            <ButtonNumber text="7" setter={setValue} prevValue={value} />
            <ButtonNumber text="8" setter={setValue} prevValue={value} />
            <ButtonNumber text="9" setter={setValue} prevValue={value} />
            <ButtonOperator text="*" setter={setValue} prevValue={value} />

            <ButtonNumber text="0" setter={setValue} prevValue={value} />
            <ButtonNumber text="." setter={setValue} prevValue={value} />
            <ButtonClear text="C" setter={setValue} prevValue={value} />
            <ButtonOperator text="/" setter={setValue} prevValue={value} />

            <ButtonEquals text="=" setter={setValue} prevValue={value} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

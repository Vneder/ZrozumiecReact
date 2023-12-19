import { useState } from "react";

export function Form({onReviewsSubmit}) {

  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Usuwamy domyślne działanie submita (standardowa czunność z submitem wszędzie!)

    const author = inputValue;
    const text = textareaValue;

    onReviewsSubmit(author, text);

    setInputValue("");
    setTextareaValue("");
  }

  return (
    <>

      <hr />
      <h2>Dodaj recenzję </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={(event) => {
              setTextareaValue(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue === "" || textareaValue === ""}
        >
          Dodaj
        </button>
      </form>
    </>
  );
}

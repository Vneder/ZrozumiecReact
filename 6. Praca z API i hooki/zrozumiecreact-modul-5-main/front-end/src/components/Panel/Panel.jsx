import { useState, useEffect } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import { FilterButton } from "../FilterButton/FilterButton";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import styles from "./Panel.module.css";

const url = "http://localhost:3000/words";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const params = selectedCategory ? `?category=${selectedCategory}` : ""; // dzięki temu, null będzie przyciskiem wszystkie
    fetch(`${url}${params}`)
      .then((res) => res.json()) // wykonanie requestu na stronie
      .then((res) => {
        setData(res); // aktualizacja listy na stronie
        setIsLoading(false); // wyłączenie loadingu
      });
  }, [selectedCategory]);

  function handleFormSubmit(formData) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!selectedCategory || selectedCategory === res.category) {
          setData((prevData) => [...prevData, res]);
        }
      });
  }

  function handleDeleteItem(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id));
        } else {
          throw new Error("Błąd podczas usuwania!"); //Obsługa błędu
        }
      })
      .catch((e) => {
        //Obsługa błędu
        setError(e.message);
        setTimeout(() => {
          setError(null);
        }, 3000); // Wyświetlanie błędu przez 3 sekundy na stronie
      });
  }

  function handleFilterClick(category) {
    setSelectedCategory(category);
  }

  if (isLoading) {
    return "Ładowanie";
  }

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <section className={styles.section}>
        <Form onFormSubmit={handleFormSubmit} />
        <div className={styles.filters}>
          <FilterButton
            active={selectedCategory === null}
            onClick={() => handleFilterClick(null)}
          >
            Wszystkie
          </FilterButton>
          <FilterButton
            active={selectedCategory === "noun"}
            onClick={() => handleFilterClick("noun")}
          >
            Rzeczowniki
          </FilterButton>
          <FilterButton
            active={selectedCategory === "verb"}
            onClick={() => handleFilterClick("verb")}
          >
            Czasowniki
          </FilterButton>
        </div>
        <List data={data} onDeleteItem={handleDeleteItem} />
      </section>
    </>
  );
}

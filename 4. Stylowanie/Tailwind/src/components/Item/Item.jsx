import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="bg-rose-400 py-8 px-12 rounded-3xl text-center overflow-hidden">
      <span
        className={`block mb-10 text-3xl transition-transform ${
          zoomed ? "scale-[2]" : ""
        }`}
      >
        {emoji}
      </span>
      <button
        className="bg-transparent border border-solid border-current p-3 rounded cursor-pointer w-32 text-white transition-colors hover:text-rose-400 hover:bg-white"
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}

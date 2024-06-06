import React from "react";

import style from "./button.module.css";

export default function CustomPinkBtn({ name }) {
  return (
    <div>
      <button className={style.customPinkBtn}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.9297 5.93005L20.9997 12.0001L14.9297 18.0701"
            stroke="#2B2B2B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12H20.83"
            stroke="#2B2B2B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>{name}</p>

        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.90002 6.5H16.1C19.5 6.5 19.84 8.09 20.07 10.03L20.97 17.53C21.26 19.99 20.5 22 17 22H8.01003C4.50003 22 3.74002 19.99 4.04002 17.53L4.94003 10.03C5.16003 8.09 5.50002 6.5 8.90002 6.5Z"
            stroke="#2B2B2B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 8V4.5C8.5 3 9.5 2 11 2H14C15.5 2 16.5 3 16.5 4.5V8"
            fill="#2B2B2B"
          />
          <path
            d="M8.5 8V4.5C8.5 3 9.5 2 11 2H14C15.5 2 16.5 3 16.5 4.5V8"
            stroke="#2B2B2B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.91 17.03H8.5"
            stroke="#2B2B2B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

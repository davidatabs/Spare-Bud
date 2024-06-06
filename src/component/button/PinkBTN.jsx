import React from "react";

import style from "./button.module.css";

export default function PinkBtn({ name }) {
  return (
    <div>
      <button className={style.pinkBtn}>
        <p>{name}</p>
      </button>
    </div>
  );
}

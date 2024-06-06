import React from "react";

import style from "./button.module.css";

export default function TransparentBtn({ name }) {
  return (
    <div>
      <button className={style.transparentBtn}>
        <p>{name}</p>
      </button>
    </div>
  );
}

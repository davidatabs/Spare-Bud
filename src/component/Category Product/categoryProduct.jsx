import React from "react";

import style from "./categoryProduct.module.css";

export default function CategoryProduct({ img, description }) {
  return (
    <div className={style.CategoryProduct}>
      <img className={style.CategoryProductImg} src={img} alt="" />
      <p className={style.CategoryProductName}>{description}</p>
    </div>
  );
}

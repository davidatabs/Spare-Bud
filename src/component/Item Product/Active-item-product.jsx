import React from "react";
import TransparentBtn from "../button/TransparentBTN";

import style from "./Item-product.module.css";

export default function ActiveItem({ order }) {
  const {
    img,
    name,
    description,
    nairaSymbol,
    day,
    week,
    month,
    salePrice,
    dailyPrice = [nairaSymbol, day],
    weeklyPrice = [nairaSymbol, week],
    monthlyPrice = [nairaSymbol, month],
    forSale = [nairaSymbol, salePrice],
  } = order;

  return (
    <div className={style.activeComponent}>
      <div className={style.leftColumn}>
        <img className={style.itemImg} src={img} alt="" />
        <div className={style.itemDetails}>
          <div>
            <p className={style.itemName}>{name}</p>
            <p className={style.itemDescription}>{description}</p>
          </div>

          <div className={style.pricings}>
            <p className={style.dailyPrice}>{dailyPrice}</p>
            <p className={style.weeklyPrice}>{weeklyPrice}</p>
            <p className={style.monthlyPrice}>{monthlyPrice}</p>
            <div>
              <p className={style.forSale}>For sale: {forSale}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.rightColumn}>
        <TransparentBtn name="Currently Active" />
        <div className={style.activityBTNs}>
          <span className={style.deleteBTN}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5 4.5V5.5H5.5V4.5H8.5H8.70711L8.85355 4.35355L9.70711 3.5H14.2929L15.1464 4.35355L15.2929 4.5H15.5H18.5ZM8 8.5H7.5V9V19V19.5H8H16H16.5V19V9V8.5H16H8ZM8 20.5C7.17614 20.5 6.5 19.8239 6.5 19V7.5H17.5V19C17.5 19.8239 16.8239 20.5 16 20.5H8Z"
                fill="black"
                stroke="#BC70C1"
              />
            </svg>
            <p>Delete</p>
          </span>

          <span className={style.editBTN}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4126 8.66645L14.059 8.31289L13.7055 8.66645L4.64547 17.7264L4.49902 17.8729V18.08V19V19.5H4.99902H5.91902H6.12613L6.27258 19.3536L15.3326 10.2936L15.6861 9.94L15.3326 9.58645L14.4126 8.66645ZM17.3126 3.64355C17.4054 3.55077 17.5367 3.5 17.659 3.5C17.798 3.5 17.9171 3.54522 18.0155 3.64355L20.3555 5.98355C20.5502 6.17829 20.5502 6.49171 20.3555 6.68645L18.879 8.16289L15.8361 5.12L17.3126 3.64355ZM3.49902 17.4571L14.059 6.89711L17.1019 9.94L6.54192 20.5H3.49902V17.4571Z"
                fill="black"
                stroke="#BC70C1"
              />
            </svg>

            <p>Edit</p>
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import style from "./Item-product.module.css";

export default function LendingItem({ order }) {
  const {
    img,
    name,
    description,
    nairaSymbol,
    // day,
    week,
    // month,
    borrowTime,
    returnTime,
    period = [borrowTime, "-", returnTime],
    // dailyPrice = [nairaSymbol, day],
    weeklyPrice = [nairaSymbol, week],
    // monthlyPrice = [nairaSymbol, month],
    orderNumber,
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

          <div className={style.lendingDetails}>
            <p>
              <span>Period: </span> <div>{period}</div>
            </p>
            <p>
              <span>Price: </span>
              {weeklyPrice}
            </p>
            <p>
              <span>Order Number: </span> {orderNumber}
            </p>
          </div>
        </div>
      </div>

      <div className={style.lendingRightColumn}>
        <div className={style.TbuttonContainer}>
          <button>Accept</button>
          <button>Deny</button>
        </div>
        <div className={style.lendingActivityBTNs}>
          <span className={style.deleteBTN}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 11L22 2L13 21L11 13L3 11Z"
                stroke="#BC70C1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Send Message</p>
          </span>

          <span className={style.editBTN}>
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
        </div>
      </div>
    </div>
  );
}

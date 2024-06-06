import style from "./search-product.module.css";
import React from "react";

export default function SearchProductItem({ product }) {
  const {
    img,
    name,
    description,
    dayPrice,
    weekPrice,
    monthPrice,
    profileImg,
    nairaSymbol = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none">
        <path
          d="M4.33317 13.8333V3.49996H4.6665L11.3332 13.5H11.6665V3.16663M2.6665 6.83329H13.3332M2.6665 10.1666H13.3332"
          stroke="#1E1E1E"
        />
      </svg>
    ),

    dailyPrice = [nairaSymbol, dayPrice],
    weeklyPrice = [nairaSymbol, weekPrice],
    monthlyPrice = [nairaSymbol, monthPrice],
  } = product;

  return (
    <div>
      <div className={style.productItemContainer}>
        <img className={style.productItemImg} src={img} alt="" />
        <p className={style.productItemName}>{name}</p>
        <p className={style.productItemDescription}>{description}</p>
        <span className={style.horizontalLine}></span>
        <div>
          <div className={style.productItemRow2}>
            <div className={style.leftCol}>
              <p className={style.dailyPrice}>{dailyPrice}</p>
              <p className={style.weeklyPrice}>
                {/* {weeklyPrice ? ` b ${nairaSymbol} ${weeklyPrice[1]}` : " "} */}
                {weeklyPrice}
              </p>
              <p className={style.monthlyPrice}>{monthlyPrice}</p>
            </div>

            <div className={style.rightCol}>
              <img className={style.profileImg} src={profileImg} alt="" />
              <div className={style.rating}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="filled">
                    <path
                      id="vector"
                      d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                      fill="#FFD964"
                      stroke="#FFD964"
                      stroke-width="3"
                    />
                  </g>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="filled">
                    <path
                      id="vector"
                      d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                      fill="#FFD964"
                      stroke="#FFD964"
                      stroke-width="3"
                    />
                  </g>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="filled">
                    <path
                      id="vector"
                      d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                      stroke="#FFD964"
                      stroke-width="3"
                    />
                  </g>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="filled">
                    <path
                      id="vector"
                      d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                      stroke="#FFD964"
                      stroke-width="3"
                    />
                  </g>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="filled">
                    <path
                      id="vector"
                      d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                      stroke="#FFD964"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import PinkBtn from "../../component/button/PinkBTN";
import TransparentBtn from "../../component/button/TransparentBTN";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";

import style from "./listing.module.css";

export default function Pricing() {
  return (
    <div>
      <SpareBudUserHeader />

      <div className={style.proceedsContainer}>
        <div className={style.proceed}>
          <div className={style.checkedProceed}>1</div>
          <p>Item description</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.checkedProceed}>2</div>
          <p>Pricing</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.uncheckedProceed}>3</div>
          <p>Location</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.uncheckedProceed}>4</div>
          <p>Summary</p>
        </div>
      </div>

      <form action="" className={style.itemDescriptionForm}>
        <h1>Pricing</h1>

        <div className={style.itemDescriptionInputContainer}>
          <div className={style.itemDInputContainer}>
            <label htmlFor="dailyPrice">Daily</label>

            <div className={style.customItemInputContainer}>
              <svg
                className={style.nairaSvg}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 20V4.5H7L17 19.5H17.5V4M4 9.5H20M4 14.5H20"
                  stroke="#1E1E1E"
                />
              </svg>

              <input
                type="text"
                name="dailyPrice"
                className={style.customItemInput}
                placeholder="300"
                required
              />
            </div>
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="weeklyPrice">Weekly</label>

            <div className={style.customItemInputContainer}>
              <svg
                className={style.nairaSvg}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 20V4.5H7L17 19.5H17.5V4M4 9.5H20M4 14.5H20"
                  stroke="#1E1E1E"
                />
              </svg>

              <input
                type="text"
                name="weeklyPrice"
                className={style.customItemInput}
                placeholder="2100"
                required
              />
            </div>
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="monthlyPrice">Monthly</label>
            <div className={style.customItemInputContainer}>
              <svg
                className={style.nairaSvg}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 20V4.5H7L17 19.5H17.5V4M4 9.5H20M4 14.5H20"
                  stroke="#1E1E1E"
                />
              </svg>

              <input
                type="text"
                name="monthlyPrice"
                className={style.customItemInput}
                placeholder="15,000"
                required
              />
            </div>
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="forSale">For Sale</label>

            <div className={style.customItemInputContainer}>
              <svg
                className={style.nairaSvg}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 20V4.5H7L17 19.5H17.5V4M4 9.5H20M4 14.5H20"
                  stroke="#1E1E1E"
                />
              </svg>

              <input
                type="text"
                name="forSale"
                className={style.customItemInput}
                placeholder="22,000"
                required
              />
            </div>
          </div>
        </div>

        <div className={style.btnContainer}>
          <TransparentBtn name="Cancel" />
          <PinkBtn name="Next" />
        </div>
      </form>

      <SpareBudFooter />
    </div>
  );
}

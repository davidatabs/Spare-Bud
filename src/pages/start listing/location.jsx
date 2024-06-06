import React from "react";
import PinkBtn from "../../component/button/PinkBTN";
import TransparentBtn from "../../component/button/TransparentBTN";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";

import style from "./listing.module.css";

export default function Location() {
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
          <div className={style.checkedProceed}>3</div>
          <p>Location</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.uncheckedProceed}>4</div>
          <p>Summary</p>
        </div>
      </div>

      <form action="" className={style.itemDescriptionForm}>
        <h1>Location</h1>

        <div className={style.itemDescriptionInputContainer}>
          <div className={style.itemDInputContainer}>
            <label htmlFor="Address">
              Name of Item <span>*</span>
            </label>

            <input
              type="text"
              name="Address"
              className={style.itemNameInput}
              placeholder="T-one Street, Obafemi Awolowo Road"
              required
            />
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="Address">
              Nearest Landmark <span>*</span>
            </label>

            <input
              type="text"
              name="Address"
              className={style.itemNameInput}
              placeholder="Governor’s Office"
              required
            />
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="Address">
              State <span>*</span>
            </label>

            <input
              type="text"
              name="Address"
              className={style.itemNameInput}
              placeholder="Lagos"
              required
            />
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="Address">
              City/Town <span>*</span>
            </label>

            <input
              type="text"
              name="Address"
              className={style.itemNameInput}
              placeholder="Ikeja"
              required
            />
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

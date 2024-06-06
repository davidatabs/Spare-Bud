import React from "react";
import PinkBtn from "../../component/button/PinkBTN";
import TransparentBtn from "../../component/button/TransparentBTN";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";

import style from "./listing.module.css";

export default function ItemDescription() {
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
          <div className={style.uncheckedProceed}>2</div>
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
        <h1>Item Description</h1>

        <div className={style.itemDescriptionInputContainer}>
          <div className={style.itemDInputContainer}>
            <label htmlFor="ItemName">
              Name of Item <span>*</span>
            </label>

            <input
              type="text"
              name="ItemName"
              className={style.itemNameInput}
              placeholder="Camping Stove"
              required
            />
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="selectCategory">
              Select Category <span>*</span>
            </label>
            <select name="selectCategory" id={style.selectCategoryInput}>
              <option value="" selected disabled>
                Camping Gear
              </option>
            </select>
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="itemDescription">
              Description <span>*</span>
            </label>

            <textarea
              type="text"
              className={style.itemDescriptionInput}
              required
            />
            <p>Minimum of 40 characters</p>
          </div>

          <div className={style.itemDInputContainer}>
            <label htmlFor="selectSubCategory">
              Sub Category <span>*</span>
            </label>
            <select name="subCategory" id={style.selectCategoryInput}>
              <option value="" selected disabled>
                Appliances
              </option>
            </select>
          </div>
        </div>

        <div className={style.itemImageContainer}>
          <div className={style.itemImageInputContainer}>
            <label htmlFor="imageInput">Add Photos</label>
            <div className={style.imageInputContainer}>
              <input
                type="file"
                accept="image*/"
                className={style.imageInput}
              />
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 13.3333V26.6667M13.3333 20H26.6667M8.33333 5H31.6667C33.5076 5 35 6.49238 35 8.33333V31.6667C35 33.5076 33.5076 35 31.6667 35H8.33333C6.49238 35 5 33.5076 5 31.6667V8.33333C5 6.49238 6.49238 5 8.33333 5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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

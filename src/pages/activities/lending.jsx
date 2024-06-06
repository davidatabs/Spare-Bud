import React from "react";
import CustomPinkBtn from "../../component/button/customPinkBTN";

import LendingItem from "../../component/Item Product/Lendings-product";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import { LendingItems } from "../../utils/mockData";
import style from "./activities.module.css";

export default function Lendings() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.activityUiContainer}>
        <div className={style.activityListContainer}>
          <li>My Items</li>
          <li>Borrowed</li>
          <li className={style.selected}>Lendings</li>
          <li>Sold</li>
          <li>Purchased</li>
        </div>

        <div className={style.myItems}>
          <div className={style.myItemsHeader}>
            <h1>Lendings</h1>
            <CustomPinkBtn name={"List Item"} />
          </div>

          <div className={style.lendingItemsActiveness}>
            <p>Your Order has been requested.</p>
            {LendingItems?.map((result) => {
              return <LendingItem order={result} />;
            })}
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

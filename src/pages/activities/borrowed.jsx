import React from "react";
import CustomPinkBtn from "../../component/button/customPinkBTN";
import BorrowedItem from "../../component/Item Product/Borrowed-item-product";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import { ActiveItems } from "../../utils/mockData";
import style from "./activities.module.css";

export default function Borrowed() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.activityUiContainer}>
        <div className={style.activityListContainer}>
          <li>My Items</li>
          <li className={style.selected}>Borrowed</li>
          <li>Lendings</li>
          <li>Sold</li>
          <li>Purchased</li>
        </div>

        <div className={style.myItems}>
          <div className={style.myItemsHeader}>
            <h1>Borrowed</h1>
            <CustomPinkBtn name={"List Item"} />
          </div>

          <div className={style.lendingItemsActiveness}>
            <p>Your request has been approved.</p>
            {ActiveItems?.map((result) => {
              return <BorrowedItem order={result} />;
            })}
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

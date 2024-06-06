import React from "react";
import CustomPinkBtn from "../../component/button/customPinkBTN";
import ActiveItem from "../../component/Item Product/Active-item-product";
import InActiveItem from "../../component/Item Product/Inactive-item-product";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import { ActiveItems } from "../../utils/mockData";
import style from "./activities.module.css";

export default function MyItems() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.activityUiContainer}>
        <div className={style.activityListContainer}>
          <li className={style.selected}>My Items</li>
          <li>Borrowed</li>
          <li>Lendings</li>
          <li>Sold</li>
          <li>Purchased</li>
        </div>

        <div className={style.myItems}>
          <div className={style.myItemsHeader}>
            <h1>My Items</h1>
            <CustomPinkBtn name={"List Item"} />
          </div>

          <div className={style.itemsActiveness}>
            {ActiveItems?.map((result) => {
              return <ActiveItem order={result} />;
            })}

            {ActiveItems?.map((result) => {
              return <InActiveItem order={result} />;
            })}
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

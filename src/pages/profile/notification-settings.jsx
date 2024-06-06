import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import PinkBtn from "../../component/button/PinkBTN";
import style from "./profile.module.css";

export default function NotificationSettings() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.newUserXContainer}>
        <ul className={style.newUserOptionsContainer}>
          <li>Profile</li>
          <li>Notifications</li>
          <li>Security</li>
        </ul>

        <div className={style.notificationContainer}>
          <h1>Notifications</h1>
          <div className={style.notificationSettingContainer}>
            <div className={style.notificationSetting}>
              <input
                className={style.notificationSettingCheckbox}
                type="checkbox"
                name=""
              />
              <p>Send messages to mobile</p>
            </div>
            <div className={style.notificationSetting}>
              <input
                className={style.notificationSettingCheckbox}
                type="checkbox"
                name=""
              />
              <p>Notify you about borrow requests</p>
            </div>
            <div className={style.notificationSetting}>
              <input
                className={style.notificationSettingCheckbox}
                type="checkbox"
                name=""
              />
              <p>SpareBud promotions</p>
            </div>
            <div className={style.notificationSetting}>
              <input
                className={style.notificationSettingCheckbox}
                type="checkbox"
                name=""
              />
              <p>Newly added updates based on previous searched items </p>
            </div>
          </div>
          <PinkBtn name={"Save"} />
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import PinkBtn from "../../component/button/PinkBTN";
import style from "./profile.module.css";

export default function NewUserProfile() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.newUserXContainer}>
        <ul className={style.newUserOptionsContainer}>
          <li>Profile</li>
          <li>Saved Items</li>
          <li>Notifications</li>
          <li>History</li>
          <li>Listings</li>
          <li>Security</li>
          <li>Setting</li>
        </ul>
        <form className={style.NewUserForm}>
          <h1>Personal Information</h1>
          <div className={style.profileImageSetup}>
            <img className="" src="/assets/img/profilePic.png" alt="" />
            <button className={style.uploadBtn}>Upload Image</button>
          </div>
          <div className={style.newUserInputContainer}>
            <div className={style.newUserInputHolder}>
              <label htmlFor="firstName">First name</label>
              <input type="text" name="firstName" placeholder="John" />
            </div>
            <div className={style.newUserInputHolder}>
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" placeholder="Doe" />
            </div>
            <div className={style.newUserInputHolder}>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" placeholder="johndoes@gmai.com" />
            </div>
            <div className={style.newUserInputHolder}>
              <label htmlFor="DOB">Date of birth</label>
              <input type="text" name="DOB" placeholder="dd/mm/yyyy" />
            </div>
            <div className={style.newUserInputHolder}>
              <label htmlFor="phoneNumber">Phone number</label>
              <input type="text" name="phoneNumber" placeholder="080*****" />
            </div>
            <div className={style.newUserInputHolder}>
              <label htmlFor="NIN">NIN</label>
              <input type="text" name="NIN" placeholder="***********" />
            </div>
            <div className={style.newUserInputHolder}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="No 76, ayobo street, Ikeja, Lagos state "
              />
            </div>
          </div>
          <PinkBtn name={"Save"} />
        </form>
      </div>
      <SpareBudFooter />
    </div>
  );
}

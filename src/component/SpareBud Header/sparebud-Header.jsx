import React from "react";
import { Link } from "react-router-dom";

import PinkBtn from "../button/PinkBTN";
import style from "./sparebud-Header.module.css";

export default function SpareBudHeader() {
  return (
    <div>
      <div className={style.landingPageHeader}>
        <Link to="/LandingPage">
          <img
            className={style.logo}
            src={"assets/img/logo/Logo2.jpg"}
            alt=""
          />
        </Link>
        <nav className={style.landingPageNav}>
          <span className={style.landingPageNavElement}>Process</span>
          <Link to="/Guarantee">
            <span className={style.landingPageNavElement}>
              Guarantee/Insurance
            </span>
          </Link>

          <Link to="/Faq">
            <span className={style.landingPageNavElement}>FAQs</span>
          </Link>

          {/* <Link to="/login"> */}
          <button className={style.login}>Login</button>
          {/* </Link> */}

          <Link to="/SignUp">
            <PinkBtn name="Sign Up" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

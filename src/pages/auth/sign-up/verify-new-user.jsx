import React from "react";

import { Link } from "react-router-dom";
import SpareBudHeader from "../../../component/SpareBud Header/sparebud-Header";
import PinkBtn from "../../../component/button/PinkBTN";
import style from "../auth.module.css";
import SpareBudFooter from "../../../component/SpareBud Footer/sparebud-footer";

export default function VerifyNewUser() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.signUpMain}>
        <form className={style.signUpForm} action="">
          <h1>Sign Up</h1>

          <h1>Enter the code sent to your email</h1>

          <div className={style.verifyNewUserInputContainer}>
            <input className={style.verifyNewUserInput} type="number" />
            <input className={style.verifyNewUserInput} type="number" />
            <input className={style.verifyNewUserInput} type="number" />
            <input className={style.verifyNewUserInput} type="number" />
          </div>

          <PinkBtn name={"Continue"} />

          <div className={style.loginAccount}>
            <p>
              Already have an account? <Link>Login</Link>
            </p>
          </div>
        </form>
        <SpareBudFooter />
      </div>
    </div>
  );
}

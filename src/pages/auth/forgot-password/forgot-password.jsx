import React from "react";

import PinkBtn from "../../../component/button/PinkBTN";
import style from "../auth.module.css";

export default function ForgotPassword() {
  return (
    <div className={style.forgotPasswordModalBody}>
      <div className={style.forgotPasswordModal}>
        <header className={style.forgotPasswordModalHeader}>
          <h2>Forgot Password</h2>
          <div className={style.loginCancel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none">
              <path
                d="M24 8L8 24M8 8L24 24"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </header>
        <main className={style.forgotPasswordModalMain}>
          <p>
            To reset your password you have to enter your email address. We send
            reset password instruction to that email.
          </p>
          <div className={style.forgorPasswordFeedback}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none">
              <path
                d="M12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 17.5 7 22 12.5 22Z"
                stroke="#743778"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.25 12L11.08 14.83L16.75 9.17004"
                stroke="#743778"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>We have emailed your password reset link!!</p>
          </div>
          <input
            type="text"
            className={style.fPemailInputfield}
            placeholder="Email Address"
          />
          <div className={style.forgotPasswordBtn}>
            <PinkBtn name={"Continue"} />
          </div>
        </main>
      </div>
    </div>
  );
}

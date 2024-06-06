import React from "react";

import PinkBtn from "../../../component/button/PinkBTN";
import style from "../auth.module.css";

export default function ResetPassword() {
  return (
    <div>
      <div className={style.forgotPasswordModalBody}>
        <div className={style.forgotPasswordModal}>
          <header className={style.resetPasswordHeader}>
            <h2>Reset Password</h2>
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
            <div className={style.resetPasswordContainer}>
              <h3>New Password</h3>
              <input
                type="text"
                className={style.fPemailInputfield}
                placeholder="Email Address"
              />
              <p>
                Make sure your password is at least 8 characters has an
                alphabet, a number and a symbol.
              </p>
            </div>
            <div className={style.resetPasswordContainer}>
              <h3>Confirm Password</h3>
              <input
                type="text"
                className={style.fPemailInputfield}
                placeholder="Email Address"
              />
            </div>
            <div className={style.forgotPasswordBtn}>
              <PinkBtn name={"Reset Password"} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

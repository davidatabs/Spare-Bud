import React from "react";

import { Link } from "react-router-dom";
import PinkBtn from "../../../component/button/PinkBTN";
import style from "../auth.module.css";
import SpareBudFooter from "../../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../../component/SpareBud Header/sparebud-Header";

export default function SignUp() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.signUpMain}>
        <form className={style.signUpForm} action="">
          <h1>Sign Up</h1>
          <div className={style.signUpInputContainer}>
            <div className={style.signUpInputHolder}>
              <label htmlFor="firstName">
                First name <span className={style.errorStar}>*</span>
              </label>
              <input type="text" name="firstName" placeholder="John" />
            </div>
            <div className={style.signUpInputHolder}>
              <label htmlFor="lastName">
                Last name <span className={style.errorStar}>*</span>
              </label>
              <input type="text" name="lastName" placeholder="Doe" />
            </div>
            <div className={style.signUpInputHolder}>
              <label htmlFor="email">
                Email Address <span className={style.errorStar}>*</span>
              </label>
              <input type="text" name="email" placeholder="Email Address" />
            </div>
            <div className={style.signUpInputHolder}>
              <label htmlFor="phoneNumber">
                Phone number <span className={style.errorStar}>*</span>
              </label>
              <input type="text" name="phoneNumber" placeholder="080*****" />
            </div>
            <div className={style.signUpInputHolder}>
              <label htmlFor="password">
                Password <span className={style.errorStar}>*</span>
              </label>
              <input type="text" name="password" placeholder="*********" />
              <p>At least 8 characters</p>
              <svg
                className={style.eyeSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none">
                <path
                  d="M12.5 6.5C16.29 6.5 19.67 8.63 21.32 12C19.67 15.37 16.29 17.5 12.5 17.5C8.71 17.5 5.33 15.37 3.68 12C5.33 8.63 8.71 6.5 12.5 6.5ZM12.5 4.5C7.5 4.5 3.23 7.61 1.5 12C3.23 16.39 7.5 19.5 12.5 19.5C17.5 19.5 21.77 16.39 23.5 12C21.77 7.61 17.5 4.5 12.5 4.5ZM12.5 9.5C13.88 9.5 15 10.62 15 12C15 13.38 13.88 14.5 12.5 14.5C11.12 14.5 10 13.38 10 12C10 10.62 11.12 9.5 12.5 9.5ZM12.5 7.5C10.02 7.5 8 9.52 8 12C8 14.48 10.02 16.5 12.5 16.5C14.98 16.5 17 14.48 17 12C17 9.52 14.98 7.5 12.5 7.5Z"
                  fill="#555555"
                />
              </svg>
            </div>
            <div className={style.signUpInputHolder}>
              <label htmlFor="confirmPassword">
                Confirm Password <span className={style.errorStar}>*</span>
              </label>
              <input
                type="text"
                name="confirmPassword"
                placeholder="*********"
              />
              <p>At least 8 characters</p>
              <svg
                className={style.eyeSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none">
                <path
                  d="M12.5 6.5C16.29 6.5 19.67 8.63 21.32 12C19.67 15.37 16.29 17.5 12.5 17.5C8.71 17.5 5.33 15.37 3.68 12C5.33 8.63 8.71 6.5 12.5 6.5ZM12.5 4.5C7.5 4.5 3.23 7.61 1.5 12C3.23 16.39 7.5 19.5 12.5 19.5C17.5 19.5 21.77 16.39 23.5 12C21.77 7.61 17.5 4.5 12.5 4.5ZM12.5 9.5C13.88 9.5 15 10.62 15 12C15 13.38 13.88 14.5 12.5 14.5C11.12 14.5 10 13.38 10 12C10 10.62 11.12 9.5 12.5 9.5ZM12.5 7.5C10.02 7.5 8 9.52 8 12C8 14.48 10.02 16.5 12.5 16.5C14.98 16.5 17 14.48 17 12C17 9.52 14.98 7.5 12.5 7.5Z"
                  fill="#555555"
                />
              </svg>
            </div>
          </div>

          <div className={style.termsContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none">
              <rect
                x="1"
                y="0.5"
                width="23"
                height="23"
                rx="3.5"
                stroke="#BC70C1"
              />
            </svg>
            <p>
              By clicking “Sign up”, you agree to{" "}
              <Link>SpareBud’s Terms of Use</Link> and acknowledge you have read
              the <Link>Privacy Policy.</Link>
            </p>
          </div>
          <PinkBtn name={"Continue"} />

          <div className={style.seperationOR}>
            <span className={style.horizontalLine1}></span>

            <p>Or</p>

            <span className={style.horizontalLine2}></span>
          </div>

          <div className={style.buttonContainer}>
            <button className={style.socialLoginBTN}>
              <svg
                className={style.loginBtnSocialIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <g clip-path="url(#clip0_354_3159)">
                  <path
                    d="M23.75 12C23.75 17.7635 19.5999 22.5582 14.125 23.5582V15.7188H16.6711H16.8857L16.9182 15.5067L17.4502 12.0379L17.4944 11.75H17.2031H14.125V9.75C14.125 9.31134 14.2328 8.90916 14.483 8.61978C14.7273 8.33718 15.1396 8.125 15.8306 8.125H17.3438H17.5938V7.875V4.92188V4.71092L17.3858 4.67544L17.3438 4.92188L17.3857 4.67543L17.3857 4.67541L17.3854 4.67537L17.3845 4.67521L17.3812 4.67466L17.3688 4.67259L17.3216 4.66493C17.2805 4.65838 17.2207 4.64906 17.145 4.63792C16.9936 4.61563 16.7783 4.58598 16.5215 4.55634C16.0091 4.49718 15.3271 4.4375 14.6576 4.4375C13.2366 4.4375 12.0341 4.86906 11.1866 5.71737C10.3388 6.56593 9.875 7.80261 9.875 9.35625V11.75H7.07812H6.82812V12V15.4688V15.7188H7.07812H9.875V23.5582C4.40009 22.5582 0.25 17.7635 0.25 12C0.25 5.51065 5.51065 0.25 12 0.25C18.4894 0.25 23.75 5.51065 23.75 12Z"
                    fill="#1877F2"
                    stroke="#333333"
                    stroke-width="0.5"
                  />
                  <path
                    d="M10.125 15.2188H7.32812V12.25H10.125H10.375V12V9.35625C10.375 7.90239 10.807 6.8047 11.5403 6.07076C12.2738 5.33657 13.3376 4.9375 14.6576 4.9375C15.3008 4.9375 15.9618 4.99501 16.4643 5.05304C16.7151 5.08199 16.9251 5.11093 17.0723 5.13259C17.0796 5.13367 17.0867 5.13473 17.0938 5.13577V7.625H15.8306C15.0309 7.625 14.4655 7.87564 14.1047 8.29317C13.7497 8.70389 13.625 9.23916 13.625 9.75V12V12.25H13.875H16.9119L16.4565 15.2188H13.875H13.625V15.4688V23.6383C12.5468 23.7872 11.4532 23.7872 10.375 23.6383V15.4688V15.2188H10.125Z"
                    fill="#F4F4F4"
                    stroke="#333333"
                    stroke-width="0.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_354_3159">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>Continue with Facebook</p>
            </button>
            <button className={style.socialLoginBTN}>
              <svg
                className={style.loginBtnSocialIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none">
                <g clip-path="url(#clip0_354_3407)">
                  <path
                    d="M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_354_3407">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>Continue with Google</p>
            </button>
          </div>

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

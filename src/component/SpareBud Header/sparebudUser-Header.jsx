import React from "react";
import { Link } from "react-router-dom";

import PinkBtn from "../button/PinkBTN";
import style from "./sparebud-Header.module.css";

export default function SpareBudUserHeader() {
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
          <p className={style.spUserNavContainer}>Location</p>

          <p className={style.spUserNavContainer}>Message</p>

          <Link to="/NotificationSettings">
            <p className={style.spUserNavContainer}>Notification</p>
          </Link>

          <p className={style.spUserNavContainer}>Bookmark</p>

          <Link to="/NewUserProfile">
            <p className={style.spUserNavContainer}>
              <span className={style.spUserNavSvg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.35 18.5C8.66 17.56 10.26 17 12 17C13.74 17 15.34 17.56 16.65 18.5C15.34 19.44 13.74 20 12 20C10.26 20 8.66 19.44 7.35 18.5ZM18.14 17.12C16.45 15.8 14.32 15 12 15C9.68 15 7.55 15.8 5.86 17.12C4.7 15.73 4 13.95 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 13.95 19.3 15.73 18.14 17.12Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M12 6C10.07 6 8.5 7.57 8.5 9.5C8.5 11.43 10.07 13 12 13C13.93 13 15.5 11.43 15.5 9.5C15.5 7.57 13.93 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </span>
              <p>Ayodeji</p>
              <span className={style.spUserNavSvg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M4.07992 8.95011L10.5999 15.4701C11.3699 16.2401 12.6299 16.2401 13.3999 15.4701L19.9199 8.95011"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </p>
          </Link>

          <Link to={"/ItemDescription"}>
            <PinkBtn name="Start Listing" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

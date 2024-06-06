import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import style from "./profile.module.css";

export default function Notification() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.newUserXContainer}>
        <ul className={style.newUserOptionsContainer}>
          <li>All</li>
          <li>Unread</li>
          <li>Read</li>
          <li>Settings</li>
        </ul>

        <div className={style.notificationContainer}>
          <h1>Notifications</h1>
          <div className={style.unreadNotification}>
            <img src="/assets/img/small-profile-pc.png" alt="" />
            <p>
              <span>John Doe </span>
              bookmarked your last listing;
              <span> itel ISG-65 600W.</span>
            </p>
          </div>
          <div className={style.readNotification}>
            <img src="/assets/img/small-profile-pc.png" alt="" />
            <p>
              <span>John Doe </span>
              bookmarked your last listing;
              <span> itel ISG-65 600W.</span>
            </p>
          </div>

          <div className={style.unreadNotification}>
            <img src="/assets/svg/mail_outline.png" alt="" />
            <p>
              You have an unread message from
              <span> John Doe.</span>
            </p>
          </div>

          <div className={style.unreadNotification}>
            <div className={style.notificationUserIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M13.73 21.5C13.5542 21.8031 13.3018 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              Your request to borrow <span> itel ISG-65 600W </span> has been
              accepted. Connect with the lender to coordinate pickup details.
            </p>
          </div>

          <div className={style.unreadNotification}>
            <div className={style.notificationUserIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M13.73 21.5C13.5542 21.8031 13.3018 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              <span>Friendly reminder: </span>Your borrowed
              <span>itel ISG-65 600W </span> is due for return in 2 days. Plan
              accordingly.
            </p>
          </div>

          <div className={style.readNotification}>
            <div className={style.notificationUserIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M13.73 21.5C13.5542 21.8031 13.3018 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              <span>Important update: </span> Your request to borrow{" "}
              <span> itel ISG-65 600W </span>has been declined. Explore other
              items available for lending.
            </p>
          </div>

          <div className={style.readNotification}>
            <div className={style.notificationUserIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M13.73 21.5C13.5542 21.8031 13.3018 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              <span>Request received: </span>The borrower of your{" "}
              <span> itel ISG-65 600W </span>has requested an extension. Review
              and confirm if possible.
            </p>
          </div>

          <div className={style.readNotification}>
            <div className={style.notificationUserIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M13.73 21.5C13.5542 21.8031 13.3018 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              <span>Share your experience: </span> Rate and review the recent
              borrowing or lending experience of
              <span> itel ISG-65 600W. </span>Your feedback is valuable!
            </p>
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

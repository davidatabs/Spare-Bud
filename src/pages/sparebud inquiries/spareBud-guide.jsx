import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../component/SpareBud Header/sparebud-Header";
import style from "./sparebud-inquiries.module.css";

export default function SpareBudGuide() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.spareBudGuideContainer}>
        <h1>How SpareBud Works</h1>

        <div className={style.spareBudGuides}>
          <div className={style.spareBudGuide}>
            <h3>Explore Items</h3>
            <li>
              Borrowers: browse through a diverse range of items available for
              lending.
            </li>
            <li>
              Lenders: List items you’re willing to lend or sell off with clear
              images and descriptions
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Request To Borrow</h3>
            <li>Borrowers: Send a borrowing request for the desired item.</li>
            <li> Lenders: Receive and review incoming borrowing requests.</li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Lender Acceptance</h3>
            <li>Borrowers: Get notified when your request is accepted.</li>
            <li>
              Lenders: Accept requests based on availability and lending
              criteria.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Coordinate Pickup</h3>
            <li>
              Borrowers and Lenders: Communicate and coordinate a convenient
              pickup location and time.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Borrower Enjoyment</h3>
            <li>
              Borrowers: Enjoy the borrowed item for the agreed-upon duration.
            </li>
            <li>Lenders: Ensure a positive borrowing experience for users.</li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Return Process</h3>
            <li>
              Borrowers: Return the item on or before the agreed-upon date.
            </li>
            <li>
              Lenders: Verify the returned item's condition and mark the
              transaction as complete.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Optional Extension</h3>
            <li>
              Borrowers and Lenders: Optionally request or grant extensions for
              longer-term lending arrangements.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Rate And Review</h3>
            <li>
              Borrowers and Lenders: Share your experiences by providing ratings
              and reviews for each transaction.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Safety And Guidelines</h3>
            <li>
              Familiarize yourself with safety guidelines and platform policies
              to ensure a secure borrowing and lending environment.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Explore More</h3>
            <li>
              Continue exploring and participating in the borrowing and lending
              community. Discover new items and build positive connections.
            </li>
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

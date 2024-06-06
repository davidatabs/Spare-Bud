import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../component/SpareBud Header/sparebud-Header";
import style from "./sparebud-inquiries.module.css";

export default function AboutUs() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.spareBudGuideContainer}>
        <h1>About Us</h1>

        <div className={style.spareBudGuides}>
          <div className={style.spareBudGuide}>
            <h3>Our Mission</h3>
            <li>
              SpareBud is on a mission to simplify borrowing and lending,
              fostering a community where resources are shared, connections are
              made, and sustainability is prioritized.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Why Choose Us</h3>
            <li>
              Community-Centric: Connect, share, and benefit from a
              collaborative community
            </li>
            <li>
              Safety First: Secure transactions and guarantees for a worry-free
              experience.
            </li>
            <li>
              Transparent and Fair: Clear guidelines ensure transparency and
              fairness.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Our Story</h3>
            <li>
              SpareBud started with a vision to revolutionize borrowing and
              lending. Discover our journey, challenges, and milestones that led
              to this unique community.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Join Us</h3>
            <li>
              Be part of our community! Whether you're a borrower, lender, or
              both, join us in making a positive impact through shared
              resources.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Borrower Enjoyment</h3>
            <li>
              Have questions or suggestions? Reach out to our team at
              Support.helpdesk@sparebud.com
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Connect With Us</h3>
            <li>
              Follow us on facebook, twitter and instagram for updates and
              subscribe to our newsletter for exclusive insights and offers.
            </li>
          </div>

          <h2>Thank you for being part of SpareBud.</h2>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

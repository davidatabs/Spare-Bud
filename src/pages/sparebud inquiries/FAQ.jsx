import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../component/SpareBud Header/sparebud-Header";
import style from "./sparebud-inquiries.module.css";

export default function FAQ() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.spareBudGuideContainer}>
        <h1>Frequent Asked Questions</h1>

        <div className={style.spareBudGuides}>
          <div className={style.spareBudGuide}>
            <h3>1. What is SpareBud?</h3>
            <p>
              SpareBud is a community-driven borrowing and lending platform
              where users can easily share items with others. Whether you need a
              tool for a weekend project or want to lend out rarely used items,
              our platform facilitates secure and collaborative sharing.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>2. How Does SpareBud Works?</h3>
            <p>
              It's simple! Users can create profiles, browse available items,
              request to borrow, and arrange pick-up or delivery. Lenders can
              list items, review borrower requests, and contribute to building a
              sharing community.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>3. Is It Safe To Borrow And Lend On SpareBud?</h3>
            <p>
              Absolutely. We prioritize safety and security. Our platform
              includes user reviews, secure transaction processes, and clear
              guidelines to ensure a positive and secure sharing experience.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>4. What Items Can I Lend Or Borrow?</h3>
            <p>
              SpareBud supports a wide range of items, from tools and
              electronics to outdoor gear. If you have something useful that
              you're willing to share, chances are someone in the community will
              find it valuable.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>5. How Can I Ensure The Condition Of Borrowed Items?</h3>
            <p>
              Lenders can set clear guidelines for item usage, and borrowers are
              encouraged to treat borrowed items with care. Our review system
              helps build a trustworthy community.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>6. What Happens If An Item Is Damaged?</h3>
            <p>
              In the event of damage, users should communicate promptly. Our
              support team is here to assist in resolving any disputes and
              ensuring a fair resolution.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>7. How Can I Contact SpareBud Support?</h3>
            <p>
              For any questions, concerns, or assistance, our support team can
              be reached at Support.helpdesk@sparebud.com. We're here to help
              make your sharing experience smooth and enjoyable.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>8. How Do I Create an Account?</h3>
            <p>
              Creating an account is easy! Simply click on [Register/Sign-Up]
              and follow the straightforward steps. Joining the SpareBud
              community takes only a few minutes.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>9. Is SpareBud Available in My Area?</h3>
            <p>
              Yes!!! SpareBud users are all over Nigeria. Use the filter buttons
              to bring items near your location.{" "}
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>10. How Can I Contribute to the SpareBud Community?</h3>
            <p>
              Share the love! Spread the word about [Your Platform Name] to
              friends and family. The more people join, the more vibrant and
              useful our sharing community becomes.
            </p>
          </div>

          <p>
            Note: This FAQ is intended to provide general information. For
            detailed inquiries or assistance, please contact our support team.
          </p>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

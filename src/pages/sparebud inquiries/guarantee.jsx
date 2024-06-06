import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../component/SpareBud Header/sparebud-Header";
import style from "./sparebud-inquiries.module.css";

export default function Guarantee() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.spareBudGuideContainer}>
        <h1>Guarantee/Insurance</h1>

        <div className={style.spareBudGuides}>
          <div className={style.spareBudGuide}>
            <h3>Safe Transactions</h3>
            <li>
              All transactions on our platform are secured and monitored to
              ensure a safe borrowing and lending experience.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Item Condition Assurance</h3>
            <li>
              We guarantee that items listed on our platform are accurately
              described. Lenders are encouraged to provide detailed information,
              and borrowers can expect items to match their descriptions.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Lender Protection</h3>
            <li>
              Lenders are protected against damages beyond normal wear and tear.
              Our platform offers coverage for unexpected incidents, providing
              peace of mind to item owners.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Borrower Coverage</h3>
            <li>
              Borrowers are covered in case of accidental damage to the borrowed
              item. Our insurance policy ensures fair resolution in the event of
              unforeseen circumstances.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Transaction Resolution Support</h3>
            <li>
              Our dedicated support team is here to assist in case of disputes.
              We work to mediate and resolve issues, ensuring a fair outcome for
              both parties.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Secure Payment Processing</h3>
            <li>
              Payments are processed securely through our platform, reducing the
              risk of fraudulent activities.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Insurance Premiums</h3>
            <li>
              A small insurance premium may be included in the transaction cost
              to cover potential damages. This ensures a fair and reliable
              insurance system for all users.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Claim Processes</h3>
            <li>
              In the rare event of an issue, our clear and transparent claims
              process will guide users through the necessary steps to resolve
              the matter promptly.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>24/7 Support</h3>
            <li>
              Our customer support team is available around the clock to assist
              with any questions, concerns, or issues you may encounter during
              your borrowing or lending experience.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>User Ratings and Reviews</h3>
            <li>
              User ratings and reviews contribute to the community's
              transparency. High-rated users may benefit from reduced insurance
              premiums.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Continuous Improvement</h3>
            <li>
              We continuously work to enhance our guarantee and insurance
              policies based on user feedback and industry best practices.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>Terms And Conditions</h3>
            <li>
              Familiarize yourself with our platform's terms and conditions
              related to guarantee and insurance coverage. Clear understanding
              helps in making informed decisions.
            </li>
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../component/SpareBud Header/sparebud-Header";
import style from "./sparebud-inquiries.module.css";

export default function Terms() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.spareBudGuideContainer}>
        <h1>Terms Of Use</h1>

        <div className={style.spareBudGuides}>
          <div className={style.spareBudGuide}>
            <h3>Terms Of Use</h3>
            <p>
              Welcome to SpareBud! By accessing and using our platform, you
              agree to comply with and be bound by the following Terms of Use.
              If you disagree with any part of these terms, please refrain from
              using our services.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>1. Acceptance Of Terms:</h3>
            <p>
              By using [Your Platform Name], you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Use. These
              terms may be updated, and continued use constitutes acceptance of
              any changes.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>2. User Eligibility:</h3>
            <p>
              Users must be at least 18 years old to create an account and use
              our services. By accessing or using the platform, you confirm that
              you meet this eligibility requirement.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>3. User Account:</h3>
            <li>
              Registration: Users are required to create an account with
              accurate and up-to-date information.
            </li>
            <li>
              Account Security: Users are responsible for maintaining the
              confidentiality of their account credentials and are liable for
              any activity under their account.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>4. Borrowing And Lending :</h3>
            <li>
              Item Listings: Lenders are responsible for providing accurate and
              truthful information about items listed on the platform.
            </li>
            <li>
              Transactions: Users agree to fulfill their obligations in
              confirmed transactions promptly and responsibly.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>5. Prohibited Conduct:</h3>
            <p>
              Users must not engage in any activity that violates applicable
              laws, infringes on the rights of others, or violates these Terms
              of Use. Prohibited activities include but are not limited to
              fraud, harassment, and the use of the platform for illegal
              purposes.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>6. Content Ownership:</h3>
            <p>
              Users retain ownership of the content they submit to [Your
              Platform Name]. By submitting content, users grant SpareBud a
              non-exclusive, worldwide, royalty-free license to use, display,
              and distribute the content.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>7. Platform Modifications:</h3>
            <p>
              SpareBud eserves the right to modify or discontinue any aspect of
              the platform at any time. This includes but is not limited to
              features, functionality, and availability.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>8. Privacy Policy:</h3>
            <p>
              Use of SpareBud is also governed by our Privacy Policy. Please
              review this policy to understand how we collect, use, and protect
              your personal information.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>9. Termination Of Account:</h3>
            <p>
              SpareBud reserves the right to terminate or suspend user accounts
              at its discretion, especially in cases of violation of these Terms
              of Use.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>10. Contact Us:</h3>
            <p>
              For any questions, concerns, or assistance, our support team can
              be reached at Support.helpdesk@sparebud.com. We're here to help
              make your sharing experience smooth and enjoyable.
            </p>
          </div>

          <p>
            Note: These Terms of Use are a general guideline. For specific
            details and legal implications, consult with legal professionals.
          </p>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

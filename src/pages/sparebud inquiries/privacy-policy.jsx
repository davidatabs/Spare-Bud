import React from "react";

import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudHeader from "../../component/SpareBud Header/sparebud-Header";
import style from "./sparebud-inquiries.module.css";

export default function PrivacyPolicy() {
  return (
    <div>
      <SpareBudHeader />
      <div className={style.spareBudGuideContainer}>
        <h1>Privacy Policy</h1>

        <div className={style.spareBudGuides}>
          <div className={style.spareBudGuide}>
            <h3>Last Updated: 22/11/2020</h3>
            <p>
              SpareBud is committed to protecting the privacy of our users. This
              Privacy Policy outlines how we collect, use, disclose, and protect
              your personal information when you use our platform.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>1. Information We Collect:</h3>
            <li>
              Account Information: When you create an account, we collect your
              name, email address, and other necessary details to provide you
              with our services.
              <li>
                Profile Information: Users may choose to provide additional
                information, such as a profile picture or location, to enhance
                their experience.
              </li>
              <li>
                Transaction Details: For secure borrowing and lending, we
                collect transaction information, including details about items
                borrowed and lent.
              </li>
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>2. How We Use Your Information:</h3>
            <li>
              Service Delivery: We use your information to provide, personalize,
              and improve our services, ensuring a seamless borrowing and
              lending experience.
            </li>
            <li>
              Communication: We may contact you with platform updates,
              newsletters, or important service-related announcements.{" "}
            </li>
            <li>
              Community Safety: Your information helps us maintain a safe and
              secure environment by verifying accounts and monitoring
              transactions.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>3. Sharing Your Information:</h3>
            <li>
              With Other Users: Basic profile information and transaction
              details are shared with other users to facilitate borrowing and
              lending.
            </li>
            <li>
              Third-Party Service Providers: We may use trusted third-party
              services to enhance our platform, and your information may be
              shared with them for this purpose.{" "}
            </li>
            <li>
              Legal Compliance: We may disclose your information as required by
              law or in response to legal requests.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>4. Your Choices:</h3>
            <li>
              Account Settings: Users can update their account information and
              privacy settings at any time.
            </li>
            <li>
              Communication Preferences: You can choose to receive or opt-out of
              certain communications through your account settings.
            </li>
          </div>

          <div className={style.spareBudGuide}>
            <h3>5. Security Measures:</h3>
            <p>
              We implement security measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>6. Cookies:</h3>
            <p>
              We use cookies to enhance your experience on our platform. You can
              adjust your browser settings to control or disable cookies.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>7. Children’s Privacy</h3>
            <p>
              Our platform is not intended for users under the age of 13. We do
              not knowingly collect personal information from children.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>8. Changes To This Policy:</h3>
            <p>
              We may update this Privacy Policy periodically. Users will be
              notified of any significant changes.
            </p>
          </div>

          <div className={style.spareBudGuide}>
            <h3>9. Contact Us:</h3>
            <p>
              For any questions, concerns, or assistance, our support team can
              be reached at Support.helpdesk@sparebud.com. We're here to help
              make your sharing experience smooth and enjoyable.
            </p>
          </div>

          <p>
            Note: This Privacy Policy is a general guideline. For specific
            details and legal implications, consult with legal professionals.
          </p>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

import React from "react";
import PinkBtn from "../../component/button/PinkBTN";
import TransparentBtn from "../../component/button/TransparentBTN";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";

import style from "./listing.module.css";

export default function Summary() {
  return (
    <div>
      <SpareBudUserHeader />

      <div className={style.proceedsContainer}>
        <div className={style.proceed}>
          <div className={style.checkedProceed}>1</div>
          <p>Item description</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.checkedProceed}>2</div>
          <p>Pricing</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.checkedProceed}>3</div>
          <p>Location</p>
        </div>
        <span className={style.horizontalLine}></span>

        <div className={style.proceed}>
          <div className={style.checkedProceed}>4</div>
          <p>Summary</p>
        </div>
      </div>

      <form action="" className={style.SummaryForm}>
        <h1>Summary</h1>

        <div className={style.summaryCardsContainer}>
          <div className={style.column1}>
            <p>Edit</p>
            <div className={style.summarycard1}>
              <div className={style.headImg}>
                <img src="/assets/img/start listing/image-1.jpg" alt="" />
              </div>

              <div className={style.bodyImg}>
                <img src="/assets/img/start listing/image-2.jpg" alt="" />
                <img src="/assets/img/start listing/image-3.png" alt="" />
                <img src="/assets/img/start listing/image-4.png" alt="" />
              </div>

              <div className={style.card1info}>
                <div className={style.card1Detail}>
                  <h3>Name of item:</h3>
                  <p>Camping Stove</p>
                </div>

                <div className={style.card1Detail}>
                  <h3>Category:</h3>
                  <p>Camping gears</p>
                </div>

                <div className={style.card1Detail}>
                  <h3>Description:</h3>
                  <p>
                    A portable bonfire stainless steel heater mini fire wood
                    stove.
                  </p>
                </div>

                <div className={style.card1Detail}>
                  <h3>Sub category:</h3>
                  <p>Appliances</p>
                </div>

                <div className={style.card1Detail}>
                  <h3>Price for rent:</h3>

                  <div className={style.card1Price}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.25 9V1.25H1.5L6.5 8.75H6.75V1M0 3.75H8M0 6.25H8"
                        stroke="#1E1E1E"
                      />
                    </svg>

                    <p>200/day</p>
                  </div>

                  <div className={style.card1Price}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.25 9V1.25H1.5L6.5 8.75H6.75V1M0 3.75H8M0 6.25H8"
                        stroke="#1E1E1E"
                      />
                    </svg>

                    <p>1200/week</p>
                  </div>

                  <div className={style.card1Price}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.25 9V1.25H1.5L6.5 8.75H6.75V1M0 3.75H8M0 6.25H8"
                        stroke="#1E1E1E"
                      />
                    </svg>

                    <p>12,000/month</p>
                  </div>

                  <div className={style.card1Price}>
                    <p>For Sale:</p>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.25 9V1.25H1.5L6.5 8.75H6.75V1M0 3.75H8M0 6.25H8"
                        stroke="#1E1E1E"
                      />
                    </svg>

                    <p>24,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.column2}>
            <p>Edit</p>
            <div className={style.summarycard2}>
              <img
                src="/assets/img/start listing/Basemap image.png"
                className={style.summarycard2Img}
                alt=""
              />

              <div className={style.itemMapDetails}>
                <div>
                  <h3>Address:</h3>
                  <p>T-one Street, Obafemi Awolowo Road.</p>
                </div>

                <div>
                  <h3>State:</h3>
                  <p>Lagos</p>
                </div>

                <div>
                  <h3>City/Town:</h3>
                  <p>Ikeja</p>
                </div>

                <div>
                  <h3>Nearest Landmark:</h3>
                  <p>Governor’s Office</p>
                </div>
              </div>
            </div>

            <div className={style.summarybtnContainer}>
              <TransparentBtn name="Cancel" />
              <PinkBtn name="Publish" />
            </div>
          </div>
        </div>
      </form>

      <SpareBudFooter />
    </div>
  );
}

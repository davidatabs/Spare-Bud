import ProductItem from "../../component/HomePage Product/product-item";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import PinkBtn from "../../component/button/PinkBTN";
import style from "./home-page.module.css";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.landingPageSlider}>
        <div className={style.sliderSection}>
          <h1>
            Rent <span>Anything</span> From People Around You.
          </h1>
          <p className={style.sliderSectionDescription}>
            SpareBud helps you make & save money with peer-to-peer tools and
            gadgets rental in your.
          </p>
          <div className={style.landingPageInputContainer}>
            <svg
              className={style.landingPageInputSvg}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="vuesax/outline/search-normal">
                <g id="search-normal">
                  <path
                    id="Vector"
                    d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                    fill="#D5D5D5"
                  />
                  <path
                    id="Vector_2"
                    d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
                    fill="#D5D5D5"
                  />
                </g>
              </g>
            </svg>

            <input
              type="text"
              name=""
              id={style.landingPageInputField}
              placeholder="Cameras, bicycle, chains...."
            />
            <button className={style.landingPageInputBtn}>Search</button>
          </div>
          <div className={style.landingPageSliderLastBtn}>
            <p>Or</p>
            <button className={style.landingPageListItemBtn}>List Item</button>
          </div>
        </div>
      </div>

      <div className={style.newProducts}>
        <h1>Newly Added</h1>
        <div className={style.itemContainer}>
          <ProductItem
            img={"/assets/img/item1.jpg"}
            name={"10inches 26cm Ring light"}
            description={"Fill light bracket LED ring light with tripod stand."}
            dailyPrice={"200/day"}
            weeklyPrice={"200/week"}
            monthlyPrice={"200/month"}
            profileImg={"/assets/img/item1ProfileImg.jpg"}
            currentSalePrice={"4500"}
          />

          <ProductItem
            img={"/assets/img/item2.jpg"}
            name={"itel ISG-65 600W"}
            description={"Portable Solar Generator."}
            dailyPrice={"500/day"}
            weeklyPrice={"3000/week"}
            monthlyPrice={"10,000/month"}
            profileImg={"/assets/img/item2ProfileImg.jpg"}
            currentSalePrice={"1,300,000"}
          />

          <ProductItem
            img={"/assets/img/item3.jpg"}
            name={"Vacuum Cleaner"}
            description={
              "Its a multipurpose electric air blower, vacuum cleaner, duster and also in a....."
            }
            dailyPrice={"200/day"}
            weeklyPrice={"500/week"}
            monthlyPrice={"4,000/month"}
            profileImg={"/assets/img/item3ProfileImg.jpg"}
            currentSalePrice={"50, 000"}
          />

          <ProductItem
            img={"/assets/img/item4.jpg"}
            name={"Washing Machine "}
            description={"Hisense 5kg top load twin tub washing, machine."}
            dailyPrice={"1000/day"}
            weeklyPrice={"2000/week"}
            monthlyPrice={"0"}
            profileImg={"/assets/img/item4ProfileImg.jpg"}
            currentSalePrice={"50,000"}
          />
          <ProductItem
            img={"/assets/img/item5.jpg"}
            name={"Printer"}
            description={
              "All in one wireless home $ office printer, Canon PIXMA TS3440. Recently bought..."
            }
            dailyPrice={"200/day"}
            weeklyPrice={"0"}
            monthlyPrice={"0"}
            profileImg={"/assets/img/item5ProfileImg.jpg"}
            currentSalePrice={"1000"}
          />

          <ProductItem
            img={"/assets/img/item6.jpg"}
            name={"Recumbent Exercise Bike "}
            description={"In very good condition."}
            dailyPrice={"4,000/day"}
            weeklyPrice={"15,000/week"}
            monthlyPrice={""}
            profileImg={"/assets/img/item6ProfileImg.jpg"}
            currentSalePrice={"85,000"}
          />

          <ProductItem
            img={"/assets/img/item7.jpg"}
            name={"Acoustic Box Guitar "}
            description={"A wooden box acoustic guitar, just 3 months old"}
            dailyPrice={"500/day"}
            weeklyPrice={"1000/day"}
            monthlyPrice={""}
            profileImg={"/assets/img/item7ProfileImg.jpg"}
            currentSalePrice={"10,000"}
          />

          <ProductItem
            img={"/assets/img/item8.jpg"}
            name={"Ladder"}
            description={"4 steps multipurpose ladder for home and offices."}
            dailyPrice={"200/day"}
            weeklyPrice={"800/week"}
            monthlyPrice={""}
            profileImg={"/assets/img/item8ProfileImg.jpg"}
            currentSalePrice={"5,000"}
          />

          <ProductItem
            img={"/assets/img/item9.jpg"}
            name={"Rich Dad Poor Dad"}
            description={
              "A novel by Robert a world bestselling author on finances."
            }
            dailyPrice={"50/day"}
            weeklyPrice={"200/week"}
            monthlyPrice={""}
            profileImg={"/assets/img/item5ProfileImg.jpg"}
            currentSalePrice={"1000"}
          />

          <ProductItem
            img={"/assets/img/item10.jpg"}
            name={"Santa Claus costume"}
            description={
              "Christmas adult santa claus costume cosplay suit, Size M and complete out..."
            }
            dailyPrice={"2000/day"}
            weeklyPrice={"6000/week"}
            monthlyPrice={""}
            profileImg={"/assets/img/item5ProfileImg.jpg"}
            currentSalePrice={"15,000"}
          />

          <ProductItem
            img={"/assets/img/item11.jpg"}
            name={"Chain $ pendant "}
            description={
              "Original quality iced out cuban gold steel chain and pendant."
            }
            dailyPrice={"4000/day"}
            weeklyPrice={""}
            monthlyPrice={""}
            profileImg={"/assets/img/item7ProfileImg.jpg"}
            currentSalePrice={"45,000"}
          />

          <ProductItem
            img={"/assets/img/item12.jpg"}
            name={"Aluminum pot (Koko Irin)"}
            description={
              "Available in different sizes. Price varies on size borrowed."
            }
            dailyPrice={"1000/day"}
            weeklyPrice={"4000/week"}
            monthlyPrice={""}
            profileImg={"/assets/img/item8ProfileImg.jpg"}
            currentSalePrice={"20,000"}
          />
        </div>
        <PinkBtn name={"Load More"} />
      </div>
      <SpareBudFooter />
    </div>
  );
}

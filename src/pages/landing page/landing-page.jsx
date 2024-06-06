import React from "react";

import { Link } from "react-router-dom";
import CategoryProduct from "../../component/Category Product/categoryProduct";
import style from "./landing-page.module.css";
import PinkBtn from "../../component/button/PinkBTN";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";

export default function LandingPage() {
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
          <span>Process</span>

          <Link to="/Guarantee">
            <span>Guarantee/Insurance</span>
          </Link>
          <Link to="/Faq">
            <span>FAQs</span>
          </Link>
          <button className={style.login}>Login</button>
          {/* <button className={style.signUp}>Sign Up</button> */}
          <Link to="/signup">
            <PinkBtn name="Sign Up" />
          </Link>
        </nav>
      </div>

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

      <div className={style.exploreCategory}>
        <h1>Explore Our Categories</h1>
        <div className={style.categories}>
          <Link to="/Sports">
            <CategoryProduct
              img="/assets/img/landing-Page/Sport-Category.jpg"
              description="Sports"
            />
          </Link>

          <Link to="/CampingGear">
            <CategoryProduct
              img="/assets/img/landing-Page/Camping-Category.jpg"
              description="Camping gears"
            />
          </Link>

          <Link to="/Vehicle">
            <CategoryProduct
              img="/assets/img/landing-Page/Vehicle-Category.jpg"
              description="Vehicles"
            />
          </Link>

          <Link to="/MusicalInstrument">
            <CategoryProduct
              img="/assets/img/landing-Page/Music-Instrument-Category.jpg"
              description="Musical Instruments"
            />
          </Link>

          <Link to="/CostumesJewelries">
            <CategoryProduct
              img="/assets/img/landing-Page/Costumes-Category.jpg"
              description="Costumes & Jewelries"
            />
          </Link>

          <Link to="/FarmEquipment">
            <CategoryProduct
              img="/assets/img/landing-Page/Farm-Category.jpg"
              description="Farm Equipments"
            />
          </Link>

          <Link to="/EducationMaterials">
            <CategoryProduct
              img="/assets/img/landing-Page/Education-Category.jpg"
              description="Educational Materials"
            />
          </Link>

          <Link to="/Games">
            <CategoryProduct
              img="/assets/img/landing-Page/Games-Category.jpg"
              description="Games"
            />
          </Link>

          <Link to="/ArtSupplies">
            <CategoryProduct
              img="/assets/img/landing-Page/Art-Category.jpg"
              description="Art Supplies"
            />
          </Link>

          <Link to="/Household">
            <CategoryProduct
              img="/assets/img/landing-Page/Household-Items-Category.jpg"
              description="Household Items"
            />
          </Link>

          <Link to="/FitnessSearch">
            <CategoryProduct
              img="/assets/img/landing-Page/Fitness-Equipment-Category.jpg"
              description="Fitness Equipment"
            />
          </Link>

          <Link to="/Gadgets">
            <CategoryProduct
              img="/assets/img/landing-Page/Gadgets-Category.jpg"
              description="Gadgets"
            />
          </Link>
        </div>
        <Link className={style.moreCategoriesLink} to="#">
          Show all categories
        </Link>
      </div>

      <div className={style.communicationConnectionContainer}>
        <h1>Community Connections: Stories Shared</h1>
        <div className={style.communityCommentContainer}>
          <div className={style.ccComment}>
            <img
              className={style.ccCommentImg}
              src="/assets/img/landing-Page/customer-1.png"
              alt=""
            />
            <p>
              “Thanks to SpareBud, I've been able to borrow top-notch equipment
              from fellow photographers nearby.”
            </p>
            <div className={style.ccRating}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={style.ccComment}>
            <img
              className={style.ccCommentImg}
              src="/assets/img/landing-Page/customer-2.png"
              alt=""
            />
            <p>
              "I discovered SpareBud when I needed a specific power tool for a
              DIY project. It saved me a great hassle."
            </p>
            <div className={style.ccRating}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={style.ccComment}>
            <img
              className={style.ccCommentImg}
              src="/assets/img/landing-Page/customer-4.png"
              alt=""
            />
            <p>
              "I love using SpareBud! It's like having a community closet where
              you can borrow anything you need.!"
            </p>
            <div className={style.ccRating}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={style.ccComment}>
            <img
              className={style.ccCommentImg}
              src="/assets/img/landing-Page/customer-3.png"
              alt=""
            />
            <p>
              "SpareBud is a game changer and feels good to know that someone is
              enjoying the items I've shared on the platform."
            </p>
            <div className={style.ccRating}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    fill="#FFD964"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="filled">
                  <path
                    id="vector"
                    d="M12.4583 4.24721L14.7738 8.6929L15.1644 9.44293L16.0084 9.49694L20.4182 9.77917L17.1487 12.9179L16.5143 13.527L16.7359 14.378L17.976 19.1399L13.1419 16.6648L12.4583 16.3148L11.7747 16.6648L6.94069 19.1399L8.18075 14.378L8.40238 13.527L7.76796 12.9179L4.49843 9.77917L8.9083 9.49694L9.75223 9.44293L10.1429 8.6929L12.4583 4.24721Z"
                    stroke="#FFD964"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={style.landingPageSparebudGuide}>
        <h1>How SpareBud Works</h1>

        <div className={style.sbGuideboxContainer}>
          <div className={style.sbGuidebox}>
            <img
              className={style.sbGuideboxImg}
              src="/assets/svg/search magnifying glass.png"
              alt=""
            />
            <h4>Discover a World of Sharing</h4>
            <p>
              Explore a variety of items and tools available for lending in your
              local community.
            </p>
          </div>
          <div className={style.sbGuidebox}>
            <img
              className={style.sbGuideboxImg}
              src="/assets/svg/Send money.png"
              alt=""
            />
            <h4>Requesting is Easy and Quick</h4>
            <p>
              Select the item/tool you need and send a borrowing request to the
              owner.
            </p>
          </div>
          <div className={style.sbGuidebox}>
            <img
              className={style.sbGuideboxImg}
              src="/assets/svg/Payment processed.png"
              alt=""
            />
            <h4>Connecting for Shared Experiences</h4>
            <p>
              Once your request is accepted, coordinate with the owner for
              pick-up or delivery.
            </p>
          </div>
          <div className={style.sbGuidebox}>
            <img
              className={style.sbGuideboxImg}
              src="/assets/svg/like.png"
              alt=""
            />
            <h4>Return and Share</h4>
            <p>
              After use, return the item/tool to the owner. Consider leaving a
              review or sharing your experience..
            </p>
          </div>
          <div className={style.sbGuidebox}>
            <img
              className={style.sbGuideboxImg}
              src="/assets/svg/protect.png"
              alt=""
            />
            <h4>Ensuring Safe and Trustworthy Sharing</h4>
            <p>
              Our platform includes safety features, user reviews, and verified
              profiles to build trust among our community members.
            </p>
          </div>
          <div className={style.sbGuidebox}>
            <img
              className={style.sbGuideboxImg}
              src="/assets/svg/conference.png"
              alt=""
            />
            <h4>Join a Growing Community of Sharers</h4>
            <p>
              Contribute to a culture of sharing. Share your items, leave
              reviews, and help others in your community.
            </p>
          </div>
        </div>
      </div>

      <div className={style.startEarning}>
        <div className={style.startEarningLeftColumn}>
          <h1>Discover the Thrill of Sharing and Earning!</h1>
          <p>
            Explore our community-driven platform where sharing transforms into
            both a rewarding and enriching experience. Share your less-used
            items and tools, set your terms, and contribute to a trusted sharing
            culture. Earn credits for every successful transaction, build a
            reputation, and be part of a collaborative community where your
            contributions make a meaningful difference. Safety is our top
            priority. Ready to unlock the power of sharing and earning? Start
            lending now!
          </p>
          <PinkBtn name="Start Earning" />
        </div>
        <div className={style.startEarningRightColumn}>
          <svg
            width="501"
            height="489"
            viewBox="0 0 501 489"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M286.613 228.248C280.721 230.58 266.7 229.369 266.69 229.369C266.679 229.369 270.26 219.662 270.562 219.079C274.028 212.354 284.416 201.515 292.275 203.185C297.948 204.385 300.779 210.751 299.166 216.457C297.552 222.162 291.63 226.264 286.613 228.248Z"
              fill="#BC70C1"
            />
            <path
              d="M105.558 164.84C113.563 164.436 122.358 176.788 124.877 183.996C125.085 184.623 127.448 194.801 127.302 194.79H127.126C128.531 196.729 130.019 198.825 131.591 201.156C134.474 205.472 137.691 210.381 140.855 215.975C144.335 221.96 147.484 228.162 150.286 234.548C153.461 241.676 156.039 249.096 157.988 256.719L158.051 256.999C158.144 254.477 158.644 247.427 158.738 246.911C160.091 239.345 166.815 225.614 174.767 224.493C180.503 223.731 185.031 228.82 185.176 234.783C185.322 240.746 180.878 246.676 176.683 250.251C171.957 254.275 159.258 257.638 158.248 257.907C160.057 265.717 161.378 273.648 162.204 281.647C162.714 286.31 163.089 291.018 163.401 295.748C163.557 293.506 163.703 291.612 163.755 291.343C165.098 283.777 171.832 270.046 179.785 268.925C185.52 268.163 190.048 273.263 190.194 279.226C190.339 285.189 185.895 291.107 181.71 294.683C177.526 298.259 166.69 301.408 163.828 302.193C163.932 304.009 164.057 305.814 164.15 307.629C164.629 316.339 165.066 325.037 165.743 333.544C165.982 336.537 166.315 339.485 166.638 342.433C166.773 340.494 166.909 338.868 166.95 338.622C168.293 331.056 175.028 317.325 182.98 316.204C188.705 315.442 193.243 320.531 193.389 326.494C193.535 332.457 189.09 338.386 184.895 341.962C180.701 345.538 170.927 348.385 167.533 349.326C167.95 352.33 168.366 355.345 168.897 358.237C169.292 360.21 169.563 362.127 170.063 364.088C170.562 366.05 170.989 367.955 171.447 369.861C172.488 373.493 173.466 377.248 174.518 380.767C175.246 383.222 175.975 385.542 176.704 387.885C176.433 384.903 176.027 379.052 176.037 378.559C176.508 371.8 178.576 365.283 182.043 359.627C182.068 358.873 182.155 358.123 182.304 357.385C183.511 351.557 188.882 347.522 194.368 349.483C201.977 352.207 206.057 367.137 205.994 374.838C205.994 375.297 205.432 380.218 205.037 383.323C205.536 381.541 205.984 379.803 206.515 377.965C207.556 374.333 208.597 370.746 209.825 366.879L211.751 361.275C212.354 359.392 213.208 357.498 213.947 355.581C215.727 351.176 217.725 346.804 219.838 342.455C216.882 341.491 206.463 337.893 202.403 334.105C198.344 330.316 194.201 324.319 194.576 318.244C194.951 312.169 199.697 307.428 205.391 308.47C213.291 309.916 219.432 324.006 220.453 331.628C220.515 332.109 220.671 337.669 220.713 340.729C221.993 338.117 223.263 335.517 224.647 332.883C228.634 325.395 232.881 317.964 237.138 310.521C238.429 308.279 239.688 305.959 240.958 303.684C239.917 303.348 227.427 299.368 222.888 295.12C218.85 291.343 214.676 285.335 215.061 279.26C215.446 273.185 220.172 268.443 225.865 269.486C233.766 270.932 239.907 285.021 240.927 292.643C241.01 293.226 241.229 301.229 241.187 303.258C243.987 298.236 246.725 293.17 249.244 288.104C252.678 281.254 255.692 274.169 258.268 266.896C257.779 266.739 244.737 262.648 240.084 258.299C236.045 254.533 231.882 248.514 232.256 242.439C232.631 236.363 237.378 231.622 243.071 232.665C250.972 234.11 257.103 248.2 258.133 255.833C258.206 256.427 258.445 265.036 258.383 266.605C258.529 266.179 258.726 265.764 258.872 265.338C261.267 257.968 263.051 250.384 264.202 242.674C264.889 238.426 265.315 234.323 265.659 230.344C263.161 229.851 251.752 227.452 247.162 224.034C242.759 220.761 238.002 215.28 237.794 209.193C237.586 203.107 241.781 197.839 247.537 198.197C255.541 198.702 263.077 211.984 264.868 219.494C264.972 219.898 265.534 224.135 265.909 227.239C266.034 225.424 266.2 223.563 266.294 221.826C266.648 215.313 266.596 209.328 266.512 204.015C266.439 201 266.325 198.276 266.19 195.731C263.973 193.86 255.115 186.226 252.544 181.025C249.972 175.824 248.172 168.696 250.555 163.181C252.939 157.666 258.955 155.088 263.91 158.26C270.801 162.744 271.811 178.212 270.208 185.722C270.062 186.372 266.825 196.247 266.7 196.157L266.564 196.045C266.741 198.489 266.908 201.123 267.033 204.004C267.22 209.317 267.397 215.313 267.168 221.859C267 228.919 266.45 235.963 265.524 242.954C264.515 250.79 262.86 258.513 260.579 266.033C260.554 266.122 260.523 266.208 260.486 266.291C261.86 264.251 265.898 258.658 266.252 258.266C271.248 252.762 283.947 245.263 291.088 249.108C296.292 251.888 297.437 258.826 294.471 263.87C291.504 268.914 284.801 271.234 279.472 271.716C273.466 272.265 261.152 267.535 260.173 267.154C257.635 274.753 254.627 282.16 251.17 289.325C249.213 293.506 247.11 297.654 244.924 301.79C246.163 300.063 247.297 298.528 247.474 298.326C252.471 292.811 265.17 285.324 272.31 289.168C277.515 291.937 278.649 298.875 275.704 303.93C272.758 308.986 266.023 311.295 260.694 311.777C255.364 312.259 244.716 308.47 241.958 307.416C241.114 308.997 240.292 310.577 239.439 312.158C235.379 319.701 231.288 327.211 227.489 334.71C226.157 337.344 224.928 340.001 223.679 342.657C224.793 341.121 225.761 339.844 225.896 339.653C230.893 334.15 243.592 326.651 250.743 330.495C255.947 333.275 257.082 340.214 254.126 345.257C251.169 350.301 244.445 352.622 239.126 353.104C233.922 353.574 224.179 350.156 220.859 348.934C219.672 351.691 218.475 354.449 217.434 357.172C216.757 359.056 215.987 360.815 215.415 362.777C214.842 364.738 214.207 366.554 213.614 368.381C212.573 372.013 211.532 375.746 210.585 379.31C209.929 381.787 209.346 384.163 208.753 386.551C210.054 383.894 212.719 378.772 212.979 378.38C217.143 372.114 228.592 362.687 236.253 365.265C241.749 367.171 243.883 373.829 241.666 379.299C239.449 384.769 233.141 388.165 227.947 389.51C222.222 390.99 209.877 388.501 208.337 388.176C207.368 392.133 206.463 396.022 205.661 399.632C205.484 400.416 205.339 401.122 205.172 401.873H200.165C200.436 400.753 200.707 399.564 200.998 398.376C201.966 394.352 203.08 390.082 204.256 385.71C200.606 383.845 197.058 381.756 193.629 379.456C189.267 383.939 178.463 388.871 177.068 389.544C178.286 393.411 179.504 397.166 180.701 400.685L181.127 401.918H176.121C174.913 398.118 173.706 394.072 172.498 389.891C170.968 390.126 158.509 392.021 152.846 390.261C147.715 388.658 141.584 385.071 139.564 379.377C137.545 373.683 140.012 367.249 145.581 365.635C153.315 363.393 164.369 373.403 168.272 379.87C168.501 380.251 170.562 384.69 171.822 387.515C171.312 385.733 170.781 384.006 170.302 382.168C169.261 378.537 168.387 374.882 167.398 370.959C166.971 369.043 166.555 367.104 166.128 365.153C165.701 363.203 165.41 361.129 165.035 359.089C164.265 354.359 163.703 349.528 163.224 344.652C160.278 345.594 149.692 348.788 144.415 348.015C139.138 347.241 132.559 344.731 129.759 339.429C126.959 334.127 128.489 327.368 133.766 324.857C141.053 321.371 153.439 329.475 158.196 335.237C158.498 335.595 161.475 340.135 163.068 342.668C162.808 339.732 162.537 336.795 162.36 333.813C161.85 325.216 161.59 316.484 161.319 307.775C161.236 305.107 161.111 302.451 161.007 299.794C159.966 300.142 147.475 304.278 141.542 303.392C136.244 302.653 129.686 300.108 126.886 294.806C124.086 289.505 125.616 282.746 130.894 280.235C138.232 276.749 150.567 284.853 155.323 290.614C155.688 291.051 159.966 297.586 160.986 299.312C160.736 293.45 160.445 287.622 159.945 281.883C159.301 274.13 158.185 266.432 156.604 258.837C156.125 259.005 143.145 263.321 137.035 262.469C131.737 261.718 125.179 259.185 122.389 253.883C119.6 248.581 121.109 241.822 126.397 239.311C133.683 235.825 146.059 243.929 150.827 249.691C151.191 250.139 155.802 257.178 156.552 258.523C156.458 258.086 156.406 257.615 156.302 257.178C154.532 249.606 152.135 242.22 149.141 235.108C147.538 231.163 145.799 227.475 144.03 223.899C141.688 225.02 130.946 229.761 125.377 229.638C120.027 229.515 113.25 227.766 109.93 222.834C106.609 217.902 107.442 210.998 112.428 207.882C119.36 203.544 132.455 210.124 137.774 215.302C138.055 215.582 140.709 218.788 142.604 221.142C141.781 219.561 140.959 217.914 140.147 216.412C137.108 210.807 133.995 205.797 131.216 201.425C129.613 198.948 128.094 196.751 126.688 194.7C123.888 194.465 112.595 193.355 107.775 190.542C102.956 187.728 97.8242 182.864 96.9811 176.844C96.138 170.825 99.7915 165.098 105.558 164.84Z"
              fill="#BC70C1"
            />
            <path
              d="M144.405 222.352C144.28 222.431 142.417 212.141 142.323 211.48C141.761 203.791 144.884 188.591 152.295 185.318C157.635 182.953 163.256 186.574 164.786 192.29C166.316 198.007 163.557 204.99 160.393 209.619C156.75 215.067 144.415 222.341 144.405 222.352Z"
              fill="#BC70C1"
            />
            <path
              d="M139.969 383.132C139.969 383.132 108.409 382.706 101.029 369.995H18.5902C18.5902 369.995 25.2936 383.02 35.7026 383.132H139.969Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M98.6352 374.188H31.4764C31.4764 374.188 32.7255 377.124 29.3009 378.738C31.4597 380.886 34.1692 382.285 37.0764 382.751H122.576C122.576 382.751 111.688 381.63 105.786 377.931C105.786 377.931 98.9475 379.007 98.6352 374.188Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M127.52 484.74H316.984V459.498H127.52V484.74Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M23.253 484.74H212.718V459.498H23.253V484.74Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M211.406 466.235H165.138"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M202.278 471.85H135.161"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M175.558 476.894H187.289"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M191.858 476.894H210.75"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M24.3668 475.773H83.667"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M29.5824 472.411H37.3996"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M73.8937 471.85H47.8295"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M24.3668 465.114H47.173"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M314.372 470.158H302.641"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M316.985 475.773H280.491"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M214.665 479.136H232.266"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M212.707 470.158H260.287"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M301.34 462.872H273.975"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M109.731 484.18H131.892V459.498H109.731V484.18Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M125.085 459.296H314.549V434.054H125.085V459.296Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M20.8179 459.296H210.282V434.054H20.8179V459.296Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M208.971 440.779H162.703"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M199.852 446.384H132.724"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M173.132 451.439H184.863"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M189.423 451.439H208.326"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M21.9316 450.318H81.2423"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M27.1462 446.944H34.9634"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M71.4679 446.384H45.3933"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M21.9316 439.658H44.7482"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M311.947 444.702H300.216"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M314.549 450.318H278.055"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M212.24 453.681H229.831"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M210.282 444.702H257.852"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M298.915 437.417H271.539"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M107.306 458.736H129.467V434.054H107.306V458.736Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M132.787 433.841H322.252V408.599H132.787V433.841Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M28.5204 433.841H217.985V408.599H28.5204V433.841Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M216.673 415.324H170.405"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M207.545 420.928H140.428"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M180.824 425.984H192.555"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M197.125 425.984H216.018"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M29.634 424.863H88.9342"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M34.8486 421.489H42.6658"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M79.1599 420.928H53.0957"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M29.634 414.203H52.4402"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M319.639 419.247H307.908"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M322.252 424.863H285.758"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M219.931 428.225H237.533"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M217.975 419.247H265.554"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M306.607 411.961H279.242"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M114.999 433.281H137.159V408.599H114.999V433.281Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M126.906 408.374H316.371V383.132H126.906V408.374Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M22.6395 408.374H212.104V383.132H22.6395V408.374Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M210.803 389.869H164.524"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M201.674 395.473H134.546"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M174.954 400.517H186.685"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M191.245 400.517H210.147"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M23.7532 399.396H83.0638"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M28.9678 396.034H36.7954"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M73.2894 395.473H47.2148"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M23.7532 388.748H46.5697"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M313.768 393.792H302.037"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M316.371 399.396H279.877"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M214.061 402.77H231.652"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M212.104 393.792H259.673"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M300.737 386.495H273.361"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M109.128 407.814H131.289V383.132H109.128V407.814Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M467.178 98.5394H285.812V484.752H467.178V98.5394Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M447.568 100.299V167.16"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M459.008 117.012V145.168"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M453.293 110.858V211.144"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M463.098 98.5394V229.627"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M449.202 483.866V415.246"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M455.739 484.752V469.788"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M457.373 464.508V403.813"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M450.024 406.447V307.035"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M441.853 98.5394H260.487V484.752H441.853V98.5394Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M426.334 125.867C422.789 125.858 419.382 124.389 416.811 121.76C414.241 119.132 412.702 115.544 412.51 111.732H289.851C289.664 115.55 288.124 119.144 285.548 121.774C282.972 124.404 279.557 125.869 276.007 125.867C275.186 125.865 274.368 125.782 273.561 125.62V449.802C274.368 449.646 275.187 449.564 276.007 449.556C278.405 449.556 280.762 450.224 282.849 451.497C284.936 452.769 286.681 454.602 287.915 456.816C289.149 459.031 289.829 461.552 289.889 464.133C289.949 466.715 289.387 469.269 288.258 471.548H414.082C412.95 469.27 412.386 466.715 412.444 464.132C412.503 461.549 413.183 459.027 414.417 456.811C415.651 454.595 417.398 452.762 419.487 451.491C421.575 450.219 423.934 449.553 426.334 449.556C427.154 449.564 427.972 449.646 428.78 449.802V125.564C427.975 125.745 427.156 125.846 426.334 125.867ZM347.496 350.145C318.84 350.145 295.617 322.974 295.617 289.449C295.617 255.923 318.84 228.742 347.496 228.742C376.152 228.742 399.374 255.923 399.374 289.449C399.374 322.974 376.141 350.145 347.496 350.145Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M466.845 268.331H261.299V307.921H466.845V268.331Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M466.845 268.331H442.249V307.921H466.845V268.331Z"
              fill="#2B2B2B"
              stroke="#808080"
              stroke-miterlimit="10"
            />
            <path
              d="M62.4327 460.731L56.3747 470.517L44.5397 480.605V484.763H85.0202L83.6359 470.191V463.668C83.6359 463.668 67.1168 455.979 62.4327 460.731Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M84.6559 480.896H44.5397V484.752H85.0202L84.6559 480.896Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M129.279 460.731L135.733 470.517L148.359 480.605V484.763H105.214L106.681 470.191V463.668C106.681 463.668 124.293 455.979 129.279 460.731Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M105.599 480.896H148.359V484.752H105.214L105.599 480.896Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M44.3737 257.772C44.3737 257.772 53.825 372.641 54.5016 394.453C55.1782 416.266 61.5901 445.711 61.5901 445.711L58.6027 450.8L61.6422 462.065C61.6422 462.065 68.7307 460.249 72.4467 461.706C76.1627 463.163 82.8557 464.979 82.8557 464.979C82.8557 464.979 86.2386 455.16 86.5717 450.8C86.9048 446.44 82.5434 435.892 82.5434 435.892L81.8668 304.67H87.9457L103.455 443.525L102.779 451.887L105.818 464.979C105.818 464.979 123.711 460.978 125.054 460.608C126.079 460.441 127.128 460.569 128.093 460.978C128.093 460.978 130.175 456.248 130.175 454.79C130.175 453.333 127.469 444.983 127.469 444.983L126.792 379.915V256.685L44.4257 254.869L44.3737 257.772Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M123.888 308.504L125.73 351.96L117.871 352.723V358.114L123.586 358.495"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M122.514 276.177L123.711 304.244"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M119.078 383.906C119.338 391.673 119.911 398.41 121.087 398.881C123.95 400.002 124.657 401.19 124.657 401.19"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M118.974 359.65C118.974 359.65 118.787 369.469 118.974 379.288"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M73.5806 300.792L87.8617 301.947"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M78.223 263.87L78.5769 285.402L85.0097 290.413"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M85.0101 271.559L86.0823 298.102"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M80.5964 394.666L81.0752 421.197"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M78.9308 302.328L80.4817 388.109"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M107.868 275.023C107.868 275.023 112.875 286.176 122.16 282.712"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M57.8638 275.023C57.8638 275.023 54.2831 283.485 48.5686 284.64"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.0772 129.599L68.3455 133.096L59.3522 257.29L106.786 258.109L109.284 130.406L79.0772 129.599Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M75.2573 124.746H72.7383L71.4684 128.288L71.9784 158.271L87.6752 147.376L103.112 163.181L105.141 127.469C105.141 127.469 105.901 125.833 103.622 124.746C101.342 123.658 100.582 123.378 100.582 123.378L75.2573 124.746Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M73.7477 116.003L74.5075 128.333C74.5075 128.333 81.7938 145.504 86.6548 147.959C91.5158 150.414 102.612 127.514 102.612 127.514L101.852 113.884H73.4874L73.7477 116.003Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M73.7476 116.003C73.7476 116.003 82.8554 137.3 88.1744 138.095C93.4934 138.891 102.102 118.457 102.102 116.552C102.102 114.646 73.7476 116.003 73.7476 116.003Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M68.9381 97.7547C68.9381 97.7547 64.5455 93.8764 63.9418 99.2567C63.3381 104.637 69.7396 109.591 69.7396 109.591L68.9381 97.7547Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M104.642 97.7547C104.642 97.7547 109.045 93.8764 109.648 99.2567C110.252 104.637 103.851 109.591 103.851 109.591L104.642 97.7547Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M68.1374 98.3938C68.1374 98.3938 70.5419 113.47 72.5404 116.261C74.5389 119.052 80.7323 128.747 86.5301 130.473C92.3279 132.2 101.332 120.139 103.122 116.048C104.912 111.956 105.527 93.8766 105.527 93.8766L105.329 84.1921C105.329 84.1921 104.725 77.0857 102.123 73.2075C99.5205 69.3292 88.3308 66.7512 80.9405 69.8224C73.5501 72.8936 67.3463 86.7702 67.3463 89.5724C67.3463 92.3746 68.1374 98.3938 68.1374 98.3938Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M81.3354 81.6028C81.3354 81.6028 75.09 89.3594 72.342 90.8613C71.0934 91.481 69.8895 92.2004 68.7405 93.0135L69.1361 102.059L65.9405 89.7293C65.9405 89.7293 61.9435 76.6485 62.7658 70.8423C63.5881 65.0362 81.7518 59.4317 88.1533 57.2796C94.5548 55.1275 96.9489 59.4317 101.144 62.8841C105.339 66.3364 109.742 68.9144 109.148 74.7318C108.631 78.7782 107.692 82.7488 106.348 86.5684C106.348 86.5684 105.307 102.709 105.307 103.382C105.307 104.054 103.507 87.4539 103.507 87.4539C102.486 87.1648 101.565 86.563 100.855 85.7214C100.146 84.8798 99.6783 83.8346 99.5095 82.7125C98.9781 79.8724 98.6303 76.996 98.4686 74.1041C98.4686 74.1041 95.8664 79.9215 93.2641 82.7125C90.6619 85.5035 84.2707 88.0928 83.2715 87.8798C82.2722 87.6668 84.3124 82.4995 84.3124 82.4995L80.7109 86.1648L81.3354 81.6028Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M82.9385 111.743C83.9286 112.692 85.0813 113.423 86.3318 113.895C87.9348 114.321 90.7348 111.743 91.5363 111.093"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M82.335 117.774C82.335 117.774 86.9357 121.641 93.1291 117.124L82.335 117.774Z"
              fill="#EFDDF0"
            />
            <path
              d="M82.335 117.774C82.335 117.774 86.9357 121.641 93.1291 117.124"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M79.2325 103.987C79.9511 103.987 80.5336 102.928 80.5336 101.622C80.5336 100.316 79.9511 99.2568 79.2325 99.2568C78.5139 99.2568 77.9314 100.316 77.9314 101.622C77.9314 102.928 78.5139 103.987 79.2325 103.987Z"
              fill="black"
            />
            <path
              d="M94.4299 103.987C95.1485 103.987 95.731 102.928 95.731 101.622C95.731 100.316 95.1485 99.2568 94.4299 99.2568C93.7113 99.2568 93.1288 100.316 93.1288 101.622C93.1288 102.928 93.7113 103.987 94.4299 103.987Z"
              fill="black"
            />
            <path
              d="M91.3285 94.0895C92.6172 93.3626 94.0872 93.0956 95.5261 93.3273C96.965 93.559 98.2981 94.2774 99.333 95.3786"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M80.7321 93.8766C79.7137 93.227 78.5158 92.9834 77.3476 93.1883C76.1794 93.3931 75.1152 94.0335 74.3409 94.9975"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M94.9301 105.713L99.3331 104.637"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M74.7358 104.424L78.3374 105.713"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M71.7174 156.131L69.4378 273.824L43.4153 272.467L41.8435 269.228C41.8435 269.228 38.3045 269.228 37.7944 266.224C37.2844 263.22 41.3335 197.256 41.3335 197.256L19.0479 195.07L33.9848 163.685C33.9848 163.685 38.5439 141.873 39.5536 140.236C40.5632 138.6 72.217 126.875 72.217 126.875L71.7174 156.131Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M104.131 126.18L100.415 274.137L133.828 273.767L135.181 268.32L138.554 265.776V254.141C138.554 248.323 132.142 206.156 132.142 206.156C132.142 206.156 149.025 203.611 149.358 199.98C149.691 196.348 142.27 141.458 138.221 137.457C134.171 133.455 104.131 126.18 104.131 126.18Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M112.511 210.55L116.956 224.336C116.956 224.336 119.527 217.678 119.141 213.486C118.756 209.294 118.746 208.028 117.58 207.815C116.414 207.602 112.729 206.772 112.511 210.55Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M68.0956 174.726L82.3247 205.169L97.3344 197.189L84.6667 165.075L68.0956 174.726Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M92.7747 195.967C92.6043 195.482 92.618 194.944 92.8128 194.47C93.0076 193.996 93.3678 193.624 93.8156 193.434C93.8985 193.423 93.9824 193.423 94.0654 193.434L84.6973 169.794C84.612 170.015 84.4817 170.212 84.3159 170.371C84.1501 170.53 83.9531 170.647 83.7397 170.713C83.4196 170.793 83.0845 170.768 82.7781 170.64C82.4717 170.512 82.2083 170.287 82.0222 169.996L72.1336 175.724C72.2611 175.929 72.3561 176.157 72.4147 176.396C72.5527 176.825 72.5561 177.291 72.4245 177.722C72.2929 178.154 72.0334 178.526 71.686 178.784L81.5642 199.845C81.7407 199.634 81.9675 199.479 82.2199 199.397C82.639 199.311 83.0726 199.389 83.4429 199.617C83.8131 199.845 84.0955 200.208 84.2393 200.641L92.8059 196.09L92.7747 195.967ZM84.3226 190.519C82.501 191.068 80.5337 189.623 79.9196 187.28C79.3054 184.937 80.2735 182.583 82.0846 182.034C83.8958 181.485 85.8735 182.931 86.4876 185.273C87.1018 187.616 86.1337 189.959 84.3226 190.519Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M74.1851 170.982L81.7836 204.06L98.0633 199.867L92.3279 165.535L74.1851 170.982Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M93.8676 197.603C93.8322 197.346 93.8443 197.084 93.9032 196.833C93.9621 196.581 94.0666 196.344 94.2107 196.136C94.3548 195.927 94.5356 195.752 94.7429 195.619C94.9502 195.486 95.1798 195.399 95.4185 195.362C95.5015 195.351 95.5854 195.351 95.6683 195.362L91.5047 170.086C91.3744 170.279 91.2062 170.44 91.012 170.556C90.8177 170.672 90.6022 170.741 90.3806 170.758C90.0497 170.756 89.7269 170.648 89.4527 170.449C89.1786 170.249 88.9654 169.967 88.84 169.637L77.9522 172.944C78.0382 173.176 78.0875 173.422 78.0979 173.672C78.1434 174.124 78.0498 174.579 77.8317 174.968C77.6135 175.357 77.2829 175.658 76.8905 175.824L82.147 198.724C82.3617 198.563 82.6142 198.469 82.8757 198.455C83.3009 198.466 83.7081 198.642 84.022 198.951C84.3358 199.26 84.535 199.681 84.5827 200.136L93.878 197.749L93.8676 197.603ZM86.7062 190.25C84.8222 190.362 83.1983 188.479 83.0839 186.047C82.9694 183.615 84.3954 181.563 86.2794 181.451C88.1634 181.339 89.7768 183.234 89.9017 185.666C90.0267 188.098 88.6318 190.149 86.7062 190.25Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M83.1887 168.427L81.4399 202.446L98.1464 203.589L102.019 168.942L83.1887 168.427Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M94.7533 200.08C94.8301 199.567 95.0919 199.108 95.4817 198.801C95.8715 198.495 96.3579 198.366 96.8351 198.444C96.922 198.466 97.006 198.5 97.0849 198.545L99.937 173.033C99.7607 173.18 99.556 173.283 99.338 173.333C99.12 173.384 98.8943 173.381 98.6775 173.325C98.3615 173.223 98.0814 173.021 97.8734 172.745C97.6655 172.469 97.5395 172.132 97.5117 171.778L86.2595 171.475C86.2797 171.72 86.2585 171.967 86.1971 172.204C86.1186 172.651 85.9059 173.057 85.5918 173.361C85.2777 173.665 84.8796 173.849 84.4588 173.885L83.2513 197.424C83.5064 197.345 83.7769 197.345 84.032 197.424C84.436 197.572 84.7764 197.873 84.9907 198.271C85.2049 198.668 85.2785 199.136 85.1978 199.587L94.7429 200.237C94.7339 200.185 94.7375 200.131 94.7533 200.08ZM89.9443 190.811C88.1228 190.317 87.0819 188.008 87.6335 185.643C88.1852 183.278 90.1109 181.765 91.9429 182.281C93.7748 182.796 94.7949 185.094 94.2536 187.459C93.7124 189.824 91.7763 191.304 89.9443 190.811Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M117.58 201.728C115.739 201.43 113.918 201.011 112.125 200.473C111.345 200.058 105.693 197.951 101.206 195.44C96.72 192.929 93.0248 195.44 86.6337 196.695C80.2425 197.951 78.4418 198.377 78.4418 200.058C78.4418 201.739 81.7622 202.154 81.7622 202.154C81.7622 202.154 78.6395 202.569 80.2009 204.878C81.1206 206.25 82.4166 207.277 83.9065 207.814C84.7697 209.355 85.8923 210.708 87.2166 211.805C89.163 213.273 90.5266 214.54 90.5266 214.54C91.7472 216.177 93.3701 217.412 95.2107 218.104C97.9378 218.945 113.333 213.901 113.333 213.901C113.333 213.901 118.006 215.369 119.183 212.645C120.359 209.922 117.58 201.728 117.58 201.728Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M81.7203 202.154C81.7203 202.154 93.4096 201.728 97.1152 200.473"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M83.865 207.815C87.087 208.37 90.3447 208.651 93.6078 208.655C95.5292 208.614 97.4081 208.039 99.0621 206.985"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M88.7889 213.071C88.7889 213.071 95.6068 215.313 100.239 213.699"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M123.367 165.804L127.083 197.065L116.612 200.338C116.612 200.338 118.308 209.787 117.653 214.159C117.212 217.531 116.986 220.931 116.976 224.336C116.976 224.336 128.426 220.335 135.879 219.606C143.332 218.878 149.723 215.246 151.742 209.429C153.761 203.611 147.36 183.648 147.36 183.648"
              fill="black"
            />
            <path
              d="M123.367 165.804L127.083 197.065L116.612 200.338C116.612 200.338 118.308 209.787 117.653 214.159C117.212 217.531 116.986 220.931 116.976 224.336C116.976 224.336 128.426 220.335 135.879 219.606C143.332 218.878 149.723 215.246 151.742 209.429C153.761 203.611 147.36 183.648 147.36 183.648"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M121.983 199.419L127.084 197.065L139.991 193.333"
              stroke="#555555"
              stroke-miterlimit="10"
            />
            <path
              d="M127.083 197.065L123.076 160.143"
              stroke="#555555"
              stroke-miterlimit="10"
            />
            <path
              d="M61.0802 196.348C61.0802 196.348 58.7486 185.229 57.7702 183.121C56.7917 181.014 51.5248 186.91 51.1396 188.793C50.7545 190.676 59.5189 196.561 61.0802 196.348Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M55.9901 172.944L50.9521 179.31C50.9521 179.31 52.3574 188.636 53.4815 189.006C54.6057 189.376 62.6414 182.707 62.6414 182.707L55.9901 172.944Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M65.3477 160.177C65.3477 160.177 56.5729 169.413 55.9796 172.977C55.3863 176.542 61.6317 183.267 62.4124 183.895C63.1931 184.522 68.8451 179.691 69.0325 178.851C69.2199 178.01 65.3373 171.509 65.3373 171.509C67.1258 172.453 68.8634 173.504 70.5418 174.659C71.1247 175.286 74.8303 180.958 76.1939 180.532C77.5575 180.106 76.9746 177.382 76.1939 174.872C75.4132 172.361 67.034 163.954 67.034 163.954L72.686 165.423C72.686 165.423 79.3166 172.35 80.8779 172.35C82.4393 172.35 81.6586 170.668 80.6802 169.2C79.7017 167.732 75.0281 161.858 73.8623 160.39C72.6965 158.921 68.2102 158.081 67.6169 158.081C67.0236 158.081 65.3477 160.177 65.3477 160.177Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M65.3479 171.509L62.6207 168.572"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M59.1123 172.137L66.128 181.373"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M50.754 178.302C50.754 178.302 52.1176 183.334 52.8983 186.484C53.6789 189.634 61.0797 196.348 61.0797 196.348C61.0797 196.348 50.5562 208.308 41.1986 213.553C31.8409 218.799 20.849 216.165 17.5389 211.973C14.2289 207.781 15.5924 195.608 18.3196 193.086C21.0468 190.564 36.9101 187.325 40.8134 185.016C44.7168 182.707 50.754 178.302 50.754 178.302Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M50.7537 178.302L25.106 191.797"
              stroke="#555555"
              stroke-miterlimit="10"
            />
            <path
              d="M47.4235 180.073V167.182"
              stroke="#555555"
              stroke-miterlimit="10"
            />
            <path
              d="M218.111 463.589C218.111 463.589 214.988 464.542 206.661 457.895C198.334 451.248 188.591 441.754 188.591 441.754C188.591 441.754 198.209 440.364 202.653 437.842C207.546 435.051 213.271 428.461 213.271 428.461C213.271 428.461 232.662 456.942 256.915 455.048C256.495 457.476 255.511 459.75 254.055 461.659C252.599 463.568 250.718 465.049 248.588 465.966C241.031 469.283 218.111 463.589 218.111 463.589Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M249.577 458.31C249.577 458.31 228.988 452.493 217.86 439.771C217.324 439.928 216.762 439.955 216.215 439.85C215.668 439.745 215.15 439.51 214.697 439.162C214.245 438.815 213.87 438.363 213.6 437.84C213.33 437.317 213.171 436.736 213.135 436.139C209.245 440.072 204.257 442.511 198.947 443.077C198.947 443.077 199.28 445.622 198.271 446.35C198.271 446.35 214.134 461.258 223.252 463.074C229.581 464.437 236.059 464.815 242.488 464.195C245.264 463.879 247.872 462.605 249.92 460.563C249.92 460.563 246.537 459.767 249.577 458.31ZM230.133 457.492C229.394 459.453 225.719 459.733 221.92 458.03C218.121 456.326 215.675 453.445 216.362 451.495C217.049 449.545 220.775 449.253 224.574 450.957C228.374 452.661 230.861 455.541 230.133 457.492Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M214.988 462.995C214.988 462.995 225.605 467.703 233.984 467.703C238.888 467.733 243.778 467.15 248.557 465.966C248.557 465.966 245.694 467.647 241.042 464.43C238.387 462.592 236.68 458.5 236.68 458.5C229.678 461.074 222.377 462.586 214.988 462.995Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M334.255 415.122C334.255 415.122 353.584 408.274 364.888 400.147L376.911 421.444C376.911 421.444 348.161 445.554 340.615 439.21L334.255 415.122Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M368.667 420.2C368.691 419.586 368.9 418.997 369.263 418.522C369.625 418.046 370.121 417.711 370.676 417.566L365.336 408.027C364.89 408.191 364.422 408.274 363.951 408.274C363.379 408.307 362.808 408.189 362.288 407.931C361.767 407.674 361.313 407.283 360.964 406.794C350.982 414.315 335.67 418.171 335.67 418.171L338.73 431.117C338.73 431.117 338.262 438.224 346.506 436.441C352.897 435.063 364.919 426.354 370.03 422.554C369.629 422.328 369.29 421.991 369.051 421.577C368.811 421.163 368.678 420.687 368.667 420.2ZM348.067 429.727C344.455 430.613 341.093 429.29 340.552 426.768C340.011 424.246 342.509 421.466 346.121 420.57C349.733 419.673 353.105 421.007 353.647 423.529C354.188 426.051 351.69 428.831 348.067 429.727Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M331.423 405.483L344.621 433.65C344.621 433.65 340.145 436.184 340.614 439.255L327.894 412.354C327.894 412.354 326.239 408.016 331.423 405.483Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M329.019 414.719L338.824 435.433C339.241 434.437 339.982 433.64 340.906 433.191L330.008 412.589L329.019 414.719Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M188.185 257.896L188.393 311.889L214.561 311.765L214.644 256.674L188.185 257.896Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M208.826 306.587C208.848 306.184 208.945 305.789 209.111 305.427C209.276 305.064 209.507 304.741 209.79 304.476C210.073 304.211 210.403 304.009 210.759 303.883C211.115 303.757 211.491 303.708 211.865 303.74C211.997 303.769 212.125 303.81 212.25 303.863L212.198 262.76C211.967 262.985 211.691 263.152 211.392 263.247C211.093 263.342 210.778 263.363 210.47 263.31C210.012 263.188 209.596 262.925 209.274 262.553C208.953 262.18 208.739 261.715 208.659 261.214L192.879 261.942C192.931 262.291 192.931 262.647 192.879 262.996C192.827 263.634 192.578 264.235 192.173 264.704C191.767 265.173 191.229 265.483 190.641 265.585V303.695C191.024 303.529 191.441 303.479 191.849 303.549C192.497 303.752 193.06 304.192 193.44 304.794C193.82 305.395 193.994 306.12 193.93 306.845L208.878 306.777C208.826 306.688 208.815 306.632 208.826 306.587ZM200.165 292.397C197.261 291.825 195.346 288.272 195.887 284.449C196.429 280.627 199.249 277.993 202.133 278.576C205.016 279.159 206.963 282.701 206.411 286.523C205.859 290.345 203.038 292.979 200.165 292.397Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M432.869 29.4368L396.375 68.7351L415.424 89.2473L452.875 49.3886L432.869 29.4368Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M414.778 81.0312C415.068 80.7517 415.408 80.5379 415.777 80.4025C416.145 80.2672 416.535 80.213 416.924 80.2434C417.312 80.2737 417.691 80.3878 418.038 80.579C418.384 80.7702 418.692 81.0346 418.942 81.3563C419.02 81.4832 419.086 81.6184 419.139 81.7598L446.983 51.8882C446.661 51.8703 446.347 51.7743 446.064 51.6074C445.781 51.4405 445.537 51.207 445.349 50.9243C445.1 50.4743 444.977 49.9556 444.998 49.4319C445.018 48.9082 445.18 48.4023 445.464 47.9763L433.514 36.0389C433.31 36.3319 433.068 36.5922 432.796 36.8123C432.324 37.235 431.734 37.4748 431.121 37.4931C430.507 37.5114 429.906 37.3072 429.413 36.9132L403.526 64.487C403.914 64.6605 404.25 64.9479 404.494 65.3164C404.836 65.973 404.952 66.7383 404.823 67.4782C404.694 68.218 404.327 68.8852 403.786 69.3628L414.664 81.0873L414.778 81.0312ZM418.109 63.9041C416.381 61.2028 417.411 57.1116 420.399 54.7689C423.386 52.4263 427.217 52.7401 428.934 55.4414C430.652 58.1428 429.621 62.2452 426.634 64.5767C423.646 66.9081 419.795 66.5606 418.109 63.8481V63.9041Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M181.429 194.173L232.204 172.551L221.722 144.014L169.792 165.748L181.429 194.173Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M219.11 152.331C217.268 152.768 215.53 151.793 215.228 150.089C215.217 149.928 215.217 149.767 215.228 149.607L176.517 165.949C176.822 166.114 177.09 166.35 177.299 166.641C177.508 166.932 177.653 167.271 177.724 167.631C177.789 168.179 177.705 168.736 177.482 169.234C177.258 169.731 176.905 170.148 176.465 170.433L183.387 187.515C183.713 187.323 184.064 187.184 184.427 187.101C185.049 186.903 185.714 186.936 186.316 187.194C186.918 187.452 187.422 187.921 187.748 188.524L223.649 173.482C223.337 173.139 223.124 172.707 223.034 172.238C222.953 171.444 223.137 170.645 223.552 169.983C223.968 169.322 224.589 168.842 225.304 168.628L219.308 152.319L219.11 152.331ZM209.201 167.451C209.815 170.814 207.223 174.367 203.403 175.298C199.583 176.228 196.002 174.177 195.388 170.814C194.774 167.451 197.366 163.909 201.186 162.968C205.006 162.026 208.587 164.044 209.201 167.451Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M360.641 29.2575C360.641 29.2575 363.764 30.143 367.782 40.4664C371.8 50.7897 375.651 64.2852 375.651 64.2852C375.651 64.2852 366.72 60.1828 361.703 59.9025C356.166 59.5999 348.119 62.1443 348.119 62.1443C348.119 62.1443 344.997 26.9822 323.252 15.2689C324.765 13.3951 326.696 11.9664 328.863 11.1174C331.03 10.2683 333.362 10.0268 335.639 10.4155C343.654 11.7381 360.641 29.2575 360.641 29.2575Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M331.101 16.457C331.101 16.457 346.027 32.8331 349.556 49.8594C350.09 50.0215 350.585 50.3092 351.004 50.7017C351.423 51.0943 351.756 51.582 351.979 52.1298C352.202 52.6775 352.309 53.2717 352.293 53.8695C352.278 54.4673 352.139 55.0539 351.887 55.5871C357.097 54.3695 362.535 55.0393 367.355 57.4926C367.355 57.4926 368.271 55.1163 369.489 55.0491C369.489 55.0491 362.931 33.5056 355.957 26.926C351.157 22.2741 345.762 18.3863 339.938 15.3809C337.401 14.1319 334.558 13.7939 331.829 14.417C331.829 14.417 334.442 16.8829 331.101 16.457ZM347.422 27.8676C348.973 26.601 352.252 28.4168 354.708 31.9364C357.165 35.456 357.935 39.3343 356.374 40.6121C354.812 41.8899 351.544 40.0628 349.087 36.5432C346.631 33.0237 345.892 29.1454 347.422 27.8676Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M363.046 31.4881C363.046 31.4881 356.155 21.6243 348.952 16.9726C344.763 14.2424 340.296 12.0421 335.639 10.4155C335.639 10.4155 338.897 10.55 341.364 15.8742C342.769 18.923 342.301 23.3729 342.301 23.3729C349.531 25.0326 356.512 27.7637 363.046 31.4881Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M91.2771 1L96.3046 20.8397C96.3046 20.8397 71.1773 40.8811 33.2157 35.2655L35.2975 13.8229C35.2975 13.8229 50.1824 17.0287 63.7661 14.0247C77.3498 11.0207 91.2771 1 91.2771 1Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M88.4038 19.9654C88.4563 19.4776 88.6459 19.0186 88.9472 18.65C89.2486 18.2815 89.6474 18.0208 90.0901 17.903L87.1235 9.08163C86.6907 9.23767 86.2372 9.31716 85.7808 9.31702C84.9955 9.33094 84.2264 9.0758 83.5845 8.58844C79.4209 10.9423 71.6037 15.0447 63.8074 16.7821C56.7058 18.1543 49.4631 18.4711 42.2816 17.7237C42.0035 18.0446 41.6612 18.2931 41.2807 18.4504C40.9001 18.6077 40.4914 18.6696 40.0853 18.6316L39.0964 30.6475C39.3463 30.6475 39.6065 30.6475 39.8667 30.6475C41.9485 30.6475 43.5827 31.32 43.5827 32.1494C43.5697 32.2825 43.5282 32.4106 43.4613 32.5234C43.3945 32.6362 43.3042 32.7308 43.1976 32.7996C67.3152 33.7859 84.1986 24.8076 89.3198 21.6692C89.048 21.4892 88.822 21.2392 88.6621 20.9418C88.5022 20.6444 88.4135 20.3089 88.4038 19.9654ZM64.536 26.2312C60.8512 27.027 57.6244 26.3545 57.3226 24.7292C57.0207 23.1039 59.7583 21.1536 63.4431 20.3577C67.1279 19.5619 70.3546 20.2344 70.6565 21.8597C70.9584 23.485 68.2208 25.4353 64.536 26.2312Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M430.288 442.819L435.305 462.659C435.305 462.659 410.188 482.7 372.216 477.085L374.298 455.642C374.298 455.642 389.183 458.848 402.777 455.844C416.371 452.84 430.288 442.819 430.288 442.819Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M427.405 461.796C427.455 461.306 427.644 460.845 427.945 460.474C428.247 460.103 428.647 459.841 429.091 459.722L426.124 450.923C425.69 451.07 425.237 451.146 424.782 451.148C423.981 451.171 423.193 450.919 422.533 450.43C418.463 452.773 410.604 456.875 402.819 458.613C395.717 459.985 388.474 460.302 381.293 459.554C381.015 459.875 380.672 460.124 380.292 460.281C379.911 460.438 379.503 460.5 379.096 460.462L378.16 472.478C378.409 472.478 378.67 472.478 378.94 472.478C381.022 472.478 382.646 473.139 382.646 473.969C382.633 474.102 382.591 474.23 382.525 474.343C382.458 474.456 382.367 474.55 382.261 474.619C406.378 475.617 423.262 466.638 428.393 463.489C428.11 463.319 427.87 463.075 427.697 462.779C427.524 462.483 427.424 462.145 427.405 461.796ZM403.537 468.051C399.852 468.846 396.625 468.174 396.323 466.56C396.022 464.946 398.759 462.973 402.444 462.177C406.129 461.381 409.355 462.065 409.657 463.679C409.959 465.293 407.222 467.266 403.537 468.051Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M167.107 26.2872C167.107 26.2872 186.426 19.4386 197.74 11.3122L209.763 32.609C209.763 32.609 181.013 56.7416 173.466 50.3974L167.107 26.2872Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M201.508 31.3647C201.535 30.7496 201.746 30.1603 202.11 29.6854C202.474 29.2105 202.972 28.8755 203.528 28.7307L198.177 19.1919C197.735 19.3566 197.271 19.44 196.803 19.4385C196.231 19.4716 195.66 19.3541 195.14 19.0964C194.619 18.8386 194.165 18.4482 193.816 17.959C183.834 25.4801 168.522 29.3359 168.522 29.3359L171.582 42.2822C171.582 42.2822 171.114 49.3886 179.358 47.6064C185.739 46.2277 197.761 37.5184 202.882 33.7186C202.479 33.4943 202.138 33.1577 201.897 32.7437C201.655 32.3297 201.521 31.8535 201.508 31.3647ZM180.919 40.8923C177.307 41.7778 173.935 40.4551 173.404 37.9331C172.873 35.4111 175.361 32.6313 178.973 31.7346C182.585 30.8379 185.957 32.1718 186.498 34.705C187.04 37.2382 184.552 39.9956 180.919 40.8923Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M164.275 16.6475L177.474 44.8154C177.474 44.8154 172.998 47.3486 173.467 50.4198L160.736 23.5185C160.736 23.5185 159.092 19.1807 164.275 16.6475Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M161.871 25.8837L171.666 46.5977C172.083 45.6023 172.823 44.8052 173.747 44.3559L162.86 23.754L161.871 25.8837Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M328.727 151.221L292.233 190.519L311.281 211.02L348.743 171.162L328.727 151.221Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M310.646 202.759C310.937 202.48 311.276 202.266 311.645 202.131C312.013 201.995 312.404 201.941 312.792 201.971C313.18 202.002 313.559 202.116 313.906 202.307C314.253 202.498 314.56 202.763 314.81 203.084C314.885 203.212 314.947 203.347 314.997 203.488L342.872 173.65C342.551 173.635 342.237 173.541 341.955 173.373C341.674 173.206 341.432 172.971 341.249 172.686C340.997 172.237 340.873 171.719 340.892 171.195C340.91 170.672 341.071 170.165 341.353 169.738L329.403 157.823C329.201 158.115 328.959 158.372 328.685 158.585C328.215 159.011 327.626 159.254 327.012 159.275C326.398 159.295 325.795 159.092 325.302 158.697L299.415 186.26C299.803 186.439 300.138 186.73 300.383 187.101C300.725 187.757 300.841 188.522 300.712 189.262C300.583 190.002 300.216 190.669 299.675 191.147L310.5 202.86L310.646 202.759ZM313.967 185.632C312.249 182.92 313.28 178.84 316.267 176.497C319.254 174.154 323.075 174.468 324.792 177.17C326.51 179.871 325.489 183.962 322.492 186.305C319.494 188.647 315.705 188.334 313.967 185.632Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M395.438 247.102L445.307 252.706L448.014 224.684L397.166 218.642L395.438 247.102Z"
              fill="#BC70C1"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M442.611 230.255C442.242 230.187 441.889 230.041 441.573 229.825C441.257 229.609 440.984 229.328 440.77 228.997C440.555 228.666 440.405 228.293 440.326 227.899C440.247 227.505 440.242 227.098 440.311 226.701C440.356 226.562 440.411 226.427 440.477 226.298L402.516 221.915C402.7 222.188 402.825 222.502 402.88 222.834C402.936 223.166 402.922 223.507 402.838 223.832C402.681 224.302 402.401 224.713 402.031 225.015C401.662 225.317 401.219 225.498 400.757 225.536L399.716 242.54C400.045 242.527 400.374 242.565 400.694 242.652C401.279 242.778 401.808 243.112 402.196 243.599C402.585 244.087 402.811 244.7 402.838 245.342L437.99 249.5C437.875 249.076 437.875 248.625 437.99 248.2C438.24 247.52 438.705 246.956 439.302 246.607C439.9 246.259 440.592 246.148 441.258 246.294L442.799 230.288L442.611 230.255ZM428.58 238.101C427.737 241.15 424.25 242.82 420.784 241.822C417.317 240.825 415.183 237.529 416.027 234.48C416.87 231.432 420.367 229.761 423.833 230.759C427.3 231.757 429.423 234.985 428.58 238.045V238.101Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M452.25 297.844C452.25 297.844 455.373 298.73 459.391 309.053C463.409 319.376 467.25 332.872 467.25 332.872C467.25 332.872 458.329 328.769 453.302 328.489C447.774 328.186 439.77 330.731 439.77 330.731C439.77 330.731 436.647 295.569 414.903 283.855C416.422 281.997 418.354 280.583 420.519 279.748C422.683 278.913 425.01 278.683 427.279 279.08C435.252 280.325 452.25 297.844 452.25 297.844Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M422.699 285.032C422.699 285.032 437.636 301.375 441.165 318.446C441.7 318.605 442.196 318.89 442.616 319.281C443.036 319.672 443.37 320.159 443.593 320.707C443.817 321.255 443.924 321.849 443.907 322.446C443.89 323.044 443.75 323.63 443.497 324.162C448.701 322.938 454.135 323.6 458.954 326.046C458.954 326.046 459.88 323.669 461.088 323.602C461.088 323.602 454.541 302.059 447.556 295.479C442.765 290.818 437.377 286.923 431.557 283.911C429.02 282.662 426.178 282.324 423.449 282.947C423.449 282.947 426.041 285.469 422.699 285.032ZM439.021 296.443C440.582 295.176 443.851 296.992 446.307 300.512C448.764 304.031 449.534 307.91 447.972 309.187C446.411 310.465 443.143 308.638 440.686 305.119C438.23 301.599 437.491 297.732 439.021 296.454V296.443Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M454.645 300.075C454.645 300.075 447.754 290.177 440.561 285.559C436.368 282.843 431.897 280.657 427.238 279.047C427.238 279.047 430.506 279.181 432.963 284.505C434.378 287.554 433.9 292.004 433.9 292.004C441.128 293.648 448.11 296.364 454.645 300.075Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M428.123 168.27C428.123 168.27 411.271 180.543 402.444 191.685L385.446 174.715C385.446 174.715 406.982 143.061 415.851 146.95L428.123 168.27Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M393.773 173.515C393.904 174.113 393.852 174.74 393.623 175.302C393.393 175.865 393 176.331 392.503 176.631L400.06 184.242C400.448 183.956 400.877 183.74 401.33 183.603C401.871 183.403 402.449 183.347 403.015 183.441C403.581 183.534 404.117 183.775 404.577 184.141C412.28 173.975 426.03 165.759 426.03 165.759L419.785 154.203C419.785 154.203 418.432 147.231 410.948 151.367C405.16 154.572 395.792 166.443 391.847 171.655C392.294 171.75 392.709 171.972 393.048 172.3C393.387 172.627 393.637 173.047 393.773 173.515ZM411.166 158.294C414.414 156.366 417.995 156.657 419.15 158.921C420.305 161.186 418.609 164.604 415.361 166.521C412.113 168.438 408.533 168.158 407.367 165.882C406.201 163.607 407.877 160.211 411.135 158.294H411.166Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M433.327 176.71L413.487 153.496C413.487 153.496 417.151 149.741 415.923 146.95L434.992 169.077C434.992 169.077 437.636 172.742 433.327 176.71Z"
              fill="#BC70C1"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M433.264 167.115L418.588 150.078C418.454 151.16 417.962 152.155 417.203 152.88L432.817 169.458L433.264 167.115Z"
              fill="#EFDDF0"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M1 484.752H498.904"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={style.startBorrowing}>
        <div className={style.startBorrowingLeftColumn}>
          <svg
            width="500"
            height="496"
            viewBox="0 0 500 496"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
              <path
                d="M62.3894 76.7537H59.9289V73.8694C58.7506 73.8725 57.5865 73.6072 56.5221 73.0931C55.4577 72.5789 54.5198 71.8289 53.7774 70.898C52.2729 68.7679 51.451 66.2175 51.4238 63.5947V63.1593L56.5482 61.7553V62.4083C56.6203 63.5407 56.7994 64.6633 57.0832 65.7607C57.294 66.6897 57.7361 67.548 58.3669 68.2531C58.674 68.564 59.0429 68.8045 59.4488 68.9584C59.8548 69.1123 60.2884 69.1762 60.7205 69.1456C61.1448 69.1828 61.5719 69.1262 61.9726 68.9796C62.3733 68.8331 62.7381 68.6001 63.042 68.2967C63.6099 67.5747 63.8889 66.6612 63.823 65.7389C63.8829 64.546 63.56 63.3656 62.903 62.3757C62.1571 61.385 61.3188 60.47 60.3996 59.6437L54.8365 54.6588C54.1352 54.0091 53.5105 53.2786 52.9751 52.4819C52.4645 51.6996 52.0883 50.8347 51.8624 49.9242C51.6097 48.8994 51.4875 47.8459 51.4987 46.7895C51.4357 45.6894 51.5928 44.5878 51.9606 43.5513C52.3284 42.5148 52.8992 41.5651 53.6383 40.7597C55.0915 39.3684 56.9931 38.5636 58.9874 38.4958V35.6768H61.448V38.5066C62.3793 38.6075 63.2892 38.8573 64.1439 39.2468C65.0487 39.6666 65.8466 40.2922 66.4761 41.0753C67.1345 41.9163 67.6382 42.8713 67.9632 43.8943C68.3446 45.1162 68.5781 46.3808 68.6586 47.6602V48.1174L63.7374 49.4888V48.8249C63.6648 47.8117 63.5073 46.8067 63.2667 45.8208C63.0893 45.0423 62.6957 44.332 62.1327 43.7746C61.8213 43.5224 61.4616 43.3389 61.0767 43.2358C60.6917 43.1327 60.2899 43.1124 59.8968 43.176C59.0362 43.185 58.2036 43.4878 57.5325 44.0358C57.25 44.3406 57.0343 44.7029 56.8997 45.0988C56.7651 45.4947 56.7146 45.9152 56.7515 46.3324C56.7179 47.113 56.8722 47.8901 57.2008 48.5963C57.6115 49.3168 58.1355 49.9639 58.7521 50.5119L64.3365 55.4969C65.2005 56.2887 65.9951 57.1554 66.7115 58.0873C67.4727 59.0823 68.0922 60.1815 68.5516 61.3526C69.035 62.6375 69.2746 64.004 69.2577 65.3797C69.2853 66.8546 68.9739 68.3156 68.3483 69.6463C67.7591 70.8438 66.8651 71.8586 65.7594 72.585C64.7475 73.2282 63.6139 73.6472 62.4322 73.8149L62.3894 76.7537ZM60.9987 75.6653H61.3196V72.781H61.801C62.982 72.6887 64.1252 72.3159 65.1389 71.6925C66.0848 71.0743 66.8469 70.2049 67.3427 69.1783C67.9002 68.0017 68.1752 66.7073 68.1451 65.4015C68.1787 64.1475 67.9753 62.8986 67.546 61.7226C67.127 60.6597 66.5614 59.6629 65.8663 58.7621C65.1834 57.8823 64.4283 57.063 63.609 56.3132L58.0139 51.3173C57.3113 50.693 56.7117 49.9581 56.238 49.1405C55.8247 48.2775 55.6263 47.3244 55.6603 46.365C55.6188 45.7928 55.6997 45.2183 55.8973 44.681C56.0949 44.1436 56.4046 43.6561 56.805 43.2522C57.6551 42.5576 58.7102 42.1742 59.8005 42.1637C60.3402 42.0853 60.8901 42.1242 61.4138 42.2781C61.9376 42.4319 62.4233 42.6972 62.8388 43.0562C63.5325 43.7426 64.0219 44.614 64.2509 45.5705C64.4617 46.4071 64.6118 47.2584 64.7002 48.1174L67.546 47.3011C67.4518 46.2586 67.2473 45.2296 66.9362 44.2317C66.6538 43.3391 66.2153 42.5058 65.6417 41.7719C65.1029 41.1136 64.4269 40.5856 63.6625 40.2263C62.7681 39.8321 61.8116 39.6036 60.8382 39.5515H60.3461V36.7652H60.0572V39.5298H59.5437C57.6635 39.5065 55.8456 40.2151 54.4621 41.5107C53.8099 42.2131 53.3055 43.0436 52.9799 43.9513C52.6543 44.859 52.5143 45.8248 52.5685 46.7895C52.5536 47.7437 52.6652 48.6955 52.9002 49.6194C53.11 50.3945 53.4425 51.1297 53.8844 51.7962C54.3781 52.5215 54.9485 53.1894 55.5854 53.7881L61.1271 58.8274C62.1039 59.6963 62.9928 60.6625 63.7802 61.7117C64.5804 62.888 64.9788 64.299 64.9142 65.728C64.9697 66.914 64.5882 68.0784 63.8444 68.9933C63.4391 69.4067 62.9517 69.7274 62.4149 69.9338C61.878 70.1403 61.304 70.2278 60.7312 70.1905C60.1531 70.2211 59.5752 70.1274 59.0351 69.9155C58.495 69.7036 58.0049 69.3782 57.5967 68.9606C56.8479 68.1204 56.3182 67.1025 56.0561 66.0001C55.8183 65.0485 55.6467 64.0811 55.5426 63.1049L52.5685 63.9757C52.6588 66.2276 53.4034 68.4018 54.7082 70.2232C55.408 71.0759 56.2935 71.751 57.2944 72.195C58.2953 72.639 59.3841 72.8396 60.4745 72.781H60.9987V75.6653Z"
                fill="black"
              />
              <path
                d="M60.3144 85.929C54.5385 85.9269 48.8929 84.1823 44.0914 80.916C39.2899 77.6497 35.5481 73.0083 33.3393 67.5786C31.1304 62.1489 30.5535 56.1748 31.6816 50.4116C32.8098 44.6484 35.5922 39.3549 39.6772 35.2005C43.7621 31.046 48.9662 28.2171 54.6313 27.0715C60.2964 25.9259 66.1682 26.5149 71.5043 28.7642C76.8403 31.0135 81.401 34.822 84.6098 39.7082C87.8185 44.5944 89.5311 50.3388 89.5311 56.2152C89.5198 64.0941 86.4376 71.6469 80.9606 77.2172C75.4835 82.7874 68.0587 85.9204 60.3144 85.929ZM60.3144 27.5898C54.7501 27.5919 49.3113 29.2726 44.6857 32.4193C40.0602 35.566 36.4556 40.0375 34.3276 45.2682C32.1997 50.499 31.6441 56.2543 32.7309 61.8064C33.8178 67.3585 36.4983 72.458 40.4336 76.4602C44.369 80.4625 49.3824 83.1877 54.84 84.2913C60.2976 85.395 65.9543 84.8275 71.0948 82.6606C76.2354 80.4937 80.6291 76.8247 83.7202 72.1175C86.8114 67.4103 88.4613 61.8763 88.4613 56.2152C88.4528 48.624 85.4843 41.3464 80.2072 35.9797C74.9302 30.6129 67.7759 27.5955 60.3144 27.5898Z"
                fill="black"
              />
              <path
                d="M60.3143 82.8161C55.143 82.8161 50.0879 81.2559 45.7882 78.333C41.4884 75.41 38.1372 71.2555 36.1583 66.3948C34.1793 61.5342 33.6615 56.1856 34.6704 51.0255C35.6792 45.8654 38.1694 41.1256 41.8261 37.4054C45.4827 33.6852 50.1415 31.1517 55.2134 30.1253C60.2853 29.0989 65.5424 29.6257 70.32 31.639C75.0977 33.6524 79.1812 37.0619 82.0541 41.4364C84.9271 45.8109 86.4606 50.9539 86.4606 56.2151C86.4521 63.2675 83.6947 70.0285 78.7931 75.0153C73.8916 80.0021 67.2461 82.8074 60.3143 82.8161ZM60.3143 30.7026C55.3546 30.7026 50.5063 32.1988 46.3825 35.0022C42.2587 37.8056 39.0446 41.7901 37.1466 46.4519C35.2486 51.1137 34.7521 56.2434 35.7196 61.1924C36.6872 66.1413 39.0755 70.6872 42.5825 74.2552C46.0895 77.8232 50.5577 80.253 55.4221 81.2374C60.2865 82.2218 65.3285 81.7166 69.9106 79.7856C74.4928 77.8546 78.4092 74.5846 81.1646 70.3891C83.9201 66.1936 85.3908 61.261 85.3908 56.2151C85.3851 49.4505 82.7413 42.9647 78.0398 38.1814C73.3383 33.3981 66.9632 30.7083 60.3143 30.7026Z"
                fill="black"
              />
            </g>
            <g opacity="0.3">
              <path
                d="M443.813 226.629H441.674V224.452C440.814 224.443 439.967 224.244 439.191 223.868C438.415 223.492 437.729 222.949 437.18 222.275C436.059 220.688 435.447 218.788 435.426 216.833V216.398L439.47 215.31V215.963C439.529 216.789 439.662 217.609 439.866 218.412C440.016 219.069 440.329 219.675 440.775 220.175C440.989 220.386 441.245 220.55 441.525 220.655C441.805 220.76 442.103 220.804 442.401 220.784C442.693 220.81 442.988 220.772 443.265 220.673C443.542 220.573 443.794 220.415 444.006 220.207C444.397 219.701 444.588 219.065 444.541 218.422C444.585 217.578 444.36 216.742 443.899 216.039C443.356 215.317 442.743 214.654 442.069 214.058L437.983 210.39C437.457 209.899 436.991 209.348 436.592 208.746C436.202 208.162 435.913 207.514 435.736 206.831C435.578 206.058 435.52 205.268 435.565 204.48C435.518 203.65 435.64 202.819 435.921 202.038C436.203 201.257 436.638 200.544 437.202 199.941C438.244 198.931 439.605 198.329 441.042 198.243V196.153H443.182V198.265C443.84 198.342 444.482 198.522 445.086 198.798C445.744 199.111 446.328 199.564 446.798 200.126C447.303 200.753 447.685 201.474 447.921 202.249C448.203 203.161 448.379 204.103 448.445 205.057V205.503L444.509 206.591L444.455 205.927C444.407 205.193 444.292 204.464 444.113 203.751C443.988 203.205 443.714 202.707 443.321 202.314C443.106 202.141 442.858 202.015 442.593 201.943C442.328 201.872 442.051 201.858 441.78 201.9C441.179 201.914 440.598 202.124 440.122 202.499C439.932 202.713 439.787 202.964 439.697 203.238C439.607 203.511 439.573 203.801 439.598 204.088C439.575 204.635 439.682 205.18 439.908 205.677C440.19 206.19 440.551 206.653 440.978 207.049L445.086 210.716C445.731 211.303 446.322 211.948 446.851 212.643C447.422 213.372 447.883 214.182 448.221 215.048C448.592 216.012 448.773 217.04 448.756 218.074C448.778 219.181 448.544 220.277 448.071 221.274C447.626 222.164 446.953 222.916 446.124 223.451C445.399 223.918 444.587 224.23 443.738 224.365L443.813 226.629ZM436.56 217.182C436.636 218.77 437.164 220.301 438.079 221.59C438.585 222.209 439.228 222.698 439.954 223.018C440.681 223.338 441.472 223.479 442.262 223.429H442.786H443.225C444.075 223.359 444.897 223.083 445.621 222.624C446.293 222.183 446.836 221.566 447.194 220.839C447.586 219.992 447.78 219.064 447.761 218.129C447.775 217.237 447.623 216.35 447.311 215.516C447.01 214.735 446.599 214.002 446.092 213.34C445.599 212.697 445.051 212.099 444.455 211.555L440.336 207.887C439.803 207.406 439.352 206.84 438.999 206.21C438.688 205.557 438.537 204.836 438.56 204.11C438.53 203.669 438.593 203.227 438.746 202.813C438.9 202.4 439.139 202.025 439.448 201.715C440.092 201.169 440.9 200.862 441.738 200.845C442.154 200.785 442.579 200.817 442.983 200.937C443.387 201.057 443.761 201.263 444.081 201.541C444.613 202.078 444.984 202.757 445.15 203.5C445.291 204.066 445.395 204.64 445.461 205.22L447.301 204.708C447.232 203.995 447.089 203.29 446.873 202.608C446.677 201.965 446.361 201.366 445.942 200.845C445.563 200.377 445.084 200.005 444.541 199.756C443.899 199.478 443.215 199.316 442.519 199.277H442.037H441.524C440.173 199.249 438.865 199.756 437.876 200.692C437.425 201.203 437.082 201.803 436.868 202.455C436.655 203.106 436.575 203.796 436.635 204.48C436.629 205.169 436.709 205.857 436.87 206.526C437.021 207.093 437.263 207.63 437.587 208.115C437.935 208.642 438.345 209.124 438.806 209.552L442.893 213.22C443.615 213.881 444.274 214.609 444.862 215.397C445.462 216.288 445.762 217.354 445.717 218.433C445.775 219.35 445.484 220.254 444.904 220.958C444.594 221.279 444.219 221.527 443.805 221.687C443.392 221.846 442.949 221.913 442.508 221.884C442.064 221.904 441.621 221.83 441.207 221.667C440.792 221.504 440.416 221.255 440.101 220.937C439.537 220.298 439.136 219.528 438.935 218.695C438.769 218.043 438.648 217.382 438.571 216.714L436.56 217.182Z"
                fill="black"
              />
              <path
                d="M442.143 233.377C437.865 233.377 433.682 232.086 430.124 229.667C426.567 227.249 423.794 223.811 422.157 219.789C420.52 215.767 420.093 211.341 420.928 207.072C421.764 202.802 423.825 198.881 426.851 195.804C429.878 192.726 433.733 190.631 437.93 189.783C442.127 188.935 446.476 189.373 450.429 191.04C454.381 192.707 457.759 195.53 460.135 199.15C462.51 202.771 463.777 207.027 463.775 211.38C463.767 217.213 461.484 222.805 457.429 226.929C453.374 231.052 447.877 233.371 442.143 233.377ZM442.143 190.461C438.077 190.461 434.101 191.688 430.72 193.986C427.338 196.285 424.703 199.552 423.147 203.375C421.59 207.197 421.183 211.403 421.977 215.461C422.77 219.519 424.728 223.247 427.604 226.173C430.48 229.098 434.143 231.091 438.132 231.898C442.121 232.705 446.255 232.291 450.012 230.707C453.769 229.124 456.981 226.443 459.24 223.003C461.499 219.562 462.705 215.518 462.705 211.38C462.7 205.834 460.531 200.516 456.677 196.594C452.822 192.672 447.595 190.467 442.143 190.461Z"
                fill="black"
              />
              <path
                d="M442.144 231.081C438.312 231.081 434.565 229.924 431.379 227.758C428.193 225.592 425.709 222.513 424.243 218.91C422.777 215.308 422.394 211.344 423.143 207.52C423.891 203.696 425.737 200.184 428.448 197.428C431.159 194.671 434.612 192.795 438.371 192.036C442.13 191.276 446.026 191.668 449.566 193.162C453.106 194.655 456.131 197.183 458.258 200.426C460.386 203.669 461.52 207.481 461.518 211.38C461.513 216.605 459.469 221.615 455.837 225.308C452.204 229.002 447.28 231.078 442.144 231.081ZM442.144 192.758C438.524 192.758 434.985 193.85 431.974 195.896C428.964 197.942 426.618 200.851 425.233 204.254C423.847 207.657 423.485 211.401 424.191 215.013C424.897 218.626 426.641 221.944 429.201 224.549C431.761 227.153 435.022 228.927 438.573 229.645C442.124 230.364 445.804 229.995 449.149 228.586C452.493 227.176 455.352 224.789 457.364 221.727C459.375 218.664 460.448 215.064 460.448 211.38C460.446 206.442 458.516 201.707 455.084 198.215C451.652 194.723 446.998 192.76 442.144 192.758Z"
                fill="black"
              />
            </g>
            <g opacity="0.3">
              <path
                d="M191.561 43.0893H189.422V40.9125C188.559 40.8939 187.711 40.6836 186.936 40.2963C186.162 39.909 185.48 39.354 184.939 38.6703C183.808 37.0876 183.191 35.185 183.174 33.2282V32.782L187.218 31.6935L187.271 32.3575C187.322 33.1809 187.451 33.9974 187.656 34.7955C187.807 35.4525 188.12 36.0594 188.566 36.5588C188.78 36.7701 189.035 36.9336 189.315 37.0385C189.595 37.1435 189.894 37.1877 190.192 37.1683C190.484 37.1958 190.778 37.1596 191.054 37.0619C191.331 36.9643 191.584 36.8076 191.797 36.6023C192.188 36.0922 192.379 35.4519 192.331 34.8064C192.374 33.9624 192.149 33.1267 191.69 32.4228C191.144 31.7038 190.532 31.0404 189.86 30.4419L185.773 26.7739C185.248 26.2872 184.782 25.7392 184.383 25.1413C183.993 24.5526 183.704 23.9013 183.527 23.2148C183.334 22.4541 183.241 21.671 183.249 20.8855C183.204 20.0556 183.326 19.225 183.608 18.4447C183.889 17.6643 184.324 16.9505 184.886 16.3468C185.928 15.3366 187.289 14.735 188.726 14.6489V12.5918H190.866V14.6924C191.524 14.7692 192.166 14.9491 192.77 15.2258C193.456 15.5457 194.063 16.0181 194.546 16.6081C195.032 17.2599 195.395 17.9981 195.616 18.7849C195.902 19.6959 196.078 20.6389 196.14 21.593V22.0393L192.203 23.1277V22.4746C192.154 21.7399 192.04 21.0113 191.861 20.2978C191.736 19.7521 191.462 19.2538 191.069 18.8611C190.855 18.6868 190.607 18.5608 190.341 18.4914C190.076 18.4219 189.799 18.4107 189.529 18.4584C188.925 18.4619 188.341 18.6729 187.87 19.057C187.517 19.4637 187.337 19.9957 187.368 20.5373C187.346 21.0879 187.452 21.636 187.678 22.1372C187.962 22.648 188.323 23.1106 188.748 23.5086L192.856 27.1657C193.498 27.7546 194.088 28.3992 194.621 29.0922C195.193 29.8256 195.658 30.6395 196.001 31.5085C196.367 32.4693 196.549 33.4929 196.536 34.5234C196.556 35.631 196.318 36.7278 195.84 37.7234C195.394 38.6128 194.722 39.3644 193.893 39.9002C193.165 40.3604 192.354 40.6675 191.508 40.8036L191.561 43.0893ZM184.308 33.6527C184.393 35.2222 184.92 36.7337 185.827 38.0064C186.334 38.6251 186.976 39.1139 187.703 39.4335C188.43 39.753 189.22 39.8942 190.01 39.8458H190.577H191.016C191.867 39.779 192.689 39.5026 193.412 39.0404C194.086 38.6024 194.63 37.9852 194.985 37.2554C195.38 36.4095 195.578 35.4819 195.562 34.5452C195.572 33.6527 195.416 32.7664 195.102 31.933C194.799 31.1525 194.388 30.4196 193.883 29.7562C193.39 29.1131 192.842 28.5158 192.246 27.9712L188.127 24.3032C187.588 23.8504 187.122 23.3141 186.747 22.7141C186.422 22.0378 186.267 21.2896 186.298 20.5373C186.267 20.0966 186.33 19.6543 186.484 19.241C186.637 18.8276 186.876 18.4529 187.186 18.1427C187.838 17.5894 188.658 17.2818 189.507 17.272C189.924 17.2129 190.348 17.2444 190.752 17.3645C191.156 17.4846 191.53 17.6905 191.85 17.9686C192.38 18.5069 192.75 19.1857 192.92 19.9277C193.059 20.4937 193.163 21.0681 193.23 21.6474L195.07 21.1468C195.004 20.4327 194.86 19.7283 194.642 19.0461C194.448 18.3988 194.132 17.7962 193.712 17.272C193.333 16.8041 192.853 16.4316 192.31 16.1836C191.671 15.895 190.986 15.7289 190.288 15.6938H189.807H189.293C187.944 15.6733 186.638 16.1797 185.645 17.1087C185.183 17.6109 184.828 18.2044 184.602 18.8523C184.375 19.5002 184.283 20.1887 184.329 20.8747C184.323 21.5641 184.402 22.2515 184.565 22.9209C184.717 23.4902 184.959 24.0306 185.281 24.5209C185.634 25.0541 186.047 25.5436 186.512 25.9793L190.577 29.6473C191.305 30.3024 191.964 31.0319 192.545 31.8242C193.146 32.7115 193.446 33.7736 193.401 34.85C193.459 35.7666 193.168 36.6706 192.588 37.3751C192.277 37.6952 191.903 37.9436 191.489 38.1032C191.076 38.2629 190.633 38.3301 190.192 38.3002C189.748 38.3205 189.305 38.2468 188.891 38.0838C188.476 37.9208 188.1 37.6721 187.785 37.3533C187.221 36.715 186.82 35.9448 186.619 35.1112C186.453 34.4601 186.332 33.7982 186.255 33.1303L184.308 33.6527Z"
                fill="black"
              />
              <path
                d="M189.902 49.8373C185.626 49.8373 181.446 48.5472 177.89 46.1301C174.335 43.7131 171.564 40.2776 169.927 36.2582C168.291 32.2388 167.862 27.8159 168.697 23.5489C169.531 19.282 171.59 15.3625 174.614 12.2861C177.638 9.20982 181.49 7.11482 185.684 6.26606C189.878 5.4173 194.226 5.85292 198.176 7.51781C202.127 9.18271 205.504 12.0021 207.879 15.6195C210.255 19.2369 211.523 23.4897 211.523 27.8403C211.515 33.6716 209.234 39.2616 205.181 43.385C201.128 47.5083 195.634 49.8286 189.902 49.8373ZM189.902 6.93181C185.838 6.93181 181.864 8.15808 178.485 10.4555C175.105 12.753 172.471 16.0185 170.915 19.839C169.36 23.6595 168.953 27.8635 169.746 31.9194C170.539 35.9752 172.496 39.7008 175.37 42.6249C178.245 45.549 181.906 47.5403 185.893 48.3471C189.879 49.1539 194.012 48.7398 197.767 47.1573C201.522 45.5748 204.732 42.8949 206.99 39.4565C209.248 36.0181 210.453 31.9756 210.453 27.8403C210.445 22.2977 208.277 16.9846 204.425 13.0653C200.572 9.14608 195.35 6.94045 189.902 6.93181Z"
                fill="black"
              />
              <path
                d="M189.903 47.5407C186.07 47.5428 182.323 46.3884 179.135 44.2233C175.947 42.0582 173.462 38.9798 171.994 35.3776C170.527 31.7754 170.142 27.8113 170.889 23.9866C171.637 20.162 173.482 16.6488 176.192 13.8915C178.902 11.1341 182.356 9.25661 186.115 8.49639C189.874 7.73617 193.771 8.12744 197.311 9.62068C200.852 11.1139 203.878 13.6421 206.006 16.8852C208.134 20.1284 209.268 23.9409 209.266 27.8403C209.261 33.0634 207.219 38.0709 203.589 41.7642C199.958 45.4575 195.036 47.5349 189.903 47.5407ZM189.903 9.21747C186.282 9.21532 182.742 10.3057 179.73 12.3507C176.719 14.3957 174.371 17.3034 172.984 20.7061C171.597 24.1088 171.233 27.8536 171.938 31.4668C172.643 35.08 174.385 38.3993 176.945 41.0048C179.504 43.6103 182.766 45.3851 186.317 46.1045C189.868 46.824 193.549 46.4558 196.894 45.0466C200.24 43.6374 203.099 41.2505 205.111 38.1877C207.123 35.125 208.197 31.524 208.197 27.8403C208.191 22.9049 206.262 18.1731 202.833 14.6822C199.404 11.1913 194.754 9.22611 189.903 9.21747Z"
                fill="black"
              />
            </g>
            <g opacity="0.3">
              <path
                d="M59.8336 195.043H57.694V192.866C56.83 192.847 55.9807 192.636 55.2048 192.249C54.4289 191.861 53.7451 191.307 53.2007 190.624C52.074 189.039 51.4573 187.138 51.4355 185.182V184.747L55.4902 183.658V184.322C55.5454 185.145 55.6744 185.961 55.8753 186.76C56.0303 187.419 56.3426 188.028 56.7846 188.535C56.9989 188.746 57.2543 188.909 57.5343 189.014C57.8144 189.119 58.1129 189.163 58.4107 189.144C58.7045 189.166 58.9997 189.126 59.2776 189.027C59.5556 188.928 59.8104 188.771 60.0262 188.567C60.4162 188.06 60.6069 187.424 60.5611 186.782C60.6039 185.937 60.3748 185.1 59.9085 184.399C59.3703 183.674 58.7609 183.006 58.0898 182.407L54.0031 178.739C53.4724 178.255 53.0018 177.706 52.6016 177.106C52.2119 176.518 51.9226 175.866 51.7458 175.18C51.5697 174.439 51.487 173.678 51.4997 172.916C51.4566 172.088 51.5795 171.259 51.8609 170.481C52.1422 169.702 52.5763 168.99 53.1366 168.388C54.1791 167.376 55.5392 166.771 56.9772 166.679V164.6H59.1168V166.701C59.7702 166.784 60.4082 166.963 61.0104 167.234C61.709 167.528 62.3314 167.983 62.8291 168.562C63.3119 169.192 63.6747 169.908 63.8989 170.674C64.1832 171.585 64.3592 172.528 64.4231 173.482V173.928L60.4755 175.016V174.363C60.4184 173.629 60.3003 172.901 60.1224 172.186C60.0026 171.639 59.7273 171.139 59.3308 170.75C59.1167 170.576 58.8686 170.449 58.603 170.38C58.3375 170.311 58.0604 170.299 57.7902 170.347C57.1908 170.354 56.6108 170.565 56.1427 170.946C55.9497 171.155 55.8031 171.405 55.7127 171.677C55.6223 171.949 55.5902 172.238 55.6185 172.524C55.5918 173.075 55.6983 173.624 55.9288 174.124C56.2067 174.639 56.5684 175.103 56.9986 175.495L61.1067 179.152C61.7462 179.744 62.3366 180.388 62.8719 181.079C63.471 181.809 63.9645 182.623 64.3375 183.495C64.703 184.456 64.8846 185.48 64.8724 186.51C64.8941 187.618 64.6557 188.715 64.1771 189.71C63.7337 190.602 63.0607 191.354 62.23 191.887C61.5038 192.351 60.6919 192.658 59.8443 192.79L59.8336 195.043ZM52.5695 185.607C52.6575 187.176 53.1846 188.686 54.0887 189.96C54.5959 190.581 55.2402 191.072 55.9689 191.391C56.6977 191.711 57.4904 191.851 58.2824 191.8H58.8066H59.2345C60.084 191.725 60.9046 191.449 61.6309 190.994C62.3239 190.574 62.8901 189.968 63.2677 189.242C63.6696 188.398 63.8677 187.469 63.8454 186.532C63.8607 185.639 63.7045 184.752 63.3854 183.92C63.0861 183.137 62.6751 182.404 62.1658 181.743C61.6733 181.1 61.1255 180.502 60.529 179.958L56.4209 176.29C55.8826 175.816 55.4269 175.253 55.0729 174.625C54.7644 173.966 54.6176 173.242 54.645 172.513C54.6121 172.073 54.6735 171.631 54.825 171.218C54.9765 170.804 55.2144 170.429 55.5222 170.118C56.1686 169.577 56.9744 169.27 57.8116 169.248C58.2284 169.188 58.6529 169.219 59.0569 169.339C59.4608 169.459 59.835 169.666 60.1545 169.944C60.6881 170.48 61.0594 171.16 61.2244 171.904C61.3686 172.468 61.4723 173.043 61.5346 173.623L63.3854 173.123C63.3138 172.409 63.1704 171.705 62.9575 171.022C62.7525 170.379 62.4374 169.779 62.0267 169.248C61.6392 168.785 61.1573 168.414 60.6146 168.159C59.976 167.871 59.2905 167.705 58.5926 167.67H58.1112H57.5977C56.2465 167.649 54.9395 168.159 53.9496 169.095C53.4711 169.6 53.1012 170.2 52.8636 170.857C52.626 171.515 52.5258 172.216 52.5695 172.916C52.5615 173.606 52.6443 174.294 52.8156 174.962C52.9579 175.533 53.1968 176.074 53.5217 176.562C53.8736 177.089 54.2867 177.572 54.752 177.999L58.8708 181.623C59.5985 182.278 60.2581 183.008 60.8392 183.8C61.4494 184.687 61.7541 185.755 61.7058 186.837C61.7558 187.754 61.4613 188.657 60.882 189.362C60.2263 189.968 59.3719 190.304 58.4856 190.304C57.5994 190.304 56.745 189.968 56.0892 189.362C55.5067 188.715 55.1042 187.923 54.9231 187.065C54.7507 186.416 54.6291 185.753 54.5594 185.084L52.5695 185.607Z"
                fill="black"
              />
              <path
                d="M58.1757 201.791C53.8995 201.791 49.7193 200.501 46.1637 198.084C42.6082 195.667 39.8369 192.232 38.2005 188.212C36.5641 184.193 36.1359 179.77 36.9701 175.503C37.8044 171.236 39.8636 167.317 42.8873 164.24C45.9111 161.164 49.7636 159.069 53.9576 158.22C58.1517 157.372 62.499 157.807 66.4497 159.472C70.4004 161.137 73.7771 163.956 76.1529 167.574C78.5286 171.191 79.7967 175.444 79.7967 179.795C79.791 185.627 77.5113 191.218 73.4578 195.342C69.4043 199.466 63.9082 201.786 58.1757 201.791ZM58.1757 158.886C54.111 158.886 50.1377 160.112 46.7581 162.41C43.3784 164.707 40.7443 167.973 39.1889 171.793C37.6334 175.614 37.2264 179.818 38.0194 183.874C38.8124 187.929 40.7697 191.655 43.6438 194.579C46.5179 197.503 50.1798 199.495 54.1663 200.301C58.1529 201.108 62.285 200.694 66.0403 199.112C69.7955 197.529 73.0052 194.849 75.2634 191.411C77.5215 187.972 78.7268 183.93 78.7268 179.795C78.7212 174.251 76.5542 168.936 72.7013 165.016C68.8484 161.096 63.6244 158.892 58.1757 158.886Z"
                fill="black"
              />
              <path
                d="M58.1762 199.495C54.3464 199.495 50.6026 198.339 47.4183 196.175C44.234 194.01 41.7521 190.933 40.2865 187.334C38.8209 183.734 38.4374 179.773 39.1846 175.951C39.9317 172.13 41.7759 168.619 44.484 165.864C47.1921 163.109 50.6423 161.233 54.3985 160.473C58.1547 159.713 62.0481 160.103 65.5863 161.594C69.1246 163.085 72.1488 165.61 74.2765 168.85C76.4042 172.089 77.5398 175.898 77.5398 179.795C77.5342 185.018 75.4923 190.025 71.8621 193.718C68.2319 197.412 63.31 199.489 58.1762 199.495ZM58.1762 161.183C54.558 161.183 51.0211 162.274 48.0127 164.319C45.0043 166.364 42.6595 169.271 41.2749 172.672C39.8902 176.073 39.528 179.815 40.2338 183.426C40.9397 187.036 42.682 190.352 45.2405 192.955C47.7989 195.558 51.0586 197.331 54.6072 198.049C58.1559 198.767 61.8342 198.398 65.1769 196.99C68.5197 195.581 71.3768 193.195 73.387 190.135C75.3971 187.074 76.47 183.476 76.47 179.795C76.4644 174.86 74.5352 170.129 71.1056 166.64C67.6761 163.151 63.0263 161.188 58.1762 161.183Z"
                fill="black"
              />
            </g>
            <g opacity="0.3">
              <path
                d="M344.76 475.975H342.182V472.829C340.894 472.834 339.622 472.542 338.461 471.977C337.3 471.411 336.278 470.587 335.474 469.564C333.834 467.256 332.937 464.488 332.906 461.641V461.205L338.405 459.692V460.356C338.485 461.591 338.679 462.815 338.983 464.013C339.219 465.034 339.705 465.977 340.395 466.756C340.735 467.098 341.143 467.363 341.591 467.531C342.039 467.7 342.518 467.77 342.995 467.736C343.464 467.776 343.935 467.713 344.378 467.552C344.821 467.39 345.225 467.134 345.562 466.8C346.194 466.003 346.504 464.991 346.429 463.97C346.492 462.664 346.135 461.372 345.412 460.291C344.6 459.209 343.687 458.21 342.684 457.309L336.619 451.867C335.852 451.162 335.173 450.366 334.597 449.494C334.035 448.65 333.619 447.715 333.366 446.729C333.084 445.624 332.947 444.486 332.96 443.344C332.895 442.151 333.069 440.957 333.472 439.834C333.875 438.711 334.497 437.684 335.303 436.814C336.871 435.306 338.923 434.428 341.08 434.343V431.285H343.711V434.365C344.734 434.471 345.734 434.739 346.675 435.159C347.662 435.616 348.534 436.297 349.221 437.151C349.939 438.057 350.487 439.09 350.836 440.199C351.242 441.529 351.497 442.902 351.596 444.291V444.748L346.247 446.218V445.565C346.172 444.463 346 443.37 345.733 442.299C345.535 441.443 345.101 440.661 344.482 440.046C344.141 439.762 343.744 439.554 343.318 439.438C342.891 439.321 342.446 439.299 342.01 439.371C341.06 439.387 340.141 439.724 339.4 440.329C339.087 440.665 338.848 441.065 338.699 441.502C338.549 441.94 338.493 442.404 338.533 442.865C338.502 443.724 338.67 444.578 339.026 445.358C339.478 446.146 340.053 446.855 340.727 447.458L346.825 452.901C347.762 453.762 348.628 454.701 349.414 455.709C350.235 456.78 350.904 457.964 351.403 459.224C351.93 460.612 352.192 462.09 352.174 463.578C352.206 465.178 351.865 466.763 351.179 468.204C350.546 469.5 349.582 470.598 348.386 471.382C347.276 472.09 346.028 472.547 344.728 472.721L344.76 475.975ZM343.251 474.887H343.69V471.774L344.171 471.719C345.473 471.611 346.731 471.189 347.841 470.489C348.877 469.806 349.712 468.851 350.259 467.725C350.864 466.439 351.165 465.026 351.136 463.6C351.153 462.243 350.917 460.895 350.441 459.627C349.98 458.456 349.361 457.357 348.6 456.362C347.853 455.403 347.03 454.508 346.14 453.684L340.042 448.242C339.277 447.555 338.626 446.747 338.116 445.848C337.675 444.911 337.463 443.881 337.496 442.844C337.456 442.228 337.545 441.611 337.757 441.033C337.969 440.455 338.299 439.929 338.726 439.491C339.63 438.727 340.761 438.294 341.936 438.261C342.519 438.18 343.113 438.225 343.679 438.392C344.244 438.558 344.769 438.844 345.22 439.23C345.99 439.983 346.529 440.947 346.771 442.005C347.008 442.93 347.173 443.873 347.263 444.824L350.473 443.932C350.374 442.782 350.151 441.647 349.809 440.547C349.5 439.564 349.018 438.645 348.386 437.837C347.805 437.12 347.074 436.544 346.247 436.15C345.27 435.711 344.222 435.46 343.155 435.41H342.663V432.417H342.171V435.431H341.647C339.586 435.403 337.594 436.183 336.084 437.608C335.378 438.377 334.835 439.285 334.485 440.274C334.136 441.264 333.988 442.316 334.051 443.366C334.041 444.412 334.163 445.454 334.415 446.468C334.635 447.336 334.996 448.16 335.485 448.906C336.016 449.703 336.637 450.433 337.335 451.083L343.39 456.525C344.449 457.478 345.416 458.531 346.279 459.67C347.14 460.948 347.568 462.477 347.499 464.024C347.578 465.319 347.168 466.596 346.354 467.594C345.915 468.038 345.389 468.381 344.81 468.603C344.231 468.824 343.612 468.918 342.995 468.879C342.371 468.91 341.748 468.808 341.166 468.58C340.583 468.351 340.055 468 339.614 467.551C338.805 466.643 338.235 465.542 337.956 464.351C337.684 463.297 337.494 462.224 337.389 461.14L333.965 462.087C334.055 464.559 334.863 466.949 336.287 468.955C337.678 470.805 339.774 471.73 342.706 471.785H343.23L343.251 474.887Z"
                fill="black"
              />
              <path
                d="M342.556 485.978C336.269 485.978 330.124 484.081 324.897 480.528C319.67 476.975 315.597 471.924 313.191 466.015C310.785 460.107 310.156 453.605 311.382 447.332C312.609 441.059 315.636 435.297 320.081 430.775C324.526 426.253 330.189 423.173 336.355 421.925C342.52 420.677 348.911 421.318 354.719 423.765C360.527 426.213 365.491 430.357 368.983 435.675C372.476 440.993 374.34 447.245 374.34 453.641C374.331 462.214 370.98 470.434 365.021 476.497C359.062 482.559 350.983 485.969 342.556 485.978ZM342.556 422.403C336.481 422.403 330.542 424.236 325.491 427.67C320.439 431.104 316.503 435.985 314.178 441.696C311.854 447.406 311.246 453.69 312.432 459.752C313.618 465.814 316.545 471.382 320.841 475.751C325.138 480.121 330.611 483.096 336.57 484.301C342.529 485.505 348.705 484.885 354.317 482.518C359.929 480.151 364.725 476.145 368.099 471.004C371.473 465.864 373.272 459.821 373.27 453.641C373.262 445.357 370.023 437.415 364.264 431.558C358.506 425.701 350.698 422.409 342.556 422.403Z"
                fill="black"
              />
              <path
                d="M342.555 482.582C336.928 482.584 331.427 480.888 326.748 477.71C322.068 474.531 318.421 470.012 316.266 464.723C314.111 459.435 313.547 453.616 314.643 448.001C315.739 442.386 318.448 437.229 322.426 433.18C326.404 429.132 331.472 426.374 336.991 425.256C342.509 424.139 348.229 424.711 353.428 426.902C358.626 429.092 363.069 432.801 366.196 437.561C369.322 442.32 370.991 447.916 370.991 453.641C370.985 461.313 367.987 468.669 362.656 474.095C357.325 479.521 350.096 482.573 342.555 482.582ZM342.555 425.799C337.139 425.797 331.845 427.429 327.341 430.488C322.837 433.548 319.327 437.898 317.253 442.988C315.18 448.078 314.637 453.679 315.693 459.083C316.749 464.487 319.357 469.45 323.186 473.346C327.015 477.242 331.894 479.895 337.206 480.97C342.517 482.044 348.023 481.491 353.026 479.382C358.028 477.272 362.304 473.701 365.311 469.119C368.319 464.537 369.923 459.15 369.921 453.641C369.912 446.259 367.026 439.183 361.896 433.963C356.766 428.744 349.81 425.808 342.555 425.799Z"
                fill="black"
              />
            </g>
            <g opacity="0.3">
              <path
                d="M128.889 454.435H126.75V452.258C125.886 452.238 125.036 452.028 124.26 451.64C123.485 451.253 122.801 450.699 122.256 450.016C121.133 448.43 120.521 446.529 120.502 444.574V444.128L124.546 443.039V443.703C124.606 444.526 124.738 445.342 124.942 446.141C125.095 446.801 125.407 447.411 125.851 447.915C126.065 448.127 126.321 448.29 126.601 448.395C126.881 448.5 127.179 448.544 127.477 448.525C127.77 448.55 128.064 448.512 128.341 448.413C128.617 448.313 128.87 448.155 129.082 447.948C129.474 447.438 129.664 446.798 129.617 446.152C129.661 445.311 129.436 444.479 128.975 443.779C128.43 443.057 127.817 442.39 127.146 441.788L123.176 438.141C122.651 437.655 122.185 437.107 121.786 436.509C121.396 435.92 121.107 435.269 120.93 434.582C120.737 433.822 120.644 433.039 120.652 432.253C120.606 431.425 120.728 430.596 121.009 429.817C121.291 429.038 121.726 428.326 122.289 427.725C123.33 426.712 124.691 426.106 126.129 426.017V423.938H128.269V426.038C128.926 426.121 129.567 426.301 130.173 426.572C130.865 426.886 131.474 427.364 131.949 427.965C132.454 428.588 132.836 429.305 133.072 430.076C133.357 430.988 133.533 431.93 133.597 432.884V433.331L129.66 434.419L129.606 433.766C129.557 433.031 129.443 432.303 129.264 431.589C129.137 431.044 128.863 430.547 128.472 430.152C128.258 429.978 128.01 429.852 127.744 429.783C127.479 429.713 127.202 429.702 126.932 429.75C126.329 429.758 125.746 429.969 125.273 430.348C125.083 430.56 124.937 430.809 124.847 431.081C124.757 431.353 124.723 431.641 124.749 431.927C124.728 432.477 124.834 433.025 125.059 433.527C125.344 434.037 125.705 434.5 126.129 434.898L130.237 438.555C130.879 439.144 131.47 439.789 132.002 440.482C132.575 441.215 133.04 442.029 133.383 442.898C133.744 443.86 133.922 444.883 133.907 445.913C133.932 447.02 133.697 448.117 133.222 449.113C132.776 450.002 132.103 450.754 131.275 451.29C130.549 451.754 129.737 452.061 128.889 452.193V454.435ZM121.636 445.02C121.719 446.59 122.247 448.102 123.155 449.374C123.661 449.993 124.304 450.483 125.031 450.802C125.757 451.122 126.548 451.263 127.338 451.213H127.862H128.301C129.135 451.148 129.943 450.891 130.665 450.462C131.338 450.017 131.881 449.397 132.238 448.666C132.631 447.82 132.825 446.892 132.805 445.956C132.818 445.065 132.666 444.178 132.356 443.344C132.052 442.564 131.641 441.831 131.136 441.167C130.64 440.527 130.093 439.93 129.499 439.382L125.38 435.714C124.848 435.238 124.396 434.675 124.043 434.049C123.73 433.392 123.58 432.667 123.604 431.938C123.574 431.497 123.637 431.055 123.79 430.641C123.944 430.228 124.183 429.853 124.492 429.543C125.136 428.997 125.944 428.69 126.782 428.672C127.199 428.613 127.623 428.645 128.027 428.765C128.431 428.885 128.805 429.091 129.125 429.369C129.654 429.907 130.025 430.586 130.194 431.328C130.334 431.894 130.437 432.468 130.505 433.048L132.345 432.547C132.277 431.833 132.134 431.129 131.917 430.446C131.721 429.8 131.405 429.198 130.986 428.672C130.605 428.207 130.126 427.835 129.585 427.584C128.946 427.295 128.261 427.129 127.563 427.094H127.081H126.568C125.216 427.072 123.909 427.583 122.92 428.52C122.458 429.02 122.103 429.612 121.877 430.258C121.65 430.904 121.557 431.591 121.604 432.275C121.598 432.964 121.677 433.652 121.839 434.321C121.991 434.89 122.233 435.431 122.556 435.921C122.907 436.446 123.316 436.928 123.776 437.358L127.862 441.015C128.587 441.673 129.247 442.402 129.831 443.192C130.431 444.079 130.732 445.141 130.687 446.218C130.744 447.134 130.453 448.038 129.874 448.743C129.563 449.064 129.189 449.314 128.775 449.476C128.362 449.637 127.919 449.706 127.477 449.679C127.033 449.698 126.589 449.622 126.175 449.457C125.76 449.292 125.384 449.042 125.07 448.721C124.506 448.083 124.105 447.312 123.904 446.479C123.737 445.828 123.615 445.166 123.54 444.498L121.636 445.02Z"
                fill="black"
              />
              <path
                d="M127.22 461.183C122.944 461.181 118.765 459.889 115.211 457.471C111.656 455.053 108.887 451.616 107.252 447.597C105.617 443.577 105.191 439.155 106.026 434.888C106.862 430.622 108.922 426.704 111.946 423.628C114.97 420.553 118.822 418.459 123.016 417.611C127.21 416.763 131.557 417.2 135.507 418.865C139.457 420.53 142.833 423.35 145.208 426.967C147.584 430.584 148.851 434.836 148.851 439.186C148.843 445.02 146.561 450.611 142.506 454.735C138.45 458.859 132.953 461.178 127.22 461.183ZM127.22 418.278C123.155 418.28 119.183 419.508 115.805 421.807C112.427 424.106 109.794 427.372 108.24 431.193C106.687 435.013 106.281 439.217 107.075 443.272C107.87 447.327 109.828 451.052 112.702 453.975C115.577 456.898 119.239 458.888 123.225 459.694C127.211 460.5 131.343 460.085 135.097 458.502C138.852 456.919 142.061 454.24 144.319 450.801C146.577 447.363 147.782 443.321 147.782 439.186C147.776 433.641 145.607 428.325 141.752 424.404C137.897 420.484 132.67 418.281 127.22 418.278Z"
                fill="black"
              />
              <path
                d="M127.22 458.887C123.391 458.885 119.648 457.727 116.465 455.561C113.282 453.395 110.802 450.318 109.338 446.718C107.874 443.118 107.492 439.157 108.241 435.336C108.989 431.516 110.834 428.006 113.542 425.252C116.251 422.498 119.701 420.623 123.457 419.864C127.213 419.104 131.106 419.495 134.643 420.987C138.181 422.478 141.205 425.003 143.332 428.243C145.459 431.482 146.595 435.29 146.595 439.186C146.589 444.411 144.545 449.42 140.913 453.114C137.281 456.808 132.356 458.884 127.22 458.887ZM127.22 420.574C123.602 420.577 120.067 421.67 117.06 423.716C114.053 425.763 111.709 428.67 110.326 432.071C108.944 435.472 108.583 439.214 109.29 442.824C109.997 446.434 111.74 449.749 114.299 452.351C116.858 454.953 120.117 456.724 123.666 457.441C127.214 458.159 130.892 457.79 134.234 456.381C137.576 454.972 140.433 452.586 142.442 449.525C144.452 446.465 145.525 442.867 145.525 439.186C145.519 434.25 143.588 429.518 140.157 426.028C136.725 422.539 132.072 420.577 127.22 420.574Z"
                fill="black"
              />
            </g>
            <g opacity="0.3">
              <path
                d="M437.049 62.5389H434.91V60.3621C434.048 60.3478 433.199 60.1405 432.424 59.7549C431.649 59.3692 430.968 58.8147 430.427 58.1308C429.299 56.5468 428.682 54.645 428.662 52.6887V52.2533L432.717 51.1649V51.818C432.768 52.645 432.897 53.465 433.102 54.2669C433.257 54.9222 433.569 55.5281 434.011 56.0301C434.225 56.2415 434.481 56.4049 434.761 56.5099C435.041 56.6149 435.339 56.6591 435.637 56.6397C435.93 56.668 436.225 56.631 436.502 56.5314C436.779 56.4317 437.032 56.2718 437.242 56.0628C437.638 55.5591 437.829 54.9205 437.777 54.2778C437.821 53.4336 437.596 52.5974 437.135 51.8942C436.593 51.1754 435.984 50.5119 435.316 49.9132L431.283 46.2344C430.759 45.7472 430.292 45.1993 429.892 44.6018C429.503 44.017 429.213 43.3693 429.037 42.6861C428.844 41.9254 428.751 41.1424 428.758 40.3569C428.709 39.5198 428.828 38.6812 429.11 37.893C429.391 37.1049 429.829 36.3839 430.395 35.7747C431.438 34.7644 432.799 34.1628 434.236 34.0767V32.0305H436.376V34.142C437.034 34.2188 437.676 34.3987 438.28 34.6754C438.969 34.9952 439.579 35.4674 440.066 36.0577C440.555 36.7078 440.918 37.4465 441.136 38.2345C441.423 39.1453 441.599 40.0883 441.66 41.0426V41.4889L437.723 42.5773L437.67 41.9134C437.621 41.1787 437.506 40.4501 437.328 39.7365C437.203 39.1909 436.929 38.6925 436.536 38.2998C436.323 38.1236 436.075 37.9956 435.809 37.9243C435.544 37.853 435.266 37.84 434.995 37.8862C434.397 37.8979 433.818 38.1081 433.348 38.4848C433.15 38.6941 433 38.9447 432.908 39.2192C432.815 39.4937 432.783 39.7854 432.813 40.0739C432.787 40.6227 432.897 41.1692 433.134 41.663C433.412 42.1786 433.773 42.6423 434.204 43.0344L438.397 46.6589C439.04 47.2504 439.634 47.8947 440.173 48.5854C440.74 49.3246 441.201 50.1417 441.543 51.0125C441.908 51.9774 442.09 53.0043 442.078 54.0383C442.097 55.1458 441.859 56.2423 441.382 57.2383C440.942 58.1321 440.268 58.8852 439.435 59.4151C438.71 59.8826 437.898 60.1938 437.049 60.3294V62.5389ZM429.796 53.0914C429.855 54.691 430.372 56.2382 431.283 57.5431C431.791 58.1604 432.434 58.6483 433.16 58.9677C433.886 59.2871 434.676 59.4292 435.466 59.3825H435.99H436.429C437.279 59.3123 438.101 59.0361 438.825 58.577C439.5 58.1391 440.044 57.5218 440.398 56.792C440.798 55.9475 440.996 55.0189 440.976 54.0819C440.987 53.1893 440.831 52.3028 440.516 51.4697C440.219 50.6859 439.808 49.9521 439.296 49.2928C438.819 48.6365 438.286 48.0246 437.702 47.4643L433.583 43.7963C433.05 43.3158 432.599 42.7496 432.246 42.1202C431.935 41.4664 431.784 40.7455 431.807 40.0195C431.777 39.5788 431.84 39.1366 431.993 38.7232C432.147 38.3099 432.386 37.9352 432.695 37.625C433.339 37.0786 434.147 36.7715 434.985 36.7543C435.402 36.693 435.826 36.7235 436.231 36.8437C436.635 36.9639 437.009 37.1709 437.328 37.4508C437.861 37.9822 438.232 38.6586 438.397 39.3991C438.541 39.9678 438.644 40.5461 438.708 41.1297L440.548 40.6181C440.479 39.9044 440.336 39.2002 440.12 38.5175C439.925 37.876 439.613 37.2777 439.2 36.7543C438.818 36.2853 438.335 35.9128 437.788 35.6658C437.149 35.3772 436.464 35.2112 435.766 35.176H435.284H434.771C433.422 35.1556 432.116 35.6619 431.123 36.591C430.661 37.0931 430.306 37.6867 430.079 38.3346C429.853 38.9825 429.76 39.6709 429.807 40.3569C429.802 41.0463 429.881 41.7336 430.042 42.4031C430.195 42.9687 430.437 43.5053 430.759 43.9922C431.107 44.5191 431.517 45.0015 431.979 45.4289L436.065 49.0969C436.79 49.7547 437.45 50.4839 438.034 51.2738C438.633 52.1658 438.933 53.2309 438.89 54.3104C438.947 55.2271 438.656 56.1311 438.077 56.8356C437.766 57.1557 437.391 57.4041 436.977 57.5637C436.564 57.7233 436.121 57.7905 435.68 57.7607C435.236 57.781 434.793 57.7073 434.379 57.5443C433.965 57.3813 433.588 57.1325 433.273 56.8138C432.709 56.1755 432.308 55.4053 432.107 54.5717C431.945 53.9203 431.827 53.2584 431.754 52.5907L429.796 53.0914Z"
                fill="black"
              />
              <path
                d="M435.392 69.2871C431.113 69.2893 426.929 68.0001 423.37 65.5827C419.811 63.1653 417.037 59.7282 415.399 55.7064C413.76 51.6845 413.331 47.2586 414.165 42.9885C414.999 38.7184 417.06 34.7959 420.086 31.7174C423.112 28.6389 426.967 26.5427 431.164 25.6938C435.361 24.845 439.712 25.2818 443.665 26.9488C447.618 28.6159 450.996 31.4384 453.372 35.0592C455.748 38.68 457.015 42.9365 457.013 47.2902C457.005 53.1215 454.724 58.7115 450.671 62.8348C446.618 66.9582 441.124 69.2785 435.392 69.2871ZM435.392 26.3708C431.325 26.3686 427.349 27.5937 423.966 29.8911C420.583 32.1884 417.946 35.4548 416.388 39.2771C414.83 43.0995 414.421 47.306 415.214 51.3647C416.006 55.4234 417.963 59.1519 420.838 62.0786C423.714 65.0053 427.377 66.9988 431.366 67.8068C435.355 68.6149 439.49 68.2013 443.248 66.6183C447.006 65.0352 450.218 62.3539 452.478 58.9135C454.737 55.4731 455.944 51.4281 455.944 47.2902C455.938 41.7457 453.771 36.4297 449.919 32.5082C446.066 28.5866 440.842 26.3794 435.392 26.3708Z"
                fill="black"
              />
              <path
                d="M435.393 66.9906C431.56 66.9928 427.813 65.8383 424.625 63.6732C421.437 61.5082 418.952 58.4298 417.485 54.8276C416.017 51.2254 415.632 47.2612 416.38 43.4366C417.127 39.612 418.972 36.0987 421.682 33.3414C424.393 30.5841 427.846 28.7066 431.605 27.9463C435.364 27.1861 439.261 27.5774 442.801 29.0706C446.342 30.5639 449.368 33.092 451.496 36.3352C453.624 39.5783 454.759 43.3908 454.757 47.2903C454.751 52.5134 452.709 57.5209 449.079 61.2142C445.449 64.9075 440.527 66.9849 435.393 66.9906ZM435.393 28.6674C431.772 28.6653 428.232 29.7557 425.221 31.8006C422.209 33.8456 419.861 36.7534 418.474 40.1561C417.087 43.5588 416.723 47.3035 417.428 50.9167C418.133 54.5299 419.876 57.8492 422.435 60.4548C424.995 63.0603 428.256 64.835 431.807 65.5545C435.358 66.2739 439.039 65.9058 442.385 64.4966C445.73 63.0874 448.589 60.7004 450.601 57.6377C452.613 54.5749 453.687 50.974 453.687 47.2903C453.681 42.3548 451.752 37.623 448.323 34.1321C444.894 30.6412 440.244 28.6761 435.393 28.6674Z"
                fill="black"
              />
            </g>
            <path
              d="M260.019 3.31811L257.879 3.10042L258.082 0.923584L260.222 1.14127L260.019 3.31811Z"
              fill="#2B2B2B"
            />
            <path
              d="M241.608 350.915H239.939V348.739C241.362 348.739 242.785 348.739 244.218 348.739V350.915H241.608ZM235.638 350.807C234.194 350.807 232.761 350.698 231.359 350.611L231.477 348.434C232.9 348.521 234.312 348.586 235.756 348.641L235.638 350.807ZM248.562 350.807L248.476 348.63C249.899 348.575 251.322 348.499 252.755 348.412L252.895 350.589C251.44 350.643 250.006 350.72 248.562 350.774V350.807ZM227.026 350.328C225.6 350.204 224.174 350.063 222.747 349.903L222.982 347.726C224.384 347.879 225.807 348.02 227.262 348.14L227.026 350.328ZM257.174 350.241L256.981 348.064C258.404 347.933 259.816 347.792 261.261 347.628L261.507 349.805C260.041 349.925 258.607 350.077 257.174 350.208V350.241ZM218.446 349.381C217.013 349.185 215.59 348.967 214.167 348.739L214.51 346.562C215.9 346.79 217.312 346.997 218.725 347.193L218.446 349.381ZM265.743 349.239L265.443 347.062C266.856 346.867 268.257 346.649 269.659 346.409L270.012 348.586C268.589 348.782 267.166 349.011 265.743 349.239ZM209.931 347.998C208.508 347.726 207.096 347.443 205.651 347.139L206.101 344.962C207.484 345.267 208.875 345.55 210.273 345.811L209.931 347.998ZM274.259 347.813L273.852 345.637C275.254 345.365 276.644 345.071 278.025 344.766L278.485 346.943C277.083 347.204 275.671 347.498 274.259 347.781V347.813ZM201.511 346.17C200.11 345.833 198.719 345.473 197.328 345.082L197.874 342.97C199.243 343.34 200.623 343.699 202.003 344.058L201.511 346.17ZM282.7 345.941L282.197 343.83C283.577 343.482 284.957 343.122 286.326 342.741L286.883 344.842C285.481 345.19 284.08 345.56 282.678 345.909L282.7 345.941ZM193.167 343.928C191.787 343.514 190.417 343.079 189.048 342.633L189.701 340.565C191.048 341 192.407 341.424 193.777 341.838L193.167 343.928ZM291.033 343.645L290.424 341.555C291.782 341.141 293.141 340.706 294.489 340.26L295.152 342.328C293.762 342.709 292.392 343.188 291.012 343.612L291.033 343.645ZM184.951 341.25C183.592 340.761 182.244 340.271 180.896 339.748L181.655 337.713C182.982 338.224 184.309 338.714 185.657 339.193L184.951 341.25ZM299.25 340.913L298.533 338.867C299.881 338.377 301.218 337.876 302.545 337.354L303.304 339.389C301.946 339.879 300.587 340.39 299.228 340.88L299.25 340.913ZM176.884 338.159C175.547 337.604 174.231 337.071 172.915 336.461L173.771 334.469C175.065 335.035 176.371 335.558 177.686 336.135L176.884 338.159ZM307.327 337.767L306.514 335.754C307.83 335.199 309.135 334.665 310.44 334.045L311.307 336.037C309.987 336.603 308.653 337.169 307.305 337.735L307.327 337.767ZM169 334.665C167.694 334.056 166.4 333.414 165.116 332.772L166.068 330.823C167.341 331.465 168.614 332.086 169.898 332.695L169 334.665ZM315.243 334.208L314.323 332.238C315.607 331.618 316.891 330.976 318.164 330.323L319.127 332.271C317.811 332.913 316.517 333.544 315.222 334.176L315.243 334.208ZM161.265 330.736C160.002 330.05 158.74 329.354 157.488 328.636L158.558 326.742C159.788 327.449 161.029 328.135 162.292 328.81L161.265 330.736ZM322.935 330.203L321.93 328.276C323.181 327.602 324.422 326.894 325.663 326.187L326.733 328.07C325.471 328.81 324.208 329.517 322.935 330.214V330.203ZM153.755 326.448C152.524 325.708 151.294 324.946 150.085 324.173L151.219 322.323C152.417 323.099 153.626 323.85 154.846 324.576L153.755 326.448ZM330.445 325.849L329.376 323.988C330.595 323.262 331.804 322.5 333.002 321.702L334.158 323.542C332.863 324.336 331.686 325.109 330.445 325.86V325.849ZM146.437 321.8C145.239 320.984 144.051 320.168 142.875 319.33L144.094 317.545C145.26 318.372 146.437 319.188 147.614 319.983L146.437 321.8ZM337.699 321.136L336.511 319.33C337.688 318.513 338.854 317.697 340.02 316.859L341.251 318.633C340.117 319.493 338.929 320.32 337.731 321.147L337.699 321.136ZM139.376 316.783C138.221 315.912 137.076 315.03 135.942 314.138L137.247 312.418C138.317 313.3 139.505 314.17 140.639 315.03L139.376 316.783ZM344.781 316.053L343.508 314.312C344.642 313.452 345.765 312.57 346.889 311.667L348.215 313.376C347.074 314.29 345.926 315.183 344.77 316.053H344.781ZM132.615 311.406C131.492 310.481 130.401 309.545 129.309 308.587L130.7 306.932C131.77 307.879 132.84 308.805 133.91 309.719L132.615 311.406ZM351.564 310.622L350.194 308.968C351.286 308.039 352.355 307.103 353.404 306.16L354.816 307.803C353.757 308.739 352.666 309.686 351.553 310.622H351.564ZM126.057 305.703C124.987 304.723 123.918 303.722 122.901 302.72L124.367 301.142C125.437 302.133 126.442 303.112 127.491 304.081L126.057 305.703ZM358.057 304.864L356.613 303.264C357.683 302.285 358.699 301.294 359.716 300.293L361.203 301.86C360.14 302.869 359.092 303.867 358.057 304.854V304.864ZM119.809 299.651C118.797 298.613 117.791 297.568 116.793 296.516L118.344 295.014C119.328 296.103 120.312 297.093 121.318 298.116L119.809 299.651ZM364.273 298.78L362.754 297.246C363.749 296.222 364.733 295.178 365.707 294.122L367.269 295.613C366.284 296.669 365.279 297.724 364.273 298.769V298.78ZM113.861 293.338C112.888 292.25 111.936 291.161 110.994 290.073L112.62 288.647C113.551 289.735 114.492 290.824 115.445 291.912L113.861 293.338ZM370.178 292.413L368.584 290.965C369.526 289.884 370.457 288.796 371.377 287.7L373.013 289.104C372.083 290.182 371.131 291.281 370.178 292.369V292.413ZM108.202 286.644C107.293 285.556 106.394 284.37 105.506 283.205L107.196 281.877C108.063 282.965 108.951 284.141 109.86 285.262L108.202 286.644ZM375.742 285.687L374.073 284.315C374.971 283.19 375.849 282.058 376.704 280.919L378.405 282.247C377.55 283.401 376.662 284.555 375.763 285.687H375.742ZM102.938 279.711C102.083 278.536 101.237 277.349 100.414 276.152L102.168 274.9C102.981 276.087 103.816 277.251 104.661 278.416L102.938 279.711ZM381.091 278.732L379.283 277.404C380.117 276.239 380.941 275.064 381.743 273.877L383.508 275.118C382.685 276.315 381.85 277.556 381.005 278.732H381.091ZM98.028 272.517C97.2363 271.298 96.4553 270.068 95.6851 268.827L97.4931 267.673C98.2526 268.892 99.0229 270.111 99.8146 271.319L98.028 272.517ZM385.98 271.526L384.193 270.329C384.974 269.121 385.734 267.913 386.482 266.683L388.301 267.826C387.424 269.077 386.696 270.307 385.905 271.526H385.98ZM93.4278 265.083C92.7003 263.82 91.9728 262.558 91.2881 261.273L93.1496 260.185C93.8557 261.447 94.5618 262.699 95.2892 263.951L93.4278 265.083ZM390.526 264.081L388.676 262.993C389.392 261.741 390.088 260.49 390.815 259.227L392.687 260.315C391.885 261.556 391.168 262.819 390.451 264.081H390.526ZM89.202 257.42C88.528 256.125 87.8647 254.819 87.2228 253.502L89.1378 252.533C89.7797 253.829 90.4216 255.124 91.0956 256.397L89.202 257.42ZM394.688 256.419L392.794 255.407C393.447 254.133 394.078 252.849 394.709 251.554L396.624 252.512C395.918 253.818 395.276 255.124 394.613 256.419H394.688ZM85.2758 249.54C84.666 248.212 84.0776 246.874 83.4999 245.524L85.4576 244.664C86.0246 245.992 86.613 247.309 87.2121 248.615L85.2758 249.54ZM398.39 248.561L396.453 247.646C397.042 246.34 397.609 245.023 398.165 243.695L400.133 244.555C399.577 245.894 398.989 247.233 398.39 248.561ZM81.8202 241.486C81.2746 240.125 80.7504 238.754 80.2476 237.383L82.2482 236.621C82.751 237.97 83.318 239.32 83.7994 240.659L81.8202 241.486ZM401.781 240.528L399.791 239.723C400.315 238.384 400.861 237.034 401.321 235.674L403.332 236.425C402.829 237.796 402.316 239.157 401.781 240.517V240.528ZM78.7713 233.236C78.2899 231.853 77.8405 230.46 77.3912 229.056L79.4346 228.392C79.8732 229.774 80.3225 231.146 80.7932 232.517L78.7713 233.236ZM404.776 232.289L402.754 231.581C403.204 230.221 403.653 228.838 404.081 227.467L406.114 228.109C405.686 229.513 405.236 230.906 404.776 232.289ZM76.1074 224.855C75.7116 223.451 75.3265 222.047 74.952 220.632L77.0168 220.077C77.3805 221.47 77.7656 222.863 78.1615 224.245L76.1074 224.855ZM407.333 223.908L405.279 223.309C405.679 221.923 406.053 220.53 406.402 219.13L408.478 219.674C408.136 221.089 407.75 222.504 407.355 223.908H407.333ZM73.9678 216.376C73.6255 214.95 73.3152 213.524 73.0157 212.099L75.1553 211.641C75.4441 213.056 75.7544 214.471 76.086 215.875L73.9678 216.376ZM409.569 215.418L407.429 214.918C407.75 213.514 408.05 212.109 408.339 210.684L410.478 211.13C410.158 212.567 409.89 213.992 409.526 215.418H409.569ZM72.1277 207.745C71.871 206.308 71.6249 204.871 71.4002 203.391L73.5399 203.043C73.7645 204.469 74.0106 205.895 74.2673 207.32L72.1277 207.745ZM411.259 206.776L409.12 206.384C409.366 204.969 409.601 203.544 409.826 202.118L411.965 202.444C411.762 203.935 411.516 205.383 411.27 206.82L411.259 206.776ZM70.7584 199.125C70.5658 197.677 70.3946 196.219 70.2341 194.771L72.3738 194.532C72.5236 195.968 72.6947 197.405 72.8873 198.831L70.7584 199.125ZM412.575 198.145L410.436 197.862C410.618 196.436 410.778 195 410.928 193.563L413.067 193.78C412.928 195.239 412.768 196.697 412.586 198.145H412.575ZM69.8276 190.395C69.7099 188.948 69.6136 187.489 69.5281 186.042L71.6677 185.911C71.7533 187.359 71.8603 188.806 71.9779 190.265L69.8276 190.395ZM413.474 189.416L411.334 189.242C411.452 187.805 411.538 186.368 411.612 184.888L413.752 184.997C413.677 186.499 413.581 187.957 413.474 189.416ZM69.3248 181.623C69.3248 180.164 69.2392 178.706 69.2285 177.269H71.3681C71.3681 178.717 71.3682 180.164 71.4644 181.623H69.3248ZM413.934 180.643L411.794 180.578C411.794 179.141 411.859 177.694 411.859 176.224H413.998C413.998 177.726 413.977 179.196 413.934 180.654V180.643ZM71.3788 172.915H69.2392C69.2392 171.446 69.3034 169.988 69.3569 168.562L71.4965 168.649C71.443 170.009 71.4002 171.446 71.3788 172.915ZM411.826 171.936C411.826 170.488 411.752 169.052 411.687 167.582L413.827 167.484C413.891 168.943 413.934 170.412 413.966 171.838L411.826 171.936ZM71.7105 164.208L69.5709 164.067C69.6564 162.608 69.7741 161.15 69.9025 159.713L72.0421 159.909C71.9138 161.357 71.8282 162.793 71.7105 164.208ZM411.441 163.218C411.345 161.77 411.227 160.322 411.088 158.864L413.228 158.657C413.367 160.116 413.485 161.574 413.592 163.011L411.441 163.218ZM72.4701 155.599L70.3304 155.348C70.5016 153.89 70.6835 152.442 70.876 150.995L73.0157 151.3C72.8124 152.736 72.6305 154.162 72.4701 155.61V155.599ZM410.628 154.587C410.468 153.15 410.275 151.713 410.072 150.287L412.212 149.972C412.415 151.419 412.607 152.867 412.779 154.325L410.628 154.587ZM73.6362 146.968L71.4965 146.608C71.7319 145.161 71.9886 143.724 72.2561 142.255L74.3957 142.668C74.139 144.17 73.8822 145.596 73.6576 147.022L73.6362 146.968ZM409.377 145.955C409.141 144.504 408.884 143.078 408.606 141.678L410.746 141.253C411.024 142.69 411.292 144.138 411.527 145.607L409.377 145.955ZM75.2516 138.511L73.1119 138.043C73.4222 136.617 73.7431 135.191 74.0855 133.765L76.1609 134.288C75.8828 135.692 75.5618 137.096 75.2516 138.511ZM407.75 137.487C407.44 136.073 407.119 134.668 406.766 133.264L408.842 132.731C409.195 134.146 409.526 135.572 409.847 137.009L407.75 137.487ZM77.2842 130.086L75.2195 129.52C75.6046 128.105 75.9898 126.701 76.407 125.297L78.4503 125.918C78.0331 127.3 77.648 128.693 77.2735 130.086H77.2842ZM405.718 129.063C405.343 127.67 404.947 126.277 404.53 124.894L406.574 124.263C406.991 125.667 407.397 127.071 407.783 128.486L405.718 129.063ZM79.7127 121.76L77.6801 121.085C78.1294 119.692 78.5894 118.31 79.0708 116.927L81.0821 117.657C80.6114 119.039 80.1513 120.41 79.7127 121.76ZM403.182 120.737C402.733 119.365 402.262 118.005 401.781 116.644L403.792 115.904C404.284 117.276 404.755 118.658 405.204 120.051L403.182 120.737ZM82.5263 113.618L80.5258 112.835C81.0393 111.463 81.5956 110.103 82.1198 108.753L84.099 109.58C83.5961 110.876 83.0612 112.258 82.5263 113.618ZM400.262 112.606C399.737 111.257 399.192 109.918 398.657 108.579L400.636 107.741C401.192 109.091 401.706 110.44 402.252 111.812L400.262 112.606ZM85.7358 105.619L83.778 104.737C84.3557 103.398 84.9548 102.07 85.5646 100.753L87.501 101.679C86.9554 102.985 86.367 104.345 85.8 105.619H85.7358ZM396.913 104.606C396.335 103.278 395.736 101.972 395.116 100.666L397.052 99.7302C397.673 101.047 398.283 102.375 398.871 103.714L396.913 104.606ZM89.4266 97.8146L87.5117 96.8351C88.1536 95.5289 88.8169 94.2337 89.4908 92.9494L91.3737 93.9725C90.7104 95.2351 90.015 96.5085 89.4266 97.8146ZM393.254 96.7915C392.613 95.5072 391.949 94.2228 391.275 92.9494L393.147 91.861C393.861 93.1453 394.535 94.4405 395.169 95.7466L393.254 96.7915ZM93.4278 90.1957L91.5663 89.1073C92.2831 87.8338 92.9998 86.5821 93.7059 85.3305L95.546 86.4189C94.8399 87.6706 94.1338 88.9222 93.4278 90.1957ZM389.221 89.1835C388.515 87.9318 387.788 86.6801 387.082 85.4502L388.9 84.3618C389.649 85.6135 390.387 86.8651 391.104 88.1386L389.221 89.1835ZM97.814 82.7618L96.006 81.5863C96.7763 80.3564 97.5572 79.1374 98.3596 77.9183L100.136 79.1374C99.3438 80.3346 98.5736 81.5428 97.814 82.7618ZM384.781 81.7496C384.011 80.5414 383.23 79.3333 382.428 78.136L384.214 76.917C385.028 78.1251 385.819 79.3442 386.6 80.5741L384.781 81.7496ZM102.553 75.5674L100.799 74.3157C101.633 73.1184 102.478 71.9429 103.334 70.7674L105.046 72.0735C104.201 73.2273 103.366 74.3919 102.553 75.5674ZM379.935 74.5878C379.111 73.4123 378.266 72.2477 377.41 71.0939L379.111 69.7878C379.982 70.9488 380.837 72.1243 381.679 73.3143L379.935 74.5878ZM107.635 68.6341L105.955 67.3389C106.843 66.2505 107.742 65.0532 108.662 63.9322L110.342 65.26C109.4 66.3702 108.512 67.5022 107.635 68.6341ZM374.843 67.6763C373.955 66.5879 373.056 65.4233 372.136 64.3131L373.784 62.9199C374.704 64.0446 375.613 65.1766 376.512 66.3158L374.843 67.6763ZM113.059 61.9512L111.411 60.5254C112.353 59.437 113.316 58.3486 114.278 57.2602L115.862 58.7295C114.931 59.7853 113.99 60.8628 113.059 61.9512ZM369.365 61.0261C368.424 59.9377 367.472 58.8492 366.509 57.7608L368.071 56.2806C369.055 57.369 370.018 58.4574 370.97 59.5458L369.365 61.0261ZM118.804 55.584L117.263 54.0711C118.258 52.9827 119.264 51.9704 120.291 50.9473L121.799 52.4929C120.783 53.4833 119.788 54.5173 118.804 55.5622V55.584ZM124.859 49.478L123.393 47.8998C124.442 46.8984 125.512 45.908 126.603 44.9284L128.026 46.5501C126.934 47.4862 125.897 48.4657 124.859 49.4562V49.478ZM131.203 43.6876L129.812 42.0332C130.882 41.0863 132.016 40.1502 133.129 39.2251L134.477 40.923C133.375 41.8046 132.283 42.7298 131.203 43.6658V43.6876ZM137.825 38.2455L136.52 36.5149C137.665 35.6224 138.809 34.7408 139.975 33.8809L141.238 35.6333C140.082 36.4605 138.948 37.3312 137.825 38.2128V38.2455ZM144.704 33.119L143.506 31.3014C144.693 30.4633 145.892 29.647 147.09 28.8416L148.267 30.6592C147.058 31.4211 145.881 32.2701 144.704 33.0864V33.119ZM151.84 28.3518L150.706 26.5123C151.925 25.7396 153.166 24.9777 154.407 24.2375L155.477 26.1096C154.257 26.8062 153.049 27.5572 151.84 28.3191V28.3518ZM159.2 23.9981L158.13 22.0934C159.382 21.3859 160.655 20.6893 161.928 20.0145L162.923 21.941C161.682 22.565 160.441 23.2253 159.2 23.9219V23.9981ZM166.764 19.9818L165.822 18.0336C167.117 17.3805 168.422 16.7601 169.727 16.1397L170.626 18.1206C169.331 18.654 168.037 19.2743 166.764 19.9056V19.9818ZM174.531 16.2812L173.696 14.2785C175.012 13.7016 176.349 13.1357 177.686 12.5915L178.478 14.6159C177.152 15.1601 175.836 15.7043 174.531 16.2812ZM182.469 13.0159L181.73 10.9697C183.078 10.4582 184.437 9.96837 185.806 9.48947L186.491 11.5575C185.132 12.069 183.795 12.5479 182.458 13.0595L182.469 13.0159ZM190.578 10.2405L189.936 8.1616C191.305 7.72623 192.685 7.30175 194.076 6.89903L194.664 8.99968C193.263 9.39151 191.904 9.80511 190.578 10.2405ZM198.773 7.85684L198.227 5.74531C199.618 5.37525 201.019 5.02695 202.421 4.65689L202.902 6.77931C201.49 7.14937 200.11 7.47589 198.74 7.85684H198.773ZM207.064 5.8868L206.636 3.70997C208.037 3.41609 209.449 3.14399 210.915 2.88277L211.289 5.05961C209.834 5.29906 208.422 5.59293 207.032 5.8868H207.064ZM215.451 4.35213L215.13 2.1753C216.542 1.95761 217.965 1.75081 219.409 1.56578L219.677 3.74262C218.222 3.92765 216.82 4.13445 215.419 4.35213H215.451ZM223.903 3.26371L223.678 1.08688C225.104 0.934498 226.531 0.80389 227.957 0.695048L228.118 2.87188C226.695 2.95896 225.283 3.12222 223.87 3.24195L223.903 3.26371ZM253.697 2.74127C252.285 2.64332 250.862 2.55624 249.418 2.49094L249.514 0.314101C250.958 0.379406 252.392 0.466479 253.793 0.575321L253.697 2.74127ZM232.408 2.56713L232.29 0.39029C233.723 0.314101 235.157 0.248796 236.569 0.216143L236.633 2.39298C235.2 2.42563 233.777 2.49094 232.365 2.56713H232.408ZM245.181 2.34944C244.019 2.34944 242.842 2.34944 241.651 2.34944H240.859V0.172607H241.597C242.795 0.172607 243.983 0.172607 245.17 0.172607L245.181 2.34944Z"
              fill="#2B2B2B"
            />
            <path
              d="M363.492 54.5826L361.994 53.048L363.513 51.5133L365.022 53.0697L363.492 54.5826Z"
              fill="#2B2B2B"
            />
            <path
              d="M332.859 48.0616L331.189 50.1873L335.535 53.7206L337.205 51.5949L332.859 48.0616Z"
              fill="#F8F8F8"
            />
            <path
              d="M335.516 54.2777C335.396 54.2762 335.279 54.2341 335.185 54.158L330.841 50.6206C330.731 50.5308 330.66 50.4004 330.644 50.2576C330.628 50.1149 330.668 49.9715 330.756 49.8588L332.425 47.7472C332.467 47.6905 332.52 47.643 332.58 47.6075C332.641 47.572 332.708 47.5492 332.778 47.5404C332.92 47.5293 333.06 47.572 333.173 47.6601L337.528 51.1975C337.582 51.2411 337.627 51.2954 337.66 51.3571C337.693 51.4188 337.713 51.4867 337.72 51.5567C337.728 51.6284 337.721 51.7009 337.701 51.7701C337.681 51.8392 337.647 51.9036 337.602 51.9594L335.934 54.1362C335.878 54.1892 335.812 54.2292 335.74 54.2536C335.668 54.2781 335.592 54.2863 335.516 54.2777ZM331.922 50.1091L335.441 52.9716L336.436 51.6982L332.927 48.8356L331.922 50.1091Z"
              fill="#2B2B2B"
            />
            <path
              d="M327.559 45.1342L327.219 45.5679C326.585 46.3757 326.714 47.5537 327.508 48.199L330.116 50.3185C330.91 50.9638 332.068 50.8321 332.702 50.0243L333.043 49.5906C333.677 48.7828 333.547 47.6048 332.753 46.9595L330.146 44.84C329.352 44.1946 328.194 44.3263 327.559 45.1342Z"
              fill="#F8F8F8"
            />
            <path
              d="M331.258 51.274C330.723 51.2717 330.203 51.0879 329.782 50.7515L327.182 48.5747C326.939 48.3767 326.736 48.1318 326.585 47.854C326.434 47.5763 326.339 47.271 326.304 46.9556C326.269 46.6403 326.296 46.3211 326.382 46.0162C326.469 45.7113 326.613 45.4268 326.808 45.1788L327.15 44.7434C327.345 44.4955 327.586 44.2889 327.859 44.1355C328.132 43.9822 328.432 43.885 328.742 43.8497C329.052 43.8143 329.365 43.8414 329.665 43.9294C329.965 44.0174 330.244 44.1645 330.488 44.3625L333.088 46.5393C333.334 46.7342 333.539 46.9771 333.691 47.2537C333.844 47.5303 333.94 47.8351 333.976 48.1502C334.041 48.7873 333.857 49.4251 333.462 49.9243L333.12 50.3706C332.724 50.8697 332.152 51.1903 331.526 51.2631L331.258 51.274ZM329.012 44.972H328.862C328.518 45.0114 328.202 45.1874 327.985 45.4618L327.642 45.908C327.535 46.0424 327.455 46.1973 327.407 46.3637C327.359 46.5301 327.345 46.7046 327.364 46.8767C327.403 47.2271 327.576 47.5479 327.846 47.7692L330.456 49.9461C330.589 50.0538 330.742 50.1333 330.905 50.18C331.069 50.2268 331.24 50.2397 331.408 50.2182C331.58 50.2036 331.747 50.1525 331.898 50.0681C332.049 49.9838 332.181 49.868 332.285 49.7284L332.628 49.293C332.738 49.1584 332.82 49.0017 332.868 48.8331C332.916 48.6644 332.929 48.4874 332.906 48.3135C332.865 47.967 332.692 47.6506 332.424 47.4318L329.814 45.255C329.586 45.0716 329.303 44.9719 329.012 44.972Z"
              fill="#2B2B2B"
            />
            <path
              d="M349.177 27.2521L347.508 29.3778L351.854 32.9111L353.523 30.7855L349.177 27.2521Z"
              fill="#F8F8F8"
            />
            <path
              d="M351.852 33.4458C351.731 33.4499 351.612 33.4072 351.52 33.3261L347.166 29.7996C347.058 29.7063 346.988 29.5743 346.972 29.4306C346.956 29.2869 346.995 29.1424 347.081 29.0269L348.749 26.9044C348.842 26.7942 348.972 26.7241 349.113 26.7085C349.183 26.6993 349.254 26.7042 349.322 26.7228C349.39 26.7415 349.453 26.7736 349.509 26.8174L353.852 30.333C353.963 30.4247 354.035 30.557 354.051 30.7016C354.067 30.8461 354.026 30.9912 353.938 31.1057L352.269 33.2826C352.225 33.339 352.17 33.3855 352.107 33.4192C352.045 33.4529 351.976 33.4731 351.905 33.4785L351.852 33.4458ZM348.257 29.2445L351.766 32.0962L352.761 30.8228L349.252 27.9711L348.257 29.2445Z"
              fill="#2B2B2B"
            />
            <path
              d="M343.907 24.3574L343.567 24.7911C342.932 25.5988 343.062 26.7768 343.855 27.4223L346.463 29.5423C347.257 30.1877 348.415 30.0562 349.049 29.2485L349.39 28.8149C350.024 28.0072 349.895 26.8292 349.101 26.1837L346.494 24.0637C345.7 23.4182 344.542 23.5497 343.907 24.3574Z"
              fill="#F8F8F8"
            />
            <path
              d="M347.594 30.4851C347.056 30.4876 346.534 30.299 346.118 29.9518L343.561 27.8402C343.071 27.4387 342.757 26.8567 342.687 26.2207C342.617 25.5847 342.796 24.9463 343.186 24.4444L343.539 23.9981C343.734 23.7513 343.974 23.5459 344.247 23.3937C344.519 23.2415 344.819 23.1454 345.128 23.111C345.437 23.0767 345.749 23.1046 346.048 23.1934C346.346 23.2821 346.624 23.4298 346.867 23.6281L349.477 25.7396C349.721 25.9376 349.924 26.1824 350.074 26.4602C350.225 26.738 350.321 27.0433 350.355 27.3586C350.39 27.674 350.364 27.9932 350.277 28.298C350.191 28.6029 350.046 28.8875 349.851 29.1355L349.509 29.5708C349.28 29.8628 348.989 30.0971 348.657 30.2557C348.324 30.4143 347.961 30.4928 347.594 30.4851ZM345.337 24.1832C345.132 24.1746 344.929 24.2155 344.743 24.3026C344.557 24.3896 344.394 24.5203 344.267 24.6838L343.914 25.1192C343.807 25.2553 343.727 25.4116 343.68 25.5792C343.633 25.7467 343.619 25.9221 343.639 26.0953C343.659 26.2684 343.712 26.4358 343.796 26.5877C343.88 26.7397 343.993 26.8731 344.128 26.9804L346.77 29.1028C347.04 29.3212 347.384 29.4221 347.727 29.3834C348.07 29.3446 348.383 29.1694 348.6 28.896L348.953 28.4606C349.168 28.1843 349.267 27.8326 349.229 27.4821C349.191 27.1316 349.019 26.8105 348.749 26.5886L346.139 24.477C345.912 24.2889 345.629 24.1852 345.337 24.1832Z"
              fill="#2B2B2B"
            />
            <path
              d="M362.132 57.0645C362.132 57.0645 360.046 77.2437 360.827 77.8859C361.608 78.5281 363.951 80.2042 363.951 80.2042L371.846 63.878L362.132 57.0645Z"
              fill="#F8F8F8"
            />
            <path
              d="M363.952 80.7481C363.842 80.7476 363.734 80.7135 363.642 80.6502C363.546 80.5849 361.289 78.9522 360.497 78.3101C360.219 78.0815 359.481 77.4829 361.567 57.0097C361.577 56.9147 361.611 56.824 361.665 56.746C361.72 56.6679 361.792 56.6051 361.877 56.5635C361.962 56.5268 362.054 56.5125 362.146 56.522C362.238 56.5315 362.325 56.5645 362.401 56.6179L372.115 63.4205C372.221 63.4937 372.298 63.6032 372.331 63.729C372.364 63.8549 372.352 63.9887 372.297 64.1062L364.402 80.4325C364.369 80.5058 364.32 80.5705 364.259 80.6215C364.198 80.6725 364.126 80.7084 364.049 80.7264L363.952 80.7481ZM361.256 77.5373C361.834 77.9944 363.054 78.8869 363.749 79.3985L371.163 64.0736L362.604 58.0655C361.834 65.2708 360.903 76.1441 361.256 77.5373Z"
              fill="#2B2B2B"
            />
            <path
              d="M362.015 60.7215L361.576 65.2711L369.364 69.0044L371.611 64.3569L362.132 57.0645C362.132 57.0645 362.025 58.1529 361.865 59.6984L362.015 60.7215Z"
              fill="#2B2B2B"
            />
            <path
              d="M369.365 69.5158C369.287 69.5322 369.207 69.5322 369.13 69.5158L361.341 65.7825C361.243 65.734 361.161 65.6557 361.107 65.5584C361.054 65.461 361.031 65.3493 361.042 65.2383L361.47 60.7431L361.341 59.7853C361.336 59.7419 361.336 59.6981 361.341 59.6547C361.502 58.0547 361.609 57.0098 361.609 57.0098C361.62 56.9143 361.655 56.8235 361.712 56.7465C361.768 56.6695 361.844 56.6092 361.931 56.5716C362.018 56.534 362.113 56.5205 362.207 56.5324C362.301 56.5444 362.389 56.5815 362.465 56.6398L371.943 63.9322C372.043 64.0082 372.113 64.1179 372.14 64.2415C372.168 64.3652 372.151 64.4948 372.093 64.607L369.846 69.2545C369.798 69.3397 369.728 69.4094 369.643 69.4556C369.557 69.5018 369.461 69.5226 369.365 69.5158ZM362.144 64.9118L369.108 68.2532L370.927 64.4873L362.561 58.0438C362.561 58.4683 362.465 59.0125 362.411 59.6438L362.539 60.6125C362.545 60.6559 362.545 60.6997 362.539 60.7431L362.144 64.9118Z"
              fill="#2B2B2B"
            />
            <path
              d="M363.182 55.7254C363.182 55.7254 382.075 49.1949 382.856 49.837C383.637 50.4792 385.776 52.4275 385.776 52.4275L371.869 63.8668L363.182 55.7254Z"
              fill="#F8F8F8"
            />
            <path
              d="M371.847 64.4109C371.779 64.4111 371.712 64.3977 371.65 64.3716C371.588 64.3455 371.531 64.307 371.483 64.2586L362.817 56.1281C362.749 56.0649 362.698 55.9842 362.669 55.8943C362.641 55.8045 362.637 55.7086 362.657 55.6165C362.674 55.5231 362.716 55.4362 362.778 55.3652C362.841 55.2942 362.921 55.2419 363.01 55.2138C382.181 48.5853 382.919 49.1949 383.187 49.4125C383.978 50.0547 386.043 51.9486 386.129 52.0247C386.185 52.0772 386.231 52.1411 386.262 52.2122C386.293 52.2834 386.31 52.3604 386.311 52.4383C386.306 52.5177 386.286 52.5952 386.251 52.6663C386.216 52.7374 386.167 52.8006 386.107 52.8519L372.2 64.2912C372.099 64.372 371.975 64.4144 371.847 64.4109ZM364.208 55.9431L371.868 63.1484L384.941 52.4057C384.31 51.8288 383.187 50.8166 382.609 50.3377C381.197 50.3268 370.991 53.6247 364.208 55.9431Z"
              fill="#2B2B2B"
            />
            <path
              d="M334.243 38.4523L331.868 77.3741C331.84 77.7874 331.938 78.1993 332.149 78.5538C332.359 78.9083 332.672 79.1881 333.045 79.355C333.293 79.4731 333.563 79.5373 333.837 79.5437C334.111 79.55 334.384 79.4983 334.637 79.3919C334.891 79.2855 335.12 79.1266 335.31 78.9254C335.5 78.7242 335.646 78.4851 335.741 78.2231L342.213 59.1975L348.3 49.6412L334.243 38.4523Z"
              fill="#F8F8F8"
            />
            <path
              d="M333.858 80.0844C333.489 80.0889 333.124 80.0109 332.788 79.8558C332.32 79.6376 331.928 79.2809 331.663 78.8323C331.398 78.3838 331.272 77.8642 331.301 77.3415L333.676 38.4197C333.681 38.3203 333.712 38.2241 333.767 38.1415C333.822 38.059 333.897 37.9934 333.986 37.9517C334.077 37.913 334.177 37.8998 334.275 37.9131C334.372 37.9265 334.465 37.9661 334.543 38.0279L348.621 49.1624C348.729 49.2431 348.802 49.3622 348.825 49.4957C348.849 49.6292 348.822 49.7668 348.75 49.8807L342.705 59.3826L336.286 78.3429C336.112 78.8491 335.788 79.2881 335.359 79.5999C334.93 79.9116 334.417 80.0808 333.89 80.0844H333.858ZM334.714 39.519L332.403 77.4177C332.384 77.719 332.455 78.0192 332.608 78.2779C332.761 78.5367 332.988 78.7416 333.259 78.8653C333.443 78.9514 333.644 78.996 333.847 78.996C334.05 78.996 334.251 78.9514 334.436 78.8653C334.622 78.7854 334.789 78.6666 334.928 78.5166C335.066 78.3666 335.172 78.1888 335.238 77.9946L341.657 58.969C341.668 58.9264 341.686 58.886 341.71 58.8493L347.53 49.7066L334.714 39.519Z"
              fill="#2B2B2B"
            />
            <path
              d="M346.182 52.9065L348.3 49.5868L334.243 38.4523L333.965 42.9692L346.182 52.9065Z"
              fill="#2B2B2B"
            />
            <path
              d="M346.194 53.4507C346.07 53.4508 345.949 53.4086 345.851 53.331L333.634 43.3938C333.566 43.3404 333.512 43.2707 333.476 43.191C333.441 43.1113 333.425 43.0239 333.431 42.9366L333.709 38.4197C333.714 38.3203 333.745 38.2241 333.8 38.1415C333.854 38.059 333.93 37.9934 334.019 37.9517C334.11 37.913 334.21 37.8998 334.307 37.9131C334.405 37.9265 334.498 37.9661 334.576 38.0279L348.622 49.1624C348.729 49.2431 348.802 49.3622 348.826 49.4957C348.85 49.6292 348.823 49.7668 348.751 49.8807L346.611 53.2004C346.57 53.2635 346.516 53.3173 346.453 53.3584C346.391 53.3996 346.321 53.4273 346.247 53.4399L346.194 53.4507ZM334.522 42.7189L346.065 52.1011L347.584 49.7066L334.747 39.519L334.522 42.7189Z"
              fill="#2B2B2B"
            />
            <path
              d="M338.973 32.4335L375.764 21.484C376.151 21.3754 376.562 21.3868 376.943 21.5167C377.324 21.6466 377.658 21.8891 377.903 22.2132C378.068 22.4397 378.185 22.6983 378.247 22.973C378.309 23.2476 378.315 23.5323 378.263 23.8092C378.212 24.0861 378.105 24.3493 377.949 24.5822C377.794 24.8151 377.592 25.0128 377.358 25.1628L360.562 35.7749L352.741 43.9163L338.973 32.4335Z"
              fill="#F8F8F8"
            />
            <path
              d="M352.741 44.4821C352.621 44.4805 352.504 44.4384 352.409 44.3624L338.63 32.8578C338.556 32.7936 338.5 32.7102 338.468 32.6164C338.436 32.5226 338.429 32.4218 338.448 32.3245C338.467 32.2269 338.511 32.1364 338.578 32.0634C338.644 31.9903 338.729 31.9375 338.823 31.9109L375.657 20.9614C376.245 20.7876 376.875 20.8365 377.431 21.0991C377.987 21.3616 378.43 21.82 378.68 22.3895C378.929 22.959 378.967 23.601 378.787 24.1969C378.607 24.7927 378.221 25.3021 377.7 25.6307L360.904 36.2101L353.126 44.3079C353.077 44.3615 353.017 44.4045 352.951 44.4344C352.885 44.4643 352.813 44.4805 352.741 44.4821ZM340.096 32.6728L352.709 43.1869L360.198 35.4047C360.222 35.3678 360.255 35.3378 360.294 35.3176L377.101 24.7055C377.273 24.5952 377.421 24.4506 377.537 24.2804C377.653 24.1102 377.734 23.9179 377.775 23.7151C377.821 23.4644 377.804 23.2057 377.724 22.9638C377.645 22.7219 377.505 22.5049 377.32 22.3334C377.134 22.162 376.908 22.0419 376.664 21.9846C376.419 21.9273 376.165 21.9348 375.924 22.0062L340.096 32.6728Z"
              fill="#2B2B2B"
            />
            <path
              d="M348.012 39.0398C365.739 53.4287 378.865 66.7292 377.282 68.721C375.699 70.7128 360.079 60.6449 342.353 46.2343C335.196 40.4221 326.509 33.8589 321.513 29.0808C314.142 22.0061 312.419 17.9354 313.35 16.749C314.281 15.5626 319.02 16.5313 327.343 22.1911C333.056 26.1203 340.791 33.1515 348.012 39.0398Z"
              fill="#F8F8F8"
            />
            <path
              d="M376.652 69.5157C375.379 69.5157 372.511 68.5253 365.59 64.0736C357.452 58.6885 349.596 52.8757 342.054 46.6589C339.968 44.961 337.774 43.2086 335.528 41.4454C330.179 37.2332 324.733 32.8796 321.182 29.4728C314.581 23.1491 311.553 18.2621 312.965 16.4118C314.378 14.5615 320.315 16.7383 327.675 21.7668C331.473 24.3572 336.084 28.2973 340.963 32.4007C343.412 34.4687 345.937 36.6128 348.387 38.5938C359.631 47.7365 380.235 65.8695 377.732 69.0695C377.609 69.2373 377.444 69.3677 377.253 69.4464C377.063 69.5251 376.855 69.5491 376.652 69.5157ZM314.677 16.8254C314.516 16.8039 314.352 16.816 314.196 16.8609C314.04 16.9059 313.894 16.9826 313.768 17.0866C313.329 17.6526 313.864 20.994 321.888 28.6783C325.397 32.0524 330.863 36.3951 336.159 40.5856C338.374 42.3488 340.599 44.112 342.685 45.81C361.963 61.4832 375.571 69.5157 376.866 68.4273C377.668 66.9035 366.959 55.1595 347.681 39.4863C345.231 37.4945 342.696 35.3503 340.256 33.2823C335.389 29.168 330.799 25.2715 327.044 22.7137C320.347 18.0879 316.367 16.8254 314.677 16.8254Z"
              fill="#2B2B2B"
            />
            <path
              d="M361.662 58.2073L362.015 60.7215V61.0372C368.637 65.5759 373.73 68.4602 376.051 68.9065L377.313 68.7214L362.133 57.0645L361.662 58.2073Z"
              fill="#2B2B2B"
            />
            <path
              d="M376.019 69.4504H375.923C373.569 69.0042 368.509 66.1852 361.684 61.4941C361.604 61.4398 361.54 61.3647 361.499 61.2766C361.457 61.1885 361.44 61.0907 361.448 60.9934V60.7431L361.106 58.2941C361.079 58.2018 361.079 58.1035 361.106 58.0111L361.577 56.8574C361.61 56.7822 361.659 56.7151 361.72 56.6606C361.78 56.6062 361.852 56.5656 361.93 56.5418C362.009 56.5222 362.091 56.5208 362.171 56.5378C362.25 56.5547 362.325 56.5896 362.39 56.6397L377.538 68.2967C377.621 68.3615 377.684 68.4497 377.718 68.5503C377.752 68.6509 377.757 68.7595 377.731 68.8627C377.706 68.9669 377.651 69.061 377.573 69.1329C377.494 69.2047 377.397 69.2509 377.292 69.2654L376.03 69.4613L376.019 69.4504ZM362.55 60.7431C368.787 65.0097 373.601 67.7307 375.869 68.2967L362.358 57.9023L362.208 58.2615L362.54 60.6233C362.557 60.6833 362.561 60.7467 362.55 60.8084V60.7431Z"
              fill="#2B2B2B"
            />
            <path
              d="M361.532 55.3827L361.224 55.7738C360.671 56.4782 360.784 57.5055 361.476 58.0684L367.895 63.2869C368.587 63.8498 369.597 63.7351 370.15 63.0307L370.457 62.6396C371.011 61.9352 370.898 60.9079 370.206 60.345L363.787 55.1265C363.095 54.5636 362.085 54.6783 361.532 55.3827Z"
              fill="#F8F8F8"
            />
            <path
              d="M368.884 64.1718C368.398 64.1714 367.926 64.0025 367.547 63.6929L361.128 58.4794C360.908 58.3011 360.725 58.0805 360.589 57.8303C360.454 57.58 360.367 57.305 360.336 57.0209C360.272 56.4481 360.433 55.8727 360.785 55.4209L361.096 55.04C361.271 54.8166 361.488 54.6304 361.734 54.4922C361.98 54.354 362.25 54.2665 362.529 54.2346C363.092 54.169 363.658 54.3335 364.102 54.6917L370.521 59.9052C370.741 60.0841 370.925 60.3055 371.061 60.5569C371.197 60.8082 371.283 61.0845 371.314 61.3697C371.345 61.655 371.32 61.9436 371.241 62.219C371.162 62.4945 371.03 62.7512 370.852 62.9746L370.553 63.3555C370.378 63.579 370.161 63.7651 369.915 63.9033C369.669 64.0415 369.399 64.129 369.119 64.1609L368.884 64.1718ZM362.818 55.3012H362.7C362.561 55.3172 362.426 55.361 362.303 55.43C362.18 55.4991 362.071 55.5922 361.984 55.7039L361.673 56.0849C361.586 56.1974 361.52 56.3265 361.482 56.4647C361.443 56.603 361.432 56.7476 361.449 56.8903C361.464 57.0324 361.507 57.1699 361.575 57.295C361.643 57.4201 361.735 57.5304 361.845 57.6196L368.263 62.8331C368.373 62.9244 368.5 62.9926 368.636 63.0337C368.772 63.0748 368.914 63.088 369.055 63.0725C369.335 63.0348 369.591 62.891 369.772 62.6698L370.071 62.278C370.16 62.166 370.225 62.0373 370.265 61.8994C370.304 61.7615 370.316 61.6171 370.3 61.4744C370.284 61.3318 370.24 61.1937 370.172 61.0682C370.103 60.9428 370.011 60.8323 369.9 60.7433L363.481 55.5298C363.292 55.38 363.058 55.2995 362.818 55.3012Z"
              fill="#2B2B2B"
            />
            <path
              d="M377.914 69.015C377.845 69.1029 377.76 69.176 377.663 69.2298C377.566 69.2836 377.46 69.317 377.35 69.3282C377.24 69.3394 377.13 69.328 377.024 69.2948C376.919 69.2615 376.821 69.2071 376.737 69.1347L366.648 60.6233L367.376 59.6873L377.796 67.8286C377.882 67.8974 377.954 67.9831 378.006 68.0806C378.059 68.1782 378.092 68.2856 378.103 68.3963C378.114 68.5071 378.103 68.619 378.07 68.7253C378.038 68.8316 377.984 68.9302 377.914 69.015Z"
              fill="#F8F8F8"
            />
            <path
              d="M377.261 69.6028C377.006 69.6029 376.759 69.5102 376.565 69.3416L366.477 60.8084C366.428 60.7575 366.4 60.6892 366.4 60.6179C366.4 60.5467 366.428 60.4783 366.477 60.4275L367.215 59.4914C367.266 59.444 367.333 59.4177 367.402 59.4177C367.471 59.4177 367.538 59.444 367.589 59.4914L377.977 67.6328C378.203 67.8176 378.352 68.0817 378.395 68.3729C378.413 68.5198 378.401 68.669 378.361 68.8112C378.32 68.9534 378.252 69.0858 378.159 69.2001C378.07 69.3163 377.959 69.4129 377.832 69.484C377.705 69.5551 377.565 69.5992 377.421 69.6137L377.261 69.6028ZM367.022 60.5798L376.908 68.928C377.024 69.0254 377.174 69.0723 377.325 69.0586C377.472 69.0369 377.606 68.9591 377.699 68.8409C377.742 68.7821 377.772 68.7152 377.789 68.6441C377.805 68.573 377.808 68.4993 377.795 68.4273C377.774 68.2774 377.698 68.1412 377.582 68.0464L367.408 60.0792L367.022 60.5798Z"
              fill="#2B2B2B"
            />
            <path
              d="M317.887 23.8021C317.842 23.8499 317.788 23.8879 317.728 23.9138C317.669 23.9398 317.604 23.9532 317.539 23.9532C317.474 23.9532 317.41 23.9398 317.35 23.9138C317.29 23.8879 317.237 23.8499 317.192 23.8021C315.448 22.0607 314.891 19.8947 315.865 18.6539C316.839 17.4131 318.967 17.4675 321.032 18.7954C321.141 18.8668 321.217 18.9788 321.245 19.1071C321.273 19.2353 321.25 19.3697 321.182 19.4811C321.147 19.5372 321.102 19.5857 321.048 19.6238C320.995 19.6619 320.935 19.6888 320.871 19.703C320.807 19.7172 320.741 19.7183 320.677 19.7064C320.613 19.6945 320.552 19.6697 320.497 19.6335C318.935 18.6321 317.288 18.4689 316.635 19.2743C315.983 20.0797 316.528 21.7341 317.887 23.0838C317.934 23.1304 317.972 23.1863 317.997 23.248C318.023 23.3097 318.036 23.376 318.036 23.443C318.036 23.5099 318.023 23.5762 317.997 23.6379C317.972 23.6996 317.934 23.7555 317.887 23.8021Z"
              fill="#2B2B2B"
            />
            <path
              d="M224.04 117.178L237.241 119.953L241.734 124.71L247.597 125.624L249.458 131.284L248.1 135.115L244.099 136.976L234.299 135.355L234.032 134.125L238.664 130.838L235.465 124.84L226.703 123.621L222.039 119.551L224.04 117.178Z"
              fill="#BC70C1"
            />
            <path
              d="M330.38 241.061L319.917 239.309L307.293 237.676L297.996 239.777L288.903 239.908L279.767 244.261L274.418 245.785L271.123 246.525L265.624 251.619L260.157 255.407L250.924 252.055L251.16 243.032L245.597 242.052L239.595 243.402L238.097 240.866L237.498 235.238L234.738 232.659L230.673 234.215L230.138 237.546L225.099 238.993L219.461 234.433L216.059 227.522L218.691 217.954L227.528 216.605L230.395 218.194L233.989 217.388L237.894 213.622L242.056 213.96L249.544 222.199L251.577 221.426L249.437 214.537L246.838 211.271L246.174 205.34L256.156 197.949L255.182 186.325L259.119 181.275L261.484 173.373L264.351 172.088L270.245 165.95L270.021 163.446L265.281 164.84L263.858 162.597L260.553 163.337L255.728 165.71L257.258 161.204L267.089 155.762L268.887 152.497L274.546 158.255L277.852 160.431L281.778 158.255L279.114 154.695L271.818 151.55L262.821 144.932L254.198 141.439L246.709 141.852L242.312 139L237.241 138.859L236.91 140.219L238.247 149.199L240.109 151.985L239.542 162.358L232.481 158.831V154.358L225.516 152.725L222.082 149.983L221.922 142.015L229.218 133.645L228.212 126.179L225.003 127.267L222.307 124.993L220.413 120.639L218.274 120.813L218.145 125.961L214.936 127.322L211.106 116.982L208.367 115.991L203.767 115.11L199.488 118.636L206.752 123.077L209.084 127.997L196.481 122.195L187.195 115.665L184.788 107.567L176.465 106.881L171.33 112.204C170.072 113.432 168.747 114.587 167.361 115.665C165.122 116.783 162.805 117.732 160.429 118.506L160.364 123.948L153.539 125.809L154.866 129.074L166.366 128.399L173.459 133.515L175.791 144.192L174.529 154.293L177.321 164.219L172.186 181.068L175.246 203.75L180.744 215.952L186.778 224.833L191.411 224.43L188.843 219.892L185.634 216.768L182.67 210.39L185.238 209.171L191.828 219.206L196.963 228.294L198.696 236.229L205.928 241.954L217.782 247.287L234.31 248.027L240.109 251.521L244.816 255.635L250.946 257.812L257.942 258.161L264.468 256.365C264.468 256.365 264.843 259.478 265.174 261.001C265.506 262.525 262.436 268.62 262.436 268.62L260.467 275.466L264.34 281.638L271.529 282.889L282.965 290.563L287.555 291.444L288.561 296.016L289.545 298.029C312.038 288.924 331.558 273.561 345.871 253.698L345.539 251.445L350.375 234.662L345.881 232.8L330.38 241.061Z"
              fill="#BC70C1"
            />
            <path
              d="M335.269 113.499L330.722 108.449L325.063 102.68L321.854 93.7987L327.449 93.4939L327.085 90.381L323.116 90.9579L326.079 88.6831L329.214 85.7335L328.583 82.6859L323.918 78.6152L321.714 72.2153C299.549 54.4591 272.29 44.5528 244.083 44.0027C215.877 43.4526 188.265 52.2888 165.446 69.1678L173.459 72.5963L170.453 79.0288L165.029 81.5431L166.227 89.913L164.024 91.3715L161.691 95.4095L163.189 100.852L168.421 100.307L167.458 105.967L172.55 104.813L178.808 91.5456L178.637 86.4518L186.907 83.9485L188.201 79.8125L196.706 76.9391L196.471 71.497L202.697 69.7773C202.697 69.7773 206.666 66.3161 207.565 66.1093C209.383 66.1054 211.199 66.2327 213 66.4902L218.349 69.1351L224.65 67.7093L229.314 63.127L236.343 62.1801C237.476 62.6282 238.698 62.7924 239.906 62.659C241.403 62.3216 245.437 59.1652 245.437 59.1652L255.332 62.6917L259.537 64.629L260.532 69.2004L265.164 68.7977L266.063 65.7175L270.342 66.6644L270.577 69.1678L262.115 73.6412L268.673 79.2465L280.805 82.9145L286.635 87.9974L293.364 87.1158L294.199 83.7308L296.424 82.5771L287.288 78.2234L282.356 78.7023L285.993 76.6017L281.265 72.248L286.293 70.7895L293.685 72.9663L296.788 79.954L300.949 83.2192L305.582 91.4586L313.242 94.8435L315.445 104.911L323.341 107.937L323.769 111.355V115.523L326.764 120.617L327.962 123.219L333.311 122.99L334.574 117.254L335.269 113.499Z"
              fill="#BC70C1"
            />
            <path
              d="M332.456 81.8802L332.862 83.6653L332.424 88.8897L334.253 92.9495L337.826 93.4284L339.089 99.2296L335.152 98.5113L337.859 115.197L335.719 122.718L339.998 130.718L344.695 133.493L348.289 149.972L354.986 161.944L361.309 170.761L368.616 171.033L369.686 164.382L370.499 163.381C367.604 132.544 354.154 103.721 332.499 81.9456L332.456 81.8802Z"
              fill="#BC70C1"
            />
            <path
              d="M262.768 95.6161L241.04 91.2516L232.407 93.5155L231.572 99.7848L227.111 96.6393L220.842 99.6542L222.447 109.853L228.705 112.595L231.337 105.923L236.836 109.483L247.93 115.621L251.663 124.067L261.655 132.372L273.787 127.387L272.493 122.881L268.663 118.299L265.4 106.228L267.261 100.373L262.768 95.6161Z"
              fill="#BC70C1"
            />
            <path
              d="M280.42 98.6746L275.659 98.4678L272.492 102.713L276.525 111.083L280.42 110.201V98.6746Z"
              fill="#BC70C1"
            />
            <path
              d="M309.582 98.174L298.178 94.985L295.29 91.7959L293.086 93.2544L296.52 98.8815L300.05 106.402L304.939 107.219L305.581 105.793L301.88 101.831L310.342 103.126L309.582 98.174Z"
              fill="#BC70C1"
            />
            <path
              d="M246.046 228.098L245.115 229.59L254.711 230.308L259.248 233.758L265.078 233.083L266.447 229.252L259.28 229.59L246.046 228.098Z"
              fill="#BC70C1"
            />
            <path
              d="M274.011 227.87L268.105 231.124L269.539 233.356L277.338 231.592L278.301 228.817L275.669 229.731L274.011 227.87Z"
              fill="#BC70C1"
            />
            <path
              d="M241.606 308.184C215.817 308.184 190.608 300.404 169.166 285.828C147.723 271.251 131.011 250.533 121.142 226.293C111.273 202.053 108.691 175.381 113.722 149.648C118.753 123.915 131.172 100.278 149.407 81.7255C167.642 63.1731 190.875 50.5388 216.168 45.4202C241.461 40.3017 267.678 42.9287 291.504 52.9691C315.329 63.0096 335.693 80.0125 350.021 101.828C364.348 123.643 371.995 149.291 371.995 175.528C371.961 210.7 358.213 244.421 333.768 269.292C309.322 294.162 276.177 308.15 241.606 308.184ZM241.606 45.0481C216.241 45.0481 191.445 52.7006 170.354 67.0379C149.264 81.3752 132.826 101.753 123.119 125.595C113.412 149.437 110.872 175.672 115.821 200.983C120.769 226.294 132.984 249.543 150.92 267.791C168.856 286.039 191.708 298.466 216.586 303.5C241.464 308.535 267.25 305.951 290.685 296.075C314.12 286.2 334.149 269.476 348.242 248.018C362.334 226.561 369.856 201.334 369.856 175.528C369.822 140.933 356.299 107.765 332.255 83.3029C308.211 58.8407 275.61 45.0827 241.606 45.0481Z"
              fill="#2B2B2B"
            />
            <path
              d="M241.607 307.64C196.61 307.64 160.012 248.376 160.012 175.528C160.012 102.68 196.61 43.3942 241.607 43.3942C286.603 43.3942 323.234 102.68 323.234 175.528C323.234 248.376 286.603 307.64 241.607 307.64ZM241.607 44.4826C197.209 44.4826 161.082 103.257 161.082 175.506C161.082 247.756 197.209 306.552 241.607 306.552C286.004 306.552 322.164 247.777 322.164 175.528C322.164 103.279 286.015 44.4826 241.607 44.4826Z"
              fill="#2B2B2B"
            />
            <path
              d="M241.607 307.64C233.455 307.64 225.848 293.807 220.21 268.675C214.626 243.794 211.545 210.706 211.545 175.528C211.545 140.35 214.626 107.263 220.21 82.3704C225.88 57.2497 233.455 43.3942 241.607 43.3942C249.759 43.3942 257.365 57.228 263.003 82.3487C268.588 107.241 271.658 140.329 271.658 175.506C271.658 210.684 268.588 243.772 263.003 268.653C257.365 293.807 249.769 307.64 241.607 307.64ZM241.607 44.4826C225.624 44.4826 212.625 103.257 212.625 175.506C212.625 247.756 225.624 306.53 241.607 306.53C257.59 306.53 270.588 247.756 270.588 175.506C270.588 103.257 257.59 44.4826 241.607 44.4826Z"
              fill="#2B2B2B"
            />
            <path
              d="M313.23 66.8929H170.656C170.514 66.8929 170.378 66.8355 170.278 66.7335C170.177 66.6314 170.121 66.493 170.121 66.3487C170.121 66.2043 170.177 66.0659 170.278 65.9638C170.378 65.8618 170.514 65.8044 170.656 65.8044H313.23C313.372 65.8044 313.508 65.8618 313.609 65.9638C313.709 66.0659 313.765 66.2043 313.765 66.3487C313.765 66.493 313.709 66.6314 313.609 66.7335C313.508 66.8355 313.372 66.8929 313.23 66.8929Z"
              fill="#2B2B2B"
            />
            <path
              d="M360.034 124.274H122.824C122.682 124.274 122.546 124.217 122.446 124.115C122.345 124.013 122.289 123.874 122.289 123.73C122.289 123.585 122.345 123.447 122.446 123.345C122.546 123.243 122.682 123.186 122.824 123.186H360.034C360.175 123.188 360.31 123.247 360.41 123.348C360.509 123.449 360.566 123.586 360.569 123.73C360.569 123.874 360.513 124.013 360.413 124.115C360.312 124.217 360.176 124.274 360.034 124.274Z"
              fill="#2B2B2B"
            />
            <path
              d="M313.23 285.121H170.656C170.514 285.121 170.378 285.063 170.278 284.961C170.177 284.859 170.121 284.721 170.121 284.577C170.121 284.432 170.177 284.294 170.278 284.192C170.378 284.09 170.514 284.032 170.656 284.032H313.23C313.372 284.032 313.508 284.09 313.609 284.192C313.709 284.294 313.765 284.432 313.765 284.577C313.765 284.721 313.709 284.859 313.609 284.961C313.508 285.063 313.372 285.121 313.23 285.121Z"
              fill="#2B2B2B"
            />
            <path
              d="M360.955 227.739H122.974C122.833 227.737 122.699 227.678 122.599 227.577C122.499 227.475 122.442 227.339 122.439 227.195C122.439 227.051 122.496 226.912 122.596 226.81C122.696 226.708 122.832 226.651 122.974 226.651H360.955C361.097 226.651 361.233 226.708 361.333 226.81C361.434 226.912 361.49 227.051 361.49 227.195C361.49 227.339 361.434 227.478 361.333 227.58C361.233 227.682 361.097 227.739 360.955 227.739Z"
              fill="#2B2B2B"
            />
            <path
              d="M370.925 176.072H112.297C112.155 176.072 112.019 176.015 111.918 175.913C111.818 175.811 111.762 175.672 111.762 175.528C111.762 175.384 111.818 175.245 111.918 175.143C112.019 175.041 112.155 174.984 112.297 174.984H370.925C371.067 174.984 371.203 175.041 371.303 175.143C371.403 175.245 371.46 175.384 371.46 175.528C371.46 175.672 371.403 175.811 371.303 175.913C371.203 176.015 371.067 176.072 370.925 176.072Z"
              fill="#2B2B2B"
            />
            <path
              d="M287.801 149.417H245.201V167.234H287.801V149.417Z"
              fill="#F8F8F8"
            />
            <path
              d="M287.801 167.778H245.201C245.059 167.778 244.923 167.721 244.823 167.619C244.722 167.517 244.666 167.378 244.666 167.234V149.416C244.666 149.272 244.722 149.134 244.823 149.032C244.923 148.93 245.059 148.872 245.201 148.872H287.801C287.943 148.872 288.079 148.93 288.179 149.032C288.28 149.134 288.336 149.272 288.336 149.416V167.234C288.336 167.378 288.28 167.517 288.179 167.619C288.079 167.721 287.943 167.778 287.801 167.778ZM245.736 166.69H287.266V149.961H245.736V166.69Z"
              fill="#2B2B2B"
            />
            <path
              d="M287.8 149.417H275.24V167.234H287.8V149.417Z"
              fill="#2B2B2B"
            />
            <path
              d="M287.802 167.778H275.242C275.1 167.778 274.964 167.721 274.864 167.619C274.763 167.517 274.707 167.378 274.707 167.234V149.416C274.707 149.272 274.763 149.134 274.864 149.032C274.964 148.93 275.1 148.872 275.242 148.872H287.802C287.943 148.872 288.079 148.93 288.18 149.032C288.28 149.134 288.336 149.272 288.336 149.416V167.234C288.336 167.378 288.28 167.517 288.18 167.619C288.079 167.721 287.943 167.778 287.802 167.778ZM275.777 166.69H287.267V149.961H275.777V166.69Z"
              fill="#2B2B2B"
            />
            <path
              d="M281.97 167.637C281.829 167.637 281.693 167.579 281.592 167.477C281.492 167.375 281.436 167.237 281.436 167.092V149.765C281.436 149.62 281.492 149.482 281.592 149.38C281.693 149.278 281.829 149.221 281.97 149.221C282.112 149.221 282.248 149.278 282.349 149.38C282.449 149.482 282.505 149.62 282.505 149.765V167.092C282.505 167.237 282.449 167.375 282.349 167.477C282.248 167.579 282.112 167.637 281.97 167.637Z"
              fill="#F8F8F8"
            />
            <path
              d="M247.512 165.438C247.441 165.438 247.373 165.409 247.322 165.358C247.272 165.307 247.244 165.238 247.244 165.166V151.963C247.244 151.891 247.272 151.822 247.322 151.771C247.373 151.72 247.441 151.691 247.512 151.691C247.583 151.691 247.651 151.72 247.701 151.771C247.751 151.822 247.779 151.891 247.779 151.963V165.166C247.779 165.238 247.751 165.307 247.701 165.358C247.651 165.409 247.583 165.438 247.512 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M249.672 165.438C249.601 165.438 249.533 165.409 249.483 165.358C249.432 165.307 249.404 165.238 249.404 165.166V151.963C249.404 151.891 249.432 151.822 249.483 151.771C249.533 151.72 249.601 151.691 249.672 151.691C249.743 151.691 249.811 151.72 249.861 151.771C249.911 151.822 249.939 151.891 249.939 151.963V165.166C249.939 165.238 249.911 165.307 249.861 165.358C249.811 165.409 249.743 165.438 249.672 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M251.834 165.438C251.763 165.438 251.695 165.409 251.645 165.358C251.595 165.307 251.566 165.238 251.566 165.166V151.963C251.566 151.891 251.595 151.822 251.645 151.771C251.695 151.72 251.763 151.691 251.834 151.691C251.905 151.691 251.973 151.72 252.023 151.771C252.073 151.822 252.101 151.891 252.101 151.963V165.166C252.101 165.238 252.073 165.307 252.023 165.358C251.973 165.409 251.905 165.438 251.834 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M253.994 165.438C253.923 165.438 253.855 165.409 253.805 165.358C253.755 165.307 253.727 165.238 253.727 165.166V151.963C253.727 151.891 253.755 151.822 253.805 151.771C253.855 151.72 253.923 151.691 253.994 151.691C254.065 151.691 254.133 151.72 254.183 151.771C254.233 151.822 254.261 151.891 254.261 151.963V165.166C254.261 165.238 254.233 165.307 254.183 165.358C254.133 165.409 254.065 165.438 253.994 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M256.156 165.438C256.085 165.438 256.017 165.409 255.967 165.358C255.917 165.307 255.889 165.238 255.889 165.166V151.963C255.889 151.891 255.917 151.822 255.967 151.771C256.017 151.72 256.085 151.691 256.156 151.691C256.227 151.691 256.295 151.72 256.345 151.771C256.395 151.822 256.424 151.891 256.424 151.963V165.166C256.424 165.238 256.395 165.307 256.345 165.358C256.295 165.409 256.227 165.438 256.156 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M258.316 165.438C258.245 165.438 258.177 165.409 258.127 165.358C258.077 165.307 258.049 165.238 258.049 165.166V151.963C258.049 151.891 258.077 151.822 258.127 151.771C258.177 151.72 258.245 151.691 258.316 151.691C258.387 151.691 258.455 151.72 258.505 151.771C258.556 151.822 258.584 151.891 258.584 151.963V165.166C258.584 165.238 258.556 165.307 258.505 165.358C258.455 165.409 258.387 165.438 258.316 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M260.476 165.438C260.406 165.438 260.337 165.409 260.287 165.358C260.237 165.307 260.209 165.238 260.209 165.166V151.963C260.209 151.891 260.237 151.822 260.287 151.771C260.337 151.72 260.406 151.691 260.476 151.691C260.547 151.691 260.615 151.72 260.666 151.771C260.716 151.822 260.744 151.891 260.744 151.963V165.166C260.744 165.238 260.716 165.307 260.666 165.358C260.615 165.409 260.547 165.438 260.476 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M262.65 165.438C262.579 165.438 262.511 165.409 262.461 165.358C262.411 165.307 262.383 165.238 262.383 165.166V151.963C262.383 151.891 262.411 151.822 262.461 151.771C262.511 151.72 262.579 151.691 262.65 151.691C262.721 151.691 262.789 151.72 262.839 151.771C262.89 151.822 262.918 151.891 262.918 151.963V165.166C262.918 165.238 262.89 165.307 262.839 165.358C262.789 165.409 262.721 165.438 262.65 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M264.81 165.438C264.739 165.438 264.671 165.409 264.621 165.358C264.571 165.307 264.543 165.238 264.543 165.166V151.963C264.543 151.891 264.571 151.822 264.621 151.771C264.671 151.72 264.739 151.691 264.81 151.691C264.881 151.691 264.949 151.72 265 151.771C265.05 151.822 265.078 151.891 265.078 151.963V165.166C265.078 165.238 265.05 165.307 265 165.358C264.949 165.409 264.881 165.438 264.81 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M266.971 165.438C266.9 165.438 266.832 165.409 266.781 165.358C266.731 165.307 266.703 165.238 266.703 165.166V151.963C266.703 151.891 266.731 151.822 266.781 151.771C266.832 151.72 266.9 151.691 266.971 151.691C267.042 151.691 267.11 151.72 267.16 151.771C267.21 151.822 267.238 151.891 267.238 151.963V165.166C267.238 165.238 267.21 165.307 267.16 165.358C267.11 165.409 267.042 165.438 266.971 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M269.133 165.438C269.062 165.438 268.994 165.409 268.944 165.358C268.893 165.307 268.865 165.238 268.865 165.166V151.963C268.865 151.891 268.893 151.822 268.944 151.771C268.994 151.72 269.062 151.691 269.133 151.691C269.204 151.691 269.272 151.72 269.322 151.771C269.372 151.822 269.4 151.891 269.4 151.963V165.166C269.4 165.238 269.372 165.307 269.322 165.358C269.272 165.409 269.204 165.438 269.133 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M271.293 165.438C271.222 165.438 271.154 165.409 271.104 165.358C271.054 165.307 271.025 165.238 271.025 165.166V151.963C271.025 151.891 271.054 151.822 271.104 151.771C271.154 151.72 271.222 151.691 271.293 151.691C271.364 151.691 271.432 151.72 271.482 151.771C271.532 151.822 271.56 151.891 271.56 151.963V165.166C271.56 165.238 271.532 165.307 271.482 165.358C271.432 165.409 271.364 165.438 271.293 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M303.163 167.19H260.562V185.008H303.163V167.19Z"
              fill="#F8F8F8"
            />
            <path
              d="M303.162 185.552H260.562C260.42 185.552 260.284 185.495 260.184 185.393C260.084 185.291 260.027 185.152 260.027 185.008V167.19C260.027 167.046 260.084 166.908 260.184 166.806C260.284 166.704 260.42 166.646 260.562 166.646H303.162C303.304 166.646 303.44 166.704 303.541 166.806C303.641 166.908 303.697 167.046 303.697 167.19V185.008C303.697 185.152 303.641 185.291 303.541 185.393C303.44 185.495 303.304 185.552 303.162 185.552ZM261.097 184.464H302.627V167.735H261.097V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M303.163 167.19H290.604V185.008H303.163V167.19Z"
              fill="#2B2B2B"
            />
            <path
              d="M303.163 185.552H290.603C290.462 185.549 290.328 185.491 290.228 185.39C290.128 185.288 290.071 185.151 290.068 185.008V167.19C290.068 167.046 290.125 166.908 290.225 166.806C290.325 166.704 290.461 166.646 290.603 166.646H303.163C303.305 166.646 303.441 166.704 303.541 166.806C303.641 166.908 303.698 167.046 303.698 167.19V185.008C303.698 185.152 303.641 185.291 303.541 185.393C303.441 185.495 303.305 185.552 303.163 185.552ZM291.138 184.464H302.628V167.735H291.138V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M297.332 185.41C297.191 185.408 297.056 185.349 296.957 185.248C296.857 185.146 296.8 185.01 296.797 184.866V167.539C296.797 167.394 296.853 167.256 296.954 167.154C297.054 167.052 297.19 166.994 297.332 166.994C297.474 166.994 297.61 167.052 297.71 167.154C297.81 167.256 297.867 167.394 297.867 167.539V184.888C297.861 185.029 297.802 185.161 297.703 185.259C297.603 185.356 297.47 185.411 297.332 185.41Z"
              fill="#F8F8F8"
            />
            <path
              d="M262.873 183.212C262.802 183.212 262.734 183.184 262.684 183.132C262.634 183.081 262.605 183.012 262.605 182.94V169.738C262.605 169.665 262.634 169.596 262.684 169.545C262.734 169.494 262.802 169.465 262.873 169.465C262.944 169.465 263.012 169.494 263.062 169.545C263.112 169.596 263.14 169.665 263.14 169.738V182.94C263.14 183.012 263.112 183.081 263.062 183.132C263.012 183.184 262.944 183.212 262.873 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M265.035 183.212C264.964 183.212 264.896 183.184 264.846 183.132C264.796 183.081 264.768 183.012 264.768 182.94V169.738C264.768 169.665 264.796 169.596 264.846 169.545C264.896 169.494 264.964 169.465 265.035 169.465C265.106 169.465 265.174 169.494 265.224 169.545C265.274 169.596 265.302 169.665 265.302 169.738V182.94C265.302 183.012 265.274 183.081 265.224 183.132C265.174 183.184 265.106 183.212 265.035 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M267.195 183.212C267.124 183.212 267.056 183.184 267.006 183.132C266.956 183.081 266.928 183.012 266.928 182.94V169.738C266.928 169.665 266.956 169.596 267.006 169.545C267.056 169.494 267.124 169.465 267.195 169.465C267.266 169.465 267.334 169.494 267.384 169.545C267.434 169.596 267.463 169.665 267.463 169.738V182.94C267.463 183.012 267.434 183.081 267.384 183.132C267.334 183.184 267.266 183.212 267.195 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M269.357 183.212C269.286 183.212 269.218 183.184 269.168 183.132C269.118 183.081 269.09 183.012 269.09 182.94V169.738C269.09 169.665 269.118 169.596 269.168 169.545C269.218 169.494 269.286 169.465 269.357 169.465C269.428 169.465 269.496 169.494 269.546 169.545C269.597 169.596 269.625 169.665 269.625 169.738V182.94C269.625 183.012 269.597 183.081 269.546 183.132C269.496 183.184 269.428 183.212 269.357 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M271.517 183.212C271.447 183.212 271.378 183.184 271.328 183.132C271.278 183.081 271.25 183.012 271.25 182.94V169.738C271.25 169.665 271.278 169.596 271.328 169.545C271.378 169.494 271.447 169.465 271.517 169.465C271.588 169.465 271.656 169.494 271.707 169.545C271.757 169.596 271.785 169.665 271.785 169.738V182.94C271.785 183.012 271.757 183.081 271.707 183.132C271.656 183.184 271.588 183.212 271.517 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M273.68 183.212C273.609 183.212 273.541 183.184 273.49 183.132C273.44 183.081 273.412 183.012 273.412 182.94V169.738C273.412 169.665 273.44 169.596 273.49 169.545C273.541 169.494 273.609 169.465 273.68 169.465C273.75 169.465 273.819 169.494 273.869 169.545C273.919 169.596 273.947 169.665 273.947 169.738V182.94C273.947 183.012 273.919 183.081 273.869 183.132C273.819 183.184 273.75 183.212 273.68 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M275.851 183.212C275.781 183.212 275.712 183.184 275.662 183.132C275.612 183.081 275.584 183.012 275.584 182.94V169.738C275.584 169.665 275.612 169.596 275.662 169.545C275.712 169.494 275.781 169.465 275.851 169.465C275.922 169.465 275.99 169.494 276.041 169.545C276.091 169.596 276.119 169.665 276.119 169.738V182.94C276.119 183.012 276.091 183.081 276.041 183.132C275.99 183.184 275.922 183.212 275.851 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M278.012 183.212C277.941 183.212 277.873 183.184 277.822 183.132C277.772 183.081 277.744 183.012 277.744 182.94V169.738C277.744 169.665 277.772 169.596 277.822 169.545C277.873 169.494 277.941 169.465 278.012 169.465C278.083 169.465 278.151 169.494 278.201 169.545C278.251 169.596 278.279 169.665 278.279 169.738V182.94C278.279 183.012 278.251 183.081 278.201 183.132C278.151 183.184 278.083 183.212 278.012 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M280.174 183.212C280.103 183.212 280.035 183.184 279.985 183.132C279.934 183.081 279.906 183.012 279.906 182.94V169.738C279.906 169.665 279.934 169.596 279.985 169.545C280.035 169.494 280.103 169.465 280.174 169.465C280.245 169.465 280.313 169.494 280.363 169.545C280.413 169.596 280.441 169.665 280.441 169.738V182.94C280.441 183.012 280.413 183.081 280.363 183.132C280.313 183.184 280.245 183.212 280.174 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M282.334 183.212C282.263 183.212 282.195 183.184 282.145 183.132C282.095 183.081 282.066 183.012 282.066 182.94V169.738C282.066 169.665 282.095 169.596 282.145 169.545C282.195 169.494 282.263 169.465 282.334 169.465C282.405 169.465 282.473 169.494 282.523 169.545C282.573 169.596 282.601 169.665 282.601 169.738V182.94C282.601 183.012 282.573 183.081 282.523 183.132C282.473 183.184 282.405 183.212 282.334 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M284.494 183.212C284.423 183.212 284.355 183.184 284.305 183.132C284.255 183.081 284.227 183.012 284.227 182.94V169.738C284.227 169.665 284.255 169.596 284.305 169.545C284.355 169.494 284.423 169.465 284.494 169.465C284.565 169.465 284.633 169.494 284.683 169.545C284.733 169.596 284.761 169.665 284.761 169.738V182.94C284.761 183.012 284.733 183.081 284.683 183.132C284.633 183.184 284.565 183.212 284.494 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M286.656 183.212C286.585 183.212 286.517 183.184 286.467 183.132C286.417 183.081 286.389 183.012 286.389 182.94V169.738C286.389 169.665 286.417 169.596 286.467 169.545C286.517 169.494 286.585 169.465 286.656 169.465C286.727 169.465 286.795 169.494 286.845 169.545C286.895 169.596 286.924 169.665 286.924 169.738V182.94C286.924 183.012 286.895 183.081 286.845 183.132C286.795 183.184 286.727 183.212 286.656 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M195.379 111.507H183.686V122.935H195.379V111.507Z"
              fill="#F8F8F8"
            />
            <path
              d="M195.378 123.48H183.685C183.543 123.48 183.407 123.422 183.307 123.32C183.207 123.218 183.15 123.08 183.15 122.935V111.507C183.15 111.363 183.207 111.224 183.307 111.122C183.407 111.02 183.543 110.963 183.685 110.963H195.378C195.52 110.963 195.656 111.02 195.757 111.122C195.857 111.224 195.913 111.363 195.913 111.507V122.935C195.913 123.08 195.857 123.218 195.757 123.32C195.656 123.422 195.52 123.48 195.378 123.48ZM184.22 122.391H194.854V112.051H184.231L184.22 122.391Z"
              fill="#2B2B2B"
            />
            <path
              d="M200.836 111.507H189.143V122.935H200.836V111.507Z"
              fill="#2B2B2B"
            />
            <path
              d="M200.846 123.48H189.142C189 123.48 188.864 123.422 188.764 123.32C188.664 123.218 188.607 123.08 188.607 122.935V111.507C188.61 111.364 188.667 111.227 188.767 111.125C188.867 111.024 189.001 110.966 189.142 110.963H200.846C200.987 110.966 201.122 111.024 201.221 111.125C201.321 111.227 201.378 111.364 201.381 111.507V122.935C201.381 123.08 201.325 123.218 201.224 123.32C201.124 123.422 200.988 123.48 200.846 123.48ZM189.677 122.391H200.311V112.051H189.677V122.391Z"
              fill="#2B2B2B"
            />
            <path
              d="M200.215 120.084H176.818V135.637H200.215V120.084Z"
              fill="#F8F8F8"
            />
            <path
              d="M200.204 136.171H176.818C176.676 136.171 176.54 136.113 176.44 136.011C176.34 135.909 176.283 135.771 176.283 135.626V120.084C176.283 119.94 176.34 119.801 176.44 119.699C176.54 119.597 176.676 119.54 176.818 119.54H200.204C200.346 119.54 200.482 119.597 200.583 119.699C200.683 119.801 200.739 119.94 200.739 120.084V135.626C200.739 135.771 200.683 135.909 200.583 136.011C200.482 136.113 200.346 136.171 200.204 136.171ZM177.342 135.082H199.669V120.672H177.353L177.342 135.082Z"
              fill="#2B2B2B"
            />
            <path
              d="M211.137 120.084H187.74V135.637H211.137V120.084Z"
              fill="#2B2B2B"
            />
            <path
              d="M211.137 136.171H187.74C187.598 136.171 187.462 136.113 187.362 136.011C187.261 135.909 187.205 135.771 187.205 135.626V120.084C187.205 119.94 187.261 119.801 187.362 119.699C187.462 119.597 187.598 119.54 187.74 119.54H211.137C211.279 119.54 211.415 119.597 211.515 119.699C211.615 119.801 211.672 119.94 211.672 120.084V135.626C211.672 135.771 211.615 135.909 211.515 136.011C211.415 136.113 211.279 136.171 211.137 136.171ZM188.275 135.082H210.602V120.672H188.275V135.082Z"
              fill="#2B2B2B"
            />
            <path
              d="M183.996 134.037H157.486V139.436L172.068 144.203V200.365H183.996H195.925V144.203L210.506 139.436V134.037H183.996Z"
              fill="#F8F8F8"
            />
            <path
              d="M195.925 200.91H172.068C171.926 200.91 171.79 200.852 171.689 200.75C171.589 200.648 171.533 200.51 171.533 200.366V144.617L157.315 139.98C157.209 139.942 157.117 139.871 157.052 139.778C156.986 139.684 156.951 139.572 156.951 139.458V134.016C156.951 133.871 157.008 133.733 157.108 133.631C157.208 133.529 157.344 133.471 157.486 133.471H210.506C210.648 133.471 210.784 133.529 210.884 133.631C210.985 133.733 211.041 133.871 211.041 134.016V139.458C211.041 139.572 211.006 139.684 210.941 139.778C210.876 139.871 210.784 139.942 210.677 139.98L196.459 144.617V200.387C196.454 200.528 196.395 200.661 196.295 200.758C196.196 200.856 196.063 200.91 195.925 200.91ZM172.603 199.821H195.39V144.203C195.389 144.087 195.425 143.973 195.492 143.879C195.56 143.785 195.655 143.716 195.764 143.681L209.971 139.044V134.582H158.021V139.044L172.228 143.681C172.337 143.716 172.433 143.785 172.5 143.879C172.567 143.973 172.603 144.087 172.603 144.203V199.821Z"
              fill="#2B2B2B"
            />
            <path
              d="M190.16 200.605H162.473L171.834 144.203H190.16V200.605Z"
              fill="#F8F8F8"
            />
            <path
              d="M190.158 201.149H162.471C162.394 201.148 162.318 201.129 162.247 201.096C162.177 201.062 162.115 201.013 162.065 200.953C162.013 200.895 161.976 200.825 161.955 200.75C161.935 200.674 161.932 200.594 161.947 200.518L171.319 144.105C171.339 143.979 171.403 143.865 171.5 143.783C171.596 143.701 171.718 143.657 171.843 143.659H190.169C190.311 143.659 190.447 143.716 190.547 143.818C190.648 143.92 190.704 144.058 190.704 144.203V200.605C190.704 200.677 190.69 200.749 190.662 200.815C190.635 200.882 190.594 200.943 190.543 200.993C190.493 201.044 190.432 201.084 190.366 201.111C190.3 201.137 190.229 201.15 190.158 201.149ZM163.103 200.06H189.623V144.747H172.282L163.103 200.06Z"
              fill="#2B2B2B"
            />
            <path
              d="M178.69 154.032H176.197V165.144H178.69V154.032Z"
              fill="#2B2B2B"
            />
            <path
              d="M187.43 154.032H184.938V165.144H187.43V154.032Z"
              fill="#2B2B2B"
            />
            <path
              d="M178.69 170.216H176.197V181.329H178.69V170.216Z"
              fill="#2B2B2B"
            />
            <path
              d="M187.43 170.216H184.938V181.329H187.43V170.216Z"
              fill="#2B2B2B"
            />
            <path
              d="M202.086 134.037H175.576V139.436L190.158 144.203V200.365H217.984H229.912V144.203L244.504 139.436V134.037H202.086Z"
              fill="#2B2B2B"
            />
            <path
              d="M229.912 200.91H190.158C190.016 200.91 189.88 200.852 189.779 200.75C189.679 200.648 189.623 200.51 189.623 200.366V144.617L175.415 139.98C175.306 139.945 175.211 139.876 175.144 139.782C175.076 139.688 175.04 139.574 175.041 139.458V134.016C175.041 133.871 175.097 133.733 175.198 133.631C175.298 133.529 175.434 133.471 175.576 133.471H244.504C244.645 133.474 244.78 133.532 244.879 133.634C244.979 133.735 245.036 133.872 245.039 134.016V139.458C245.04 139.574 245.004 139.688 244.936 139.782C244.869 139.876 244.774 139.945 244.665 139.98L230.447 144.617V200.387C230.441 200.528 230.382 200.661 230.283 200.758C230.183 200.856 230.05 200.91 229.912 200.91ZM190.692 199.821H229.377V144.203C229.376 144.087 229.412 143.973 229.48 143.879C229.547 143.785 229.642 143.716 229.751 143.681L243.969 139.044V134.582H176.111V139.044L190.329 143.681C190.435 143.719 190.527 143.79 190.592 143.883C190.657 143.977 190.692 144.088 190.692 144.203V199.821Z"
              fill="#2B2B2B"
            />
            <path
              d="M196.16 147.055H193.357V150.864H196.16V147.055Z"
              fill="#F8F8F8"
            />
            <path
              d="M196.16 159.746H193.357V163.555H196.16V159.746Z"
              fill="#F8F8F8"
            />
            <path
              d="M196.16 172.448H193.357V176.257H196.16V172.448Z"
              fill="#F8F8F8"
            />
            <path
              d="M223.922 147.055H221.119V150.864H223.922V147.055Z"
              fill="#F8F8F8"
            />
            <path
              d="M223.922 159.746H221.119V163.555H223.922V159.746Z"
              fill="#F8F8F8"
            />
            <path
              d="M223.922 172.448H221.119V176.257H223.922V172.448Z"
              fill="#F8F8F8"
            />
            <path
              d="M175.577 139.436H157.486L171.833 144.203H190.159L175.577 139.436Z"
              fill="#BC70C1"
            />
            <path
              d="M190.159 144.747H171.833C171.776 144.757 171.718 144.757 171.662 144.747L157.316 139.991C157.174 139.968 157.047 139.888 156.962 139.77C156.878 139.651 156.843 139.504 156.866 139.359C156.889 139.215 156.967 139.086 157.083 139C157.2 138.914 157.345 138.879 157.487 138.902H175.599C175.652 138.892 175.706 138.892 175.759 138.902L190.351 143.659C190.472 143.698 190.575 143.78 190.641 143.89C190.708 144 190.734 144.13 190.715 144.257C190.699 144.395 190.633 144.521 190.53 144.612C190.427 144.703 190.295 144.751 190.159 144.747ZM171.918 143.659H186.746L175.492 139.98H160.846L171.918 143.659Z"
              fill="#2B2B2B"
            />
            <path
              d="M209.469 184.856H166.869V202.673H209.469V184.856Z"
              fill="#F8F8F8"
            />
            <path
              d="M209.48 203.217H166.869C166.727 203.217 166.591 203.16 166.491 203.058C166.39 202.956 166.334 202.817 166.334 202.673V184.888C166.334 184.744 166.39 184.606 166.491 184.504C166.591 184.401 166.727 184.344 166.869 184.344H209.48C209.622 184.344 209.758 184.401 209.858 184.504C209.958 184.606 210.015 184.744 210.015 184.888V202.706C210.006 202.844 209.946 202.975 209.847 203.07C209.748 203.165 209.616 203.218 209.48 203.217ZM167.404 202.129H208.945V185.4H167.404V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M209.48 184.856H196.92V202.673H209.48V184.856Z"
              fill="#F8F8F8"
            />
            <path
              d="M209.479 203.217H196.92C196.778 203.217 196.642 203.16 196.541 203.058C196.441 202.956 196.385 202.817 196.385 202.673V184.888C196.385 184.744 196.441 184.606 196.541 184.504C196.642 184.401 196.778 184.344 196.92 184.344H209.479C209.621 184.344 209.757 184.401 209.858 184.504C209.958 184.606 210.014 184.744 210.014 184.888V202.706C210.006 202.844 209.946 202.975 209.847 203.07C209.747 203.165 209.616 203.218 209.479 203.217ZM197.455 202.129H208.944V185.4H197.455V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M203.648 203.076C203.506 203.076 203.37 203.018 203.27 202.916C203.17 202.814 203.113 202.676 203.113 202.532V185.204C203.113 185.06 203.17 184.921 203.27 184.819C203.37 184.717 203.506 184.66 203.648 184.66C203.79 184.66 203.926 184.717 204.026 184.819C204.127 184.921 204.183 185.06 204.183 185.204V202.532C204.18 202.675 204.123 202.812 204.023 202.913C203.924 203.015 203.789 203.073 203.648 203.076Z"
              fill="#2B2B2B"
            />
            <path
              d="M169.18 200.877C169.109 200.877 169.041 200.848 168.99 200.797C168.94 200.746 168.912 200.677 168.912 200.605V187.402C168.912 187.33 168.94 187.261 168.99 187.21C169.041 187.159 169.109 187.13 169.18 187.13C169.25 187.13 169.319 187.159 169.369 187.21C169.419 187.261 169.447 187.33 169.447 187.402V200.605C169.447 200.677 169.419 200.746 169.369 200.797C169.319 200.848 169.25 200.877 169.18 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M171.318 200.877C171.247 200.877 171.179 200.848 171.129 200.797C171.079 200.746 171.051 200.677 171.051 200.605V187.402C171.051 187.33 171.079 187.261 171.129 187.21C171.179 187.159 171.247 187.13 171.318 187.13C171.389 187.13 171.457 187.159 171.507 187.21C171.558 187.261 171.586 187.33 171.586 187.402V200.605C171.586 200.677 171.558 200.746 171.507 200.797C171.457 200.848 171.389 200.877 171.318 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M173.512 200.877C173.441 200.877 173.373 200.848 173.322 200.797C173.272 200.746 173.244 200.677 173.244 200.605V187.402C173.244 187.33 173.272 187.261 173.322 187.21C173.373 187.159 173.441 187.13 173.512 187.13C173.583 187.13 173.651 187.159 173.701 187.21C173.751 187.261 173.779 187.33 173.779 187.402V200.605C173.779 200.677 173.751 200.746 173.701 200.797C173.651 200.848 173.583 200.877 173.512 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M175.674 200.877C175.603 200.877 175.535 200.848 175.485 200.797C175.434 200.746 175.406 200.677 175.406 200.605V187.402C175.406 187.33 175.434 187.261 175.485 187.21C175.535 187.159 175.603 187.13 175.674 187.13C175.745 187.13 175.813 187.159 175.863 187.21C175.913 187.261 175.941 187.33 175.941 187.402V200.605C175.941 200.677 175.913 200.746 175.863 200.797C175.813 200.848 175.745 200.877 175.674 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M177.834 200.877C177.763 200.877 177.695 200.848 177.645 200.797C177.595 200.746 177.566 200.677 177.566 200.605V187.402C177.566 187.33 177.595 187.261 177.645 187.21C177.695 187.159 177.763 187.13 177.834 187.13C177.905 187.13 177.973 187.159 178.023 187.21C178.073 187.261 178.101 187.33 178.101 187.402V200.605C178.101 200.677 178.073 200.746 178.023 200.797C177.973 200.848 177.905 200.877 177.834 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M179.996 200.877C179.925 200.877 179.857 200.848 179.807 200.797C179.757 200.746 179.729 200.677 179.729 200.605V187.402C179.729 187.33 179.757 187.261 179.807 187.21C179.857 187.159 179.925 187.13 179.996 187.13C180.067 187.13 180.135 187.159 180.185 187.21C180.235 187.261 180.263 187.33 180.263 187.402V200.605C180.263 200.677 180.235 200.746 180.185 200.797C180.135 200.848 180.067 200.877 179.996 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M182.156 200.877C182.085 200.877 182.017 200.848 181.967 200.797C181.917 200.746 181.889 200.677 181.889 200.605V187.402C181.889 187.33 181.917 187.261 181.967 187.21C182.017 187.159 182.085 187.13 182.156 187.13C182.227 187.13 182.295 187.159 182.345 187.21C182.395 187.261 182.424 187.33 182.424 187.402V200.605C182.424 200.677 182.395 200.746 182.345 200.797C182.295 200.848 182.227 200.877 182.156 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M184.316 200.877C184.245 200.877 184.177 200.848 184.127 200.797C184.077 200.746 184.049 200.677 184.049 200.605V187.402C184.049 187.33 184.077 187.261 184.127 187.21C184.177 187.159 184.245 187.13 184.316 187.13C184.387 187.13 184.455 187.159 184.505 187.21C184.556 187.261 184.584 187.33 184.584 187.402V200.605C184.584 200.677 184.556 200.746 184.505 200.797C184.455 200.848 184.387 200.877 184.316 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M186.478 200.877C186.407 200.877 186.339 200.848 186.289 200.797C186.239 200.746 186.211 200.677 186.211 200.605V187.402C186.211 187.33 186.239 187.261 186.289 187.21C186.339 187.159 186.407 187.13 186.478 187.13C186.549 187.13 186.617 187.159 186.668 187.21C186.718 187.261 186.746 187.33 186.746 187.402V200.605C186.746 200.677 186.718 200.746 186.668 200.797C186.617 200.848 186.549 200.877 186.478 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M188.639 200.877C188.568 200.877 188.5 200.848 188.449 200.797C188.399 200.746 188.371 200.677 188.371 200.605V187.402C188.371 187.33 188.399 187.261 188.449 187.21C188.5 187.159 188.568 187.13 188.639 187.13C188.709 187.13 188.778 187.159 188.828 187.21C188.878 187.261 188.906 187.33 188.906 187.402V200.605C188.906 200.677 188.878 200.746 188.828 200.797C188.778 200.848 188.709 200.877 188.639 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M190.81 200.877C190.739 200.877 190.671 200.848 190.621 200.797C190.571 200.746 190.543 200.677 190.543 200.605V187.402C190.543 187.33 190.571 187.261 190.621 187.21C190.671 187.159 190.739 187.13 190.81 187.13C190.881 187.13 190.949 187.159 191 187.21C191.05 187.261 191.078 187.33 191.078 187.402V200.605C191.078 200.677 191.05 200.746 191 200.797C190.949 200.848 190.881 200.877 190.81 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M192.973 200.877C192.902 200.877 192.834 200.848 192.783 200.797C192.733 200.746 192.705 200.677 192.705 200.605V187.402C192.705 187.33 192.733 187.261 192.783 187.21C192.834 187.159 192.902 187.13 192.973 187.13C193.043 187.13 193.111 187.159 193.162 187.21C193.212 187.261 193.24 187.33 193.24 187.402V200.605C193.24 200.677 193.212 200.746 193.162 200.797C193.111 200.848 193.043 200.877 192.973 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M255.352 167.19H212.752V185.008H255.352V167.19Z"
              fill="#F8F8F8"
            />
            <path
              d="M255.354 185.552H212.754C212.612 185.552 212.476 185.495 212.375 185.393C212.275 185.291 212.219 185.152 212.219 185.008V167.19C212.219 167.046 212.275 166.908 212.375 166.806C212.476 166.704 212.612 166.646 212.754 166.646H255.354C255.496 166.646 255.632 166.704 255.732 166.806C255.832 166.908 255.889 167.046 255.889 167.19V185.008C255.889 185.152 255.832 185.291 255.732 185.393C255.632 185.495 255.496 185.552 255.354 185.552ZM213.289 184.464H254.819V167.735H213.289V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M255.364 167.19H242.805V185.008H255.364V167.19Z"
              fill="#2B2B2B"
            />
            <path
              d="M255.353 185.552H242.804C242.663 185.552 242.527 185.495 242.426 185.393C242.326 185.291 242.27 185.152 242.27 185.008V167.19C242.27 167.046 242.326 166.908 242.426 166.806C242.527 166.704 242.663 166.646 242.804 166.646H255.353C255.495 166.646 255.631 166.704 255.732 166.806C255.832 166.908 255.888 167.046 255.888 167.19V185.008C255.888 185.152 255.832 185.291 255.732 185.393C255.631 185.495 255.495 185.552 255.353 185.552ZM243.339 184.464H254.818V167.735H243.339V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M249.533 185.41C249.391 185.41 249.255 185.353 249.155 185.251C249.054 185.149 248.998 185.011 248.998 184.866V167.539C248.998 167.394 249.054 167.256 249.155 167.154C249.255 167.052 249.391 166.994 249.533 166.994C249.675 166.994 249.811 167.052 249.911 167.154C250.011 167.256 250.068 167.394 250.068 167.539V184.888C250.06 185.028 250 185.159 249.901 185.256C249.802 185.353 249.67 185.408 249.533 185.41Z"
              fill="#2B2B2B"
            />
            <path
              d="M215.064 183.212C214.993 183.212 214.925 183.184 214.875 183.132C214.825 183.081 214.797 183.012 214.797 182.94V169.738C214.797 169.665 214.825 169.596 214.875 169.545C214.925 169.494 214.993 169.465 215.064 169.465C215.135 169.465 215.203 169.494 215.253 169.545C215.304 169.596 215.332 169.665 215.332 169.738V182.94C215.332 183.012 215.304 183.081 215.253 183.132C215.203 183.184 215.135 183.212 215.064 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M217.224 183.212C217.154 183.212 217.086 183.184 217.035 183.132C216.985 183.081 216.957 183.012 216.957 182.94V169.738C216.957 169.665 216.985 169.596 217.035 169.545C217.086 169.494 217.154 169.465 217.224 169.465C217.295 169.465 217.363 169.494 217.414 169.545C217.464 169.596 217.492 169.665 217.492 169.738V182.94C217.492 183.012 217.464 183.081 217.414 183.132C217.363 183.184 217.295 183.212 217.224 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M219.387 183.212C219.316 183.212 219.248 183.184 219.197 183.132C219.147 183.081 219.119 183.012 219.119 182.94V169.738C219.119 169.665 219.147 169.596 219.197 169.545C219.248 169.494 219.316 169.465 219.387 169.465C219.458 169.465 219.526 169.494 219.576 169.545C219.626 169.596 219.654 169.665 219.654 169.738V182.94C219.654 183.012 219.626 183.081 219.576 183.132C219.526 183.184 219.458 183.212 219.387 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M221.601 183.212C221.531 183.212 221.462 183.184 221.412 183.132C221.362 183.081 221.334 183.012 221.334 182.94V169.738C221.334 169.665 221.362 169.596 221.412 169.545C221.462 169.494 221.531 169.465 221.601 169.465C221.672 169.465 221.74 169.494 221.791 169.545C221.841 169.596 221.869 169.665 221.869 169.738V182.94C221.869 183.012 221.841 183.081 221.791 183.132C221.74 183.184 221.672 183.212 221.601 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M223.74 183.212C223.669 183.212 223.601 183.184 223.551 183.132C223.501 183.081 223.473 183.012 223.473 182.94V169.738C223.473 169.665 223.501 169.596 223.551 169.545C223.601 169.494 223.669 169.465 223.74 169.465C223.811 169.465 223.879 169.494 223.929 169.545C223.979 169.596 224.008 169.665 224.008 169.738V182.94C224.008 183.012 223.979 183.081 223.929 183.132C223.879 183.184 223.811 183.212 223.74 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M225.879 183.212C225.808 183.212 225.74 183.184 225.69 183.132C225.64 183.081 225.611 183.012 225.611 182.94V169.738C225.611 169.665 225.64 169.596 225.69 169.545C225.74 169.494 225.808 169.465 225.879 169.465C225.95 169.465 226.018 169.494 226.068 169.545C226.118 169.596 226.146 169.665 226.146 169.738V182.94C226.146 183.012 226.118 183.081 226.068 183.132C226.018 183.184 225.95 183.212 225.879 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M228.019 183.212C227.948 183.212 227.88 183.184 227.83 183.132C227.78 183.081 227.752 183.012 227.752 182.94V169.738C227.752 169.665 227.78 169.596 227.83 169.545C227.88 169.494 227.948 169.465 228.019 169.465C228.09 169.465 228.158 169.494 228.209 169.545C228.259 169.596 228.287 169.665 228.287 169.738V182.94C228.287 183.012 228.259 183.081 228.209 183.132C228.158 183.184 228.09 183.212 228.019 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M230.158 183.212C230.087 183.212 230.019 183.184 229.969 183.132C229.919 183.081 229.891 183.012 229.891 182.94V169.738C229.891 169.665 229.919 169.596 229.969 169.545C230.019 169.494 230.087 169.465 230.158 169.465C230.229 169.465 230.297 169.494 230.347 169.545C230.397 169.596 230.426 169.665 230.426 169.738V182.94C230.426 183.012 230.397 183.081 230.347 183.132C230.297 183.184 230.229 183.212 230.158 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M232.363 183.212C232.292 183.212 232.224 183.184 232.174 183.132C232.124 183.081 232.096 183.012 232.096 182.94V169.738C232.096 169.665 232.124 169.596 232.174 169.545C232.224 169.494 232.292 169.465 232.363 169.465C232.434 169.465 232.502 169.494 232.552 169.545C232.602 169.596 232.631 169.665 232.631 169.738V182.94C232.631 183.012 232.602 183.081 232.552 183.132C232.502 183.184 232.434 183.212 232.363 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M234.523 183.212C234.452 183.212 234.384 183.184 234.334 183.132C234.284 183.081 234.256 183.012 234.256 182.94V169.738C234.256 169.665 234.284 169.596 234.334 169.545C234.384 169.494 234.452 169.465 234.523 169.465C234.594 169.465 234.662 169.494 234.712 169.545C234.763 169.596 234.791 169.665 234.791 169.738V182.94C234.791 183.012 234.763 183.081 234.712 183.132C234.662 183.184 234.594 183.212 234.523 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M236.685 183.212C236.614 183.212 236.546 183.184 236.496 183.132C236.446 183.081 236.418 183.012 236.418 182.94V169.738C236.418 169.665 236.446 169.596 236.496 169.545C236.546 169.494 236.614 169.465 236.685 169.465C236.756 169.465 236.824 169.494 236.875 169.545C236.925 169.596 236.953 169.665 236.953 169.738V182.94C236.953 183.012 236.925 183.081 236.875 183.132C236.824 183.184 236.756 183.212 236.685 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M238.847 183.212C238.778 183.209 238.712 183.179 238.664 183.129C238.616 183.078 238.59 183.01 238.59 182.94V169.738C238.59 169.667 238.616 169.6 238.664 169.549C238.712 169.498 238.778 169.468 238.847 169.465C238.919 169.465 238.988 169.494 239.04 169.544C239.091 169.595 239.122 169.664 239.125 169.738V182.94C239.122 183.013 239.091 183.082 239.04 183.133C238.988 183.184 238.919 183.212 238.847 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M223.227 167.19H180.627V185.008H223.227V167.19Z"
              fill="#F8F8F8"
            />
            <path
              d="M223.227 185.552H180.627C180.485 185.552 180.349 185.495 180.248 185.393C180.148 185.291 180.092 185.152 180.092 185.008V167.19C180.092 167.046 180.148 166.908 180.248 166.806C180.349 166.704 180.485 166.646 180.627 166.646H223.227C223.369 166.646 223.505 166.704 223.605 166.806C223.705 166.908 223.762 167.046 223.762 167.19V185.008C223.762 185.152 223.705 185.291 223.605 185.393C223.505 185.495 223.369 185.552 223.227 185.552ZM181.162 184.464H222.67V167.735H181.162V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M223.228 167.19H210.668V185.008H223.228V167.19Z"
              fill="#2B2B2B"
            />
            <path
              d="M223.227 185.552H210.668C210.527 185.549 210.392 185.491 210.293 185.39C210.193 185.288 210.136 185.151 210.133 185.008V167.19C210.133 167.046 210.189 166.908 210.289 166.806C210.39 166.704 210.526 166.646 210.668 166.646H223.227C223.369 166.646 223.505 166.704 223.606 166.806C223.706 166.908 223.762 167.046 223.762 167.19V185.008C223.762 185.152 223.706 185.291 223.606 185.393C223.505 185.495 223.369 185.552 223.227 185.552ZM211.203 184.464H222.671V167.735H211.203V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M217.396 185.41C217.255 185.408 217.121 185.349 217.021 185.248C216.921 185.146 216.864 185.01 216.861 184.866V167.539C216.861 167.394 216.918 167.256 217.018 167.154C217.118 167.052 217.254 166.994 217.396 166.994C217.538 166.994 217.674 167.052 217.774 167.154C217.875 167.256 217.931 167.394 217.931 167.539V184.888C217.926 185.029 217.867 185.161 217.767 185.259C217.667 185.356 217.534 185.411 217.396 185.41Z"
              fill="#F8F8F8"
            />
            <path
              d="M182.937 183.212C182.866 183.212 182.798 183.184 182.748 183.132C182.698 183.081 182.67 183.012 182.67 182.94V169.738C182.67 169.665 182.698 169.596 182.748 169.545C182.798 169.494 182.866 169.465 182.937 169.465C183.008 169.465 183.076 169.494 183.126 169.545C183.177 169.596 183.205 169.665 183.205 169.738V182.94C183.205 183.012 183.177 183.081 183.126 183.132C183.076 183.184 183.008 183.212 182.937 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M185.098 183.212C185.027 183.212 184.959 183.184 184.908 183.132C184.858 183.081 184.83 183.012 184.83 182.94V169.738C184.83 169.665 184.858 169.596 184.908 169.545C184.959 169.494 185.027 169.465 185.098 169.465C185.168 169.465 185.236 169.494 185.287 169.545C185.337 169.596 185.365 169.665 185.365 169.738V182.94C185.365 183.012 185.337 183.081 185.287 183.132C185.236 183.184 185.168 183.212 185.098 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M187.26 183.212C187.189 183.212 187.121 183.184 187.071 183.132C187.02 183.081 186.992 183.012 186.992 182.94V169.738C186.992 169.665 187.02 169.596 187.071 169.545C187.121 169.494 187.189 169.465 187.26 169.465C187.331 169.465 187.399 169.494 187.449 169.545C187.499 169.596 187.527 169.665 187.527 169.738V182.94C187.527 183.012 187.499 183.081 187.449 183.132C187.399 183.184 187.331 183.212 187.26 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M189.42 183.212C189.349 183.212 189.281 183.184 189.231 183.132C189.181 183.081 189.152 183.012 189.152 182.94V169.738C189.152 169.665 189.181 169.596 189.231 169.545C189.281 169.494 189.349 169.465 189.42 169.465C189.491 169.465 189.559 169.494 189.609 169.545C189.659 169.596 189.687 169.665 189.687 169.738V182.94C189.687 183.012 189.659 183.081 189.609 183.132C189.559 183.184 189.491 183.212 189.42 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M191.582 183.212C191.511 183.212 191.443 183.184 191.393 183.132C191.343 183.081 191.314 183.012 191.314 182.94V169.738C191.314 169.665 191.343 169.596 191.393 169.545C191.443 169.494 191.511 169.465 191.582 169.465C191.653 169.465 191.721 169.494 191.771 169.545C191.821 169.596 191.849 169.665 191.849 169.738V182.94C191.849 183.012 191.821 183.081 191.771 183.132C191.721 183.184 191.653 183.212 191.582 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M193.785 183.212C193.714 183.212 193.646 183.184 193.596 183.132C193.546 183.081 193.518 183.012 193.518 182.94V169.738C193.518 169.665 193.546 169.596 193.596 169.545C193.646 169.494 193.714 169.465 193.785 169.465C193.856 169.465 193.924 169.494 193.974 169.545C194.024 169.596 194.052 169.665 194.052 169.738V182.94C194.052 183.012 194.024 183.081 193.974 183.132C193.924 183.184 193.856 183.212 193.785 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M195.926 183.212C195.855 183.212 195.787 183.184 195.737 183.132C195.686 183.081 195.658 183.012 195.658 182.94V169.738C195.658 169.665 195.686 169.596 195.737 169.545C195.787 169.494 195.855 169.465 195.926 169.465C195.997 169.465 196.065 169.494 196.115 169.545C196.165 169.596 196.193 169.665 196.193 169.738V182.94C196.193 183.012 196.165 183.081 196.115 183.132C196.065 183.184 195.997 183.212 195.926 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M198.064 183.212C197.993 183.212 197.925 183.184 197.875 183.132C197.825 183.081 197.797 183.012 197.797 182.94V169.738C197.797 169.665 197.825 169.596 197.875 169.545C197.925 169.494 197.993 169.465 198.064 169.465C198.135 169.465 198.203 169.494 198.253 169.545C198.304 169.596 198.332 169.665 198.332 169.738V182.94C198.332 183.012 198.304 183.081 198.253 183.132C198.203 183.184 198.135 183.212 198.064 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M200.205 183.212C200.134 183.212 200.066 183.184 200.016 183.132C199.966 183.081 199.938 183.012 199.938 182.94V169.738C199.938 169.665 199.966 169.596 200.016 169.545C200.066 169.494 200.134 169.465 200.205 169.465C200.276 169.465 200.344 169.494 200.394 169.545C200.444 169.596 200.472 169.665 200.472 169.738V182.94C200.472 183.012 200.444 183.081 200.394 183.132C200.344 183.184 200.276 183.212 200.205 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M202.398 183.212C202.327 183.212 202.259 183.184 202.209 183.132C202.159 183.081 202.131 183.012 202.131 182.94V169.738C202.131 169.665 202.159 169.596 202.209 169.545C202.259 169.494 202.327 169.465 202.398 169.465C202.469 169.465 202.537 169.494 202.587 169.545C202.638 169.596 202.666 169.665 202.666 169.738V182.94C202.666 183.012 202.638 183.081 202.587 183.132C202.537 183.184 202.469 183.212 202.398 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M204.558 183.212C204.488 183.212 204.419 183.184 204.369 183.132C204.319 183.081 204.291 183.012 204.291 182.94V169.738C204.291 169.665 204.319 169.596 204.369 169.545C204.419 169.494 204.488 169.465 204.558 169.465C204.629 169.465 204.697 169.494 204.748 169.545C204.798 169.596 204.826 169.665 204.826 169.738V182.94C204.826 183.012 204.798 183.081 204.748 183.132C204.697 183.184 204.629 183.212 204.558 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M206.719 183.212C206.648 183.212 206.58 183.184 206.53 183.132C206.479 183.081 206.451 183.012 206.451 182.94V169.738C206.451 169.665 206.479 169.596 206.53 169.545C206.58 169.494 206.648 169.465 206.719 169.465C206.79 169.465 206.858 169.494 206.908 169.545C206.958 169.596 206.986 169.665 206.986 169.738V182.94C206.986 183.012 206.958 183.081 206.908 183.132C206.858 183.184 206.79 183.212 206.719 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M287.565 167.19H244.965V185.008H287.565V167.19Z"
              fill="#F8F8F8"
            />
            <path
              d="M287.565 185.552H244.965C244.823 185.552 244.687 185.495 244.586 185.393C244.486 185.291 244.43 185.152 244.43 185.008V167.19C244.43 167.046 244.486 166.908 244.586 166.806C244.687 166.704 244.823 166.646 244.965 166.646H287.565C287.707 166.646 287.843 166.704 287.943 166.806C288.043 166.908 288.1 167.046 288.1 167.19V185.008C288.1 185.152 288.043 185.291 287.943 185.393C287.843 185.495 287.707 185.552 287.565 185.552ZM245.5 184.464H287.03V167.735H245.5V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M287.565 167.19H275.006V185.008H287.565V167.19Z"
              fill="#2B2B2B"
            />
            <path
              d="M287.565 185.552H275.006C274.865 185.549 274.73 185.491 274.63 185.39C274.531 185.288 274.473 185.151 274.471 185.008V167.19C274.471 167.046 274.527 166.908 274.627 166.806C274.728 166.704 274.864 166.646 275.006 166.646H287.565C287.707 166.646 287.843 166.704 287.943 166.806C288.044 166.908 288.1 167.046 288.1 167.19V185.008C288.1 185.152 288.044 185.291 287.943 185.393C287.843 185.495 287.707 185.552 287.565 185.552ZM275.541 184.464H287.03V167.735H275.541V184.464Z"
              fill="#2B2B2B"
            />
            <path
              d="M281.734 185.41C281.593 185.408 281.459 185.349 281.359 185.248C281.259 185.146 281.202 185.01 281.199 184.866V167.539C281.199 167.394 281.256 167.256 281.356 167.154C281.456 167.052 281.592 166.994 281.734 166.994C281.876 166.994 282.012 167.052 282.112 167.154C282.213 167.256 282.269 167.394 282.269 167.539V184.888C282.264 185.029 282.205 185.161 282.105 185.259C282.005 185.356 281.872 185.411 281.734 185.41Z"
              fill="#F8F8F8"
            />
            <path
              d="M247.275 183.212C247.204 183.212 247.136 183.184 247.086 183.132C247.036 183.081 247.008 183.012 247.008 182.94V169.738C247.008 169.665 247.036 169.596 247.086 169.545C247.136 169.494 247.204 169.465 247.275 169.465C247.346 169.465 247.414 169.494 247.464 169.545C247.515 169.596 247.543 169.665 247.543 169.738V182.94C247.543 183.012 247.515 183.081 247.464 183.132C247.414 183.184 247.346 183.212 247.275 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M249.416 183.212C249.345 183.212 249.277 183.184 249.227 183.132C249.177 183.081 249.148 183.012 249.148 182.94V169.738C249.148 169.665 249.177 169.596 249.227 169.545C249.277 169.494 249.345 169.465 249.416 169.465C249.487 169.465 249.555 169.494 249.605 169.545C249.655 169.596 249.683 169.665 249.683 169.738V182.94C249.683 183.012 249.655 183.081 249.605 183.132C249.555 183.184 249.487 183.212 249.416 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M251.555 183.212C251.484 183.212 251.416 183.184 251.365 183.132C251.315 183.081 251.287 183.012 251.287 182.94V169.738C251.287 169.665 251.315 169.596 251.365 169.545C251.416 169.494 251.484 169.465 251.555 169.465C251.625 169.465 251.694 169.494 251.744 169.545C251.794 169.596 251.822 169.665 251.822 169.738V182.94C251.822 183.012 251.794 183.081 251.744 183.132C251.694 183.184 251.625 183.212 251.555 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M253.76 183.212C253.689 183.212 253.621 183.184 253.571 183.132C253.52 183.081 253.492 183.012 253.492 182.94V169.738C253.492 169.665 253.52 169.596 253.571 169.545C253.621 169.494 253.689 169.465 253.76 169.465C253.831 169.465 253.899 169.494 253.949 169.545C253.999 169.596 254.027 169.665 254.027 169.738V182.94C254.027 183.012 253.999 183.081 253.949 183.132C253.899 183.184 253.831 183.212 253.76 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M255.92 183.212C255.849 183.212 255.781 183.184 255.731 183.132C255.681 183.081 255.652 183.012 255.652 182.94V169.738C255.652 169.665 255.681 169.596 255.731 169.545C255.781 169.494 255.849 169.465 255.92 169.465C255.991 169.465 256.059 169.494 256.109 169.545C256.159 169.596 256.187 169.665 256.187 169.738V182.94C256.187 183.012 256.159 183.081 256.109 183.132C256.059 183.184 255.991 183.212 255.92 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M258.08 183.212C258.009 183.212 257.941 183.184 257.891 183.132C257.841 183.081 257.812 183.012 257.812 182.94V169.738C257.812 169.665 257.841 169.596 257.891 169.545C257.941 169.494 258.009 169.465 258.08 169.465C258.151 169.465 258.219 169.494 258.269 169.545C258.319 169.596 258.347 169.665 258.347 169.738V182.94C258.347 183.012 258.319 183.081 258.269 183.132C258.219 183.184 258.151 183.212 258.08 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M260.254 183.212C260.183 183.212 260.115 183.184 260.065 183.132C260.014 183.081 259.986 183.012 259.986 182.94V169.738C259.986 169.665 260.014 169.596 260.065 169.545C260.115 169.494 260.183 169.465 260.254 169.465C260.325 169.465 260.393 169.494 260.443 169.545C260.493 169.596 260.521 169.665 260.521 169.738V182.94C260.521 183.012 260.493 183.081 260.443 183.132C260.393 183.184 260.325 183.212 260.254 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M262.414 183.212C262.343 183.212 262.275 183.184 262.225 183.132C262.175 183.081 262.146 183.012 262.146 182.94V169.738C262.146 169.665 262.175 169.596 262.225 169.545C262.275 169.494 262.343 169.465 262.414 169.465C262.485 169.465 262.553 169.494 262.603 169.545C262.653 169.596 262.681 169.665 262.681 169.738V182.94C262.681 183.012 262.653 183.081 262.603 183.132C262.553 183.184 262.485 183.212 262.414 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M264.576 183.212C264.505 183.212 264.437 183.184 264.387 183.132C264.337 183.081 264.309 183.012 264.309 182.94V169.738C264.309 169.665 264.337 169.596 264.387 169.545C264.437 169.494 264.505 169.465 264.576 169.465C264.647 169.465 264.715 169.494 264.765 169.545C264.815 169.596 264.844 169.665 264.844 169.738V182.94C264.844 183.012 264.815 183.081 264.765 183.132C264.715 183.184 264.647 183.212 264.576 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M266.736 183.212C266.665 183.212 266.597 183.184 266.547 183.132C266.497 183.081 266.469 183.012 266.469 182.94V169.738C266.469 169.665 266.497 169.596 266.547 169.545C266.597 169.494 266.665 169.465 266.736 169.465C266.807 169.465 266.875 169.494 266.925 169.545C266.975 169.596 267.004 169.665 267.004 169.738V182.94C267.004 183.012 266.975 183.081 266.925 183.132C266.875 183.184 266.807 183.212 266.736 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M268.896 183.212C268.825 183.212 268.757 183.184 268.707 183.132C268.657 183.081 268.629 183.012 268.629 182.94V169.738C268.629 169.665 268.657 169.596 268.707 169.545C268.757 169.494 268.825 169.465 268.896 169.465C268.967 169.465 269.035 169.494 269.085 169.545C269.136 169.596 269.164 169.665 269.164 169.738V182.94C269.164 183.012 269.136 183.081 269.085 183.132C269.035 183.184 268.967 183.212 268.896 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M271.058 183.212C270.988 183.212 270.919 183.184 270.869 183.132C270.819 183.081 270.791 183.012 270.791 182.94V169.738C270.791 169.665 270.819 169.596 270.869 169.545C270.919 169.494 270.988 169.465 271.058 169.465C271.129 169.465 271.197 169.494 271.248 169.545C271.298 169.596 271.326 169.665 271.326 169.738V182.94C271.326 183.012 271.298 183.081 271.248 183.132C271.197 183.184 271.129 183.212 271.058 183.212Z"
              fill="#2B2B2B"
            />
            <path
              d="M271.657 149.417H229.057V167.234H271.657V149.417Z"
              fill="#F8F8F8"
            />
            <path
              d="M271.658 167.778H229.09C228.948 167.778 228.812 167.721 228.711 167.619C228.611 167.517 228.555 167.378 228.555 167.234V149.416C228.555 149.272 228.611 149.134 228.711 149.032C228.812 148.93 228.948 148.872 229.09 148.872H271.69C271.832 148.872 271.968 148.93 272.068 149.032C272.168 149.134 272.225 149.272 272.225 149.416V167.234C272.225 167.308 272.21 167.382 272.181 167.45C272.152 167.518 272.11 167.58 272.057 167.631C272.004 167.682 271.941 167.721 271.872 167.746C271.803 167.772 271.73 167.782 271.658 167.778ZM229.592 166.69H271.123V149.961H229.592V166.69Z"
              fill="#2B2B2B"
            />
            <path
              d="M271.657 149.417H259.098V167.234H271.657V149.417Z"
              fill="#2B2B2B"
            />
            <path
              d="M271.657 167.778H259.097C258.956 167.778 258.819 167.721 258.719 167.619C258.619 167.517 258.562 167.378 258.562 167.234V149.416C258.562 149.272 258.619 149.134 258.719 149.032C258.819 148.93 258.956 148.872 259.097 148.872H271.657C271.799 148.872 271.935 148.93 272.035 149.032C272.136 149.134 272.192 149.272 272.192 149.416V167.234C272.192 167.378 272.136 167.517 272.035 167.619C271.935 167.721 271.799 167.778 271.657 167.778ZM259.632 166.69H271.122V149.961H259.632V166.69Z"
              fill="#2B2B2B"
            />
            <path
              d="M265.826 167.637C265.684 167.637 265.548 167.579 265.448 167.477C265.347 167.375 265.291 167.237 265.291 167.092V149.765C265.291 149.62 265.347 149.482 265.448 149.38C265.548 149.278 265.684 149.221 265.826 149.221C265.968 149.221 266.104 149.278 266.204 149.38C266.304 149.482 266.361 149.62 266.361 149.765V167.092C266.361 167.237 266.304 167.375 266.204 167.477C266.104 167.579 265.968 167.637 265.826 167.637Z"
              fill="#F8F8F8"
            />
            <path
              d="M231.367 165.438C231.296 165.438 231.228 165.409 231.178 165.358C231.128 165.307 231.1 165.238 231.1 165.166V151.963C231.1 151.891 231.128 151.822 231.178 151.771C231.228 151.72 231.296 151.691 231.367 151.691C231.438 151.691 231.506 151.72 231.556 151.771C231.606 151.822 231.635 151.891 231.635 151.963V165.166C231.635 165.238 231.606 165.307 231.556 165.358C231.506 165.409 231.438 165.438 231.367 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M233.529 165.438C233.458 165.438 233.39 165.409 233.34 165.358C233.29 165.307 233.262 165.238 233.262 165.166V151.963C233.262 151.891 233.29 151.822 233.34 151.771C233.39 151.72 233.458 151.691 233.529 151.691C233.6 151.691 233.668 151.72 233.718 151.771C233.768 151.822 233.797 151.891 233.797 151.963V165.166C233.797 165.238 233.768 165.307 233.718 165.358C233.668 165.409 233.6 165.438 233.529 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M235.689 165.71C235.547 165.71 235.411 165.653 235.311 165.551C235.211 165.449 235.154 165.31 235.154 165.166V151.963C235.154 151.819 235.211 151.681 235.311 151.579C235.411 151.477 235.547 151.419 235.689 151.419C235.831 151.419 235.967 151.477 236.067 151.579C236.168 151.681 236.224 151.819 236.224 151.963V165.166C236.224 165.31 236.168 165.449 236.067 165.551C235.967 165.653 235.831 165.71 235.689 165.71Z"
              fill="#F8F8F8"
            />
            <path
              d="M237.851 165.438C237.781 165.438 237.712 165.409 237.662 165.358C237.612 165.307 237.584 165.238 237.584 165.166V151.963C237.584 151.891 237.612 151.822 237.662 151.771C237.712 151.72 237.781 151.691 237.851 151.691C237.922 151.691 237.99 151.72 238.041 151.771C238.091 151.822 238.119 151.891 238.119 151.963V165.166C238.119 165.238 238.091 165.307 238.041 165.358C237.99 165.409 237.922 165.438 237.851 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M240.012 165.438C239.941 165.438 239.873 165.409 239.822 165.358C239.772 165.307 239.744 165.238 239.744 165.166V151.963C239.744 151.891 239.772 151.822 239.822 151.771C239.873 151.72 239.941 151.691 240.012 151.691C240.083 151.691 240.151 151.72 240.201 151.771C240.251 151.822 240.279 151.891 240.279 151.963V165.166C240.279 165.238 240.251 165.307 240.201 165.358C240.151 165.409 240.083 165.438 240.012 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M242.174 165.438C242.103 165.438 242.035 165.409 241.985 165.358C241.934 165.307 241.906 165.238 241.906 165.166V151.963C241.906 151.891 241.934 151.822 241.985 151.771C242.035 151.72 242.103 151.691 242.174 151.691C242.245 151.691 242.313 151.72 242.363 151.771C242.413 151.822 242.441 151.891 242.441 151.963V165.166C242.441 165.238 242.413 165.307 242.363 165.358C242.313 165.409 242.245 165.438 242.174 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M244.344 165.438C244.273 165.438 244.205 165.409 244.155 165.358C244.104 165.307 244.076 165.238 244.076 165.166V151.963C244.076 151.891 244.104 151.822 244.155 151.771C244.205 151.72 244.273 151.691 244.344 151.691C244.415 151.691 244.483 151.72 244.533 151.771C244.583 151.822 244.611 151.891 244.611 151.963V165.166C244.611 165.238 244.583 165.307 244.533 165.358C244.483 165.409 244.415 165.438 244.344 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M246.506 165.438C246.435 165.438 246.367 165.409 246.317 165.358C246.266 165.307 246.238 165.238 246.238 165.166V151.963C246.238 151.891 246.266 151.822 246.317 151.771C246.367 151.72 246.435 151.691 246.506 151.691C246.577 151.691 246.645 151.72 246.695 151.771C246.745 151.822 246.773 151.891 246.773 151.963V165.166C246.773 165.238 246.745 165.307 246.695 165.358C246.645 165.409 246.577 165.438 246.506 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M248.666 165.438C248.595 165.438 248.527 165.409 248.477 165.358C248.427 165.307 248.398 165.238 248.398 165.166V151.963C248.398 151.891 248.427 151.822 248.477 151.771C248.527 151.72 248.595 151.691 248.666 151.691C248.737 151.691 248.805 151.72 248.855 151.771C248.905 151.822 248.933 151.891 248.933 151.963V165.166C248.933 165.238 248.905 165.307 248.855 165.358C248.805 165.409 248.737 165.438 248.666 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M250.828 165.438C250.757 165.438 250.689 165.409 250.639 165.358C250.589 165.307 250.561 165.238 250.561 165.166V151.963C250.561 151.891 250.589 151.822 250.639 151.771C250.689 151.72 250.757 151.691 250.828 151.691C250.899 151.691 250.967 151.72 251.017 151.771C251.067 151.822 251.095 151.891 251.095 151.963V165.166C251.095 165.238 251.067 165.307 251.017 165.358C250.967 165.409 250.899 165.438 250.828 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M252.988 165.438C252.917 165.438 252.849 165.409 252.799 165.358C252.749 165.307 252.721 165.238 252.721 165.166V151.963C252.721 151.891 252.749 151.822 252.799 151.771C252.849 151.72 252.917 151.691 252.988 151.691C253.059 151.691 253.127 151.72 253.177 151.771C253.227 151.822 253.256 151.891 253.256 151.963V165.166C253.256 165.238 253.227 165.307 253.177 165.358C253.127 165.409 253.059 165.438 252.988 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M255.15 165.438C255.079 165.438 255.011 165.409 254.961 165.358C254.911 165.307 254.883 165.238 254.883 165.166V151.963C254.883 151.891 254.911 151.822 254.961 151.771C255.011 151.72 255.079 151.691 255.15 151.691C255.221 151.691 255.289 151.72 255.339 151.771C255.39 151.822 255.418 151.891 255.418 151.963V165.166C255.418 165.238 255.39 165.307 255.339 165.358C255.289 165.409 255.221 165.438 255.15 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M242.418 149.417H199.818V167.234H242.418V149.417Z"
              fill="#F8F8F8"
            />
            <path
              d="M242.418 167.778H199.818C199.676 167.778 199.54 167.721 199.44 167.619C199.34 167.517 199.283 167.378 199.283 167.234V149.416C199.283 149.272 199.34 149.134 199.44 149.032C199.54 148.93 199.676 148.872 199.818 148.872H242.418C242.56 148.872 242.696 148.93 242.796 149.032C242.897 149.134 242.953 149.272 242.953 149.416V167.234C242.953 167.378 242.897 167.517 242.796 167.619C242.696 167.721 242.56 167.778 242.418 167.778ZM200.353 166.69H241.926V149.961H200.353V166.69Z"
              fill="#2B2B2B"
            />
            <path
              d="M242.419 149.417H229.859V167.234H242.419V149.417Z"
              fill="#2B2B2B"
            />
            <path
              d="M242.419 167.778H229.859C229.717 167.778 229.581 167.721 229.481 167.619C229.381 167.517 229.324 167.378 229.324 167.234V149.416C229.324 149.272 229.381 149.134 229.481 149.032C229.581 148.93 229.717 148.872 229.859 148.872H242.419C242.561 148.872 242.697 148.93 242.797 149.032C242.897 149.134 242.954 149.272 242.954 149.416V167.234C242.954 167.378 242.897 167.517 242.797 167.619C242.697 167.721 242.561 167.778 242.419 167.778ZM230.394 166.69H241.927V149.961H230.394V166.69Z"
              fill="#2B2B2B"
            />
            <path
              d="M236.578 167.637C236.436 167.637 236.3 167.579 236.2 167.477C236.099 167.375 236.043 167.237 236.043 167.092V149.765C236.043 149.62 236.099 149.482 236.2 149.38C236.3 149.278 236.436 149.221 236.578 149.221C236.72 149.221 236.856 149.278 236.956 149.38C237.056 149.482 237.113 149.62 237.113 149.765V167.092C237.113 167.237 237.056 167.375 236.956 167.477C236.856 167.579 236.72 167.637 236.578 167.637Z"
              fill="#F8F8F8"
            />
            <path
              d="M202.131 165.438C202.06 165.438 201.992 165.409 201.942 165.358C201.891 165.307 201.863 165.238 201.863 165.166V151.963C201.863 151.891 201.891 151.822 201.942 151.771C201.992 151.72 202.06 151.691 202.131 151.691C202.202 151.691 202.27 151.72 202.32 151.771C202.37 151.822 202.398 151.891 202.398 151.963V165.166C202.398 165.238 202.37 165.307 202.32 165.358C202.27 165.409 202.202 165.438 202.131 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M204.291 165.438C204.22 165.438 204.152 165.409 204.102 165.358C204.052 165.307 204.023 165.238 204.023 165.166V151.963C204.023 151.891 204.052 151.822 204.102 151.771C204.152 151.72 204.22 151.691 204.291 151.691C204.362 151.691 204.43 151.72 204.48 151.771C204.53 151.822 204.558 151.891 204.558 151.963V165.166C204.558 165.238 204.53 165.307 204.48 165.358C204.43 165.409 204.362 165.438 204.291 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M206.451 165.438C206.38 165.438 206.312 165.409 206.262 165.358C206.212 165.307 206.184 165.238 206.184 165.166V151.963C206.184 151.891 206.212 151.822 206.262 151.771C206.312 151.72 206.38 151.691 206.451 151.691C206.522 151.691 206.59 151.72 206.64 151.771C206.69 151.822 206.719 151.891 206.719 151.963V165.166C206.719 165.238 206.69 165.307 206.64 165.358C206.59 165.409 206.522 165.438 206.451 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M208.613 165.438C208.542 165.438 208.474 165.409 208.424 165.358C208.374 165.307 208.346 165.238 208.346 165.166V151.963C208.346 151.891 208.374 151.822 208.424 151.771C208.474 151.72 208.542 151.691 208.613 151.691C208.684 151.691 208.752 151.72 208.802 151.771C208.852 151.822 208.881 151.891 208.881 151.963V165.166C208.881 165.238 208.852 165.307 208.802 165.358C208.752 165.409 208.684 165.438 208.613 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M210.773 165.438C210.702 165.438 210.634 165.409 210.584 165.358C210.534 165.307 210.506 165.238 210.506 165.166V151.963C210.506 151.891 210.534 151.822 210.584 151.771C210.634 151.72 210.702 151.691 210.773 151.691C210.844 151.691 210.912 151.72 210.962 151.771C211.013 151.822 211.041 151.891 211.041 151.963V165.166C211.041 165.238 211.013 165.307 210.962 165.358C210.912 165.409 210.844 165.438 210.773 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M212.935 165.438C212.864 165.438 212.796 165.409 212.746 165.358C212.696 165.307 212.668 165.238 212.668 165.166V151.963C212.668 151.891 212.696 151.822 212.746 151.771C212.796 151.72 212.864 151.691 212.935 151.691C213.006 151.691 213.074 151.72 213.125 151.771C213.175 151.822 213.203 151.891 213.203 151.963V165.166C213.203 165.238 213.175 165.307 213.125 165.358C213.074 165.409 213.006 165.438 212.935 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M215.096 165.438C215.025 165.438 214.957 165.409 214.906 165.358C214.856 165.307 214.828 165.238 214.828 165.166V151.963C214.828 151.891 214.856 151.822 214.906 151.771C214.957 151.72 215.025 151.691 215.096 151.691C215.167 151.691 215.235 151.72 215.285 151.771C215.335 151.822 215.363 151.891 215.363 151.963V165.166C215.363 165.238 215.335 165.307 215.285 165.358C215.235 165.409 215.167 165.438 215.096 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M217.322 165.438C217.251 165.438 217.183 165.409 217.133 165.358C217.083 165.307 217.055 165.238 217.055 165.166V151.963C217.055 151.891 217.083 151.822 217.133 151.771C217.183 151.72 217.251 151.691 217.322 151.691C217.393 151.691 217.461 151.72 217.511 151.771C217.561 151.822 217.59 151.891 217.59 151.963V165.166C217.59 165.238 217.561 165.307 217.511 165.358C217.461 165.409 217.393 165.438 217.322 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M219.461 165.438C219.39 165.438 219.322 165.409 219.272 165.358C219.222 165.307 219.193 165.238 219.193 165.166V151.963C219.193 151.891 219.222 151.822 219.272 151.771C219.322 151.72 219.39 151.691 219.461 151.691C219.532 151.691 219.6 151.72 219.65 151.771C219.7 151.822 219.728 151.891 219.728 151.963V165.166C219.728 165.238 219.7 165.307 219.65 165.358C219.6 165.409 219.532 165.438 219.461 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M221.601 165.438C221.531 165.438 221.462 165.409 221.412 165.358C221.362 165.307 221.334 165.238 221.334 165.166V151.963C221.334 151.891 221.362 151.822 221.412 151.771C221.462 151.72 221.531 151.691 221.601 151.691C221.672 151.691 221.74 151.72 221.791 151.771C221.841 151.822 221.869 151.891 221.869 151.963V165.166C221.869 165.238 221.841 165.307 221.791 165.358C221.74 165.409 221.672 165.438 221.601 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M223.74 165.438C223.669 165.438 223.601 165.409 223.551 165.358C223.501 165.307 223.473 165.238 223.473 165.166V151.963C223.473 151.891 223.501 151.822 223.551 151.771C223.601 151.72 223.669 151.691 223.74 151.691C223.811 151.691 223.879 151.72 223.929 151.771C223.979 151.822 224.008 151.891 224.008 151.963V165.166C224.008 165.238 223.979 165.307 223.929 165.358C223.879 165.409 223.811 165.438 223.74 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M225.879 165.438C225.808 165.438 225.74 165.409 225.69 165.358C225.64 165.307 225.611 165.238 225.611 165.166V151.963C225.611 151.891 225.64 151.822 225.69 151.771C225.74 151.72 225.808 151.691 225.879 151.691C225.95 151.691 226.018 151.72 226.068 151.771C226.118 151.822 226.146 151.891 226.146 151.963V165.166C226.146 165.238 226.118 165.307 226.068 165.358C226.018 165.409 225.95 165.438 225.879 165.438Z"
              fill="#2B2B2B"
            />
            <path
              d="M240.975 184.856H198.375V202.673H240.975V184.856Z"
              fill="#F8F8F8"
            />
            <path
              d="M240.975 203.217H198.375C198.233 203.217 198.097 203.16 197.997 203.058C197.896 202.956 197.84 202.817 197.84 202.673V184.888C197.84 184.744 197.896 184.606 197.997 184.504C198.097 184.401 198.233 184.344 198.375 184.344H240.975C241.117 184.344 241.253 184.401 241.353 184.504C241.453 184.606 241.51 184.744 241.51 184.888V202.706C241.502 202.844 241.442 202.975 241.342 203.07C241.243 203.165 241.111 203.218 240.975 203.217ZM198.91 202.129H240.44V185.4H198.91V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M240.985 184.856H228.426V202.673H240.985V184.856Z"
              fill="#2B2B2B"
            />
            <path
              d="M240.974 203.217H228.426C228.284 203.217 228.148 203.16 228.047 203.058C227.947 202.956 227.891 202.817 227.891 202.673V184.888C227.891 184.744 227.947 184.606 228.047 184.504C228.148 184.401 228.284 184.344 228.426 184.344H240.974C241.116 184.344 241.252 184.401 241.353 184.504C241.453 184.606 241.509 184.744 241.509 184.888V202.706C241.501 202.844 241.441 202.975 241.342 203.07C241.242 203.165 241.111 203.218 240.974 203.217ZM228.96 202.129H240.44V185.4H228.96V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M235.154 203.076C235.012 203.076 234.876 203.018 234.776 202.916C234.676 202.814 234.619 202.676 234.619 202.532V185.204C234.619 185.06 234.676 184.921 234.776 184.819C234.876 184.717 235.012 184.66 235.154 184.66C235.296 184.66 235.432 184.717 235.532 184.819C235.633 184.921 235.689 185.06 235.689 185.204V202.532C235.686 202.675 235.629 202.812 235.529 202.913C235.43 203.015 235.295 203.073 235.154 203.076Z"
              fill="#2B2B2B"
            />
            <path
              d="M200.685 200.877C200.614 200.877 200.546 200.848 200.496 200.797C200.446 200.746 200.418 200.677 200.418 200.605V187.402C200.418 187.33 200.446 187.261 200.496 187.21C200.546 187.159 200.614 187.13 200.685 187.13C200.756 187.13 200.824 187.159 200.875 187.21C200.925 187.261 200.953 187.33 200.953 187.402V200.605C200.953 200.677 200.925 200.746 200.875 200.797C200.824 200.848 200.756 200.877 200.685 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M202.846 200.877C202.775 200.877 202.707 200.848 202.656 200.797C202.606 200.746 202.578 200.677 202.578 200.605V187.402C202.578 187.33 202.606 187.261 202.656 187.21C202.707 187.159 202.775 187.13 202.846 187.13C202.917 187.13 202.985 187.159 203.035 187.21C203.085 187.261 203.113 187.33 203.113 187.402V200.605C203.113 200.677 203.085 200.746 203.035 200.797C202.985 200.848 202.917 200.877 202.846 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M205.008 200.877C204.937 200.877 204.869 200.848 204.819 200.797C204.768 200.746 204.74 200.677 204.74 200.605V187.402C204.74 187.33 204.768 187.261 204.819 187.21C204.869 187.159 204.937 187.13 205.008 187.13C205.079 187.13 205.147 187.159 205.197 187.21C205.247 187.261 205.275 187.33 205.275 187.402V200.605C205.275 200.677 205.247 200.746 205.197 200.797C205.147 200.848 205.079 200.877 205.008 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M207.18 200.877C207.109 200.877 207.041 200.848 206.99 200.797C206.94 200.746 206.912 200.677 206.912 200.605V187.402C206.912 187.33 206.94 187.261 206.99 187.21C207.041 187.159 207.109 187.13 207.18 187.13C207.25 187.13 207.319 187.159 207.369 187.21C207.419 187.261 207.447 187.33 207.447 187.402V200.605C207.447 200.677 207.419 200.746 207.369 200.797C207.319 200.848 207.25 200.877 207.18 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M209.34 200.877C209.269 200.877 209.201 200.848 209.151 200.797C209.1 200.746 209.072 200.677 209.072 200.605V187.402C209.072 187.33 209.1 187.261 209.151 187.21C209.201 187.159 209.269 187.13 209.34 187.13C209.411 187.13 209.479 187.159 209.529 187.21C209.579 187.261 209.607 187.33 209.607 187.402V200.605C209.607 200.677 209.579 200.746 209.529 200.797C209.479 200.848 209.411 200.877 209.34 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M211.502 200.877C211.431 200.877 211.363 200.848 211.313 200.797C211.263 200.746 211.234 200.677 211.234 200.605V187.402C211.234 187.33 211.263 187.261 211.313 187.21C211.363 187.159 211.431 187.13 211.502 187.13C211.573 187.13 211.641 187.159 211.691 187.21C211.741 187.261 211.769 187.33 211.769 187.402V200.605C211.769 200.677 211.741 200.746 211.691 200.797C211.641 200.848 211.573 200.877 211.502 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M213.662 200.877C213.591 200.877 213.523 200.848 213.473 200.797C213.423 200.746 213.395 200.677 213.395 200.605V187.402C213.395 187.33 213.423 187.261 213.473 187.21C213.523 187.159 213.591 187.13 213.662 187.13C213.733 187.13 213.801 187.159 213.851 187.21C213.901 187.261 213.929 187.33 213.929 187.402V200.605C213.929 200.677 213.901 200.746 213.851 200.797C213.801 200.848 213.733 200.877 213.662 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M215.824 200.877C215.753 200.877 215.685 200.848 215.635 200.797C215.585 200.746 215.557 200.677 215.557 200.605V187.402C215.557 187.33 215.585 187.261 215.635 187.21C215.685 187.159 215.753 187.13 215.824 187.13C215.895 187.13 215.963 187.159 216.013 187.21C216.063 187.261 216.092 187.33 216.092 187.402V200.605C216.092 200.677 216.063 200.746 216.013 200.797C215.963 200.848 215.895 200.877 215.824 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M217.984 200.877C217.913 200.877 217.845 200.848 217.795 200.797C217.745 200.746 217.717 200.677 217.717 200.605V187.402C217.717 187.33 217.745 187.261 217.795 187.21C217.845 187.159 217.913 187.13 217.984 187.13C218.055 187.13 218.123 187.159 218.173 187.21C218.224 187.261 218.252 187.33 218.252 187.402V200.605C218.252 200.677 218.224 200.746 218.173 200.797C218.123 200.848 218.055 200.877 217.984 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M220.146 200.877C220.075 200.877 220.007 200.848 219.957 200.797C219.907 200.746 219.879 200.677 219.879 200.605V187.402C219.879 187.33 219.907 187.261 219.957 187.21C220.007 187.159 220.075 187.13 220.146 187.13C220.217 187.13 220.285 187.159 220.335 187.21C220.386 187.261 220.414 187.33 220.414 187.402V200.605C220.414 200.677 220.386 200.746 220.335 200.797C220.285 200.848 220.217 200.877 220.146 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M222.318 200.877C222.247 200.877 222.179 200.848 222.129 200.797C222.079 200.746 222.051 200.677 222.051 200.605V187.402C222.051 187.33 222.079 187.261 222.129 187.21C222.179 187.159 222.247 187.13 222.318 187.13C222.389 187.13 222.457 187.159 222.507 187.21C222.558 187.261 222.586 187.33 222.586 187.402V200.605C222.586 200.677 222.558 200.746 222.507 200.797C222.457 200.848 222.389 200.877 222.318 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M224.478 200.877C224.407 200.877 224.339 200.848 224.289 200.797C224.239 200.746 224.211 200.677 224.211 200.605V187.402C224.211 187.33 224.239 187.261 224.289 187.21C224.339 187.159 224.407 187.13 224.478 187.13C224.549 187.13 224.617 187.159 224.668 187.21C224.718 187.261 224.746 187.33 224.746 187.402V200.605C224.746 200.677 224.718 200.746 224.668 200.797C224.617 200.848 224.549 200.877 224.478 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M274.333 184.856H231.732V202.673H274.333V184.856Z"
              fill="#F8F8F8"
            />
            <path
              d="M274.332 203.217H231.732C231.59 203.217 231.454 203.16 231.354 203.058C231.254 202.956 231.197 202.817 231.197 202.673V184.888C231.197 184.744 231.254 184.606 231.354 184.504C231.454 184.401 231.59 184.344 231.732 184.344H274.332C274.474 184.344 274.61 184.401 274.71 184.504C274.811 184.606 274.867 184.744 274.867 184.888V202.706C274.859 202.844 274.799 202.975 274.7 203.07C274.6 203.165 274.469 203.218 274.332 203.217ZM232.267 202.129H273.797V185.4H232.299L232.267 202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M274.343 184.856H261.783V202.673H274.343V184.856Z"
              fill="#2B2B2B"
            />
            <path
              d="M274.332 203.217H261.783C261.641 203.217 261.505 203.16 261.405 203.058C261.304 202.956 261.248 202.817 261.248 202.673V184.888C261.248 184.744 261.304 184.606 261.405 184.504C261.505 184.401 261.641 184.344 261.783 184.344H274.332C274.474 184.344 274.61 184.401 274.71 184.504C274.81 184.606 274.867 184.744 274.867 184.888V202.706C274.859 202.844 274.799 202.975 274.699 203.07C274.6 203.165 274.468 203.218 274.332 203.217ZM262.318 202.129H273.797V185.4H262.318V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M268.511 203.076C268.37 203.076 268.234 203.018 268.133 202.916C268.033 202.814 267.977 202.676 267.977 202.532V185.204C267.977 185.06 268.033 184.921 268.133 184.819C268.234 184.717 268.37 184.66 268.511 184.66C268.653 184.66 268.789 184.717 268.89 184.819C268.99 184.921 269.046 185.06 269.046 185.204V202.532C269.044 202.675 268.986 202.812 268.887 202.913C268.787 203.015 268.652 203.073 268.511 203.076Z"
              fill="#2B2B2B"
            />
            <path
              d="M234.043 200.877C233.972 200.877 233.904 200.848 233.854 200.797C233.804 200.746 233.775 200.677 233.775 200.605V187.402C233.775 187.33 233.804 187.261 233.854 187.21C233.904 187.159 233.972 187.13 234.043 187.13C234.114 187.13 234.182 187.159 234.232 187.21C234.282 187.261 234.31 187.33 234.31 187.402V200.605C234.31 200.677 234.282 200.746 234.232 200.797C234.182 200.848 234.114 200.877 234.043 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M236.203 200.877C236.132 200.877 236.064 200.848 236.014 200.797C235.964 200.746 235.936 200.677 235.936 200.605V187.402C235.936 187.33 235.964 187.261 236.014 187.21C236.064 187.159 236.132 187.13 236.203 187.13C236.274 187.13 236.342 187.159 236.392 187.21C236.442 187.261 236.47 187.33 236.47 187.402V200.605C236.47 200.677 236.442 200.746 236.392 200.797C236.342 200.848 236.274 200.877 236.203 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M238.363 200.877C238.292 200.877 238.224 200.848 238.174 200.797C238.124 200.746 238.096 200.677 238.096 200.605V187.402C238.096 187.33 238.124 187.261 238.174 187.21C238.224 187.159 238.292 187.13 238.363 187.13C238.434 187.13 238.502 187.159 238.552 187.21C238.602 187.261 238.631 187.33 238.631 187.402V200.605C238.631 200.677 238.602 200.746 238.552 200.797C238.502 200.848 238.434 200.877 238.363 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M240.537 200.877C240.466 200.877 240.398 200.848 240.348 200.797C240.298 200.746 240.27 200.677 240.27 200.605V187.402C240.27 187.33 240.298 187.261 240.348 187.21C240.398 187.159 240.466 187.13 240.537 187.13C240.608 187.13 240.676 187.159 240.726 187.21C240.776 187.261 240.804 187.33 240.804 187.402V200.605C240.804 200.677 240.776 200.746 240.726 200.797C240.676 200.848 240.608 200.877 240.537 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M242.697 200.877C242.626 200.877 242.558 200.848 242.508 200.797C242.458 200.746 242.43 200.677 242.43 200.605V187.402C242.43 187.33 242.458 187.261 242.508 187.21C242.558 187.159 242.626 187.13 242.697 187.13C242.768 187.13 242.836 187.159 242.886 187.21C242.936 187.261 242.965 187.33 242.965 187.402V200.605C242.965 200.677 242.936 200.746 242.886 200.797C242.836 200.848 242.768 200.877 242.697 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M244.859 200.877C244.788 200.877 244.72 200.848 244.67 200.797C244.62 200.746 244.592 200.677 244.592 200.605V187.402C244.592 187.33 244.62 187.261 244.67 187.21C244.72 187.159 244.788 187.13 244.859 187.13C244.93 187.13 244.998 187.159 245.048 187.21C245.099 187.261 245.127 187.33 245.127 187.402V200.605C245.127 200.677 245.099 200.746 245.048 200.797C244.998 200.848 244.93 200.877 244.859 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M247.019 200.877C246.948 200.877 246.88 200.848 246.83 200.797C246.78 200.746 246.752 200.677 246.752 200.605V187.402C246.752 187.33 246.78 187.261 246.83 187.21C246.88 187.159 246.948 187.13 247.019 187.13C247.09 187.13 247.158 187.159 247.209 187.21C247.259 187.261 247.287 187.33 247.287 187.402V200.605C247.287 200.677 247.259 200.746 247.209 200.797C247.158 200.848 247.09 200.877 247.019 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M249.18 200.877C249.109 200.877 249.041 200.848 248.99 200.797C248.94 200.746 248.912 200.677 248.912 200.605V187.402C248.912 187.33 248.94 187.261 248.99 187.21C249.041 187.159 249.109 187.13 249.18 187.13C249.25 187.13 249.319 187.159 249.369 187.21C249.419 187.261 249.447 187.33 249.447 187.402V200.605C249.447 200.677 249.419 200.746 249.369 200.797C249.319 200.848 249.25 200.877 249.18 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M251.342 200.877C251.271 200.877 251.203 200.848 251.153 200.797C251.102 200.746 251.074 200.677 251.074 200.605V187.402C251.074 187.33 251.102 187.261 251.153 187.21C251.203 187.159 251.271 187.13 251.342 187.13C251.413 187.13 251.481 187.159 251.531 187.21C251.581 187.261 251.609 187.33 251.609 187.402V200.605C251.609 200.677 251.581 200.746 251.531 200.797C251.481 200.848 251.413 200.877 251.342 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M253.502 200.877C253.431 200.877 253.363 200.848 253.313 200.797C253.263 200.746 253.234 200.677 253.234 200.605V187.402C253.234 187.33 253.263 187.261 253.313 187.21C253.363 187.159 253.431 187.13 253.502 187.13C253.573 187.13 253.641 187.159 253.691 187.21C253.741 187.261 253.769 187.33 253.769 187.402V200.605C253.769 200.677 253.741 200.746 253.691 200.797C253.641 200.848 253.573 200.877 253.502 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M255.674 200.877C255.603 200.877 255.535 200.848 255.485 200.797C255.434 200.746 255.406 200.677 255.406 200.605V187.402C255.406 187.33 255.434 187.261 255.485 187.21C255.535 187.159 255.603 187.13 255.674 187.13C255.745 187.13 255.813 187.159 255.863 187.21C255.913 187.261 255.941 187.33 255.941 187.402V200.605C255.941 200.677 255.913 200.746 255.863 200.797C255.813 200.848 255.745 200.877 255.674 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M257.836 200.877C257.765 200.877 257.697 200.848 257.647 200.797C257.597 200.746 257.568 200.677 257.568 200.605V187.402C257.568 187.33 257.597 187.261 257.647 187.21C257.697 187.159 257.765 187.13 257.836 187.13C257.907 187.13 257.975 187.159 258.025 187.21C258.075 187.261 258.103 187.33 258.103 187.402V200.605C258.103 200.677 258.075 200.746 258.025 200.797C257.975 200.848 257.907 200.877 257.836 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M306.78 184.856H264.18V202.673H306.78V184.856Z"
              fill="#F8F8F8"
            />
            <path
              d="M306.78 203.217H264.179C264.038 203.217 263.902 203.16 263.801 203.058C263.701 202.956 263.645 202.817 263.645 202.673V184.888C263.645 184.744 263.701 184.606 263.801 184.504C263.902 184.401 264.038 184.344 264.179 184.344H306.78C306.921 184.344 307.057 184.401 307.158 184.504C307.258 184.606 307.314 184.744 307.314 184.888V202.706C307.306 202.844 307.246 202.975 307.147 203.07C307.047 203.165 306.916 203.218 306.78 203.217ZM264.714 202.129H306.245V185.4H264.714V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M306.778 184.856H294.219V202.673H306.778V184.856Z"
              fill="#F8F8F8"
            />
            <path
              d="M306.778 203.217H294.219C294.077 203.217 293.941 203.16 293.84 203.058C293.74 202.956 293.684 202.817 293.684 202.673V184.888C293.684 184.744 293.74 184.606 293.84 184.504C293.941 184.401 294.077 184.344 294.219 184.344H306.778C306.92 184.344 307.056 184.401 307.156 184.504C307.257 184.606 307.313 184.744 307.313 184.888V202.706C307.305 202.844 307.245 202.975 307.145 203.07C307.046 203.165 306.915 203.218 306.778 203.217ZM294.753 202.129H306.243V185.4H294.753V202.129Z"
              fill="#2B2B2B"
            />
            <path
              d="M300.949 203.076C300.808 203.073 300.673 203.015 300.574 202.913C300.474 202.812 300.417 202.675 300.414 202.532V185.204C300.414 185.06 300.47 184.921 300.571 184.819C300.671 184.717 300.807 184.66 300.949 184.66C301.091 184.66 301.227 184.717 301.327 184.819C301.428 184.921 301.484 185.06 301.484 185.204V202.532C301.484 202.676 301.428 202.814 301.327 202.916C301.227 203.018 301.091 203.076 300.949 203.076Z"
              fill="#2B2B2B"
            />
            <path
              d="M266.533 200.877C266.462 200.877 266.394 200.848 266.344 200.797C266.294 200.746 266.266 200.677 266.266 200.605V187.402C266.266 187.33 266.294 187.261 266.344 187.21C266.394 187.159 266.462 187.13 266.533 187.13C266.604 187.13 266.672 187.159 266.722 187.21C266.772 187.261 266.801 187.33 266.801 187.402V200.605C266.801 200.677 266.772 200.746 266.722 200.797C266.672 200.848 266.604 200.877 266.533 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M268.672 200.877C268.601 200.877 268.533 200.848 268.483 200.797C268.432 200.746 268.404 200.677 268.404 200.605V187.402C268.404 187.33 268.432 187.261 268.483 187.21C268.533 187.159 268.601 187.13 268.672 187.13C268.743 187.13 268.811 187.159 268.861 187.21C268.911 187.261 268.939 187.33 268.939 187.402V200.605C268.939 200.677 268.911 200.746 268.861 200.797C268.811 200.848 268.743 200.877 268.672 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M270.812 200.877C270.741 200.877 270.673 200.848 270.623 200.797C270.573 200.746 270.545 200.677 270.545 200.605V187.402C270.545 187.33 270.573 187.261 270.623 187.21C270.673 187.159 270.741 187.13 270.812 187.13C270.883 187.13 270.951 187.159 271.002 187.21C271.052 187.261 271.08 187.33 271.08 187.402V200.605C271.08 200.677 271.052 200.746 271.002 200.797C270.951 200.848 270.883 200.877 270.812 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M272.951 200.877C272.88 200.877 272.812 200.848 272.762 200.797C272.712 200.746 272.684 200.677 272.684 200.605V187.402C272.684 187.33 272.712 187.261 272.762 187.21C272.812 187.159 272.88 187.13 272.951 187.13C273.022 187.13 273.09 187.159 273.14 187.21C273.19 187.261 273.219 187.33 273.219 187.402V200.605C273.219 200.677 273.19 200.746 273.14 200.797C273.09 200.848 273.022 200.877 272.951 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M275.092 200.877C275.021 200.877 274.953 200.848 274.903 200.797C274.852 200.746 274.824 200.677 274.824 200.605V187.402C274.824 187.33 274.852 187.261 274.903 187.21C274.953 187.159 275.021 187.13 275.092 187.13C275.163 187.13 275.231 187.159 275.281 187.21C275.331 187.261 275.359 187.33 275.359 187.402V200.605C275.359 200.677 275.331 200.746 275.281 200.797C275.231 200.848 275.163 200.877 275.092 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M277.295 200.877C277.224 200.877 277.156 200.848 277.106 200.797C277.056 200.746 277.027 200.677 277.027 200.605V187.402C277.027 187.33 277.056 187.261 277.106 187.21C277.156 187.159 277.224 187.13 277.295 187.13C277.366 187.13 277.434 187.159 277.484 187.21C277.534 187.261 277.562 187.33 277.562 187.402V200.605C277.562 200.677 277.534 200.746 277.484 200.797C277.434 200.848 277.366 200.877 277.295 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M279.457 200.877C279.386 200.877 279.318 200.848 279.268 200.797C279.218 200.746 279.189 200.677 279.189 200.605V187.402C279.189 187.33 279.218 187.261 279.268 187.21C279.318 187.159 279.386 187.13 279.457 187.13C279.528 187.13 279.596 187.159 279.646 187.21C279.696 187.261 279.724 187.33 279.724 187.402V200.605C279.724 200.677 279.696 200.746 279.646 200.797C279.596 200.848 279.528 200.877 279.457 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M281.627 200.877C281.556 200.877 281.488 200.848 281.438 200.797C281.388 200.746 281.359 200.677 281.359 200.605V187.402C281.359 187.33 281.388 187.261 281.438 187.21C281.488 187.159 281.556 187.13 281.627 187.13C281.698 187.13 281.766 187.159 281.816 187.21C281.866 187.261 281.894 187.33 281.894 187.402V200.605C281.894 200.677 281.866 200.746 281.816 200.797C281.766 200.848 281.698 200.877 281.627 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M283.789 200.877C283.718 200.877 283.65 200.848 283.6 200.797C283.55 200.746 283.521 200.677 283.521 200.605V187.402C283.521 187.33 283.55 187.261 283.6 187.21C283.65 187.159 283.718 187.13 283.789 187.13C283.86 187.13 283.928 187.159 283.978 187.21C284.028 187.261 284.056 187.33 284.056 187.402V200.605C284.056 200.677 284.028 200.746 283.978 200.797C283.928 200.848 283.86 200.877 283.789 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M285.949 200.877C285.878 200.877 285.81 200.848 285.76 200.797C285.71 200.746 285.682 200.677 285.682 200.605V187.402C285.682 187.33 285.71 187.261 285.76 187.21C285.81 187.159 285.878 187.13 285.949 187.13C286.02 187.13 286.088 187.159 286.138 187.21C286.188 187.261 286.217 187.33 286.217 187.402V200.605C286.217 200.677 286.188 200.746 286.138 200.797C286.088 200.848 286.02 200.877 285.949 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M288.111 200.877C288.04 200.877 287.972 200.848 287.922 200.797C287.872 200.746 287.844 200.677 287.844 200.605V187.402C287.844 187.33 287.872 187.261 287.922 187.21C287.972 187.159 288.04 187.13 288.111 187.13C288.182 187.13 288.25 187.159 288.3 187.21C288.35 187.261 288.379 187.33 288.379 187.402V200.605C288.379 200.677 288.35 200.746 288.3 200.797C288.25 200.848 288.182 200.877 288.111 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M290.271 200.877C290.2 200.877 290.132 200.848 290.082 200.797C290.032 200.746 290.004 200.677 290.004 200.605V187.402C290.004 187.33 290.032 187.261 290.082 187.21C290.132 187.159 290.2 187.13 290.271 187.13C290.342 187.13 290.41 187.159 290.46 187.21C290.511 187.261 290.539 187.33 290.539 187.402V200.605C290.539 200.677 290.511 200.746 290.46 200.797C290.41 200.848 290.342 200.877 290.271 200.877Z"
              fill="#2B2B2B"
            />
            <path
              d="M336.07 172.85C336.07 172.85 326.838 192.583 321.296 205.263C315.755 217.943 316.215 228.283 316.215 228.283H173.982C173.982 228.283 158.278 208.55 156.438 196.338H202.151L206.762 201.04H261.247L274.641 185.062C274.641 185.062 299.568 173.318 336.07 172.85Z"
              fill="#BC70C1"
            />
            <path
              d="M316.193 228.828H173.983C173.904 228.827 173.825 228.809 173.753 228.776C173.681 228.742 173.617 228.693 173.566 228.632C172.924 227.815 157.754 208.637 155.903 196.425C155.891 196.348 155.896 196.268 155.918 196.193C155.94 196.117 155.979 196.048 156.031 195.99C156.081 195.929 156.143 195.879 156.213 195.845C156.283 195.812 156.36 195.794 156.438 195.794H202.151C202.221 195.793 202.291 195.807 202.355 195.835C202.42 195.864 202.478 195.905 202.526 195.957L206.987 200.496H261.002L274.235 184.714C274.281 184.65 274.344 184.6 274.417 184.573C274.663 184.453 299.868 172.774 336.039 172.306C336.13 172.306 336.219 172.329 336.299 172.373C336.379 172.417 336.448 172.48 336.499 172.556C336.541 172.639 336.563 172.73 336.563 172.823C336.563 172.916 336.541 173.007 336.499 173.09C336.402 173.286 327.202 192.953 321.724 205.492C318.499 212.639 316.786 220.397 316.696 228.262C316.701 228.336 316.69 228.41 316.664 228.479C316.638 228.549 316.598 228.612 316.547 228.664C316.452 228.761 316.327 228.819 316.193 228.828ZM174.24 227.739H315.648C315.862 219.903 317.608 212.188 320.783 205.046C325.64 193.933 333.418 177.226 335.193 173.405C300.906 174.026 276.76 184.703 274.963 185.509L261.654 201.389C261.605 201.45 261.543 201.499 261.473 201.533C261.402 201.567 261.326 201.585 261.248 201.584H206.762C206.692 201.585 206.622 201.571 206.558 201.543C206.493 201.515 206.435 201.474 206.388 201.421L201.926 196.861H157.069C159.177 208.191 172.613 225.66 174.24 227.739Z"
              fill="#2B2B2B"
            />
            <path
              d="M346.201 184.126C346.201 184.126 341.591 175.669 336.049 172.85L321.275 205.263C321.275 205.263 315.733 219.358 316.193 228.283C316.193 228.283 321.307 212.251 328.657 205.731C336.605 198.7 345.699 189.296 346.201 184.126Z"
              fill="#2B2B2B"
            />
            <path
              d="M316.194 228.828H316.13C316.005 228.811 315.891 228.75 315.805 228.657C315.719 228.564 315.668 228.444 315.659 228.316C315.199 219.369 320.548 205.645 320.773 205.068L335.568 172.622C335.596 172.556 335.638 172.497 335.689 172.449C335.741 172.4 335.801 172.363 335.868 172.339C336.002 172.285 336.151 172.285 336.285 172.339C341.912 175.201 346.48 183.484 346.673 183.844C346.726 183.939 346.748 184.05 346.737 184.159C346.191 190.309 334.156 201.574 329.01 206.123C321.853 212.458 316.75 228.273 316.707 228.425C316.677 228.54 316.61 228.642 316.517 228.715C316.425 228.787 316.311 228.827 316.194 228.828ZM336.296 173.601L321.757 205.492C321.757 205.59 317.478 216.376 316.804 224.953C318.697 219.903 322.859 210.151 328.315 205.362C338.681 196.175 345.143 188.328 345.657 184.279C345.036 183.147 341.024 176.323 336.296 173.601Z"
              fill="#2B2B2B"
            />
            <path
              d="M261.451 200.801L261.248 201.04H245.703V205.775H261.451V200.801Z"
              fill="#2B2B2B"
            />
            <path
              d="M261.451 206.319H245.703C245.561 206.319 245.425 206.262 245.325 206.16C245.224 206.058 245.168 205.919 245.168 205.775V201.04C245.168 200.896 245.224 200.758 245.325 200.656C245.425 200.554 245.561 200.496 245.703 200.496L261.044 200.442C261.115 200.357 261.211 200.296 261.317 200.268C261.423 200.241 261.536 200.247 261.638 200.286C261.741 200.325 261.83 200.396 261.892 200.488C261.954 200.58 261.987 200.689 261.985 200.801V205.775C261.985 205.919 261.929 206.058 261.829 206.16C261.728 206.262 261.592 206.319 261.451 206.319ZM246.238 205.231H260.916V201.585H246.206L246.238 205.231Z"
              fill="#2B2B2B"
            />
            <path
              d="M222.371 201.04H206.762L206.623 200.899V205.775H222.371V201.04Z"
              fill="#2B2B2B"
            />
            <path
              d="M222.37 206.319H206.623C206.481 206.319 206.345 206.262 206.245 206.16C206.144 206.058 206.088 205.919 206.088 205.775V200.899C206.088 200.791 206.12 200.686 206.179 200.597C206.238 200.508 206.322 200.439 206.42 200.398C206.514 200.359 206.617 200.347 206.717 200.365C206.817 200.382 206.91 200.427 206.987 200.496H222.37C222.512 200.496 222.648 200.553 222.749 200.655C222.849 200.757 222.905 200.896 222.905 201.04V205.775C222.905 205.919 222.849 206.058 222.749 206.16C222.648 206.262 222.512 206.319 222.37 206.319ZM207.158 205.231H221.836V201.584H207.158V205.231Z"
              fill="#2B2B2B"
            />
            <path
              d="M241.916 201.04H226.168V205.775H241.916V201.04Z"
              fill="#2B2B2B"
            />
            <path
              d="M241.926 206.319H226.168C226.026 206.319 225.89 206.262 225.789 206.16C225.689 206.058 225.633 205.919 225.633 205.775V201.04C225.633 200.896 225.689 200.757 225.789 200.655C225.89 200.553 226.026 200.496 226.168 200.496H241.926C242.068 200.496 242.204 200.553 242.304 200.655C242.405 200.757 242.461 200.896 242.461 201.04V205.775C242.461 205.919 242.405 206.058 242.304 206.16C242.204 206.262 242.068 206.319 241.926 206.319ZM226.713 205.231H241.391V201.584H226.703L226.713 205.231Z"
              fill="#2B2B2B"
            />
            <path
              d="M167.318 219.043C170.902 224.42 173.983 228.284 173.983 228.284H316.194C316.168 225.181 316.458 222.084 317.061 219.043H167.318Z"
              fill="#2B2B2B"
            />
            <path
              d="M316.193 228.828H173.983C173.903 228.827 173.825 228.809 173.753 228.776C173.681 228.742 173.617 228.693 173.565 228.632C173.565 228.632 170.431 224.681 166.868 219.348C166.821 219.263 166.797 219.167 166.797 219.07C166.797 218.973 166.821 218.877 166.868 218.793C166.916 218.705 166.985 218.631 167.07 218.579C167.155 218.528 167.251 218.5 167.35 218.499H317.124C317.201 218.501 317.277 218.52 317.347 218.554C317.417 218.588 317.48 218.635 317.531 218.695C317.58 218.756 317.616 218.828 317.636 218.905C317.656 218.982 317.661 219.062 317.648 219.141C317.056 222.143 316.769 225.2 316.792 228.262C316.797 228.336 316.786 228.41 316.76 228.48C316.734 228.549 316.694 228.612 316.643 228.664C316.585 228.725 316.514 228.77 316.436 228.799C316.359 228.827 316.275 228.837 316.193 228.828ZM174.239 227.739H315.648C315.678 225.005 315.936 222.278 316.418 219.587H168.334C171.169 223.777 173.608 226.934 174.239 227.739Z"
              fill="#2B2B2B"
            />
            <path
              d="M241.702 128.334H168.088V130.239H241.702V128.334Z"
              fill="#F8F8F8"
            />
            <path
              d="M241.702 130.783H168.109C167.967 130.783 167.831 130.726 167.731 130.624C167.631 130.521 167.574 130.383 167.574 130.239V128.29C167.574 128.146 167.631 128.008 167.731 127.906C167.831 127.804 167.967 127.746 168.109 127.746H241.723C241.865 127.746 242.001 127.804 242.101 127.906C242.202 128.008 242.258 128.146 242.258 128.29V130.195C242.264 130.272 242.254 130.349 242.229 130.422C242.203 130.495 242.163 130.561 242.11 130.617C242.058 130.672 241.994 130.716 241.924 130.744C241.853 130.773 241.778 130.786 241.702 130.783ZM168.623 129.694H241.167V128.878H168.623V129.694Z"
              fill="#2B2B2B"
            />
            <path
              d="M172.142 134.581C172 134.581 171.864 134.524 171.764 134.422C171.664 134.32 171.607 134.182 171.607 134.037V130.239C171.607 130.094 171.664 129.956 171.764 129.854C171.864 129.752 172 129.694 172.142 129.694C172.284 129.694 172.42 129.752 172.521 129.854C172.621 129.956 172.677 130.094 172.677 130.239V134.037C172.677 134.182 172.621 134.32 172.521 134.422C172.42 134.524 172.284 134.581 172.142 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M178.07 134.581C177.928 134.581 177.792 134.524 177.692 134.422C177.592 134.32 177.535 134.182 177.535 134.037V130.239C177.535 130.094 177.592 129.956 177.692 129.854C177.792 129.752 177.928 129.694 178.07 129.694C178.212 129.694 178.348 129.752 178.448 129.854C178.549 129.956 178.605 130.094 178.605 130.239V134.037C178.605 134.182 178.549 134.32 178.448 134.422C178.348 134.524 178.212 134.581 178.07 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M183.996 134.581C183.854 134.581 183.718 134.524 183.618 134.422C183.517 134.32 183.461 134.182 183.461 134.037V130.239C183.461 130.094 183.517 129.956 183.618 129.854C183.718 129.752 183.854 129.694 183.996 129.694C184.138 129.694 184.274 129.752 184.374 129.854C184.474 129.956 184.531 130.094 184.531 130.239V134.037C184.531 134.182 184.474 134.32 184.374 134.422C184.274 134.524 184.138 134.581 183.996 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M189.924 134.581C189.782 134.581 189.646 134.524 189.545 134.422C189.445 134.32 189.389 134.182 189.389 134.037V130.239C189.389 130.094 189.445 129.956 189.545 129.854C189.646 129.752 189.782 129.694 189.924 129.694C190.065 129.694 190.202 129.752 190.302 129.854C190.402 129.956 190.458 130.094 190.458 130.239V134.037C190.458 134.182 190.402 134.32 190.302 134.422C190.202 134.524 190.065 134.581 189.924 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M195.849 134.581C195.707 134.581 195.571 134.524 195.471 134.422C195.371 134.32 195.314 134.182 195.314 134.037V130.239C195.314 130.094 195.371 129.956 195.471 129.854C195.571 129.752 195.707 129.694 195.849 129.694C195.991 129.694 196.127 129.752 196.228 129.854C196.328 129.956 196.384 130.094 196.384 130.239V134.037C196.384 134.182 196.328 134.32 196.228 134.422C196.127 134.524 195.991 134.581 195.849 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M201.777 134.581C201.635 134.581 201.499 134.524 201.399 134.422C201.299 134.32 201.242 134.182 201.242 134.037V130.239C201.242 130.094 201.299 129.956 201.399 129.854C201.499 129.752 201.635 129.694 201.777 129.694C201.919 129.694 202.055 129.752 202.155 129.854C202.256 129.956 202.312 130.094 202.312 130.239V134.037C202.312 134.182 202.256 134.32 202.155 134.422C202.055 134.524 201.919 134.581 201.777 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M207.693 134.581C207.551 134.581 207.415 134.524 207.315 134.422C207.215 134.32 207.158 134.182 207.158 134.037V130.239C207.158 130.094 207.215 129.956 207.315 129.854C207.415 129.752 207.551 129.694 207.693 129.694C207.835 129.694 207.971 129.752 208.071 129.854C208.172 129.956 208.228 130.094 208.228 130.239V134.037C208.228 134.182 208.172 134.32 208.071 134.422C207.971 134.524 207.835 134.581 207.693 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M213.631 134.581C213.489 134.581 213.353 134.524 213.252 134.422C213.152 134.32 213.096 134.182 213.096 134.037V130.239C213.096 130.094 213.152 129.956 213.252 129.854C213.353 129.752 213.489 129.694 213.631 129.694C213.772 129.694 213.909 129.752 214.009 129.854C214.109 129.956 214.166 130.094 214.166 130.239V134.037C214.166 134.182 214.109 134.32 214.009 134.422C213.909 134.524 213.772 134.581 213.631 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M219.556 134.581C219.415 134.581 219.278 134.524 219.178 134.422C219.078 134.32 219.021 134.182 219.021 134.037V130.239C219.021 130.094 219.078 129.956 219.178 129.854C219.278 129.752 219.415 129.694 219.556 129.694C219.698 129.694 219.834 129.752 219.935 129.854C220.035 129.956 220.091 130.094 220.091 130.239V134.037C220.091 134.182 220.035 134.32 219.935 134.422C219.834 134.524 219.698 134.581 219.556 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M225.795 134.581C225.653 134.581 225.517 134.524 225.416 134.422C225.316 134.32 225.26 134.182 225.26 134.037V130.239C225.26 130.094 225.316 129.956 225.416 129.854C225.517 129.752 225.653 129.694 225.795 129.694C225.937 129.694 226.073 129.752 226.173 129.854C226.273 129.956 226.33 130.094 226.33 130.239V134.037C226.33 134.182 226.273 134.32 226.173 134.422C226.073 134.524 225.937 134.581 225.795 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M232.031 134.581C231.889 134.581 231.753 134.524 231.653 134.422C231.552 134.32 231.496 134.182 231.496 134.037V130.239C231.496 130.094 231.552 129.956 231.653 129.854C231.753 129.752 231.889 129.694 232.031 129.694C232.173 129.694 232.309 129.752 232.409 129.854C232.51 129.956 232.566 130.094 232.566 130.239V134.037C232.566 134.182 232.51 134.32 232.409 134.422C232.309 134.524 232.173 134.581 232.031 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M238.267 134.581C238.125 134.581 237.989 134.524 237.889 134.422C237.789 134.32 237.732 134.182 237.732 134.037V130.239C237.732 130.094 237.789 129.956 237.889 129.854C237.989 129.752 238.125 129.694 238.267 129.694C238.409 129.694 238.545 129.752 238.646 129.854C238.746 129.956 238.802 130.094 238.802 130.239V134.037C238.802 134.182 238.746 134.32 238.646 134.422C238.545 134.524 238.409 134.581 238.267 134.581Z"
              fill="#2B2B2B"
            />
            <path
              d="M213.631 117.853H173.705V121.978H213.631V117.853Z"
              fill="#F8F8F8"
            />
            <path
              d="M213.63 122.533H173.705C173.563 122.533 173.427 122.475 173.327 122.373C173.226 122.271 173.17 122.133 173.17 121.989V117.853C173.17 117.708 173.226 117.57 173.327 117.468C173.427 117.366 173.563 117.308 173.705 117.308H213.63C213.772 117.308 213.908 117.366 214.009 117.468C214.109 117.57 214.165 117.708 214.165 117.853V121.989C214.165 122.133 214.109 122.271 214.009 122.373C213.908 122.475 213.772 122.533 213.63 122.533ZM174.24 121.444H213.095V118.397H174.24V121.444Z"
              fill="#2B2B2B"
            />
            <path
              d="M213.631 117.853H185.869V121.978H213.631V117.853Z"
              fill="#2B2B2B"
            />
            <path
              d="M213.629 122.533H185.814C185.672 122.533 185.536 122.475 185.436 122.373C185.336 122.271 185.279 122.133 185.279 121.989V117.853C185.279 117.708 185.336 117.57 185.436 117.468C185.536 117.366 185.672 117.308 185.814 117.308H213.629C213.771 117.308 213.907 117.366 214.008 117.468C214.108 117.57 214.164 117.708 214.164 117.853V121.989C214.164 122.133 214.108 122.271 214.008 122.373C213.907 122.475 213.771 122.533 213.629 122.533ZM186.403 121.444H213.148V118.397H186.403V121.444Z"
              fill="#2B2B2B"
            />
            <path
              d="M306.213 331.955C306.213 331.955 284.41 324.336 270.513 315.52C256.617 306.704 247.213 303.286 242.324 304.048C237.435 304.81 226.533 304.81 218.649 306.345C210.764 307.88 205.811 309.403 204.367 313.224C202.922 317.044 209.256 327.754 217.14 330.051C225.025 332.347 240.858 343.046 240.858 343.046C240.858 343.046 172.09 409.962 174.722 416.841C177.354 423.72 207.416 451.671 211.545 452.019C215.675 452.367 277.692 432.895 281.447 432.133C289.823 430.23 297.809 426.856 305.047 422.164C309.938 418.974 314.476 415.256 318.58 411.073L349.776 397.304L314.472 328.102L306.213 331.955Z"
              fill="#F8F8F8"
            />
            <path
              d="M211.61 452.563H211.46C206.635 452.128 176.669 423.578 174.177 417.048C171.545 410.169 230.952 351.928 239.97 343.133C237.093 341.229 223.923 332.587 217.001 330.584C211.652 329.028 207.095 323.847 204.955 319.406C203.682 316.761 203.297 314.497 203.885 313.028C205.458 309.055 210.304 307.433 218.563 305.812C223.724 304.968 228.928 304.434 234.151 304.212C237.467 304.005 240.334 303.82 242.26 303.515C247.662 302.666 257.537 306.671 270.813 315.063C283.801 323.281 303.977 330.584 306.203 331.389L314.28 327.656C314.405 327.602 314.547 327.597 314.675 327.644C314.804 327.69 314.911 327.784 314.975 327.906L350.279 397.108C350.311 397.176 350.327 397.251 350.327 397.326C350.327 397.401 350.311 397.475 350.279 397.544C350.254 397.613 350.216 397.677 350.166 397.731C350.116 397.785 350.057 397.829 349.99 397.859L318.955 411.562C314.829 415.722 310.29 419.435 305.411 422.642C298.078 427.372 289.99 430.764 281.511 432.667C280.324 432.906 272.953 435.137 263.624 437.956C238.109 445.652 214.947 452.563 211.61 452.563ZM243.757 304.538C243.306 304.536 242.856 304.569 242.409 304.636C240.43 304.952 237.542 305.126 234.204 305.344C229.025 305.56 223.862 306.09 218.745 306.933C210.807 308.467 206.239 309.969 204.838 313.463C204.388 314.606 204.838 316.663 205.907 318.96C207.94 323.183 212.251 328.102 217.28 329.572C225.164 331.857 240.462 342.197 241.104 342.633C241.172 342.678 241.229 342.739 241.27 342.811C241.311 342.883 241.335 342.964 241.34 343.046C241.35 343.127 241.34 343.208 241.312 343.284C241.284 343.36 241.239 343.428 241.179 343.482C213.642 370.279 173.331 411.889 175.161 416.689C177.803 423.578 207.705 451.159 211.535 451.518C214.188 451.758 244.945 442.495 263.292 436.955C273.017 434.016 280.046 431.894 281.287 431.644C289.614 429.757 297.558 426.421 304.769 421.783C309.612 418.605 314.112 414.917 318.195 410.779C318.249 410.726 318.31 410.682 318.377 410.648L349.07 397.13L314.237 328.897L306.427 332.51C306.365 332.538 306.297 332.552 306.229 332.552C306.161 332.552 306.094 332.538 306.031 332.51C305.818 332.434 284.025 324.75 270.225 316.021C258.414 308.511 249.128 304.484 243.757 304.484V304.538Z"
              fill="#2B2B2B"
            />
            <path
              d="M274.568 396.281C274.568 396.281 290.423 410.67 292.145 416.787C293.117 420.819 292.969 425.047 291.718 428.999L281.404 432.133L274.568 396.281Z"
              fill="#2B2B2B"
            />
            <path
              d="M281.405 432.678C281.307 432.68 281.21 432.653 281.126 432.601C281.003 432.518 280.915 432.389 280.88 432.242L274.023 396.379C274.002 396.267 274.017 396.15 274.065 396.047C274.112 395.944 274.191 395.858 274.289 395.803C274.388 395.747 274.5 395.725 274.612 395.738C274.724 395.752 274.828 395.801 274.911 395.878C275.563 396.466 290.958 410.441 292.648 416.634C293.662 420.777 293.51 425.125 292.21 429.184C292.179 429.263 292.131 429.334 292.07 429.393C292.009 429.451 291.936 429.495 291.857 429.521L281.554 432.656L281.405 432.678ZM275.392 397.783L281.811 431.437L291.279 428.553C292.423 424.78 292.541 420.763 291.621 416.928C290.252 412.009 279.094 401.255 275.392 397.783Z"
              fill="#2B2B2B"
            />
            <path
              d="M323.875 351.786L338.446 401.516L349.807 397.337L323.875 351.786Z"
              fill="#2B2B2B"
            />
            <path
              d="M338.447 402.06C338.364 402.059 338.283 402.037 338.211 401.995C338.146 401.962 338.087 401.917 338.04 401.86C337.992 401.804 337.956 401.739 337.933 401.668L323.362 351.939C323.329 351.812 323.341 351.677 323.397 351.56C323.453 351.442 323.55 351.348 323.668 351.297C323.786 351.245 323.919 351.239 324.042 351.278C324.164 351.318 324.269 351.402 324.336 351.514L350.268 397.064C350.299 397.136 350.316 397.214 350.316 397.293C350.316 397.372 350.299 397.45 350.268 397.522C350.241 397.597 350.199 397.665 350.143 397.721C350.088 397.778 350.021 397.821 349.947 397.848L338.586 402.028C338.541 402.045 338.494 402.056 338.447 402.06ZM325.684 356.042L338.8 400.809L349.027 397.054L325.684 356.042Z"
              fill="#2B2B2B"
            />
            <path
              d="M217.14 330.051C217.14 330.051 244.955 335.014 250.219 337.31C255.482 339.607 284.035 370.572 294.188 380.129C304.341 389.685 309.593 404.607 309.968 414.164C310.342 423.72 306.587 436.335 301.698 438.25C296.809 440.166 293.428 437.488 291.931 433.668C290.433 429.848 289.673 422.577 289.673 422.577L283.65 409.962C284.055 414.944 283.803 419.959 282.901 424.874C281.393 432.133 278.761 447.426 272.749 451.246C266.737 455.066 259.601 452.781 258.841 450.865C258.228 449.118 257.724 447.333 257.333 445.521C257.333 445.521 255.45 452.4 249.844 454.304C244.238 456.209 236.322 453.924 236.322 453.924C236.322 453.924 229.903 461.542 224.671 460.04C219.44 458.538 214.144 452.781 214.144 452.781C214.144 452.781 196.482 441.69 180.327 430.218C164.173 418.746 135.224 382.806 135.224 382.806L121.316 374.012L163.788 313.605L181.825 325.077L217.14 330.051Z"
              fill="#F8F8F8"
            />
            <path
              d="M226.116 460.792C225.574 460.794 225.034 460.721 224.512 460.574C219.387 459.083 214.38 453.837 213.813 453.205C212.669 452.476 195.552 441.679 180.029 430.664C164.334 419.53 136.327 385.016 134.882 383.22L121.05 374.513C120.986 374.474 120.931 374.422 120.889 374.36C120.846 374.298 120.817 374.228 120.804 374.153C120.781 374.005 120.816 373.853 120.9 373.729L163.339 313.322C163.417 313.208 163.536 313.13 163.67 313.103C163.804 313.077 163.942 313.104 164.056 313.18L182.018 324.554L217.226 329.507C218.36 329.713 245.159 334.513 250.39 336.81C253.932 338.355 267.347 352.124 279.168 364.271C285.266 370.529 291.022 376.45 294.52 379.737C304.47 389.108 310.075 404.139 310.471 414.142C310.846 423.622 307.091 436.716 301.859 438.762C296.403 440.939 292.884 437.674 291.407 433.864C289.931 430.055 289.268 423.633 289.118 422.73L284.314 412.651C284.476 416.783 284.171 420.921 283.405 424.983L283.02 426.855C281.426 434.789 278.741 448.068 273.017 451.714C271.293 452.792 269.364 453.484 267.357 453.745C265.35 454.006 263.312 453.829 261.377 453.227C260.753 453.087 260.162 452.822 259.639 452.449C259.116 452.075 258.67 451.6 258.328 451.05C257.9 449.843 257.543 448.611 257.259 447.361C256.296 449.603 254.113 453.412 250.016 454.805C244.881 456.547 238.088 454.936 236.504 454.522C235.402 455.774 230.695 460.792 226.116 460.792ZM122.109 373.86L135.535 382.349C135.583 382.383 135.626 382.423 135.663 382.469C135.952 382.828 164.741 418.485 180.649 429.772C196.557 441.059 214.273 452.204 214.455 452.313L214.562 452.411C214.616 452.411 219.783 458.049 224.843 459.518C229.711 460.933 235.873 453.652 235.937 453.575C236.004 453.496 236.092 453.437 236.191 453.407C236.289 453.376 236.394 453.374 236.494 453.401C236.568 453.401 244.292 455.632 249.706 453.793C255.119 451.954 256.852 445.434 256.874 445.369C256.904 445.255 256.972 445.154 257.064 445.083C257.157 445.013 257.271 444.975 257.387 444.977C257.508 444.977 257.624 445.019 257.718 445.096C257.811 445.174 257.876 445.281 257.901 445.401C258.289 447.186 258.782 448.945 259.377 450.669C259.968 451.451 260.814 451.992 261.763 452.193C263.542 452.741 265.416 452.9 267.26 452.658C269.104 452.416 270.876 451.779 272.461 450.789C277.81 447.393 280.42 434.397 281.982 426.637L282.367 424.754C283.256 419.893 283.505 414.934 283.105 410.006C283.094 409.879 283.127 409.751 283.198 409.646C283.27 409.54 283.375 409.464 283.497 409.43C283.618 409.397 283.747 409.407 283.862 409.461C283.976 409.514 284.068 409.607 284.122 409.723L290.134 422.338C290.163 422.396 290.181 422.458 290.188 422.523C290.188 422.588 290.947 429.75 292.402 433.461C293.033 435.05 295.537 440.068 301.485 437.739C305.764 436.052 309.808 424.166 309.412 414.186C309.027 404.39 303.539 389.707 293.804 380.532C290.295 377.266 284.528 371.313 278.42 365.043C267.251 353.561 253.332 339.27 249.984 337.833C244.87 335.602 217.675 330.726 217.034 330.606L181.73 325.632C181.657 325.623 181.587 325.597 181.526 325.556L163.907 314.356L122.109 373.86Z"
              fill="#2B2B2B"
            />
            <path
              d="M169.083 330.41L139.888 387.563L135.213 382.806L169.083 330.41Z"
              fill="#2B2B2B"
            />
            <path
              d="M139.888 388.107C139.749 388.108 139.614 388.053 139.514 387.955L134.839 383.198C134.75 383.11 134.695 382.994 134.681 382.869C134.667 382.744 134.697 382.618 134.764 382.512L168.634 330.105C168.711 329.99 168.828 329.909 168.961 329.879C169.094 329.848 169.234 329.871 169.351 329.942C169.471 330.011 169.559 330.124 169.597 330.259C169.635 330.393 169.62 330.537 169.554 330.66L140.359 387.813C140.322 387.889 140.268 387.956 140.201 388.007C140.134 388.058 140.056 388.092 139.974 388.107H139.888ZM135.898 382.741L139.749 386.659L163.831 339.574L135.898 382.741Z"
              fill="#2B2B2B"
            />
            <path
              d="M225.409 305.953C225.409 305.953 209.608 305.539 205.864 307.107C199.445 309.784 199.103 318.578 199.103 320.102C199.103 321.626 194.599 333.871 193.839 338.453C193.08 343.035 198.354 345.343 210.378 341.13C222.403 336.918 225.784 331.574 225.784 320.102"
              fill="#F8F8F8"
            />
            <path
              d="M199.821 343.884C197.973 344.023 196.135 343.503 194.622 342.415C194.064 341.924 193.647 341.288 193.417 340.575C193.187 339.861 193.153 339.098 193.317 338.366C194.196 334.479 195.289 330.645 196.59 326.883C197.381 324.665 198.042 322.4 198.569 320.102C198.569 319.014 198.773 309.49 205.662 306.606C209.471 305.006 224.78 305.398 225.422 305.409C225.493 305.41 225.563 305.426 225.628 305.455C225.693 305.485 225.752 305.527 225.801 305.58C225.85 305.632 225.888 305.694 225.913 305.762C225.938 305.83 225.949 305.902 225.946 305.975C225.938 306.116 225.877 306.249 225.775 306.346C225.674 306.443 225.54 306.497 225.4 306.497C225.24 306.497 209.674 306.105 206.069 307.585C199.821 310.209 199.65 319.079 199.65 320.081C199.65 320.821 198.922 323.15 197.617 327.199C196.341 330.912 195.27 334.695 194.408 338.529C194.277 339.075 194.295 339.646 194.461 340.181C194.627 340.717 194.934 341.196 195.349 341.566C197.575 343.482 202.998 343.122 210.241 340.597C221.624 336.614 225.283 331.629 225.283 320.081C225.285 319.937 225.343 319.8 225.442 319.699C225.542 319.597 225.677 319.539 225.818 319.536C225.96 319.536 226.096 319.594 226.196 319.696C226.296 319.798 226.353 319.936 226.353 320.081C226.353 332.216 222.523 337.495 210.583 341.631C207.137 342.962 203.504 343.723 199.821 343.884Z"
              fill="#2B2B2B"
            />
            <path
              d="M194.973 336.32C194.875 336.322 194.779 336.295 194.695 336.244C194.585 336.179 194.502 336.077 194.46 335.955C194.419 335.832 194.423 335.699 194.47 335.58L198.985 323.727C199.016 323.628 199.081 323.543 199.167 323.487C200.926 322.265 202.987 321.567 205.115 321.474C205.73 321.441 206.345 321.544 206.917 321.775C207.489 322.006 208.006 322.36 208.432 322.812C209.555 324.064 210.015 326.078 209.779 328.94C209.732 329.642 209.54 330.325 209.215 330.946C208.891 331.566 208.441 332.111 207.897 332.543C205.81 334.274 202.227 334.72 199.787 334.415C198.971 334.327 198.146 334.436 197.38 334.735C196.614 335.034 195.928 335.514 195.38 336.135C195.328 336.192 195.265 336.239 195.195 336.27C195.126 336.302 195.05 336.319 194.973 336.32ZM199.916 324.282L196.182 334.078C197.311 333.404 198.628 333.129 199.926 333.294C202.141 333.577 205.383 333.185 207.223 331.661C207.654 331.321 208.009 330.892 208.267 330.402C208.525 329.913 208.68 329.374 208.72 328.821C208.924 326.317 208.56 324.532 207.651 323.52C207.326 323.178 206.932 322.912 206.496 322.741C206.06 322.57 205.592 322.498 205.126 322.529C203.267 322.632 201.468 323.237 199.916 324.282Z"
              fill="#2B2B2B"
            />
            <path
              d="M283.652 410.507C283.534 410.506 283.421 410.466 283.328 410.393C283.235 410.321 283.168 410.219 283.138 410.104C283.138 410.104 281.726 405.38 270.097 391.601C268.004 388.933 266.25 386.008 264.876 382.893C264.32 381.74 263.806 380.651 263.272 379.737C263.202 379.611 263.185 379.463 263.223 379.324C263.261 379.185 263.352 379.068 263.475 378.997C263.597 378.925 263.742 378.906 263.878 378.943C264.014 378.979 264.131 379.069 264.202 379.193C264.737 380.14 265.272 381.239 265.839 382.458C267.175 385.489 268.878 388.337 270.91 390.937C282.785 405.032 284.122 409.69 284.165 409.875C284.186 409.945 284.193 410.017 284.185 410.09C284.178 410.162 284.156 410.231 284.121 410.295C284.086 410.358 284.038 410.413 283.982 410.457C283.925 410.501 283.86 410.533 283.791 410.55L283.652 410.507Z"
              fill="#2B2B2B"
            />
            <path
              d="M262.479 377.734C262.384 377.734 262.29 377.709 262.208 377.662C262.125 377.614 262.056 377.545 262.008 377.462L260.649 375.046C260.607 374.985 260.585 374.913 260.585 374.839L259.825 367.22C259.816 367.077 259.861 366.935 259.95 366.824C260.039 366.713 260.167 366.64 260.307 366.621C260.448 366.609 260.589 366.653 260.699 366.745C260.809 366.836 260.879 366.968 260.895 367.111L261.633 374.643L262.939 376.95C263.009 377.076 263.029 377.226 262.993 377.366C262.957 377.506 262.868 377.627 262.746 377.701C262.66 377.733 262.569 377.744 262.479 377.734Z"
              fill="#2B2B2B"
            />
            <path
              d="M257.355 446.109C257.253 446.11 257.152 446.081 257.066 446.026C256.979 445.971 256.909 445.892 256.866 445.798C256.822 445.704 256.805 445.6 256.818 445.496C256.831 445.393 256.872 445.296 256.938 445.216C258.243 443.562 259.837 434.648 257.665 431.328C255.493 428.008 240.602 398.501 239.97 397.25C239.933 397.179 239.911 397.101 239.906 397.021L239.532 387.846C239.529 387.774 239.54 387.703 239.564 387.636C239.588 387.568 239.625 387.507 239.673 387.454C239.721 387.402 239.778 387.359 239.842 387.329C239.906 387.299 239.975 387.282 240.045 387.28C240.186 387.277 240.323 387.329 240.427 387.427C240.531 387.524 240.593 387.659 240.602 387.802L240.976 396.858C241.971 398.85 256.403 427.453 258.553 430.729C260.917 434.332 259.473 443.79 257.772 445.902C257.722 445.965 257.658 446.017 257.586 446.053C257.514 446.088 257.435 446.108 257.355 446.109Z"
              fill="#2B2B2B"
            />
            <path
              d="M236.313 454.468C236.176 454.468 236.045 454.415 235.945 454.32C235.846 454.225 235.786 454.095 235.778 453.956C235.778 453.837 234.965 441.81 229.123 434.365C226.836 431.337 224.742 428.163 222.854 424.863C222.816 424.802 222.79 424.734 222.779 424.662C222.767 424.591 222.77 424.518 222.787 424.448C222.804 424.377 222.835 424.311 222.877 424.254C222.92 424.196 222.974 424.148 223.036 424.112C223.157 424.04 223.301 424.018 223.437 424.053C223.573 424.088 223.69 424.175 223.764 424.297C225.631 427.557 227.703 430.691 229.969 433.679C236.013 441.374 236.815 453.369 236.847 453.869C236.852 453.941 236.842 454.012 236.819 454.08C236.796 454.148 236.761 454.21 236.714 454.264C236.667 454.317 236.61 454.361 236.547 454.392C236.484 454.424 236.415 454.442 236.345 454.446L236.313 454.468Z"
              fill="#2B2B2B"
            />
            <path
              d="M221.302 421.641C221.207 421.642 221.113 421.618 221.031 421.57C220.948 421.522 220.879 421.453 220.832 421.369C217.836 416.014 215.557 411.388 215.536 411.345C215.502 411.27 215.483 411.188 215.482 411.105V406.131C215.482 405.987 215.539 405.848 215.639 405.746C215.739 405.644 215.875 405.587 216.017 405.587C216.159 405.587 216.295 405.644 216.396 405.746C216.496 405.848 216.552 405.987 216.552 406.131V410.975C216.916 411.715 219.034 415.97 221.762 420.77C221.832 420.898 221.85 421.048 221.812 421.188C221.774 421.329 221.683 421.448 221.559 421.521C221.485 421.584 221.397 421.625 221.302 421.641Z"
              fill="#2B2B2B"
            />
            <path
              d="M155.273 410.626C155.273 410.626 146.233 408.014 143.698 404.749C141.162 401.483 140.071 390.915 139.889 387.595C139.707 384.276 137.75 380.956 141.697 379.486C145.645 378.017 150.951 382.436 152.941 386.866C154.931 391.296 155.081 397.369 155.081 398.294C155.081 399.22 158.162 404.194 158.162 404.194C158.162 404.194 161.093 409.886 155.273 410.626Z"
              fill="#F8F8F8"
            />
            <path
              d="M155.273 411.17H155.134C154.76 411.062 145.87 408.493 143.249 405.075C140.146 401.015 139.344 387.748 139.333 387.661C139.271 386.881 139.16 386.107 139.002 385.342C138.552 382.969 138.049 380.281 141.494 379.008C145.645 377.473 151.208 381.783 153.401 386.627C155.594 391.47 155.648 398.218 155.648 398.218C156.463 400.188 157.47 402.07 158.654 403.834C158.729 403.998 160.141 406.828 159.029 408.972C158.647 409.62 158.11 410.159 157.469 410.54C156.827 410.92 156.101 411.13 155.359 411.149L155.273 411.17ZM143.345 379.715C142.846 379.711 142.35 379.796 141.879 379.965C139.419 380.88 139.579 382.425 140.071 385.07C140.245 385.884 140.363 386.71 140.424 387.541C140.649 391.764 141.858 401.429 144.115 404.39C146.373 407.35 154.332 409.766 155.338 410.071C155.885 410.056 156.421 409.907 156.9 409.636C157.379 409.365 157.786 408.98 158.087 408.515C158.943 406.86 157.734 404.444 157.723 404.411C156.793 402.92 154.578 399.241 154.578 398.262C154.578 398.196 154.578 391.731 152.438 387.051C150.748 383.263 146.715 379.715 143.345 379.715Z"
              fill="#2B2B2B"
            />
            <path
              d="M140.937 394.594C140.937 394.594 144.147 397.859 146.49 397.696C148.832 397.533 147.206 389.478 147.206 389.478C145.551 389.059 144.016 388.25 142.724 387.116C141.655 386.141 140.641 385.105 139.686 384.014L140.937 394.594Z"
              fill="#F8F8F8"
            />
            <path
              d="M146.308 398.218C143.794 398.218 140.691 395.095 140.552 394.953C140.476 394.863 140.424 394.754 140.403 394.637L139.151 384.069C139.136 383.953 139.158 383.836 139.214 383.734C139.27 383.632 139.357 383.551 139.461 383.503C139.566 383.454 139.683 383.441 139.795 383.467C139.907 383.493 140.008 383.555 140.082 383.644C141.031 384.712 142.035 385.73 143.088 386.692C144.318 387.776 145.785 388.545 147.367 388.934C147.467 388.96 147.558 389.013 147.629 389.088C147.701 389.163 147.751 389.257 147.774 389.359C147.913 390.012 149.015 395.78 147.667 397.598C147.542 397.773 147.382 397.919 147.198 398.026C147.013 398.133 146.808 398.199 146.597 398.218H146.308ZM141.44 394.311C142.403 395.247 144.832 397.228 146.447 397.13C146.514 397.122 146.578 397.1 146.635 397.064C146.693 397.028 146.742 396.98 146.779 396.923C147.538 395.9 147.185 392.21 146.779 389.903C145.164 389.439 143.669 388.618 142.403 387.497C141.59 386.746 140.938 386.093 140.435 385.582L141.44 394.311Z"
              fill="#2B2B2B"
            />
            <path
              d="M172.154 428.694C172.154 428.694 162.526 430.718 160.194 427.399C157.861 424.079 153.122 410.8 153.304 406.196C153.486 401.592 165.446 390.338 171.427 385.723C177.407 381.108 181.215 379.639 184.842 381.848C188.469 384.058 191.368 386.833 190.287 390.697C189.207 394.561 180.499 411.17 179.044 414.12C177.589 417.07 176.144 427.399 176.144 427.399L172.154 428.694Z"
              fill="#F8F8F8"
            />
            <path
              d="M166.302 429.848C163.692 429.848 160.953 429.402 159.755 427.725C157.37 424.351 152.577 411.051 152.769 406.175C152.962 401.299 165.008 389.99 171.106 385.288C176.68 381 180.959 378.844 185.121 381.38C188.17 383.253 192.085 386.257 190.801 390.85C189.913 393.995 184.222 405.152 181.173 411.149C180.413 412.629 179.825 413.772 179.536 414.414C178.135 417.255 176.701 427.475 176.68 427.475C176.669 427.578 176.629 427.675 176.564 427.754C176.5 427.834 176.413 427.892 176.316 427.921L172.326 429.217H172.272C170.305 429.611 168.307 429.822 166.302 429.848ZM181.408 381.391C178.937 381.391 175.974 382.904 171.78 386.159C165.618 390.904 154.032 401.984 153.871 406.218C153.689 410.822 158.397 423.894 160.654 427.083C162.419 429.565 169.448 428.716 172.047 428.172L175.695 426.985C175.963 425.146 177.257 416.602 178.595 413.924L180.242 410.659C183.28 404.705 188.95 393.614 189.796 390.578C190.641 387.541 189.036 385.048 184.596 382.338C183.643 381.722 182.538 381.394 181.408 381.391Z"
              fill="#2B2B2B"
            />
            <path
              d="M168.528 388.858C168.528 388.858 164.537 392.733 166.538 395.682C168.538 398.632 173.609 401.396 175.781 400.656C177.953 399.916 185.024 392.363 186.297 389.968C187.57 387.573 179.771 381.848 179.771 381.848C175.513 383.207 171.651 385.615 168.528 388.858Z"
              fill="#F8F8F8"
            />
            <path
              d="M174.969 401.32C172.209 401.32 167.834 398.556 166.1 395.987C163.897 392.722 167.887 388.738 168.155 388.477C171.329 385.15 175.277 382.69 179.634 381.326C179.71 381.305 179.79 381.302 179.868 381.317C179.946 381.332 180.019 381.365 180.083 381.413C181.452 382.414 188.182 387.541 186.769 390.218C185.357 392.896 178.318 400.373 175.954 401.179C175.635 401.278 175.303 401.325 174.969 401.32ZM179.666 382.447C175.604 383.814 171.92 386.142 168.914 389.239C168.914 389.239 165.277 392.83 166.988 395.366C168.989 398.327 173.857 400.743 175.622 400.134C177.387 399.524 184.566 392.101 185.839 389.696C186.523 388.422 182.64 384.667 179.666 382.447Z"
              fill="#2B2B2B"
            />
            <path
              d="M187.86 442.843C187.86 442.843 177.365 445.02 174.787 441.439C172.209 437.858 167.073 423.306 167.298 418.267C167.523 413.227 180.564 400.939 187.1 395.911C193.637 390.882 197.799 389.26 201.757 391.677C205.715 394.093 208.882 397.119 207.694 401.342C206.507 405.565 196.996 423.709 195.424 426.931C193.851 430.152 192.214 441.439 192.214 441.439L187.86 442.843Z"
              fill="#F8F8F8"
            />
            <path
              d="M181.462 444.106C178.616 444.106 175.642 443.616 174.358 441.799C171.812 438.218 166.527 423.48 166.73 418.289C166.934 413.097 180.082 400.645 186.747 395.519C192.812 390.839 197.445 388.499 202.002 391.252C205.319 393.277 209.576 396.553 208.175 401.538C207.212 404.966 200.986 417.157 197.648 423.709C196.824 425.32 196.182 426.572 195.861 427.214C194.342 430.327 192.759 441.45 192.748 441.559C192.734 441.66 192.692 441.756 192.628 441.834C192.564 441.913 192.48 441.972 192.384 442.005L188.02 443.409H187.966C185.824 443.847 183.646 444.081 181.462 444.106ZM197.969 391.165C195.262 391.165 192.01 392.82 187.388 396.379C180.649 401.581 167.982 413.696 167.8 418.332C167.608 423.372 172.753 437.673 175.225 441.189C177.161 443.91 184.853 442.985 187.731 442.386L191.732 441.091C192.021 439.143 193.444 429.739 194.941 426.757C195.262 426.104 195.893 424.852 196.728 423.23C200.055 416.7 206.249 404.585 207.18 401.266C208.111 397.946 206.346 395.182 201.478 392.21C200.429 391.532 199.212 391.17 197.969 391.165Z"
              fill="#2B2B2B"
            />
            <path
              d="M183.902 399.372C183.902 399.372 179.548 403.606 181.763 406.828C183.977 410.049 189.487 413.075 191.862 412.27C194.237 411.464 201.961 403.203 203.352 400.58C204.742 397.957 196.227 391.72 196.227 391.72C191.557 393.189 187.322 395.819 183.902 399.372Z"
              fill="#F8F8F8"
            />
            <path
              d="M190.919 412.944C187.923 412.944 183.173 409.93 181.291 407.132C178.916 403.617 183.248 399.263 183.537 398.991C187.006 395.37 191.308 392.688 196.054 391.187C196.131 391.168 196.21 391.166 196.288 391.181C196.365 391.196 196.439 391.228 196.503 391.274C197.99 392.362 205.319 397.946 203.789 400.841C202.345 403.573 194.578 411.91 192.021 412.814C191.663 412.919 191.291 412.964 190.919 412.944ZM196.075 392.319C191.626 393.807 187.592 396.356 184.307 399.753C184.307 399.753 180.306 403.704 182.168 406.512C184.2 409.527 189.528 412.466 191.657 411.736C193.786 411.007 201.403 403.029 202.837 400.319C203.618 398.839 199.424 394.811 196.075 392.319Z"
              fill="#2B2B2B"
            />
            <path
              d="M208.271 449.309C208.271 449.309 205.501 440.862 205.501 440.101C205.501 439.339 210.539 427.04 210.037 421.674C209.534 416.308 205.254 410.158 202.484 411.693C199.713 413.227 194.685 417.581 190.159 424.493C185.634 431.404 184.126 436.77 185.634 439.328C187.142 441.886 196.204 451.616 199.97 453.151C203.735 454.685 211.502 452.062 211.502 452.062L208.271 449.309Z"
              fill="#F8F8F8"
            />
            <path
              d="M202.977 454.163C201.885 454.197 200.797 454.024 199.768 453.651C195.927 452.073 186.705 442.212 185.229 439.578C183.56 436.737 185.229 431.11 189.776 424.155C194.055 417.625 199.147 412.923 202.282 411.181C202.711 410.963 203.188 410.86 203.668 410.883C204.147 410.906 204.613 411.053 205.021 411.312C207.674 412.738 210.231 417.451 210.616 421.587C211.001 425.723 208.305 433.559 206.85 437.782C206.475 438.871 206.122 439.894 206.09 440.101C206.09 440.59 207.492 445.009 208.786 448.96L211.899 451.562C211.973 451.624 212.03 451.706 212.063 451.797C212.097 451.889 212.107 451.988 212.092 452.084C212.073 452.18 212.03 452.269 211.966 452.342C211.902 452.414 211.82 452.468 211.728 452.498C208.902 453.465 205.956 454.025 202.977 454.163ZM203.416 411.998C203.18 411.993 202.947 412.053 202.742 412.172C199.714 413.848 194.793 418.398 190.61 424.787C186.427 431.176 184.662 436.618 186.095 439.056C187.529 441.494 196.526 451.159 200.206 452.639C202.999 453.782 208.294 452.432 210.434 451.79L207.963 449.733C207.888 449.666 207.832 449.58 207.802 449.483C207.139 447.48 204.999 440.895 204.999 440.101C205.181 439.193 205.454 438.307 205.812 437.456C207.139 433.614 209.899 425.636 209.535 421.728C209.171 417.821 206.829 413.565 204.496 412.302C204.166 412.113 203.795 412.009 203.416 411.998Z"
              fill="#2B2B2B"
            />
            <path
              d="M190.662 426.789C190.662 426.789 193.936 428.835 196.204 428.835C198.472 428.835 204.249 423.47 203.992 418.093C203.735 412.716 200.472 414 200.472 414C200.472 414 191.646 420.651 190.662 426.789Z"
              fill="#F8F8F8"
            />
            <path
              d="M196.194 429.38C193.808 429.38 190.524 427.344 190.385 427.257C190.296 427.198 190.226 427.115 190.182 427.016C190.138 426.918 190.123 426.809 190.139 426.702C191.208 420.422 199.767 413.837 200.152 413.565L200.28 413.489C200.694 413.344 201.133 413.294 201.567 413.341C202.002 413.388 202.421 413.531 202.795 413.761C203.864 414.468 204.431 415.938 204.528 418.115C204.709 421.989 202.046 425.276 200.89 426.506C199.221 428.237 197.381 429.38 196.194 429.38ZM191.262 426.517C192.764 427.456 194.445 428.061 196.194 428.291C196.943 428.291 198.526 427.41 200.109 425.712C201.133 424.728 201.955 423.549 202.53 422.242C203.104 420.934 203.42 419.525 203.458 418.093C203.383 416.341 202.944 415.154 202.217 414.664C201.997 414.525 201.751 414.435 201.494 414.401C201.238 414.367 200.977 414.39 200.73 414.468C199.938 415.1 192.449 421.075 191.262 426.517Z"
              fill="#2B2B2B"
            />
            <path
              d="M311.498 325.664L350.29 411.105L373.569 400.885L332.948 315.912L311.498 325.664Z"
              fill="#F8F8F8"
            />
            <path
              d="M350.29 411.649C350.188 411.65 350.088 411.62 350.003 411.564C349.917 411.508 349.85 411.428 349.808 411.334L311.017 325.893C310.988 325.828 310.973 325.757 310.973 325.686C310.973 325.615 310.988 325.544 311.017 325.479C311.038 325.411 311.074 325.348 311.122 325.295C311.17 325.243 311.229 325.201 311.295 325.174L332.745 315.379C332.807 315.348 332.875 315.33 332.944 315.327C333.013 315.323 333.082 315.334 333.147 315.358C333.212 315.383 333.271 315.42 333.322 315.469C333.372 315.517 333.412 315.575 333.44 315.64L374.093 400.602C374.122 400.669 374.136 400.741 374.136 400.814C374.136 400.887 374.122 400.959 374.093 401.026C374.068 401.096 374.029 401.16 373.98 401.214C373.93 401.268 373.87 401.312 373.804 401.342L350.525 411.551C350.456 411.604 350.375 411.638 350.29 411.649ZM312.215 325.936L350.557 410.387L372.841 400.591L332.702 316.587L312.215 325.936Z"
              fill="#2B2B2B"
            />
            <path
              d="M499.464 213.35L325.191 317.305L382.812 437.096L499.464 377.886V213.35Z"
              fill="#2B2B2B"
            />
            <path
              d="M382.811 437.641H382.64C382.505 437.59 382.394 437.489 382.33 437.358L324.709 317.545C324.651 317.421 324.64 317.279 324.68 317.148C324.72 317.017 324.807 316.906 324.923 316.837L499.196 212.872C499.278 212.823 499.371 212.798 499.466 212.799C499.56 212.799 499.653 212.825 499.735 212.873C499.816 212.922 499.883 212.992 499.93 213.076C499.976 213.159 500 213.254 499.999 213.35V377.887C499.997 377.985 499.969 378.082 499.918 378.166C499.867 378.25 499.796 378.319 499.71 378.366L383.1 437.586C383.012 437.637 382.911 437.656 382.811 437.641ZM325.897 317.523L383.057 436.367L498.929 377.593V214.276L325.897 317.523Z"
              fill="#2B2B2B"
            />
            <path
              d="M175.963 319.166L123.018 402.746L102.938 392.526L158.611 308.489L175.963 319.166Z"
              fill="#F8F8F8"
            />
            <path
              d="M123.019 403.29C122.936 403.29 122.855 403.268 122.783 403.225L102.703 393.016C102.634 392.981 102.574 392.932 102.526 392.871C102.478 392.811 102.443 392.741 102.424 392.665C102.404 392.59 102.401 392.511 102.414 392.435C102.427 392.358 102.456 392.285 102.5 392.221L158.13 308.184C158.207 308.069 158.323 307.988 158.457 307.958C158.59 307.927 158.73 307.95 158.847 308.021L176.189 318.698C176.312 318.775 176.4 318.898 176.434 319.041C176.468 319.184 176.445 319.335 176.37 319.46L123.425 403.04C123.382 403.112 123.323 403.172 123.252 403.216C123.181 403.259 123.101 403.285 123.019 403.29ZM103.762 392.319L122.869 402.039L175.29 319.319L158.847 309.196L103.762 392.319Z"
              fill="#2B2B2B"
            />
            <path
              d="M0.535156 201.791V379.628L86.666 433.94L166.827 308.957L0.535156 201.791Z"
              fill="#BC70C1"
            />
            <path
              d="M86.6658 434.484C86.567 434.482 86.4707 434.452 86.3876 434.397L0.256756 380.085C0.178741 380.038 0.114069 379.971 0.0690652 379.891C0.0240609 379.811 0.000264238 379.72 0 379.628V201.791C0.00085337 201.694 0.0270203 201.598 0.0758581 201.514C0.124696 201.43 0.194476 201.36 0.278152 201.312C0.361438 201.265 0.45539 201.24 0.550955 201.24C0.646519 201.24 0.740472 201.265 0.823757 201.312L167.116 308.478C167.236 308.559 167.32 308.684 167.351 308.826C167.381 308.969 167.354 309.117 167.276 309.24L87.1151 434.234C87.0683 434.312 87.0022 434.376 86.9233 434.42C86.8445 434.464 86.7557 434.486 86.6658 434.484ZM1.08051 379.323L86.516 433.189L166.1 309.109L1.06982 202.782L1.08051 379.323Z"
              fill="#2B2B2B"
            />
          </svg>
        </div>
        <div className={style.startBorrowingRightColumn}>
          <h1>Access Anything Through Borrowing</h1>
          <p>
            Get access to a world of possibilities through borrowing. Dive into
            borrowing bliss and explore a diverse array of items tailored to
            your needs. Ready to unlock a world of access without ownership?
            Start borrowing now!
          </p>
          <PinkBtn name="Start Borrowing" />
        </div>
      </div>

      <div className={style.landingPageCTA}>
        <h1>Subscribe To Our Newsletter</h1>
        <p className={style.landingPageCTAdescription}>
          Be the first to know! Subscribe to our newsletter for exclusive
          updates on new features, community stories, and special offers. Join
          the SpareBud community and stay connected.
        </p>
        <div>
          <input className={style.landingPageCTAInput} type="text" />
          <button className={style.landingPageCTABtn}>Subscribe</button>
        </div>
        <p className={style.landingPageCTAdisclaimer}>
          Note: We respect your privacy. Your email will only be used to send
          you SpareBud newsletters and updates. You can unsubscribe at any time
        </p>
      </div>
      <SpareBudFooter />
    </div>
  );
}

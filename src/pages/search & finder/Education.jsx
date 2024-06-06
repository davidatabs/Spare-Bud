import SearchProductItem from "../../component/Search Product/search-product";
import SpareBudUserHeader from "../../component/SpareBud Header/sparebudUser-Header";
import PinkBtn from "../../component/button/PinkBTN";
import TransparentBtn from "../../component/button/TransparentBTN";
import { FitnessProducts } from "../../utils/mockData";
import style from "./search.module.css";

import React from "react";
import SpareBudFooter from "../../component/SpareBud Footer/sparebud-footer";

export default function EducationMaterials() {
  return (
    <div>
      <SpareBudUserHeader />
      <div className={style.searchUIContainer}>
        <div className={style.searchOptionContainer}>
          <div className={style.searchInputContainer}>
            <svg
              className={style.magnifierSvg}
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
              className={style.filterInput}
              placeholder="Search for anything"
            />

            <svg
              className={style.cancelSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#555555"
              />
              <path
                d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z"
                fill="#555555"
              />
              <path
                d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z"
                fill="#555555"
              />
            </svg>
          </div>

          <div className={style.filterContainer}>
            <div className={style.filterHeader}>
              <svg
                className={style.filterSvg}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                  stroke="#101828"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Filters</h3>
              <h3>(1)</h3>
            </div>

            <div className={style.filterBtnSection}>
              <div className={style.filterBtnContainer}>
                <button>
                  <p>Fitness</p>
                  <svg
                    className={style.btnArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#101828"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button>
                  <p>Sub Category</p>
                  <svg
                    className={style.btnArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#101828"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button>
                  <p>Osun</p>
                  <svg
                    className={style.btnArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#101828"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button>
                  <p>Sort</p>
                  <svg
                    className={style.btnArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#101828"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className={style.clearBtn}>
                <TransparentBtn name={"Clear Filter"} />
              </div>

              <PinkBtn name={"Apply Filter"} />
            </div>
          </div>
        </div>

        <div className={style.searchResultContainer}>
          <h1>Education Materials</h1>

          <div className={style.searchResultItem}>
            {FitnessProducts?.map((result) => {
              return <SearchProductItem product={result} />;
            })}
          </div>
        </div>
      </div>
      <SpareBudFooter />
    </div>
  );
}

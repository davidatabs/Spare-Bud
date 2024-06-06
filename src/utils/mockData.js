import React from "react";

let nairaSymbol = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none">
    <path
      d="M4.33317 13.8333V3.49996H4.6665L11.3332 13.5H11.6665V3.16663M2.6665 6.83329H13.3332M2.6665 10.1666H13.3332"
      stroke="#1E1E1E"
    />
  </svg>
);

export const SEARCH_PRODUCTS = [
  {
    img: "/assets/img/Search result pic/item1.png",
    name: "Unisex Bike",
    description: "Luxury kids bike, automatic power bike for 2 to 4years.",
    dailyPrice: [nairaSymbol, "200/day"],
    weeklyPrice: [nairaSymbol, "200/week"],
    monthlyPrice: [nairaSymbol, "200/month"],
    profileImg: "/assets/img/Search result pic/pp1.png",
  },

  {
    img: "/assets/img/Search result pic/item2.png",
    name: "Bicycle Tire Repair Kits ",
    description: "Bicycle Tire Repair Kits",
    dailyPrice: [nairaSymbol, "200/day"],
    weeklyPrice: [nairaSymbol, "1000/week"],
    monthlyPrice: [""],
    profileImg: "/assets/img/Search result pic/pp2.png",
  },

  {
    img: "/assets/img/Search result pic/item3.png",
    name: "Electric Bike",
    description:
      "It commes with a modified 12 electric kit magnetic point sensor conversion...",
    dailyPrice: [nairaSymbol, "200/day"],
    weeklyPrice: [nairaSymbol, "1000/week"],
    monthlyPrice: [nairaSymbol, "3000/month"],
    profileImg: "/assets/img/Search result pic/pp3.png",
  },

  {
    img: "/assets/img/Search result pic/item4.png",
    name: "Kids Power Bike",
    description: "Automatic power bike for kids between age 4 to 8years.",
    dailyPrice: [""],
    weeklyPrice: [nairaSymbol, "800/week"],
    monthlyPrice: [nairaSymbol, "5000/month"],
    profileImg: "/assets/img/Search result pic/pp4.png",
  },

  {
    img: "/assets/img/Search result pic/item5.png",
    name: "Bicycle Chain",
    description: "Chain cable keylock - security anti theft lock.",
    dailyPrice: [""],
    weeklyPrice: [nairaSymbol, "700/week"],
    monthlyPrice: [""],
    profileImg: "/assets/img/Search result pic/pp5.png",
  },

  {
    img: "/assets/img/Search result pic/item6.png",
    name: "Adult Bicycle",
    description:
      "Dual sport bicycle, 700c wheels, light weight aluminum frame.",
    dailyPrice: [nairaSymbol, "1000/day"],
    weeklyPrice: [nairaSymbol, "4000/week"],
    monthlyPrice: [""],
    profileImg: "/assets/img/Search result pic/pp6.png",
  },
];

export const FitnessProducts = [
  {
    img: "/assets/img/fitness Search/fit-Item1.png",
    name: "Abs Roller",
    description: "Workout device for abdominal exercises and fitness.",
    dailyPrice: [nairaSymbol, "200/day"],
    weeklyPrice: [nairaSymbol, "200/week"],
    monthlyPrice: [nairaSymbol, "200/month"],
    profileImg: "/assets/img/Search result pic/pp1.png",
  },
  {
    img: "/assets/img/fitness Search/fit-Item2.png",
    name: "Pushup Bars",
    description: "2pcs set for abs and body fitness.",
    dailyPrice: [nairaSymbol, "200/day"],
    weeklyPrice: [nairaSymbol, "200/week"],
    monthlyPrice: [nairaSymbol, "200/month"],
    profileImg: "/assets/img/Search result pic/pp2.png",
  },
  {
    img: "/assets/img/fitness Search/fit-Item3.png",
    name: "Muscle Stimulator",
    description:
      "EMS HI-EMT Muscle Build Stimulator EMSzero High Intensity Electromag...",
    dailyPrice: [nairaSymbol, "1000/day"],
    weeklyPrice: [nairaSymbol, "5000/week"],
    monthlyPrice: [""],
    profileImg: "/assets/img/Search result pic/pp2.png",
  },
  {
    img: "/assets/img/fitness Search/fit-Item4.png",
    name: "Abs Belly Wheel",
    description:
      "Automatic rebound mute abdominal exerciser training arms muscles bo...",
    dailyPrice: [],
    weeklyPrice: [nairaSymbol, "800/week"],
    monthlyPrice: [nairaSymbol, "5000/month"],
    profileImg: "/assets/img/Search result pic/pp4.png",
  },
  {
    img: "/assets/img/fitness Search/fit-Item5.png",
    name: "1kg Dumbbell",
    description: "Home use fitness gym weight hex equipment rubber.",
    dailyPrice: [nairaSymbol, "400/day"],
    weeklyPrice: [],
    monthlyPrice: [],
    profileImg: "/assets/img/Search result pic/pp5.png",
  },
  {
    img: "/assets/img/fitness Search/fit-Item6.png",
    name: "Home use treadmil",
    description:
      "Cross border supply of treadmills, gyms, home use treadmills, Bluetooth large...",
    dailyPrice: [nairaSymbol, "1000/day"],
    weeklyPrice: [nairaSymbol, "4000/week"],
    monthlyPrice: [],
    profileImg: "/assets/img/Search result pic/pp5.png",
  },
];

let nairaSymbol2 = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.33366 13.3333V2.99996H4.66699L11.3337 13H11.667V2.66663M2.66699 6.33329H13.3337M2.66699 9.66663H13.3337"
      stroke="#1E1E1E"
    />
  </svg>
);

export const ActiveItems = [
  {
    img: "/assets/img/Active-Items/active componentImg1.jpg",
    name: "Electric Oven",
    description: "Century Electric Oven for baking and grilling.",
    dailyPrice: [nairaSymbol2, "2000/day"],
    weeklyPrice: [nairaSymbol2, "7000/week"],
    monthlyPrice: [nairaSymbol2, "12,500/month"],
    forSale: [nairaSymbol2, "104,000"],
  },
];
export const LendingItems = [
  {
    img: "/assets/img/Active-Items/active componentImg1.jpg",
    name: "Electric Oven",
    description: "Century Electric Oven for baking and grilling.",
    dailyPrice: [nairaSymbol2, "2000/day"],
    weeklyPrice: [nairaSymbol2, "7000/week"],
    monthlyPrice: [nairaSymbol2, "12,500/month"],
    period: ["31 November", " - ", "6 December 2023"],
    orderNumber: "300700",
  },
];

import React from "react";

import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing page/landing-page";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgot-password/forgot-password";
import ResetPassword from "./pages/auth/reset-password/reset-password";
import SignUp from "./pages/auth/sign-up/sign-up";
import VerifyNewUser from "./pages/auth/sign-up/verify-new-user";
import HomePage from "./pages/home page/home-page";
import NewUserProfile from "./pages/profile/new-user-profile";
import Notification from "./pages/profile/notification";
import NotificationSettings from "./pages/profile/notification-settings";
import Guarantee from "./pages/sparebud inquiries/guarantee";
import SpareBudGuide from "./pages/sparebud inquiries/spareBud-guide";
import AboutUs from "./pages/sparebud inquiries/aboutUs";
import FAQ from "./pages/sparebud inquiries/FAQ";
import PrivacyPolicy from "./pages/sparebud inquiries/privacy-policy";
import Terms from "./pages/sparebud inquiries/terms";
import Search from "./pages/search & finder/search";
import SearchNoResult from "./pages/search & finder/no-result";
import FitnessSearch from "./pages/search & finder/fitness-result";
import ItemDescription from "./pages/start listing/item-description";
import Pricing from "./pages/start listing/pricing";
import Location from "./pages/start listing/location";
import Summary from "./pages/start listing/summary";
import MyItems from "./pages/activities/my-items";
import Lendings from "./pages/activities/lending";
import Borrowed from "./pages/activities/borrowed";
import Household from "./pages/search & finder/Household-Items";
import CampingGear from "./pages/search & finder/Camping-Gear";
import Vehicle from "./pages/search & finder/Vehicle";
import MusicalInstrument from "./pages/search & finder/Musical-Instrument";
import CostumesJewelries from "./pages/search & finder/Costumes";
import FarmEquipment from "./pages/search & finder/Farm-Equipments";
import EducationMaterials from "./pages/search & finder/Education";
import Games from "./pages/search & finder/Games";
import ArtSupplies from "./pages/search & finder/Art-Supplies";
import Gadgets from "./pages/search & finder/Gadgets";
import Sports from "./pages/search & finder/sports";

export const router = createBrowserRouter([
  {
    path: "/landingPage",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/verifyNewUser",
    element: <VerifyNewUser />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/NewUserProfile",
    element: <NewUserProfile />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/notificationSettings",
    element: <NotificationSettings />,
  },
  {
    path: "/Guarantee",
    element: <Guarantee />,
  },
  {
    path: "/SpareBudGuide",
    element: <SpareBudGuide />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/Terms",
    element: <Terms />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  {
    path: "/SearchNoResult",
    element: <SearchNoResult />,
  },

  {
    path: "/Sports",
    element: <Sports />,
  },
  {
    path: "/CampingGear",
    element: <CampingGear />,
  },
  {
    path: "/Vehicle",
    element: <Vehicle />,
  },
  {
    path: "/MusicalInstrument",
    element: <MusicalInstrument />,
  },
  {
    path: "/CostumesJewelries",
    element: <CostumesJewelries />,
  },
  {
    path: "/FarmEquipment",
    element: <FarmEquipment />,
  },
  {
    path: "/EducationMaterials",
    element: <EducationMaterials />,
  },
  {
    path: "/Games",
    element: <Games />,
  },
  {
    path: "/ArtSupplies",
    element: <ArtSupplies />,
  },
  {
    path: "/Household",
    element: <Household />,
  },
  {
    path: "/FitnessSearch",
    element: <FitnessSearch />,
  },
  {
    path: "/Gadgets",
    element: <Gadgets />,
  },
  {
    path: "/ItemDEscription",
    element: <ItemDescription />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
  {
    path: "/Location",
    element: <Location />,
  },
  {
    path: "/Summary",
    element: <Summary />,
  },
  {
    path: "/MyItems",
    element: <MyItems />,
  },
  {
    path: "/Lendings",
    element: <Lendings />,
  },
  {
    path: "/Borrowed",
    element: <Borrowed />,
  },
]);

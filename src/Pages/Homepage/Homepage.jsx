// import React from 'react'

import Footer from "../../components/Footer";
import AdoptNow from "./AdoptNow";
import Banner from "./Banner";
import FactBanner from "./FactBanner";
import ListAdoption from "./ListAdoption";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Banner />
        <FactBanner/>
        <AdoptNow/>
        <ListAdoption/>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;

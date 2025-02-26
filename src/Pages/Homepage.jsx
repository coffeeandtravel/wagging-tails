// import React from 'react'

import Footer from "../components/Footer";
import AdoptNow from "./Homepage/AdoptNow";
import Banner from "./Homepage/Banner";
import FactBanner from "./Homepage/FactBanner";
import ListAdoption from "./Homepage/ListAdoption";

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

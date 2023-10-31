import React from "react";
import HeroSection from "../UI/HeroSection";
import Features from "../UI/Features";
import DownloadApp from "../UI/downloadApp";
import Subcripstion from "../UI/subcripstion";
import Categories from "@/pages/categories";
import ProductFeatures from "../UI/ProductFeaturs";
import CategoriesFeatures from "../UI/CategoriesFeatues";

const IHome = ({ data, singlePcItem }) => {
  return (
    <>
      {/* <HeroSection /> */}

      <div className="mt-4">
        <CategoriesFeatures data={data} />
      </div>
      <div className=" mt-24 ">
        <ProductFeatures singlePcItem={singlePcItem} />
      </div>

      <Features />
      <div className="">
        <DownloadApp />
      </div>
      <div className="">
        <Subcripstion />
      </div>
    </>
  );
};

export default IHome;

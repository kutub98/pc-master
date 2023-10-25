import React from "react";
import HeroSection from "../UI/HeroSection";
import Features from "../UI/Features";
import DownloadApp from "../UI/downloadApp";
import Subcripstion from "../UI/subcripstion";
import CategoriesFeatues from "../UI/CategoriesFeatues";
import Categories from "@/pages/categories";
import ProductFeatures from "../UI/ProductFeaturs";

const IHome = ({ data, singlePcItem }) => {
  return (
    <div>
      <HeroSection />

      <div className="mt-4">
        <CategoriesFeatues data={data} />
      </div>
      <div className=" mt-24 ">
        <ProductFeatures singlePcItem={singlePcItem} />
      </div>

      <Features className=" mt-96" />
      <div className="">
        <DownloadApp />
      </div>
      <div className="">
        <Subcripstion />
      </div>
    </div>
  );
};

export default IHome;

// export const getStaticProps = async ()=> {
//   const data = await fetch('http://localhost:5000/categories/');
//   const result = await data.json();
//   // console.log(result)
//   return {
//     props: {
//       categories: result || null
//     }
//   }
// }

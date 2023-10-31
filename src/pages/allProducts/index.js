import ProductFeatures from "@/Components/UI/ProductFeaturs";
import axios from "axios";
import React from "react";

function ProductFeaturesIndex({ data }) {
  const AllData = data.data.map((category) => {
    const items = category.items.map((item) => ({
      singlePcItem: item,
    }));
    return { name: category.name, items: items };
  });

  return (
    <div className="">
      <ProductFeatures singlePcItem={AllData} />
    </div>
  );
}

export default ProductFeaturesIndex;

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:5000/pcItems/");
    const data = await response.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: null,
      },
    };
  }
}

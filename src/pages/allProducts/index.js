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

  console.log(AllData, "From Product Features index");
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
    const data = await response.data; // Use 'response.data' to access response data

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

// export const getStaticProps = async () => {
//   const data = await fetch('http://localhost:5000/categories/');
//   const result = await data.json();
//   const productImages = result.map((category) => {
//     const items = category.items.map((item) => ({
//       name: item.name,
//       img: item.img
//     }));
//     return { name: category.name, items: items };
//   });

//   const itemsNames = productImages.reduce((acc, category) => {
//     const itemNames = category.items.map((item) => item.name);
//     return acc.concat(itemNames);
//   }, []);

//   return {
//     props: {
//       categories: result || null,
//       productImages: productImages,
//       itemsNames: itemsNames,
//     }
//   };
// };

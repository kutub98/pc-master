import React from "react";
import RootLayout from "../../Components/Layouts/RootLalyout";

import axios from "axios";
import CategoriesFeatures from "@/Components/UI/CategoriesFeatues";

function Categories({ data }) {
  // console.log(data , "From Categories")
  return (
    <div>
      <CategoriesFeatures key={data.id} data={data}></CategoriesFeatures>
    </div>
  );
}

export default Categories;

Categories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:5000/pcItems");
    if (response.status === 200) {
      const data = response.data;
      return {
        props: { data },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: { data: null },
  };
}



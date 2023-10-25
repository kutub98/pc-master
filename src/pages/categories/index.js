import React from "react";
import RootLayout from "../../Components/Layouts/RootLalyout";
import CategoriesFeatues from "@/Components/UI/CategoriesFeatues";
import axios from "axios";

function Categories({ data }) {
  // console.log(data , "From Categories")
  return (
    <div>
      <CategoriesFeatues key={data.id} data={data}></CategoriesFeatues>
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

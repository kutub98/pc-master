// CategoriesFeatues.js
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { KeyIcon } from "@heroicons/react/24/outline";
import keyboard from "../../Asset/PcBuilderIcon/Keboard.png";
function CategoriesFeatues({ data }) {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // console.log(data, "from categories Features")
  const Icon = [
    {
      icon: <KeyIcon></KeyIcon>,
    },
  ];
  return (
    <div className="">
      <div className="wrapper text-center mt-28">
        <svg>
          <text x="50%" y="50%" dy="0" textAnchor="middle">
            Categories Features
          </text>
        </svg>
      </div>
      <div className=" container mx-auto w-full max-w-7xl py-2 grid grid-col-12">
        {data.data.map((category, index) => (
          <div key={index}>
            <p>
              <div className="relative mt-6 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                  <div className="flex items-center">
                    <img
                      src="../../Asset/PcBuilderIcon/Keboard.png"
                      alt="keyboard"
                      className="h-6 w-6"
                    />
                    <h5 className="block font-sans text-xl text-opacity-70 leading-snug tracking-normal text-blue-gray-900 antialiased ">
                      {category.name}
                    </h5>
                  </div>
                </div>
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const categoryId = params.id; // Renamed the variable to 'categoryId'
    // console.log(categoryId, "single category id");

    const response = await axios.get(
      `http://localhost:5000/pcItems/${categoryId}`,
    );

    if (response.status === 200) {
      const singleCategoryData = response.data; // Renamed the variable to 'singleCategoryData'
      return {
        props: { singleCategory: singleCategoryData }, // Pass the data with a different variable name
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Return an empty object or any error handling you want here
  return {
    props: { singleCategory: null },
  };
}

export default CategoriesFeatues;

// CategoriesFeatures.js
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { BsFillKeyboardFill, BsFillMotherboardFill } from 'react-icons/bs';
import { CiMicrophoneOn } from 'react-icons/ci';
import { FaMemory } from 'react-icons/fa';
import {
  MdRestorePage,
  MdMonitor,
  MdPowerSettingsNew,
  MdMouse,
  MdIntegrationInstructions,
  MdMonitorHeart,
} from 'react-icons/md';

import { Button } from '@material-tailwind/react';
function CategoriesFeatures({ data }) {
  const Icon = [
    {
      icon: <BsFillKeyboardFill />,
    },
    {
      icon: <CiMicrophoneOn />,
    },
    {
      icon: <FaMemory />,
    },
    {
      icon: <MdRestorePage />,
    },
    {
      icon: <BsFillMotherboardFill />,
    },
    {
      icon: <MdMonitor />,
    },
    {
      icon: <MdMonitor />,
    },
    {
      icon: <MdIntegrationInstructions />,
    },
    {
      icon: <MdPowerSettingsNew />,
    },
    {
      icon: <MdMonitorHeart />,
    },
    {
      icon: <MdMouse />,
    },
    {
      icon: <MdMouse />,
    },
  ];
  return (
    <div className="bg-[#f3f2f2] w-full rounded container mx-auto">
      <div className="lg:px-52 px-0  ">
        <div className="wrapper text-center">
          <svg>
            <text
              x="50%"
              y="50%"
              dy="0"
              textAnchor="middle"
              className=" text-2xl md:text-lg lg:text-7xl"
            >
              Categories Features
            </text>
          </svg>
        </div>
        <div className=" container mx-auto w-full max-w-7xl py-2 grid grid-col-12">
          {data.data.map((category, index) => (
            <div key={index}>
              <div className="relative mt-2 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:bg-cyan-400 hover:text-white  hover:rounded-xl  hover:duration-1000">
                <Link
                  href={`/categories/${category._id}`}
                  className=" hover:text-white"
                >
                  <div className="p-4 flex justify-between w-full hover:text-white ">
                    <div className="flex items-center hover:text-white ">
                      <div key={index} className=" h-6 w-6 mr-3 animate-pulse">
                        {Icon[index].icon}
                      </div>

                      <h5 className="block font-sans text-xl text-opacity-70 leading-snug tracking-normal antialiased ">
                        {category.name}
                      </h5>
                    </div>
                    <div className="">
                      <Button>Choose</Button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const categoryId = params.id;

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
    console.error('Error fetching data:', error);
  }

  // Return an empty object or any error handling you want here
  return {
    props: { singleCategory: null },
  };
}

export default CategoriesFeatures;

import { Button, Input } from "@material-tailwind/react";
import React from "react";

const Subcripstion = () => {
  return (
    
      <div className="bg-[#fdfdfd]">
        <div
        className=" my-8  mx-auto container bg-[#fdfdfd] rounded"
        style={{
          backgroundImage: "https://source.unsplash.com/random/640x480",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-4xl antialiased font-semibold leadi text-center text-gray-700">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-700">
            Find out about events and other news
          </p>
          <div className="flex">
            <Input
              type="text"
              label="example@email.com"
              className=" w-full rounded-l-lg  p-4"
            />
            <Button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Subcripstion;

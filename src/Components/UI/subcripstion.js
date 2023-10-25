import { Button, Input } from "@material-tailwind/react";
import React from "react";

const Subcripstion = () => {
  return (
    <div>
      <div
        className="w-full my-8 container mx-auto dark:bg-gray-500"
        style={{
          backgroundImage: "https://source.unsplash.com/random/640x480",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-4xl antialiased font-semibold leadi text-center dark:text-gray-100">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className=" w-full rounded-l-lg sm:w-2/3 p-4"
            />
            <Button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
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

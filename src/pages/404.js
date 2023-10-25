import Image from "next/image";
import React from "react";
import errorImage from "@/Asset/errorPage.jpg";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" mx-auto my-20 text-center">
        <div style={{ width: "100%" }}>
          <Image src={errorImage} alt="errorImage" />
        </div>
        <Link href={"/"}>
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

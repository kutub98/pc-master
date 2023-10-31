import React, { useEffect, useState } from "react";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const Rootlayout = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log("hello")
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="sticky top-0 w-full z-10">
        <NavBar />
      </div>
      <div className="">{children}</div>
      <Footer />
      <div
        className={`fixed right-2 cursor-pointer bottom-16 ${
          isHidden ? "hidden" : ""
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpCircleIcon className="h-12 w-12 animate-bounce hover:scale-105 rounded-full bg-cyan-500 border-none text-white "></ArrowUpCircleIcon>
      </div>
    </>
  );
};

export default Rootlayout;

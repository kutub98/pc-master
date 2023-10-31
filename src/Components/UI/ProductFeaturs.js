/* eslint-disable @next/next/no-img-element */
// ProductFeatures.js

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const ProductFeatures = ({ singlePcItem }) => {
  const details = singlePcItem.map((category) =>
    category.items.map((item) => item.singlePcItem),
  );

  return (
    <div className=" ">
      <div className="wrapper ">
        <svg>
          <text x="50%" y="50%" dy="0" textAnchor="middle" className=" text-2xl sm:text-4xl lg:text-7xl">
            Product Features
          </text>
        </svg>
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-1 gap-4 container mx-auto max-w-7xl sm:grid-cols-1 xs:grid-cols-1">
        {details.map((PcItem, index) =>
          PcItem.map((item, index) => (
            <Card key={index} className="">
              <CardHeader shadow={false} floated={false} className=" h-40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className=" flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {item.name}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className=" lg:flex md:flex block lg:justify-around  gap-4 sm:flex md:justify-around sm:justify-around xs:flex">
                <Button className="bg-blue-gray-900/10 my-1 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 py-3 w-full ">
                  Add to Cart
                </Button>
                <Button className="bg-blue-500  my-1  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 py-3 w-full  text-white">
                  <Link href={`/allProducts/${item.itemId}`}>More Details</Link>
                </Button>
              </CardFooter>
            </Card>
          )),
        )}
      </div>
    </div>
  );
};

export default ProductFeatures;

// export const getStaticProps = async () => {
//   const data = await fetch('http://localhost:5000/categories/');
//   const result = await data.json();
//   const images = result.map((category) => {
//     const items = category.items.map((item) => ({
//       name: item.name,
//       img: item.img
//     }));
//     return { name: category.name, items: items };
//   });

//   // const itemsNames = images.reduce((acc, category) => {
//   //   const itemNames = category.items.map((item) => item.name);
//   //   return acc.concat(itemNames);
//   // }, []);

//   return {
//     props: {
//       categories: result || null,
//       images: images,
//       // itemsNames: itemsNames,
//     }
//   };
// };

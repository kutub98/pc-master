/* eslint-disable @next/next/no-img-element */
// ProductFeatures.js

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useState } from 'react';

const ProductFeatures = ({ singlePcItem }) => {
  const details = singlePcItem.map(category =>
    category.items.map(item => item.singlePcItem),
  );
  const [seeAll, setSeeAll] = useState(false);
  const handlingSeeAll = () => {
    setSeeAll(true);
  };
  const handlingLess = () => {
    setSeeAll(false);
  };

  return (
    <div className=" ">
      <div className="wrapper ">
        <svg>
          <text
            x="50%"
            y="50%"
            dy="0"
            textAnchor="middle"
            className=" text-2xl sm:text-4xl lg:text-7xl"
          >
            Product Features
          </text>
        </svg>
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-1 gap-8 justify-center container mx-auto max-w-7xl sm:grid-cols-1 xs:grid-cols-1">
        {seeAll
          ? details.map((PcItem, index) =>
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
                  <CardFooter className=" lg:flex md:flex block lg:justify-around  gap-4 sm:flex md:justify-around sm:justify-around xs:flex items-center">
                    <Button className="bg-cyan-400 my-1 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 py-3 w-full ">
                      Add to Cart
                    </Button>
                    <Link
                      href={`/allProducts/${item.itemId}`}
                      className="w-full"
                    >
                      <Button>More Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )),
            )
          : details.map((PcItem, index) =>
              PcItem.slice(1, 2).map((item, index) => (
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
                  <CardFooter className=" lg:flex md:flex block lg:justify-around  gap-4 sm:flex md:justify-around sm:justify-around xs:flex items-center">
                    <Button className="bg-cyan-400 my-1 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 py-3 w-full ">
                      Add to Cart
                    </Button>
                    <Link
                      href={`/allProducts/${item.itemId}`}
                      className="w-full"
                    >
                      <Button>More Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )),
            )}
      </div>

      {details.length > 1 && (
        <Button
          onClick={seeAll ? handlingLess : handlingSeeAll}
          className={`justify-center flex w-1/3 mx-auto my-10 ${
            seeAll ? 'bg-gray-800 duration-1000' : 'bg-green-500 duration-500'
          }`}
        >
          {seeAll ? 'See Less' : 'See All'}
        </Button>
      )}
    </div>
  );
};

export default ProductFeatures;

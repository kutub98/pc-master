/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';
import axios from 'axios';
import Rootlayout from '@/Components/Layouts/RootLalyout';
import { servelink } from '@/config/config';

function SingleCategory({ singleCategory }) {
  // console.log(singleCategory.data.items, "single Category");

  return (
    <div className="container mx-auto w-full max-w-7xl py-2">
      <div className="wrapper text-center mt-28">
        <svg>
          <text x="50%" y="50%" dy="0" textAnchor="middle">
            Single Category
          </text>
        </svg>
      </div>
      <div className=" mx-8">
        {singleCategory.data.items.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="">
                <div className="grid grid-cols-12 items-center gap-2 m-4 bg-white rounded-md mx-auto justify-center">
                  <div className="lg:col-span-3 md:col-span-6 m-2 col-span-12">
                    <img
                      src={item.img}
                      className="xl:h-64 w-74 object-fit rounded-md md:w-full lg:w-full"
                    />
                  </div>
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 m-2">
                    <div className="">
                      <Typography color="blue-gray" className="font-medium">
                        Brand:{item.brand}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        Name: {item.name}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        Price:{item.price}
                      </Typography>
                      {item.technicalInfo?.warranty ? (
                        <Typography color="blue-gray" className="font-medium">
                          Warrenty: {item.technicalInfo?.warranty}
                        </Typography>
                      ) : null}
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal opacity-75"
                    >
                      Description : {item.description}
                    </Typography>
                  </div>
                  <div className="pt-0 flex justify-between gap-2 lg:col-span-3 col-span-12 md:col-span-12 mx-auto">
                    <Link
                      href={`/allProducts/${item.itemId}`}
                      fullwidth="true"
                      className="bg-blue-gray-900 px-6 text-center items-center   text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 my-auto py-2 rounded"
                    >
                      More Details
                    </Link>
                    <Button
                      fullwidth="true"
                      className=" bg-blue-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 my-3"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SingleCategory.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};

export default SingleCategory;

export async function getServerSideProps({ params }) {
  try {
    const singleCategory = params.singleCategory;
    // console.log(singleCategory, "single category id");

    const response = await axios.get(`${servelink}/pcItems/${singleCategory}`);

    if (response.status === 200) {
      const singleCategoryData = response.data;
      return {
        props: { singleCategory: singleCategoryData },
      };
    } else {
      // Handle other response status codes or errors
      console.error('Error fetching data. Status:', response.status);
      return {
        props: { singleCategory: null },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { singleCategory: null },
    };
  }
}

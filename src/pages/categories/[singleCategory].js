/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import axios from "axios";
import Rootlayout from "@/Components/Layouts/RootLalyout";

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

    const response = await axios.get(
      `http://localhost:5000/pcItems/${singleCategory}`,
    );

    if (response.status === 200) {
      const singleCategoryData = response.data;
      return {
        props: { singleCategory: singleCategoryData },
      };
    } else {
      // Handle other response status codes or errors
      console.error("Error fetching data. Status:", response.status);
      return {
        props: { singleCategory: null },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { singleCategory: null },
    };
  }
}

{
  /* <div className="grid grid-cols-12">
			<div className=" grid lg:grid-cols-8">
      <img className='w-48 h-48 m-3 object-cover rounded lg:col-span-8' alt={item.name} src={item.img}/>
			<div className="lg:col-spna-6 m-3  py-2 lg:py-0">
				{
          item.brand ? <p>Brand: {item.brand}</p> : null
        }
				{
          item.name ? <p>Name: {item.name}</p> : null
        }
				{
          item.model ? <p>Model: {item.model}</p> : null
        }
				
				
			</div>
      </div>
			<div className='grid lg:grid-cols-4'>
      <Button   className="px-5 mt-4 lg:mt-0 py-3 m-2 rounded-md bg-red-600">
      Price: {item.price}
      </Button>
      <Button   className="px-5 mt-4 lg:mt-0 py-3 m-2 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">
      Shop Now
      </Button>
			
      </div>
		</div> */
}

// {
//   item.chipset ? <p>Chipset: {item.chipset}</p> : null
// }
// {
//   item.interface ? <p>Interface: {item.interface}</p> : null
// }
// {
//   details.readSpeed ? <p>ReadSpeed: {details.readSpeed}</p> : null
// }
// {
//   details.switchType ? <p>Switch Type: {details.switchType}</p> : null
// }
// {
//   details.formFactor ? <p>Form Factor: {details.formFactor}</p> : null
// }
// {
//   details.description ? <p>Description: {details.description}</p> : null
// }
// {
//   details.dpi ? <p>Dpi: {details.dpi}</p> : null
// }
// {
//   details.bufferSize ? <p>Buffer Size: {details.bufferSize}</p> : null
// }
// {
//   details.series ? <p>Series: {details.series}</p> : null
// }
// {
//   details.voltage ? <p>Voltage: {details.voltage}</p> : null
// }
// {
//   details.type ? <p>Type: {details.type}</p> : null
// }
// {
//   details.buttons ? <p>Buttons: {details.buttons}</p> : null
// }
// {
//   details.scrollWheel ? <p>Scroll Wheel: {details.scrollWheel}</p> : null
// }
// {
//   details.sensorType ? <p>Sensor Type: {details.sensorType}</p> : null
// }
// {
//   details.capacity ? <p>Capacity: {details.capacity}</p> : null
// }
// {
//   details.rpm ? <p>Rpm: {details.rpm}</p> : null
// }
// {
//   details.color ? <p>Color: {details.color}</p> : null
// }
// {
//   details.casLatency ? <p>Cas Latency: {details.casLatency}</p> : null
// }
// {
//   details.technicalInfo?.warranty ? <p>Warrenty: {details?.technicalInfo?.warranty}</p> : null
// }
// {
//   details.technicalInfo?.endurance ? <p>Endurance: {details?.technicalInfo?.endurance}</p> : null
// }
// {
//   details.backlighting ? <p>Backlighting: {details?.backlighting}</p> : null
// }
// {
//   details.heatSpreader ? <p>Heat Spreader: {details?.heatSpreader}</p> : null
// }

// pages/categories/singleCategory.js

// // pages/categories/singleCategory.js

// export async function getStaticProps({ params }) {
//   const categoryId = params.singleCategory;

//   const response = await fetch(`http://localhost:5000/categories/${categoryId}`);
//   const result = await response.json();

//   return {
//     props: {
//       singleCategory: result || null,
//     },
//   };
// }

// export  const getServerSideProps = async({params})=> {
//   const singleCategory= params.id
//   const data = await fetch (`http://localhost:3000/api/pcItems/${singleCategory}`);
//   const result = await data.json()

//   return {
//     props: {
//       singleCategory: result || null
//     }
//   }
// }

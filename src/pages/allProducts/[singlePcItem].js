/* eslint-disable @next/next/no-img-element */
import Rootlayout from '@/Components/Layouts/RootLalyout';
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { ServerLink } from '@/config/config';
function SinglePcItemData({ SinglePcItem }) {
  const router = useRouter(SinglePcItem);
  const { itemId } = router.query;
  const details = SinglePcItem.data;
  return (
    <div className="mx-auto max-w-7xl">
      <div className="wrapper text-center mt-28">
        <svg>
          <text x="50%" y="50%" dy="0" textAnchor="middle">
            Single Item
          </text>
        </svg>
      </div>
      {/* You can access the data here */}
      <>
        <div className="p-6 dark:bg-violet-400 bg-white text-black  dark:text-gray-900 mx-6 h-auto rounded">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex flex-col lg:flex-row">
                <img
                  className="w-48 h-48 m-3 object-cover rounded "
                  alt="image"
                  src={details.img}
                />
                <div className="m-3  py-2 lg:py-0">
                  {details.brand ? <p>Brand: {details.brand}</p> : null}
                  {details.name ? <p>Name: {details.name}</p> : null}
                  {details.model ? <p>Model: {details.model}</p> : null}
                  {details.chipset ? <p>Chipset: {details.chipset}</p> : null}
                  {details.interface ? (
                    <p>Interface: {details.interface}</p>
                  ) : null}
                  {details.readSpeed ? (
                    <p>ReadSpeed: {details.readSpeed}</p>
                  ) : null}
                  {details.switchType ? (
                    <p>Switch Type: {details.switchType}</p>
                  ) : null}
                  {details.formFactor ? (
                    <p>Form Factor: {details.formFactor}</p>
                  ) : null}
                  {details.description ? (
                    <p>Description: {details.description}</p>
                  ) : null}
                  {details.dpi ? <p>Dpi: {details.dpi}</p> : null}
                  {details.bufferSize ? (
                    <p>Buffer Size: {details.bufferSize}</p>
                  ) : null}
                  {details.series ? <p>Series: {details.series}</p> : null}
                  {details.voltage ? <p>Voltage: {details.voltage}</p> : null}
                  {details.type ? <p>Type: {details.type}</p> : null}
                  {details.buttons ? <p>Buttons: {details.buttons}</p> : null}
                  {details.scrollWheel ? (
                    <p>Scroll Wheel: {details.scrollWheel}</p>
                  ) : null}
                  {details.sensorType ? (
                    <p>Sensor Type: {details.sensorType}</p>
                  ) : null}
                  {details.capacity ? (
                    <p>Capacity: {details.capacity}</p>
                  ) : null}
                  {details.rpm ? <p>Rpm: {details.rpm}</p> : null}
                  {details.color ? <p>Color: {details.color}</p> : null}
                  {details.casLatency ? (
                    <p>Cas Latency: {details.casLatency}</p>
                  ) : null}
                  {details.technicalInfo?.warranty ? (
                    <p>Warrenty: {details?.technicalInfo?.warranty}</p>
                  ) : null}
                  {details.technicalInfo?.endurance ? (
                    <p>Endurance: {details?.technicalInfo?.endurance}</p>
                  ) : null}
                  {details.backlighting ? (
                    <p>Backlighting: {details?.backlighting}</p>
                  ) : null}
                  {details.heatSpreader ? (
                    <p>Heat Spreader: {details?.heatSpreader}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex m-2">
                <Button className="px-5 mt-4 lg:mt-0 py-3 m-2 rounded-md bg-red-600">
                  Price: {details.price}
                </Button>
                <Link href="/payment">
                  <Button className="px-5 mt-4 lg:mt-0 py-3 m-2 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SinglePcItemData;

SinglePcItemData.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};

export const getServerSideProps = async context => {
  try {
    const { singlePcItem } = context.query;
    const response = await axios.get(`${ServerLink.singleData}${singlePcItem}`);

    if (response.status === 200) {
      const SinglePcItemData = response.data;

      return {
        props: { SinglePcItem: SinglePcItemData },
      };
    }
  } catch (error) {
    console.error('Failed to get data because of:', error);
  }

  return {
    props: {},
  };
};

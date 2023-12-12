import IHome from '@/Components/Home/IHome';
import Rootlayout from '@/Components/Layouts/RootLalyout';
import axios, { all } from 'axios';

function HomePage({ data }) {
  const AllData = data.data.map(category => {
    const items = category.items.map(item => ({
      singlePcItem: item,
    }));
    return { name: category.name, items: items };
  });

  return (
    <div className="lg:px-10 px-4">
      <IHome data={data} key={data.id} singlePcItem={AllData} />
    </div>
  );
}
export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:5000/pcItems');
    if (response.status === 200) {
      const data = response.data;
      return {
        props: { data },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return {
    props: { data: null },
  };
}

// // Import Axios
// import IHome from '@/Components/Home/IHome';
// import Rootlayout from '@/Components/Layouts/RootLalyout';
// import axios from 'axios';

// // Define your Next.js page component

// const HomePage = async ({data}) => {
//   console.log(data, "from index.js pages")
//   return (
//     <div className='px-14'>
//       <IHome categories={categories} />
//     </div>
//   );
// };

// export default HomePage;
// HomePage.getLayout = function getLayout(page) {
//     return <Rootlayout>{page}</Rootlayout>;
//   };

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get('http://localhost:5000/pcItems');
//     if (response.status === 200) {
//       const data = response.data;
//       return {
//         props: { data },
//       };
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }

//   return {
//     props: { data: null },
//   };
// }

// // import Rootlayout from '@/Components/Layouts/RootLalyout';
// // // import React, { useEffect, useState } from 'react';
// // import IHome from '@/Components/Home/IHome';

// // export default HomePage;

// // HomePage.getLayout = function getLayout(page) {
// //   return <Rootlayout>{page}</Rootlayout>;
// // };

// // export const getStaticProps = async () => {
// //   const data = await fetch('http://localhost:5000/categories/');
// //   const result = await data.json();
// //   const images = result.map((category) => {
// //     const items = category.items.map((item) => ({
// //       name: item.name,
// //       img: item.img
// //     }));
// //     return { name: category.name, items: items };
// //   });

// //   const itemsNames = images.reduce((acc, category) => {
// //     const itemNames = category.items.map((item) => item.name);
// //     return acc.concat(itemNames);
// //   }, []);

// //   return {
// //     props: {
// //       categories: result || null,
// //       images: images,
// //       itemsNames: itemsNames,
// //     }
// //   };
// // };

// // export async function getServerSideProps() {
// //   try {
// //     // Make an HTTP request to your server API
// //     const response = await axios.get('http://localhost:5000/pcItems'); // Replace with your server API URL

// //     if (response.status === 200) {
// //       const categories = response.data;
// //       return {
// //         props: { categories },
// //       };
// //     }
// //   } catch (error) {
// //     console.error('Error fetching data:', error);
// //   }

// //   // Handle errors or return default data if needed
// //   return {
// //     props: { categories: null }, // You can set a default value
// //   };
// // }

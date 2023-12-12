import React from 'react';
import RootLayout from '../../Components/Layouts/RootLalyout';

import axios from 'axios';
import CategoriesFeatures from '@/Components/UI/CategoriesFeatues';
import { servelink } from '@/config/config';

function Categories({ data }) {
  // console.log(data , "From Categories")
  return (
    <div>
      <CategoriesFeatures key={data.id} data={data}></CategoriesFeatures>
    </div>
  );
}

export default Categories;

Categories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${servelink}/pcItems`);
    if (response.status === 200) {
      const data = response.data;
      console.log(data, 'from data');
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

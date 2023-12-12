import Rootlayout from '@/Components/Layouts/RootLalyout';
import CheckoutForm from '@/Components/UI/payment';
import React from 'react';

const Payment = () => {
  return (
    <div className=" max-w-7xl container mx-auto my-10 ">
      <CheckoutForm />
    </div>
  );
};

Payment.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
export default Payment;

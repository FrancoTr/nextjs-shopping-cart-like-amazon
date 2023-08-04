import React from "react";

const CartSidebar = () => {
  return (
    <div className='fixed top-0 right-0 w-32 h-full shadow-lg border-l border-l-gray-700 overflow-scroll'>
      <div className='py-5 px-2'>Cart is empty</div>
    </div>
  );
};

export default CartSidebar;

import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

function Cart() {
  const { cartsItem, setCartsItem } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const storedCart = localStorage.getItem('carts');
    if (storedCart) {
      setCartsItem(JSON.parse(storedCart));
    }
  }, []);


  // Update Quantity

  const updateQuantity = (item, newQuantity) => {
    const updatedCartItems = cartsItem.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartsItem(updatedCartItems);
    localStorage.setItem('carts', JSON.stringify(updatedCartItems));
  };


  // Remove One Item
  const removeItem = (item) => {
    const updatedCartItems = cartsItem.filter((cartItem) => cartItem.id !== item.id);
    setCartsItem(updatedCartItems);
    localStorage.setItem('carts', JSON.stringify(updatedCartItems));
  };


  // Remove all Item
  const removeAllItems = () => {

    const array = []
    setCartsItem(array)
    localStorage.removeItem('carts');
  }


  // Total Price 
  useEffect(() => {
    // Calculate the total price
    const sum = cartsItem.reduce((total, item) => total + item.market_data.current_price.usd * item.quantity, 0);
    setTotalPrice(sum);
  }, [cartsItem]);


  return (
    <>



      <div className="w-full flex justify-center mt-20 ">
        <div className="w-2/4">

          <div className='text-center p-4 flex justify-between'>
            <h1> List </h1>
            <button className='text-black ' onClick={() => removeAllItems()}> Remove All Items </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-96">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartsItem.map((item) => (
                  <tr
                    key={item.last_updated}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={item.image.small} alt="" />
                    </th>
                    <td className="px-6 py-4">
                      <a href="">{item.name}</a>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                        className="w-20 px-2 py-1 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">${item.market_data.current_price.usd}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => removeItem(item)}
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='text-center p-4'>
            <h1>  Total Price : ${totalPrice}  </h1>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;

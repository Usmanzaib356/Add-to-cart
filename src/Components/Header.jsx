import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
function Header() {

  const { cartsItem } = useAuth()
  const totalQuantity = cartsItem.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);


  const displayedQuantity = totalQuantity > 99 ? '99+' : totalQuantity;
  return (
    <>

      <nav className="bg-slate-950 border-gray-200 dark:bg-gray-900 text-white w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg bg-slate-950 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white " aria-current="page">Shop</Link>
              </li>
              <li>
                <Link to="/cart" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  ">Cart  <span className='text-green-500 ms-1'>{displayedQuantity}
                </span>    </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
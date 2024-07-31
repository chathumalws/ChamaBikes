import React from 'react'
import logo from '/logo.png'
import { MdWifiCalling3 } from "react-icons/md";

const Navbar = () => {
 

    const navItems = <>
    <li>
        <a>Home</a>
        </li>
      <li>
        <details>
          <summary>Vehicles</summary>
          <ul className="p-2">
            <li><a>Bikes</a></li>
            <li><a>Scooters</a></li>
            <li><a>Bicycles</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </>
  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div className="navbar xl:px-24 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a href="/">
        <img src={logo} alt="Logo" style={{ width: '400px', height: '100px'}}/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-orange rounded-full px-6 text-white flex items-center gap-2"><MdWifiCalling3/>Contact</a>
  </div>
</div>
    </header>
  )
}

export default Navbar

import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
export default function Header() {
  return (
    <div className='max-w-[1260px] flex items-center justify-evenly h-[72px] sticky top-0 z-40 bg-white '>
        <div className="left-container flex items-center ">
          <div className="logo mx-3">
          <img className='w-[100px]' src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png?tr=w-244,h-56,cm-pad_resize" alt="" />
          </div>
          <div className="location-container font-medium flex items-center justify-center mx-6 ">
          <FaLocationDot style={{color:"#00B37A"}}/>
          <span className='text-sm'>Set a location</span>
          <RxCaretDown />
          </div>
        </div>
        <div className="right-container flex items-center  font-medium justify-evenly gap-7 ">
            <div className="partners text-sm ">
                
Dunzo for Partners
            </div>
            <div className="business text-sm">
            Business with Dunzo
            <RxCaretDown style={{display:"inline"}}/>


            </div>
            <div className="search text-sm">
            <CiSearch style={{fontWeight:700,fontSize:26}}/>
            Search

            </div>
            <div className="cart text-sm">
            <PiShoppingCartSimpleLight  style={{fontSize:26}}/>
            Cart
            </div>
            <div className="sign-in bg-[#00D290] font-bold text-white rounded-[30px] p-2 text-sm w-[80px] h-[2.2rem] text-center">
            Sign in
            </div>



        </div>
    </div>
  )
}

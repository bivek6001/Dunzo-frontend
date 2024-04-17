import React from "react";
import { RxCaretRight } from "react-icons/rx";
export default function Banner() {
  return (
    <div className=" mx-auto flex items-center justify-between wrap md:flex-nowrap flex-col md:flex-row bg-[#203A80] h-[140px] md:h-[55px]">
      <div className="left mx-auto flex items-center justify-center flex-col md:flex-row ">
        <img  className="w-[50px] " src="https://resources.dunzo.com/web-assets/prod/_next/static/images/paan-3514c1ca4be5af789addd127f4c24308.png?tr=w-64,h-64,cm-pad_resize" alt="" />
        <p className="text-white font-bold">Order Paan items, munchies and much more on our new Dunzo Mobile app</p>
      </div>
      <div className="right mx-auto flex items-center flex-col wrap md:flex-row">
        <p className="font-semibold text-green-500">Download Dunzo Mo app now</p>
        <RxCaretRight style={{display:"inline",color:"#00B37A",fontSize:"1.9rem"}} />
      </div>
    </div>
  );
}

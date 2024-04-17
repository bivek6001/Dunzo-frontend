import React from "react";

export default function Last() {
  return (
    <div className=" bg-[#171E30] p-5">
      <div className="container mx-auto max-w-[1000px] flex items-center flex-col md:flex-row justify-between">
        <div className="right">
          <div className="img my-4 md:my-0">
            <img className="w-[7-px] h-[70px]"
              src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-dbc7c51cccb1c5e6b2210740296729e3.png?tr=w-140,h-140,cm-pad_resize"
              alt=""
            />
          </div>
        </div>
        <div className="links flex justify-around gap-4">
          <div className="list1">
            <h1 className="font-bold text-white mx-2 ">DUNZO</h1>
            <ul>
              <li className="font-small  text-white text-sm" >About</li>
              <li className="font-small  text-white text-sm">Jobs</li>
              <li className="font-small  text-white text-sm">Contact</li>
              <li className="font-small  text-white text-sm">Terms & Conditions</li>
              <li className="font-small  text-white text-sm">Privacy Policy</li>
              <li className="font-small  text-white text-sm">Dunzo for partner</li>
              <li className="font-small  text-white text-sm">Dunzo for business</li>
            </ul>
          </div>
          <div className="list2 mx-2 ">
            <h1 className="font-bold text-white ">SERVICEABLE CITIES</h1>
            <ul>





              <li className="font-small  text-white text-sm">pune</li>
              <li className="font-small  text-white text-sm">Gurgaon</li>
              <li className="font-small  text-white text-sm">Hyderabad</li>
              <li className="font-small  text-white text-sm"> Delhi</li>
              <li className="font-small  text-white text-sm">Chennai</li>
              <li className="font-small  text-white text-sm">Mumbai</li>
             
            </ul>
          </div>
          <div className="list3 mx-2">
            <h1 className="font-bold text-white ">GET IN TOUCH</h1>
            <ul>
            





              <li className="font-small  text-white text-sm" >Email</li>
              <li className="font-small  text-white text-sm">Media Queries</li>
              <li className="font-small  text-white text-sm">Twitter</li>
              <li className="font-small  text-white text-sm">Facebook</li>
              <li className="font-small  text-white text-sm">Instagram</li>
              <li className="font-small  text-white text-sm">Linkedin</li>
           
            </ul>
          </div>
        </div>

        <div className="left">
    <div className="img">
<img  className="w-[260px] h-[281px] object-contain"src="https://resources.dunzo.com/web-assets/prod/_next/static/images/footer-mascot-0a94653a7991194aa18773ec353d7fb6.png?tr=w-520,h-400,cm-pad_resize" alt="" />

    </div>


        </div>
      </div>
      <p className="text-white font-bold">made with love by Bivek Singha</p>
    </div>
  );
}

import React from "react";

export default function Hero() {
  const data = [
    {
      id: 1,
      url: "https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-FFWUCfzmUzhok89HMYt0ON2Gy5oZECO73gRenPw11HxAeCLBtTBOG8FMqMTe92UOnScOPMUnjYDcaPVxx7wSFJwXJ3kSR3YRsPby4EgC4zW2mVYLc99zuvVh7O2Ppmx2QMQd40UiwYLGhy0OjbMayr.png",
    },
    {
      id: 2,
      url: "https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1613527381240.png",
    },
    {
      id: 3,
      url: "https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_meat_secondary2_1613527536249.png",
    },
    {
      id: 4,
      url: "https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1613527515094.png",
    }
  ];

  const boxData=[{
id:1,
url:"https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_pets_tertiary_grid_1609739755734.png",
text:"Pet Supplies"
  },{
    id:2,
    url:"https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/paan_grid_1609739855940.png",
    text:"Paan Shop"
  },
  {
    id:3,
    url:"https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_gifts_tertiary_grid_1613527886275.png",
    text:"Gifts and Lifestyle"
  }


  ]

  return (
    <>
      <div className="mx-auto container p-10   bg-[#F7FDFA] m   max-w-[1240px] h-[500px] ">
      <h1 className="text-2xl mx-[120px] font-semibold">Essentials delivered to your doorstep</h1>
       <div className="icons-container flex items-center justify-center mx-[120px] flex-wrap md:flex-nowrap ">
      {data.map((url)=>(
        <>
       
        <div className="rounded-3xl w-[244px] h-[180px] mx-[16px]">
        <img className="rounded-xl w-[244px] h-[180px] " src={url.url} alt="" key={url.id} />
        </div>
     
        
        </>
      



      ))}
      </div>

      <div className="boxes flex justify-start gap-4 mx-[120px] h-[107px] w-[158px] bg-white my-9 ">
            {
                boxData.map((box)=>(
                    <div className="bg-white p-7 shadow-lg h-[140px] w-[380px] rounded">
                    <img className= "w-[40px] h-[40px] " src={box.url} alt="" key={box.id} />
                    <p className="text-sm font-medium" >{box.text}</p>
                    </div>
                ))
            }




      </div> 


      </div>
    </>
  );
}

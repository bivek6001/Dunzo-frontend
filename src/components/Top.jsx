import React from 'react'

export default function Top() {
    const data = [
        {
          id: 1,
          url: "https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize",
        },
        {
          id: 2,
          url: "https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize",
        },
        {
          id: 3,
          url: "https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize",
        },
        {
          id: 4,
          url: "https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize",
        }
      ];
  return (
    <div className='max-w-[1240px] mx-auto p-10' >

    
      <div className="auto mx-[140px] p-6">
<h1 className='text-3xl font-semibold mx-auto ' >Top picks for you</h1>
        <div className="icons-container flex items-center justify-center my-7 mx-auto">
          
      {data.map((url)=>(
        <>
       
        <div className="rounded-3xl w-[244px] h-[180px] mx-[16px]">
        <img className="rounded-xl w-[244px] h-[180px] " src={url.url} alt="" key={url.id} />
        </div>
     
        
        </>
      



      ))}
      </div>


    </div>

      <div className="mobile bg-[#F0F2F7] flex items-center justify-center gap-3" >
      <div className="box1">
        <img className='w-[205px] h-[237px]' src="https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-daily-app-preview-7c97560e963bcd173c11c470b2ff63ed.png?tr=w-410,h-474,cm-pad_resize" alt="" />
      </div>
      <div className="box2 ">
        <p className='font-bold text-xl'>All this from the convenience of your phone.</p>
        <p className='font-medium'>Download the Dunzo mobile app.</p>
        <img className='my-3' src="https://resources.dunzo.com/web-assets/prod/_next/static/images/playstore-ee5b43e66d1583a6066423fb42fb69d8.svg" alt="" />
        <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/appstore-078da620a293bb95473ae21624a55872.svg" alt="" />

      </div>

      </div>

    </div>
  )
}

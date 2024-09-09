'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {


   const [isDark, setisDark] = useState(false)

  return (
    
    
    <div  className={` ${isDark && "bg-[#2B2B2B]"}`}>
    <div className=" px-10 h-screen overflow-hidden py-3 w-full">

      <div className=" w-full flex justify-between max-w-3xl ">

        <h1 className={` ${isDark ? "text-[#F5F5F5]" : ""} font-poppinsreg5`}> Nesha </h1>

        {
          isDark ? 

          <svg onClick={() => setisDark(!isDark)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8  text-white cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
 : 

 <svg onClick={() => setisDark(!isDark)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-6 cursor-pointer">
 <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

        }

 


      </div>
      
      {/* #F5F5F5 */}

      <div className="w-full  ">

         <div className=" grid grid-cols-2  mt-24">
          <div> </div> 
          <div className=" flex items-center  gap-1"> 
        <h1 className={` ${isDark && "text-[#F5F5F5]"}  text-5xl font-inter200`}> Creative Designer </h1>

        
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor" className={`  ${isDark && "text-[#F5F5F5]"} size-10 `}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

       </div>
       </div>

         
         <div className=" flex gap-2  items-center"> 

          <div className=" w-4/12 "> </div>
           
           <div className=" flex-1 flex gap-2 items-center"> 

           <div className={`  w-3 h-3 rounded-sm ${isDark ? "bg-white" : "bg-black"} `}>

           </div>
        <h1 className={`  ${isDark ? "text-[#F5F5F5]" : " text-[#2A2A2A]"}  font-inter700 mt-4 text-5xl`}> User Interface & Experiences.</h1>

        </div>
        </div>
      </div>




      {/* 3 grid  */}


      <div className=" grid grid-cols-3 mt-56">

        <div className=" font-inter400"> 
          <h1  className={` ${isDark && "text-[#F5F5F5]"} `}> 4.12 PM</h1>
          <h1 className={` ${isDark && "text-[#F5F5F5]"} `}> {`<Kandy>`}</h1>
          </div> 


          <div>
            <div className=" flex items-center gap-2"> 

              <div className={` ${isDark  ? "bg-[#F5F5F5]" : "bg-black"} w-3 h-3 rounded-sm `}> </div>

            
            <h1 className={` ${isDark && "text-[#F5F5F5]"} font-inter400 `} > {`I'm Nesha`} </h1>
            </div>
            <Image  src={'/www.png'} alt="" width={100} height={100} className=" mt-2 font-inter400 w-36 h-fit object-cover" />
          </div>


          <div className=" flex flex-col gap-10 ">
          <div className={` ${isDark ? "border-white" : "border-black"} border-b w-[calc(100%)] ml-3 border-[1px] `}> </div>

          <div  className={`${isDark ? " text-[#F5F5F5]" : "text-[#2A2A2A]"} px-6 font-inter600 `}> 
            <h1> Graphic Designing </h1>
            <h1> UI/UX design </h1>
            <h1> Creative Ideas & Rebranding </h1>
            <h1> Illustration</h1>
            <h1> Social Media Design </h1>
            <h1> Poster Design</h1>
            <h1> Photoshoping </h1>
          </div>

          </div>

      </div>

      {/* 3 grid  */}

    </div>  

 {/* second section  */}

    <div className=" w-full overflow-hidden flex flex-col items-center  justify-center">

      <div className=" w-full max-w-3xl"> 
      


      <p className={` ${isDark && "text-[#F5F5F5]"}  font-inter600`}> A Creative ape <span className="  inline-block align-middle"> <Image src={'/avatar.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span> Who Promises to Turn Your Vision into Reality - Or at Least Into Something Slightly Less Ordinary </p> 
      </div> 


      <div className=" w-full max-w-3xl"> 
      


      <p className={` ${isDark && "text-[#F5F5F5]"}  font-inter600`}> Need a Poster that grabs attention? <span className="  inline-block align-middle"> <Image src={'/document.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span> Done. <span className=" inline-block align-middle">  <Image src={'/check.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /></span> </p> 
      </div> 


      <div className=" w-full -mt-2 max-w-3xl"> 
      


      <p className={` ${isDark && "text-[#F5F5F5]"}  font-inter600`}> An app interface <span className="  inline-block align-middle"> <Image src={'/shape.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span>  {`that’s smoother than your morning coffee?`}  <span className=" inline-block align-middle">  <Image src={'/coffee.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /></span> </p> 
      <p className={` ${isDark && "text-[#F5F5F5]"} -mt-1 font-inter600`}>{`I've got you`} </p>
      </div> 


      <div className=" w-full max-w-3xl"> 
      

  
      <p className={` ${isDark && "text-[#F5F5F5]"}  font-inter600`}> {`My illustrations aren’t just drawings`} <span className="  inline-block align-middle"> <Image src={'/pencil.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span>  {`-they’re the visual equivalent of a mic drop.`}  </p> 
    
      </div> 

      <div className=" w-full -mt-2 max-w-3xl"> 
      
   
  
      <p className={` ${isDark && "text-[#F5F5F5]"}  font-inter600`}> {`Branding`} <span className="  inline-block align-middle"> <Image src={'/apple.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span>  {`I turn 'just okay' into 'wow, that’s unforgettable.' And doodles?`}  <span className="  inline-block align-middle"> <Image src={'/line.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span> {`They’re my secret weapon for sparking creativity,`} <span className="  inline-block align-middle"> <Image src={'/computer.svg'} alt="" width={20} height={20} className=" w-10 h-10 object-cover" /> </span>  one napkin sketch at a time.  </p> 
     

      <p className={` ${isDark && "text-[#F5F5F5]"}  font-inter600`}> {`I Convert ideas into something extraordinary—because ordinary is just not in my vocabulary.`}   </p> 
      </div> 
    </div>

    {/* second section  */}

    <div className=" overflow-hidden  mt-24 flex w-full justify-center">

      <div className=" w-full flex gap-4 justify-center flex-shrink-0 flex-wrap max-w-xl">

        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Posters`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Illustrations`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#UI&UX`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Branding`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Illustration`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Graphic Design`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Design Review`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Social Media Posts`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Logos`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Doodling`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Redesign`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Typography`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`#Mobile First`}</h1>
        <h1 className=" border font-inter400 text-lg rounded-full px-2 py-[1px] text-[#6B6A6A]"> {`And Mooooore`}</h1>



        </div> 

    </div>



    {/* did a frw  */}

    <div className="  mt-24 overflow-hidden flex w-full justify-center">

<div className=" w-full flex  justify-center max-w-xl">


  <h1 className={` ${isDark ? " text-[#8A8686]" : "text-[#2A2A2A]"} font-inter600 text-7xl`}>Did a few. </h1>





  </div> 

</div>
    {/* did a frw  */}



{/* the sites  */}
<div className="  mt-24 overflow-hidden pb-14 flex flex-col items-center w-full justify-center">

<div className=" w-full  border-black/40 pb-3  border-b-[1px]  justify-center grid  grid-cols-2 gap-10 max-w-xl">

  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

    <h1 className="  font-inter400"> loop.lk </h1> 
    <a href="https://loop.lk/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</a>

  </div>


  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

<Image src={'/site1.png'} alt="" width={200} height={200} className=" w-14 h-fit object-cover" />

<h1 className="  font-inter400"> UI/UX & Illustrations </h1> 


</div>









  </div> 


  <div className=" w-full mt-8  border-black/40 pb-3  border-b-[1px]  justify-center grid  grid-cols-2 gap-10 max-w-xl">

  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

    <h1 className="  font-inter400"> ceylonherbrelish.com </h1> 
    <a href="https://ceylonherbrelish.com/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</a>


  </div>


  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

<Image src={'/site2.png'} alt="" width={200} height={200} className=" w-14 h-fit object-cover" />

<h1 className="  font-inter400"> UI/UX & Illustrations </h1> 


</div>









  </div> 

  <div className=" w-full mt-8  border-black/40 pb-3  border-b-[1px]  justify-center grid  grid-cols-2 gap-10 max-w-xl">

  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

    <h1 className="  font-inter400"> theplantlegacy.com </h1> 
 
    <a href="https://theplantlegacy.com/" target="_blank" rel="noopener noreferrer"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</a>

  </div>


  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

<Image src={'/site3.png'} alt="" width={200} height={200} className=" w-14 h-fit object-cover" />

<h1 className="  font-inter400"> UI/UX & Illustrations </h1> 


</div>









  </div> 

  <div className=" w-full mt-8  border-black/40 pb-3  border-b-[1px]  justify-center grid  grid-cols-2 gap-10 max-w-xl">

  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

    <h1 className="  font-inter400"> 2xdev.com </h1> 
    <a href="https://2xdev.com" target="_blank" rel="noopener noreferrer"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg></a>


  </div>


  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

<Image src={'/site2.png'} alt="" width={200} height={200} className=" w-14 h-fit object-cover" />

<h1 className="  font-inter400"> UI/UX & Illustrations </h1> 


</div>









  </div> 

  <div className=" w-full mt-8  border-black/40 pb-3  border-b-[1px]  justify-center grid  grid-cols-2 gap-10 max-w-xl">

  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

    <h1 className="  font-inter400">Forloop Instagram Page </h1> 
    <a href="https://www.instagram.com/forloop.app?igsh=MWFtZHp0cjlxY2VwbA==" target="_blank" rel="noopener noreferrer"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</a>


  </div>


  <div className={ ` ${isDark && "text-[#F5F5F5]"} flex items-center justify-between `}>

<Image src={'/site5.png'} alt="" width={200} height={200} className=" w-14 h-fit object-cover" />

<h1 className="  font-inter400"> UI/UX & Illustrations </h1> 


</div>









  </div> 


  

</div>
{/* the sites  */}


{/* behance  */}

<div className="  mt-12 overflow-hidden flex w-full justify-center">

<div className=" w-full flex items-center flex-col  justify-center max-w-xl">


  <h1 className={` ${isDark ? "text-[#F5F5F5]" : "text-[#2A2A2A]"} font-inter600 text-xl  `}>More fun here! </h1>

  <Image src={'/vector.png'}  alt="" width={100} height={100} className=" w-28 h-fit object-cover" />



  <div className=" grid  grid-cols-2 gap-20 mt-8">

    <div className=" flex gap-3 items-center">
      <Image  src={'/behance.png'}  alt="" width={200} height={200} className=" w-10 h-10 object-cover"/>
         
         <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/nesharaganesha"> 
      <h1 className={ ` ${isDark && " text-[#F5F5F5]"} font-inter600 `}>Behance/Nesharaj </h1>
      </a>
    </div>

    <div className=" flex gap-3 items-center">
      <Image  src={'/dribble.png'}  alt="" width={200} height={200} className=" w-10 h-10 object-cover"/>
      <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/shots/16801184-8X-means-BOX"> 
      <h1 className={ ` ${isDark && " text-[#F5F5F5]"} font-inter600 `}>Dribble/Nesharaj </h1>
    </a>
    </div>




  </div>





  </div> 

</div>
{/* behance  */}



<div className=" w-full overflow-hidden flex p-4 mt-20 justify-center">

  <div className=" max-w-4xl flex justify-between items-center w-full">

    <h1 className={` ${isDark && " text-[#F5F5F5]"} font-inter400 text-lg `}> Call</h1>
    <h1 className={` ${isDark && " text-[#F5F5F5]"} font-inter400 text-lg `}> Message</h1>


    </div> 


   

</div>


<div className=" w-full overflow-hidden flex justify-center">
<div className="max-w-5xl ">

<h1 className={` ${isDark && "text-[#F5F5F5]"}  font-inter600 text-[120px] `}> +94775441451 </h1> 

</div>
</div>


<div className=" w-full overflow-hidden mt-20 flex justify-center">

  <div className="  max-w-4xl grid grid-cols-2">

    <div> </div>

    <div className="flex-col flex gap-5 -ml-5"> 
      <div className=" flex  gap-5">
      <Image width={500} height={500} src={'/nesha.png'} alt="" className=" w-48 h-fit object-cover" />

      <h1 className={` ${isDark ? "text-[#F5F5F5]" : "text-[#2A2A2A] "}  font-inter400 `}>  <span className={` ${isDark ? " bg-[#F5F5F5]" : "bg-[#2A2A2A]"}  inline-block align-middle w-4 h-4 rounded-sm`}> </span>  ganeshanesharaj@gmail.com</h1>
      </div>


      <h1 className={` ${isDark ? "text-[#F5F5F5]" : "text-[#2A2A2A] "}  font-inter400 `}>  <span className={`  inline-block align-middle w-4 h-4 rounded-sm ${isDark ? "bg-white" : "bg-[#2A2A2A]"} `}> </span> {`I have a deep passion for drawing and a love for music, which often accompany me on my travels, especially to the mountains. 
I also enjoy immersing myself in philosophical books.`}</h1>

      <div> 

      </div>
      </div> 
    </div> 

</div>

    </div>
  );
}

import React from 'react';
import { Link } from "react-router-dom";
import  { useState } from "react";
import Searchbar from './Searchbar';
import {BsStarFill} from 'react-icons/bs'; 
import {FaStarHalfAlt} from 'react-icons/fa';
import {BsStar} from 'react-icons/bs';
import Logo from './Images/Logo.jpg';
import mango from './Images/mango.jpg';
import Nini  from './Images/Nini.jpeg';
import Festival from './Images/Festival.jpeg';
import Hollylook from './Images/Hollylook.jpeg';
import Royalvega from './Images/Royalvega.jpeg';
import  Tomatos from './Images/Tomatos.jpeg';
import  Rkitchen from './Images/Rkitchen.jpg';
import Tinello from './Images/Tinello.jpg';
import Thesquare from './Images/Thesquare.jpg';
import Punjabi from "./Images/Punjabi.jpg";
import Desserts from"./Images/Desserts.jpeg";
import Kathiyavadi from './Images/Kathiyavadi.jpeg';
import Gujrati from "./Images/Gujrati.jpeg";
import Mexican from "./Images/Mexican.jpeg";
import Drink from  "./Images/Drink.jpeg";
import Chinese from"./Images/Chinese.jpeg";
import SouthIndian from "./Images/SouthIndian.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, EffectCoverflow } from "swiper";








export default function Home() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleSeeMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  

  return (
    <>
     <Searchbar/>
        <section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 ">
      <div class="p-4 md:w-1/3 hover:bg-stone-50 ">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={mango} alt="img"/>
          <div class="p-6 space-y-4">
            <h2 class="text-4xl	 text-black	font-bold	">@Mango</h2>
            <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><FaStarHalfAlt/><BsStar/></div>
            <p class="leading-relaxed mb-3">Sindhu Bhavan Road, Ahmedabad </p>    
          
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 hover:bg-stone-50">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Nini} alt="blog"/>
          <div class="p-6 space-y-4">
            <h2 class="text-4xl	 text-black	font-bold">Nini's Kitchen</h2>
            <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><FaStarHalfAlt/><BsStar/></div>
            <p class="leading-relaxed mb-3">Prahlad Nagar, Ahmedabad</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 hover:bg-stone-50">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Festival} alt="blog"/>
          <div class="p-6 space-y-4">
            <h2 class="text-4xl	 text-black	font-bold">365 The Festivals</h2>
            <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div>
            <p class="leading-relaxed mb-3">opp. Vaishnodevi Temple, Ahmedabad</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  

  
</section>

<section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3 hover:bg-stone-50">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Hollylook} alt="img"/>
          <div class="p-6 space-y-4">
            <h2 class="text-4xl	 text-black	font-bold	">THE HILLOCK</h2>
            <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div>
            <p class="leading-relaxed mb-3">SP Ring Road,Ahmedabad </p>    
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 hover:bg-stone-50">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Royalvega} alt="blog"/>
          <div class="p-6 space-y-4">
            <h2 class="text-4xl	 text-black	font-bold">Royal Vega</h2>
            <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><FaStarHalfAlt/><BsStar/></div>
            <p class="leading-relaxed mb-3">Judges Bungalow Road, Ahmadabad </p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 hover:bg-stone-50">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Tomatos} alt="blog"/>
          <div class="p-6 space-y-4">
            <h2 class="text-4xl	 text-black	font-bold">Tomato's
</h2>
            <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div>
            <p class="leading-relaxed mb-3">Navrangpura Ahmedabad</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    {isShowMore && (
       <section class="text-gray-600 body-font">
       <div class="container px-5 py-24 mx-auto">
         <div class="flex flex-wrap -m-4">
           <div class="p-4 md:w-1/3 hover:bg-stone-50">
             <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Rkitchen} alt="img"/>
               <div class="p-6 space-y-4">
                 <h2 class="text-4xl	 text-black	font-bold	">R Kitchen
</h2>
                 <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><FaStarHalfAlt/><BsStar/></div>
                 <p class="leading-relaxed mb-3">Sola Road, Ahmedabad</p>    
               </div>
             </div>
           </div>
           <div class="p-4 md:w-1/3 hover:bg-stone-50">
             <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Tinello} alt="blog"/>
               <div class="p-6 space-y-4">
                 <h2 class="text-4xl	 text-black	font-bold">Tinello</h2>
                 <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><FaStarHalfAlt/><BsStar/></div>
                 <p class="leading-relaxed mb-3">Hyatt Regency, Ahmedabad</p>
                
               </div>
             </div>
           </div>
           <div class="p-4 md:w-1/3 hover:bg-stone-50">
             <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <img class="lg:h-60 md:h-36 w-full object-cover object-center" src={Thesquare} alt="blog"/>
               <div class="p-6 space-y-4">
                 <h2 class="text-4xl	 text-black	font-bold">The Square</h2>
                 <div class="text-black flex space-x-1.5 text-cente ml-40"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div>
                 <p class="leading-relaxed mb-3">Novotel, Ahmedabad</p>
                 
                 </div>
               </div>
             </div>
           </div>
         </div>
       
     
       
     </section>
      )}
       <div ></div>
      <button onClick={toggleSeeMoreLess} class='border-2 h-8 w-40 rounded-lg border-slate-600 text-2xl text-white bg-green-900 hover:bg-green-600'>
        {isShowMore ? "See Less" : "See More"}
      </button>
     
</section>




      <section class="mt-20 w-screen">
        <div class="">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay:2500,
              disableOnInteraction:false,
            }}
            
            pagination={{
              clickable: true,
            }}
           
            modules={[Autoplay,Pagination,EffectCoverflow]}
           className="mySwiper"
          >
            <SwiperSlide >
            <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50 ">Punjabi</p>
              <img
                class="object-fill   md:h-96 w-screen"
                 width="100%"  src={Punjabi}
                alt="/"
              />
           </SwiperSlide>
           <SwiperSlide>
           <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">Desserts</p>
              <img
                className="object-fill md:h-96 w-screen"
                 width="100%" src={Desserts}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
            <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">Mexican</p>
              <img
                className="object-fill  md:h-96 w-screen"
                 width="100%" src={Mexican}
                alt="/"
              />
              </SwiperSlide>
               
            <SwiperSlide>
            <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">Kathiyavadi</p>
              <img
                className="object-fill  md:h-96 w-screen"
                 width="100%" src={Kathiyavadi}
                alt="/"
              />
              </SwiperSlide>
             <SwiperSlide>  
             <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">Chinese</p>           
              <img
                className="object-fill  md:h-96 w-screen"
              width="100%" src={Chinese}
                alt="/"
              />
            </SwiperSlide>
 
            <SwiperSlide>
            <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">Soft Drink</p>
              <img
                className="object-fill  md:h-96 w-screen"
                 width="100%" src={Drink}
                alt="/"
              />
               </SwiperSlide>
           <SwiperSlide>
          
           <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">Gujrati</p>
           <img
                className="object-fill  md:h-96 w-screen"
                 width="100%" src={Gujrati}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
            <p class="mb-2 border-2 border-slate-600 bg-slate-600 text-3xl font-bold text-slate-50">South Indian</p>
              <img
                className="object-fill md:h-96 w-screen"
                 width="100%" src={SouthIndian}
                alt="/"
              />
              </SwiperSlide>
              
          </Swiper>
        </div>
      </section>
  

      <footer class="text-white body-font bg-black">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white ">
        <img class="h-20 w-32" src={Logo} />
        </a>
     
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT Table-mate</h2>
        <nav class="list-none mb-10">
          <li>
          <Link className='mr-5 hover:text-rose-600 focus:text-rose-600' to="/about"> About Us</Link>
          </li>
          <li>
          <Link className='mr-5 hover:text-rose-600  focus:text-rose-600' to="/service"> Service </Link>
          </li>
          <li>
          <Link className='mr-5 hover:text-rose-600  focus:text-rose-600' to="/contact"> Contact  </Link>
          </li>
          
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">FOR  RESTAURANTS</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Partner With Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Apps For You</a>
          </li>
          
        </nav>
      </div>
     
     
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500  text-center sm:text-center">Copyright     Table-Mate. All Right Reserved | Design by Student
      
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
   

    </>
  )
    
}

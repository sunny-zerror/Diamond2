"use client"
import { RiArrowLeftLine } from '@remixicon/react';
import Link from 'next/link';
import React from 'react';

const Page = () => {

    return (
        <div>
        <div className="center w-full p-5 montserrat">
  
          <Link className='w-full h-full flex' href="/" >
            <p className='flex items-center gap-2 text-lg  font-medium'> <RiArrowLeftLine />  Back</p>
          </Link>
        </div>
        <div className="w-full   flex flex-col text-center items-center  spectral-regular ">
          <div className="center flex-col gap-10 w-full py-10">
            <p className=' text-3xl md:text-5xl text-[#6d1d45] '>What is
              DIAMOND2 <sup>®</sup> ?</p>
          </div>
  
          <img src="/images/blogs/blog_cvr_1.webp" alt="" />
          <div className=" w-[90%] md:w-[50%] md:text-xl  text-start py-20">
            <p>Diamond2’s origins lie in innovative technology and advanced science.
              Born out of a technological breakthrough, our extraordinary lab-grown
              diamond rivals the mined diamonds with unique properties aimed at
              appealing to the modern consumer of fine jewellery. <br /><br />
              Each of Diamond2 <sup>®</sup>
              lab-grown diamond share identical optical,
              chemical, and physical characteristics with mined diamonds,
              meticulously produced in a laboratory setting by application of science
              that borders to alchemy! The result is a colourless (D, E, F) to near
              colourless (G, H, I) Diamond2®
              lab-grown diamond designed to appeal
              to the modern consumer and jeweller. <br /><br />
              Diamond2®
              , with a sparkle and fire equal to that of the mined
              diamonds, our unique offering has been designed to appeal to
              jewellers and consumers in search of contemporary fine jewellery
              that moves beyond the tradition-bound offerings of legacy brands.
              The Diamond2®
              fine jewellery collection is designed and developed by
              our in-house creative team based in Milan, Italy, the world’s design
              capital.</p> <br /><br />
          </div>
          <div className="center flex-col gap-10  w-full pb-10">
            <p className='text-3xl md:text-5xl text-[#6d1d45]'>Why
              DIAMOND2 <sup>®</sup> ?</p>
          </div>
          <img src="/images/blogs/blog_cvr_2.webp" alt="" />
          <div className="w-[90%] md:w-[50%] md:text-xl  text-start py-32">
            <p>Our exceptional lab-grown Diamond2®
              possesses a fire and brilliance
              that equals that of the mined diamonds and respects mother nature. <br /><br />
              Thanks to our advanced technologies, Diamond2 <sup>®</sup>
              offers an ethically
              and responsibly produced lab-grown diamond that is truly oneof-a-kind. Diamond2<sup>®</sup>
              is able to place into the hands of its clients
              an aesthetically stunning lab-grown diamond without the high
              environmental toll associated with mining for diamonds and other
              precious stones. Our lab-grown diamond deliver unparalleled
              consistency in shape and sparkle together with a scintillating
              appearance and hardness that equals of the mined diamonds.</p> <br /><br />
          </div>
        </div>
      </div>
    );
};

export default Page; 




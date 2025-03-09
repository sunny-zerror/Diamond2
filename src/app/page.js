"use client";
import React, { Suspense } from "react"
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import {
  RiArrowDropUpLine,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";
import Headroom from "react-headroom";
import Scene from "./components/Scene";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const hero_video = [
  "/videos/hero_card_vid_2.MP4",
  "/images/bg_scroll_img_5_compressed.webp",
  "/images/bg_scroll_img_1_compressed.webp",
  "/images/bg_scroll_img_3_compressed.webp",
]
const cardData = [
  {
    id: 1,
    bgColor: "",
    img: "/images/collection/cln_1.png",
    width: "w-[15vw]",
    txtHeading: " CEREMONY & ENGAGEMENT COLLECTION",
    txtPara: "“A work of exquisite beauty, the Diamond2® solitaire seduces the heart with its captivating brilliance and fire.”",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
  },
  {
    id: 2,
    bgColor: "",
    img: "/images/collection/cln_5.png",
    width: "w-[15vw]",
    responsive_width: "w-[45vw]",
    txtHeading: " INTERSTELLAR COLLECTION",
    txtPara: "“Celestial bodies are captured in miniature through an exceptionalrange of pieces evoking striking constellations.”",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
    justifyContent: "justify-end",
  },
  {
    id: 3,
    bgColor: "",
    img: "/images/collection/cln_2.png",
    width: "w-[25.7vw]",
    txtHeading: "Riviera collection",
    txtPara: "“Delicate petals and imaginative settings seduce the eye and warm the heart.”",
    textSize: "text-[2.5vw]",
    responsive_width: "w-[95vw]",
    textSizePara: "text-[1vw]",
  },
  {
    id: 4,
    bgColor: "",
    img: "/images/collection/cln_6.png",
    width: "w-[15vw]",
    txtHeading: "Lab-Grown Emerald collection",
    txtPara: "“At Diamond2®, we offer an impressive selection of stone cuts to allow clients the opportunity.”",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
  },
  {
    id: 5,
    bgColor: "",
    img: "/images/collection/cln_4.png",
    width: "w-[15vw]",
    txtHeading: "High Jewellery collection",
    txtPara: "“At Diamond2®, we also offer a selection of high jewellery pieces that are designed to captivate and inspire.”",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
    justifyContent: "justify-end",
  },
];
const scrollToTop = () => {
  const scrollStep = -window.scrollY / (500 / 5);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

export default function Home() {
  const [videoIndex, setVideoIndex] = useState(0);

  const [logoSrc, setLogoSrc] = useState("/images/logo_text.png");
  const [logoWidth, setLogoWidth] = useState("w-[30%] lg:w-[14%]");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPosition > windowHeight * 0.2) {
        setLogoSrc("/images/logo.png");
        setLogoWidth("w-[7%] lg:w-[2%]"); // Customize the width here
      } else {
        setLogoSrc("/images/logo_text.png");
        setLogoWidth("w-[30%] lg:w-[10%]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    gsap.utils.toArray(".card_child").forEach((card) => {
      const cardPopup = card.querySelector(".card_popup");
      const cardParent = card.closest(".card_parent");
      const initialHeight = cardParent.offsetHeight + "px";
      const initialWidth = cardParent.offsetWidth + "px";

      card.addEventListener("mouseenter", () => {
        gsap.to(cardPopup, { scale: 1, duration: 0.5, ease: "power1" });

        gsap.to(cardParent, {
          height: "+=1.5vw",
          width: "+=2.2vw",
          duration: 0.7,
          ease: "power2"
        });
        gsap.fromTo(
          cardPopup.querySelector(".popup-text"),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "power1" }
        );
        gsap.fromTo(
          cardPopup.querySelector(".popup-text-2"),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "power1" }
        );
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(cardPopup, { scale: 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(cardParent, {
          height: initialHeight,
          width: initialWidth,
          duration: 0.7,
        });
      });
    });
  }, []);

  useEffect(() => {

    if (window.innerWidth <= 768) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".scroll_child_section_1", { scale: 0.8 });

    const triggers = [];

    gsap.utils.toArray(".scroll_parent_section_1").forEach((parent, index) => {
      const child = parent.querySelector(".scroll_child_section_1");
      const heading = parent.querySelector(".our_cln_heading");
      const heading2 = parent.querySelector(".our_cln_heading_2");

      if (child) {
        gsap.timeline({
          scrollTrigger: {
            trigger: parent,
            start: "top 72%",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).fromTo(child, { scale: 0.8 }, { scale: 1, ease: "power2.out" }, "-=0.5")
          .fromTo(heading, { height: 0 }, { height: "15vw", ease: "power2.out" }, "-=0.5")
          .fromTo(heading2, { y: 100 }, { y: 0, ease: "power2.out", delay: .1 }, "-=0.5")
      }

      // Detect when scroll_child_section_1 reaches the top
      const trigger = ScrollTrigger.create({
        trigger: child,
        start: "top top",
        onEnter: () => setVideoIndex(() => Math.min(index + 1, hero_video.length - 1)), // Avoid out-of-bounds error
        onLeaveBack: () => setVideoIndex(() => Math.max(index, 0)), // Prevent negative index
      });

      triggers.push(trigger);
    });
    // **INSERT NEW CODE HERE**
    gsap.utils.toArray(".scroll_parent_section_1").forEach((parent) => {
      const targetCards = parent.querySelectorAll(".card_parent.justify-end");

      if (targetCards.length > 0) {
        gsap.fromTo(
          targetCards,
          { y: "-45%" },
          {
            y: 0,
            scrollTrigger: {
              trigger: parent,
              start: "top 72%", // Start a bit earlier
              end: "bottom bottom", // End later for a smoother transition
              scrub: true, // Slower reaction to scrolling
            },
          }
        );
      }

    });

    gsap.utils.toArray(".scroll_parent_section_2").forEach((parent) => {
      const previousChild = parent.previousElementSibling?.querySelector(".scroll_child_section_1");

      if (previousChild) {
        gsap.timeline({
          scrollTrigger: {
            trigger: parent,
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).fromTo(previousChild, { scale: 1 }, { scale: 0.8, ease: "power2.out" });
      }
      gsap.set(".scroll_child_section_1", { scale: 0.8 });
    });



    gsap.fromTo(
      ".ftr_img",
      { y: "-50%" },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".ftr",
          // markers:true,
          start: "top 72%", // Start a bit earlier
          end: "bottom bottom", // End later for a smoother transition
          scrub: true, // Slower reaction to scrolling
        },
      }
    );
    gsap.fromTo(
      ".hero_hd_1",
      { y: 200 },
      {
        y: 0,
        duration: 1,
        delay: .5,
      }
    );
    gsap.fromTo(
      ".hero_hd_2",
      { y: -200 },
      {
        y: 0,
        duration: 1,
        delay: .5,
      }
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div suppressHydrationWarning className=" spectral-regular">
      <Headroom>
        <div className="nav text-white p-5 w-full center z-[10]">
          <img className={`${logoWidth} cursor-pointer`} src={logoSrc} alt="Logo" />
        </div>
      </Headroom>
      <div className="bg-hero-page w-full fixed z-[-1] top-0 left-0 h-screen bg-black">
        <div className="overlay fixed top-0 left-0 w-full h-full bg-[#00000034]"></div>
        {hero_video[videoIndex].endsWith(".MP4") ? (
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
            src={hero_video[videoIndex]}
          ></video>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={hero_video[videoIndex]}
            alt="Hero Background"
          />
        )}
      </div>

      <div className="w-full   uppercase spectral-extralight h-screen  lg:h-[70vh]  text-white py-20 md:py-0   flex flex-col  justify-end items-end md:px-[20vw] lg:px-[23vw] ">
        <div className="w-full text-4xl lg:text-8xl  overflow-hidden italic   ">
          <p className="hero_hd_1" >
            Love more
          </p>
        </div>
        <div className="w-full flex  items-center justify-end text-4xl lg:text-8xl overflow-hidden">
          <p className="hero_hd_2" >
            spend less
          </p>
        </div>
      </div>
      <div className="  scroll_parent_section_1  w-full h-screen  lg:h-[130vh] ">
        <div className=" scroll_child_section_1 w-full h-full flex flex-col lg:flex-row bg-white    p-5 py-10 lg:p-20 ">
          <div className=" w-full lg:w-[50%] h-full center">
            <div className=" w-full h-[50%]  md:w-[80%] md:h-[80%] bg-blue-100">
              <Suspense fallback={null}>
              <Scene />
              </Suspense>
            </div>
          </div>
          <div className=" w-full h-[50%]   lg:w-[50%] spectral-light md:h-full  flex flex-col gap-10 items-center justify-center text-center">
            <p className="capitalize text-2xl md:text-4xl  ">
              {" "}
              <span className="text-[#6d1d45] italic text-4xl md:text-6xl   ">
                {" "}
                A world beyond
              </span> <br />   mined diamonds
            </p>
            <p className=" w-full  text-sm  lg:w-[70%] leading-5  lg:text-xl ">
              Our revolutionary lab-grown Diamond2<sup>®</sup> is an innovative
              breakthrough that seeks to disrupt the tradition-bound world of fine
              jewellery dominated by the mined diamonds. <br /><br />
              Our unique, lab-grown diamonds are designed to seduce today’s
              sophisticated, forward-looking clientele, thanks to its rarefied beauty
              and remarkable brilliance that equals that of mined diamonds but at
              significantly lesser cost.
              <br /><br />

              Discover the beauty of Diamond2<sup>®</sup> . <br />Discover a world beyond mined diamonds.
            </p>
          </div>
        </div>
      </div>
      <div className="scroll_parent_section_2   w-full h-[70vh] bg-transparent"></div>
      <div className=" scroll_parent_section_1 overflow-hidden  w-full ">
        <div className=" max-[600px]:hidden overflow-hidden scroll_child_section_1 w-full h-full flex flex-col items-center justify-between bg-white  pt-20 pb-32 ">
          <div className="  our_cln_heading   overflow-hidden  w-full h-[15vw]  flex justify-start items-center flex-col">
            <div className="h-fit w-full flex overflow-hidden items-center justify-center  flex-col">
              <div className="our_cln_heading_2 bg text-center">
                <p className="text-7xl spectral-extralight-italic capitalize  "> jewellery collection</p>
                <p className="mt-3 text-xl opacity-70">Diamond2® reimagines the world of fine jewellery with timeless <br />
                  contemporary designs featuring our revolutionary lab-grown diamond.</p>
              </div>
            </div>
          </div>
          <div className="  w-auto h-[38vw]   grid grid-flow-col aspect-square  gap-3">
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`h-[38vw] card_parent ${card.bgColor} ${card.width
                  } origin-center flex flex-col ${card.justifyContent || ""}`}
              >
                <div className="w-full h-fit">
                  <div className="card_child relative flex items-center justify-center w-full h-fit">
                    <img
                      className="w-full object-cover h-fit"
                      src={card.img}
                      alt=""
                    />
                    <div className="card_popup absolute  w-[90%] h-[90%] scale-0 bg-white z-[1] flex items-center justify-evenly   text-center flex-col">
                      <div className="popup-text uppercase center">
                        <p className={`  leading-tight w-[80%] text-center  ${card.textSize}`}>
                          {card.txtHeading}
                        </p>
                      </div>
                      <div className="popup-text-2 w-[80%] leading-[1vw]  ">
                        <p className={`  ${card.textSizePara}`}>{card.txtPara}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm montserrat uppercase  leading-3 mt-2 ">{card.txtHeading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" min-[600px]:hidden  w-full h-fit bg-white  p-4 ">
          <div className="overflow-hidden  w-full   ">
            <div className="h-fit  w-full flex overflow-hidden items-center justify-center  flex-col">
              <div className=" bg text-center">
                <p className="text-3xl m-2 spectral-extralight-italic capitalize  "> jewellery collection</p>
                <p className="mt-3 text-xs text-center px-10 opacity-70">Diamond2® reimagines the world of fine jewellery with timeless
                  contemporary designs featuring our revolutionary lab-grown diamond.</p>
              </div>
            </div>
          </div>
          <div
            className="grid w-full h-fit gap-3 mt-6"
            style={{
              gridTemplateColumns: "repeat(2, 1fr)", // 2-column layout
              gridAutoRows: "auto", // Auto height rows
            }}
          >
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className={` ${card.bgColor} origin-center mt-5 flex ${index === 1 || index === 4 ? "items-center justify-end pt-20 " : ""}`}
                style={{
                  width: "100%",
                  gridColumn: index % 3 === 2 ? "span 2" : "span 1", // 3rd card spans 2 columns
                  gridRow: index === 1 || index === 4 ? "span 2" : "span 1", // Make 2nd and 5th card double height
                }}
              >
                <div className="w-full h-fit">
                  <div className=" relative flex items-center justify-center w-full h-fit">
                    <img className="w-full object-cover h-fit" src={card.img} alt="" />
                    <div className="card_popup absolute w-[90%] h-[90%] scale-0 bg-white z-[1] flex items-center justify-evenly text-center flex-col">
                      <div className="popup-text">
                        <p className={` ${card.textSize}`}>      {card.txtHeading}</p>
                      </div>
                      <div className="popup-text-2 w-[80%] leading-[1vw]">
                        <p className={` ${card.textSizePara}`}>{card.txtPara}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm uppercase ">   {card.txtHeading}</p>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>

      <div className=" scroll_parent_section_2 w-full h-[50vh] bg-transparent"></div>

      <div className=" scroll_parent_section_1 w-full  lg:h-[140vh]  ">
        <div className=" scroll_child_section_1 w-full h-full flex flex-col lg:flex-row bg-white p-5   lg:p-20 lg:py-32 ">
          <div className=" w-full  lg:w-[50%] h-full flex flex-col-reverse lg:flex-col items-center justify-evenly  lg:px-10 ">
            <div className="  m-10 lg:m-0  w-full ">
              <p>
                Diamond2®
                operates at the intersection of fine jewellery and modern
                science. Headquartered in Singapore, with sales and distribution
                offices in the US, India and UAE, the company is the sole worldwide
                manufacturer and distributor of Diamond2®
                brand. <br /> <br />The Diamond2®
                fine jewellery collection is designed and developed by
                our in-house creative team based in Milan, Italy, the world’s design
                capital.
              </p>
              <div className="flex mt-10 gap-4">
                <RiInstagramFill />
                <RiFacebookBoxFill />
                <RiTwitterFill />
              </div>
            </div>
            <div className="">

              <img
                className="w-[50%] mt-10"
                src="/images/blogs/blog_cvr_1.png"
                alt=""
              />
              <div className="flex mt-2 flex-col">

                <p className="montserrat ">What is Diamond2 ? </p>
                <p className="montserrat text-xs underline cursor-pointer opacity-60 hover:opacity-100 w-fit ">Read More</p>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-[50%] h-full  flex flex-col gap-10 items-center justify-center text-center">
            <div className="">

              <img
                className="w-[70%]"
                src="/images/blogs/blog_cvr_2.png"
                alt=""
              /><div className="flex mt-2 items-start flex-col">

                <p className="montserrat ">About Stones and Cuts </p>
                <p className="montserrat text-xs underline cursor-pointer opacity-60 hover:opacity-100 w-fit ">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll_parent_section_2 w-full h-[80vh] bg-transparent"></div>
      <div className=" w-full  bg-white  p-5 py-20 ">
        <div className="">


          <p className="text-center text-6xl capitalize  ">The Diamond2 <span className="text-[#6d1d45]"> Stores</span></p>
          <div className="w-full flex  flex-col md:flex-row my-20 ">
            <div className=" w-full md:w-[50%] ">
              <img className="h-full w-full object-cover" src="/images/stores/store_1.png" alt="" />
            </div>
            <div className=" w-full md:w-[50%] mt-5 md:mt-0 md:p-10 montserrat ">
              <div className="flex w-full justify-evenly">
                <div className="mb-6 h-[50%] w-[50%] ">
                  <h2 className="text-lg font-medium underline cursor-pointer uppercase text-[#6d1d45]">SINGAPORE Headquarters <br /> & Holding Co.</h2>
                  <p className="mt-2 font-medium">Diamond2®, Flagship Store</p>
                  <p className="text-gray-500 opacity-80">Wisma Atria</p>
                  <p className="mt-2 font-medium">Diamond2® Store</p>
                  <p className="text-gray-500 opacity-80">VivoCity</p>
                  <p className="mt-2 font-medium">Corporate Headquarters</p>
                  <p className="text-gray-500 opacity-80">Beach Road, Singapore</p>
                </div>

                <div className=" h-[50%] w-[50%]  ">
                  <h2 className="text-lg underline font-medium cursor-pointer text-[#6d1d45]">INDIA</h2>
                  <p className="mt-2 font-medium">India HQ & Experience Center</p>
                  <p className="text-gray-500 opacity-80">Gurgaon, Haryana</p>
                  <p className="mt-2 font-medium">Registered Corporate Office</p>
                  <p className="text-gray-500 opacity-80">New Delhi</p>
                </div>
              </div>
              <div className="flex w-full mt-5 justify-evenly">

                <div className=" h-[50%] w-[50%]">
                  <h2 className="text-lg underline font-medium cursor-pointer text-[#6d1d45]">USA</h2>
                  <p className="mt-2 font-medium">Corporate Office</p>
                  <p className="text-gray-500 opacity-80">New York, Manhattan</p>
                </div>

                <div className="h-[50%] w-[50%]">
                  <h2 className="text-lg underline font-medium cursor-pointer text-[#6d1d45]">MIDDLE EAST</h2>
                  <p className="mt-2 font-medium">Fulfilment Center</p>
                  <p className="text-gray-500 opacity-80">Sharjah, U.A.E.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ftr overflow-hidden md:h-[100vh] -mt-1  lg:h-[120vh] flex-col bg-white center">
        <div className="w-full  overflow-hidden   lg:h-[80%]  xl:h-[60%] grid  grid-cols-2 lg:grid-cols-5  ">
          <div className="h-full  my-14  lg:m-0 px-2 flex flex-col justify-start">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img5_compressed.webp" alt="" />
            </div>
            <p className="   lg:font-medium montserrat uppercase  ">Wisma Atria Store</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col  justify-end  ftr_img ">
            <div className=" h-[70vw]  md:h-[25vw]    w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img3_compressed.webp" alt="" />
            </div>
            <p className="   lg:font-medium montserrat uppercase  ">Diamond Cut Rings</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img4_compressed.webp" alt="" />
            </div>
            <p className="   lg:font-medium montserrat uppercase  ">High Jwellery Collection</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-end  ftr_img ">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img2_compressed.webp" alt="" />
            </div>
            <p className="   lg:font-medium montserrat uppercase  ">Fine Jewellary Collection</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img1_compressed.webp" alt="" />
            </div>
            <p className="   lg:font-medium montserrat uppercase  ">Diamond2 Boxes</p>
          </div>
        </div>
        <div className="w-full h-[25%]  montserrat flex flex-col lg:flex-row items-end justify-between p-10">
          <img className=" md:w-[15%]" src="/images/logo_text_2.png" alt="" />
          <p className="  w-full my-5 lg:m-0 lg:w-fit   flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
            Back to top
            <RiArrowDropUpLine />
          </p>

        </div>
      </div>
    </div>
  );
}

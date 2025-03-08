"use client";
import React from "react"
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
gsap.registerPlugin(useGSAP, ScrollTrigger);

const hero_video = [
  "/videos/hero video.mp4",
  "https://365ayearof.cartier.com/images/compressedImages/landing-fullscreen_02-opt-1920.WEBP",
  "https://365ayearof.cartier.com/images/compressedImages/landing-fullscreen_01-opt-1920.WEBP",
]
const cardData = [
  {
    id: 1,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
  },
  {
    id: 2,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
    justifyContent: "justify-end",
  },
  {
    id: 3,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[27vw]",
    textSize: "text-[2.5vw]",
    responsive_width: "w-[95vw]",
    textSizePara: "text-[1vw]",
  },
  {
    id: 4,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
  },
  {
    id: 5,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
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
          { y: "-42.5%" },
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
    <div suppressHydrationWarning>
      <Headroom>
        <div className="nav text-white  justify-between w-full flex items-center px-5 lg:px-10 xl:px-14   h-20 xl:h-32  z-[10]">
          <img className=" w-[30%] lg:w-[10%] cursor-pointer  " src="/images/logo.png" alt="" />
          <p className="text-2xl ">menu</p>
        </div>

      </Headroom>
      <div className="bg-hero-page w-full fixed z-[-1] top-0 left-0 h-screen bg-black">
        {hero_video[videoIndex].endsWith(".mp4") ? (
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
      </div>;

      <div className="w-full h-screen lg:h-[60vh] center ">
        <p className="text-white text-8xl">Hero Headline</p>
      </div>
      <div className="  scroll_parent_section_1  w-full  lg:h-[130vh] ">
        <div className=" scroll_child_section_1 w-full h-full flex flex-col lg:flex-row bg-white    p-5 py-10 lg:p-20 ">
          <div className=" w-full lg:w-[50%] h-full flex items-center justify-center ">
            <img
              className="h-full w-fit object-cover"
              src="https://365ayearof.cartier.com/images/chapter-1/article-2/compressedImages/Article-Header-opt-600.WEBP"
              alt=""
            />
          </div>
          <div className=" w-full  lg:w-[50%] h-full  flex flex-col gap-10 items-center justify-center text-center">
            <p className="capitalize text-5xl  ">
              {" "}
              <span className="text-purple-500 italic ">
                {" "}
                What is
              </span> <br /> diamond 2
            </p>
            <p className=" w-full text-lg  lg:w-[80%] leading-5  lg:text-xl ">
              Diamond2's origins lie in innovative technology and advance
              science. Each Diamond2 lab-grown diamond shares identical optical,
              chemical, and physical characteristics with mined diamonds,
              meticulously produced in a laboratory setting by application of
              science that borders to alchemy!
              <br />
              <br /> The result is a colourless (D, E, F) to near colourless (G,
              H, I) lab-grown diamond designed to appeal to the modern consumer
              and jeweller.
            </p>
          </div>
        </div>
      </div>
      <div className="scroll_parent_section_2 w-full h-[70vh] bg-transparent"></div>
      <div className=" scroll_parent_section_1  w-full ">
        <div className=" max-[600px]:hidden scroll_child_section_1 w-full h-full flex flex-col items-center justify-between bg-white  pt-20 pb-32 ">
          <div className="  our_cln_heading   overflow-hidden  w-full h-[15vw]  flex justify-start items-center flex-col">
            <div className="h-fit w-full flex overflow-hidden items-center justify-center  flex-col">
              <div className="our_cln_heading_2 bg text-center">
                <p className="text-7xl  ">our collection </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, optio.</p>
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
                      <div className="popup-text">

                        <p className={`   ${card.textSize}`}>
                          About collection
                        </p>
                      </div>
                      <div className="popup-text-2 w-[80%] leading-[1vw]  ">
                        <p className={`  ${card.textSizePara}`}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Tempora commodi at aperiam voluptates ducimus, facilis magni repellat sunt minus assumenda!</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">Collection1</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" min-[600px]:hidden  w-full h-fit bg-white  p-4 ">
          <div className="overflow-hidden  w-full   ">
            <div className="h-fit  w-full flex overflow-hidden items-center justify-center  flex-col">
              <div className=" bg text-center">
                <p className="text-5xl m-6 ">our collection </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, optio.</p>
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
                  <div className="relative flex items-center justify-center w-full h-fit">
                    <img className="w-full object-cover h-fit" src={card.img} alt="" />
                    <div className="card_popup absolute w-[90%] h-[90%] scale-0 bg-white z-[1] flex items-center justify-evenly text-center flex-col">
                      <div className="popup-text">
                        <p className={` ${card.textSize}`}>About collection</p>
                      </div>
                      <div className="popup-text-2 w-[80%] leading-[1vw]">
                        <p className={` ${card.textSizePara}`}>
                          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">Collection1</p>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>

      <div className=" scroll_parent_section_2 w-full h-[70vh] bg-transparent"></div>

      <div className=" scroll_parent_section_1 w-full lg:h-[120vh]  ">
        <div className=" scroll_child_section_1 w-full h-full flex flex-col lg:flex-row bg-white p-5   lg:p-20 lg:py-32 ">
          <div className=" w-full  lg:w-[50%] h-full flex flex-col-reverse lg:flex-col items-center justify-evenly  lg:px-10 ">
            <div className="  m-10 lg:m-0  w-full ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nemo ipsum quod iusto neque odio unde consectetur, corrupti
                dolore eligendi ab, voluptates totam, tempora necessitatibus
                illum impedit doloremque quam optio!
              </p>
              <div className="center mt-10 gap-4">
                <RiInstagramFill />
                <RiFacebookBoxFill />
                <RiTwitterFill />
              </div>
            </div>

            <img
              src="https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP"
              alt=""
            />
          </div>
          <div className=" w-full lg:w-[50%] h-full  flex flex-col gap-10 items-center justify-center text-center">
            <img
              src="https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="scroll_parent_section_2 relative w-full h-[180vh] bg-white center">
        <img className="w-full h-full object-cover " src="/images/store bg.jpeg" alt="" />
        <div className="absolute right-5  ">
          <p className="text-6xl">The Flagship Store</p>

        </div>
      </div>



      <div className="w-full  lg:h-[100vh] flex-col bg-white center">
        <div className="w-full h-[75%]  grid  grid-cols-2 lg:grid-cols-5  ">
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <img src="https://365ayearof.cartier.com/images/chapter-6/article-5/compressedImages/Article-Header-opt-300.WEBP" alt="" />
            <p className="   lg:font-medium  ">About img</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-end">
            <img src="https://365ayearof.cartier.com/images/chapter-6/article-7/compressedImages/Article-Header-opt-300.WEBP" alt="" />
            <p className="   lg:font-medium  ">About img</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <img src="https://365ayearof.cartier.com/images/chapter-6/article-5/compressedImages/Article-Header-opt-300.WEBP" alt="" />
            <p className="   lg:font-medium  ">About img</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-end">
            <img src="https://365ayearof.cartier.com/images/chapter-6/article-7/compressedImages/Article-Header-opt-300.WEBP" alt="" />
            <p className="   lg:font-medium  ">About img</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <img src="https://365ayearof.cartier.com/images/chapter-6/article-5/compressedImages/Article-Header-opt-300.WEBP" alt="" />
            <p className="   lg:font-medium  ">About img</p>
          </div>

        </div>
        <div className="w-full h-[25%] font-semibold flex flex-col lg:flex-row items-end justify-between p-10">
          <img className="lg:w-[10%]" src="/images/logo.png" alt="" />
          <p className="w-full text-center lg:w-fit">Lorem ipsum dolor sit amet.</p>
          <p className="  w-full my-5 lg:m-0 lg:w-fit   flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
            Back to top
            <RiArrowDropUpLine />
          </p>

        </div>
      </div>
    </div>
  );
}

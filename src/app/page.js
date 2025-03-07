"use client";

import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const hero_video = [
  "/videos/hero video.mp4",
  "/videos/hero video2.mp4",
  "/videos/hero video3.mp4",
]


gsap.registerPlugin(useGSAP, ScrollTrigger);

const cardData = [
  {
    id: 1,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    textSize: "text-2xl",
  },
  {
    id: 2,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    textSize: "text-2xl",
    justifyContent: "justify-end",
  },
  {
    id: 3,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[27vw]",
    textSize: "text-3xl",
  },
  {
    id: 4,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    textSize: "text-2xl",
  },
  {
    id: 5,
    bgColor: "",
    img: "https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP",
    width: "w-[15vw]",
    textSize: "text-2xl",
    justifyContent: "justify-end",
  },
];

export default function Home() {

  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".card_child").forEach((card) => {
      const cardPopup = card.querySelector(".card_popup");
      const cardParent = card.closest(".card_parent");
      const initialHeight = cardParent.offsetHeight + "px";
      const initialWidth = cardParent.offsetWidth + "px";

      card.addEventListener("mouseenter", () => {
        gsap.to(cardPopup, { scale: 1, duration: 0.5 });
        gsap.to(cardParent, {
          height: "+=1.5vw",
          width: "+=2vw",
          duration: 0.7,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(cardPopup, { scale: 0, duration: 0.4 });
        gsap.to(cardParent, {
          height: initialHeight,
          width: initialWidth,
          duration: 0.7,
        });
      });
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".scroll_child_section_1", { scale: 0.8 });

    const triggers = [];

    gsap.utils.toArray(".scroll_parent_section_1").forEach((parent, index) => {
      const child = parent.querySelector(".scroll_child_section_1");

      if (child) {
        gsap.timeline({
          scrollTrigger: {
            trigger: parent,
            start: "top 72%",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).fromTo(child, { scale: 0.8 }, { scale: 1, ease: "power2.out" });
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




  return (
    <div suppressHydrationWarning>
      <div className="nav fixed top-0 left-0 text-white justify-between w-full flex items-center px-14 h-32  z-[10]">
        <img className=" w-[10%] " src="/images/logo.png" alt="" />
        <p className="text-2xl ">menu</p>
      </div>
      <div className="  bg-hero-page   w-full fixed z-[-1] top-0 left-0 h-screen bg-black ">
        <video
          className=" w-full h-full object-cover "
          loop
          autoPlay
          muted
          src={hero_video[videoIndex]}
        ></video>
      </div>
      <div className="w-full h-[70vh] center">
        <p className="text-white text-8xl">Hero Headline</p>
      </div>
      <div className="  scroll_parent_section_1  w-full h-[130vh] ">
        <div style={{ transform: "scale(0.8)" }} className=" scroll_child_section_1 w-full h-full flex bg-white  p-20 ">
          <div className="w-[50%] h-full flex items-center justify-center ">
            <img
              className="h-full w-fit object-cover"
              src="https://365ayearof.cartier.com/images/chapter-1/article-2/compressedImages/Article-Header-opt-600.WEBP"
              alt=""
            />
          </div>
          <div className="w-[50%] h-full  flex flex-col gap-10 items-center justify-center text-center">
            <p className="capitalize text-5xl  ">
              {" "}
              <span className="text-purple-500 italic ">
                {" "}
                What is
              </span> <br /> diamond 2
            </p>
            <p className="w-[50%] text-xl">
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
        <div style={{ transform: "scale(0.8)" }} className=" scroll_child_section_1 w-full h-full flex flex-col items-center justify-between bg-white  py-32 ">
          <div className="w-full h-[15vw]  flex justify-start items-center flex-col">
            <p className="text-7xl  ">our collection </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, optio.</p>
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
                    <div className="card_popup absolute center w-[90%] h-[90%] scale-0 bg-white z-[1] flex items-center justify-center">
                      <p className={`text-2xl ${card.textSize}`}>
                        About collection
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">Collection1</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" scroll_parent_section_2 w-full h-[70vh] bg-transparent"></div>

      <div className=" scroll_parent_section_1 w-full h-[140vh] ">
        <div style={{ transform: "scale(0.8)" }} className=" scroll_child_section_1 w-full h-full flex bg-white  p-20 ">
          <div className="w-[50%] h-full flex flex-col items-center justify-evenly px-10 ">
            <div className="">
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
          <div className="w-[50%] h-full  flex flex-col gap-10 items-center justify-center text-center">
            <img
              src="https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-300.WEBP"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" scroll_parent_section_2 w-full h-[100vh] bg-blue-300 center">
        <p className="text-6xl">The Flagship Store </p>
      </div>
      <div className="w-full h-[100vh] bg-gray-400 center">
        <p className="text-6xl">Footer </p>
      </div>
    </div>
  );
}

'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import React, { useEffect } from "react";
// import { useLoading } from "@/components/loadingContext";

export default function LandingPage() {
  // const { setPageLoaded } = useLoading();
  // const MIN_LOAD_TIME = 3000;
  const backgroundImage = "/assets/images/cover-picture-2.jpg";

  // useEffect(() => {
  //   const imageLoadPromise = new Promise<void>((resolve, reject) => {
  //     const img = new window.Image();
  //     img.src = backgroundImage;
  //     img.onload = () => {
  //       resolve();
  //     };
  //     img.onerror = () => {
  //       reject(new Error("Image load failed"));
  //     };
  //   });

  //   const minTimePromise = new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, MIN_LOAD_TIME);
  //   });

  //   Promise.all([imageLoadPromise, minTimePromise])
  //     .then(() => {
  //       setPageLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error("Loading sequence failed:", error);
  //       setPageLoaded(true);
  //     });
  // }, [backgroundImage, setPageLoaded]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img src="/logo/logo-light-1.png" alt="Logo" className="h-10 md:h-16 w-auto" />
      </div>
      
      {/* Headline */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <h1 className="w-full text-4xl md:text-7xl font-bold text-white text-left text-wrap tracking-tight">
          Grind. Growth. Gratitude.
        </h1>
        <Link
          href="http://linkedin.com/in/whynikhil"
          className="cursor-pointer"
        >
          <Button className="absolute bottom-10 right-10 py-6 px-6 bg-white text-black text-lg rounded-md hover:bg-gray-100 backdrop-blur-md">
            <span>
              <Image
                src="/assets/svg/linkedin.svg"
                alt="linkedin-logo"
                width={1}
                height={1}
                className="w-8 h-8 rounded-full"
              />
            </span>
            Nikhil
          </Button>
        </Link>
      </div>
    </div>
  );
}

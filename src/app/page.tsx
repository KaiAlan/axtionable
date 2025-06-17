"use client";

import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import React, { useEffect } from "react";
// import React, { useState } from "react";
// import { useLoading } from "@/components/loadingContext";

export default function LandingPage() {
  // const { setPageLoaded } = useLoading();
  // const MIN_LOAD_TIME = 3000;
  // const [isHovered, setIsHovered] = useState(false);
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
        <img
          src="/logo/logo-light-1.png"
          alt="Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

      {/* Headline */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <h1 className="absolute left-8 bottom-72 w-full text-4xl md:text-7xl font-bold text-white text-left text-wrap tracking-tight">
          Grind. Growth. Gratitude.
        </h1>
        <Link
          href="http://linkedin.com/in/whynikhil"
          className="cursor-pointer absolute bottom-10 right-10"
        >
          <Button
            className={`
        relative overflow-hidden py-6 px-4 bg-black hover:bg-black hover:shadow-[4px_4px_0px_#4A4A4A] text-white text-lg rounded-full before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full
        before:bg-white before:transition-all before:duration-500 before:ease-in-out
        before:[clip-path:polygon(10%_0,70%_0,90%_100%,30%_100%)]
        hover:before:left-full cursor-pointer
      `}
          >
            <span className="w-8 h-8 rounded-full overflow-clip">
              <Image
                src="/assets/svg/linkedin.svg"
                alt="linkedin-logo"
                width={0}
                height={0}
                className="w-8 h-8 rounded-full object-cover"
              />
            </span>
            <span className="relative z-10">Nikhil</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

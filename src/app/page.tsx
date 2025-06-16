import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/images/cover-picture.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img src="/logo/logo-light-1.png" alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Headline */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-6xl md:text-8xl font-black text-white text-center tracking-tight">
          Grind. Growth. Gratitude.
        </h1>
        <Link
          href="http://linkedin.com/in/whynikhil"
          className="cursor-pointer"
        >
          <Button className="absolute bottom-10 right-10 px-8 py-8 bg-white text-black text-lg rounded-full hover:bg-gray-100">
            <span>
              <Image
                src="/assets/svg/linkedin.svg"
                alt="linkedin-logo"
                width={1}
                height={1}
                className="w-8 h-8 rounded-full"
              />
            </span>
            Nikhil Kakkar
          </Button>
        </Link>
      </div>
    </div>
  );
}

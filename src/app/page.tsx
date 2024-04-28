"use client";

import Background from "@/components/ui/global/Background";
import CustomCursor from "@/components/ui/global/CustomCursor";
import MainWrapper from "@/components/ui/global/MainWrapper";
import Navbar from "@/components/ui/global/Navbar";
import RapierCanvas from "@/components/threejs/rapier/RapierCanvas";
import { BrowserView } from "react-device-detect";

/**
 * The Home Page
 *
 * @returns JSX.Element
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Background text="SOCIS" animated />
      <BrowserView>
        <RapierCanvas className="hidden lg:flex" />
        <CustomCursor />
      </BrowserView>

      <MainWrapper className="relative z-40 flex min-h-screen w-screen flex-col items-center justify-center p-24">
        <h1 className="fade-in mx-40 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-center text-6xl font-thin text-transparent sm:text-7xl lg:text-8xl">
          Inspiring the next generation of tech innovators.
        </h1>

        <p className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-pulse text-center text-sm font-light tracking-wide text-gray-400 lg:text-base">
          The source code for this website is available on{" "}
          <a
            href="https://github.com/SOCIS-UofG/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        </p>
      </MainWrapper>
    </>
  );
}

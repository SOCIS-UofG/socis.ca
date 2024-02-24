"use client";

import RapierCanvas from "@/components/threejs/rapier/RapierCanvas";
import { BrowserView } from "react-device-detect";
import {
  Background,
  CustomCursor,
  MainWrapper,
  Navbar,
  NavbarTabs,
} from "socis-components";

/**
 * The Home Page
 *
 * @returns JSX.Element
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <Navbar underlined={NavbarTabs.HOME} />
      <Background className="-z-10" text="SOCIS" animated={true} />

      <BrowserView>
        <CustomCursor />
        <RapierCanvas className="z-40 hidden lg:flex" />
      </BrowserView>

      <MainWrapper className="z-40">
        <h1 className="fade-in mx-40 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-center text-7xl font-thin text-transparent">
          Inspiring the next generation of tech innovators.
        </h1>
      </MainWrapper>

      {/*
      <p className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-pulse text-center text-sm font-light tracking-wide text-gray-400 lg:text-base">
        Scroll for more
      </p>
      */}
    </>
  );
}

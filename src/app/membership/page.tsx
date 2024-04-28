"use client";

import { BrowserView } from "react-device-detect";
import config from "@/lib/config/default.config";
import CustomCursor from "@/components/ui/global/CustomCursor";
import Navbar from "@/components/ui/global/Navbar";
import Background from "@/components/ui/global/Background";
import MainWrapper from "@/components/ui/global/MainWrapper";
import { Button, NextUIProvider } from "@nextui-org/react";

/**
 * The main components for the membership page.
 *
 * @returns JSX.Element
 */
export default function MembershipPage() {
  return (
    <NextUIProvider>
      <Navbar />
      <Background text="MEMBERSHIP" />

      <BrowserView>
        <CustomCursor />
      </BrowserView>

      <Components />
    </NextUIProvider>
  );
}

/**
 * The main components for the membership page.
 *
 * @returns JSX.Element
 */
function Components(): JSX.Element {
  return (
    <MainWrapper className="relative z-40 flex min-h-screen w-screen flex-col items-center justify-center p-24">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="text-center text-5xl font-bold text-white sm:text-6xl md:text-7xl xl:text-8xl">
          Join the team!
        </h1>
        <p className="mx-10 w-full text-center text-base font-light text-white/80 sm:max-w-xl">
          Join our community of innovators. Apply to be an exec or sign up to
          receive updates. We can't wait to meet you!
        </p>

        <div className="mx-7 mt-4 flex w-full flex-wrap items-center justify-center gap-4">
          <Button
            color="primary"
            href={config.default.socialsUrl}
            className="btn w-full sm:w-auto"
          >
            Follow our socials
          </Button>
          <Button
            href={config.default.emailSignUpUrl}
            className="btn w-full sm:w-auto"
          >
            Sign up for Updates
          </Button>
          <Button
            href={config.default.applyUrl}
            className="btn w-full sm:w-auto"
          >
            Apply to be an Exec
          </Button>
        </div>
      </div>
    </MainWrapper>
  );
}

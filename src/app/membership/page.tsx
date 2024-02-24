"use client";

import { BrowserView } from "react-device-detect";
import {
  Navbar,
  CustomCursor,
  MainWrapper,
  Background,
  LinkButton,
  NavbarTabs,
} from "socis-components";
import config from "@/lib/config/default.config";

/*
Join Us Section

Button to join us (sign up with email to get updates) 

Apply button to apply to be an exec (only open during election which is changeable by a SOCIS Exec. with the ADMIN permissions) 

Application Section

Applicant Name.

Why do you want to join?

What role applying for?

What you'll do for SOCIS.
*/

/**
 * The main components for the membership page.
 *
 * @returns JSX.Element
 */
export default function MembershipPage() {
  return (
    <>
      <Navbar underlined={NavbarTabs.MEMBERSHIP} />
      <Background text="MEMBERSHIP" className="-z-10" />

      <BrowserView>
        <CustomCursor />
      </BrowserView>

      <Components />
    </>
  );
}

/**
 * The main components for the membership page.
 *
 * @returns JSX.Element
 */
function Components(): JSX.Element {
  return (
    <MainWrapper className="z-40">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-bold text-white sm:text-7xl md:text-8xl">
          Join the team!
        </h1>
        <p className="mx-10 text-center text-base font-light text-white/80 sm:w-[34rem]">
          Join our community of innovators. Apply to be an exec or sign up to
          receive updates. We can't wait to meet you!
        </p>

        <div className="mx-7 mt-4 flex flex-wrap items-center justify-center gap-4">
          <LinkButton
            href={config.default.socialsUrl}
            className="w-full sm:w-auto"
          >
            Follow our socials
          </LinkButton>
          <LinkButton
            href={config.default.emailSignUpUrl}
            className="w-full sm:w-auto"
          >
            Sign up for Updates
          </LinkButton>
          <LinkButton
            href={config.default.applyUrl}
            className="w-full sm:w-auto"
          >
            Apply to be an Exec
          </LinkButton>
        </div>
      </div>
    </MainWrapper>
  );
}

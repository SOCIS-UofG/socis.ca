"use client";

import { BrowserView } from "react-device-detect";
import {
  Navbar,
  CustomCursor,
  MainWrapper,
  LinkButton,
  Background,
} from "socis-components";

/**
 * The main components for the policies page.
 *
 * @returns JSX.Element
 */
export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <Background text="POLICIES" className="-z-10" />

      <BrowserView>
        <CustomCursor />
      </BrowserView>

      <Components />
    </>
  );
}

/**
 * The main components for the policies page.
 *
 * @returns JSX.Element
 */
function Components(): JSX.Element {
  const files = [
    "Constitution.b199f8d94896faea389401adc586b46406e2bde7b138a706a9bd0f4085b2c337.pdf",
    "MakersSpacePolicy.00dfd8c4f3d7d2efd1439db08946f3f48a49efbd2dc1ffbf3e0a41b0cafbf88c.pdf",
    "ClubSpacePolicy.6b8a2123ff7ecd9faae0.pdf",
    "CommitteeAndStaffPolicy.47a31040760ead082474.pdf",
  ];

  return (
    <MainWrapper className="z-40">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-7xl font-bold text-white md:text-8xl">
          Policies
        </h1>
        <p className="mx-10 mt-2 text-center text-base font-light text-white/80 sm:w-[40rem]">
          Read our policies for more information on our constitution, club
          space, committee and staff, makerspace, etc. We are committed to
          providing a safe and inclusive environment for all members. If you
          have any questions, please feel free to contact us.
        </p>

        <div className="mx-7 mt-6 flex flex-col items-center justify-center gap-4">
          {files.map((file) => (
            <LinkButton
              href={`/policies/${file}`}
              className="w-full"
              key={file}
            >
              {file.split(".")[0]}
            </LinkButton>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
}

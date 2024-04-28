"use client";

import Background from "@/components/ui/global/Background";
import CustomCursor from "@/components/ui/global/CustomCursor";
import MainWrapper from "@/components/ui/global/MainWrapper";
import Navbar from "@/components/ui/global/Navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BrowserView } from "react-device-detect";

/**
 * The main components for the policies page.
 *
 * @returns JSX.Element
 */
export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <Background text="POLICIES" />

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
    "CommitteeAndStaffPolicy.b1c787905db2b7ea403cbf709e0e5bf83eff286fa616828678927deee22b8165.pdf",
    "ClubSpacePolicy.12eb2669ee9969510dda0b61b7cb8d8176d7d53cc454e108410fee977165f6c3.pdf",
    "EquipmentLoanDocument.0ee599fa984ae1f302ff5be8288919277515126982853b5fea8ff1e1d8e45256.pdf",
  ];

  return (
    <MainWrapper className="relative z-40 flex min-h-screen w-screen flex-col items-center justify-center p-12 lg:p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-bold text-white sm:text-7xl md:text-8xl">
          Our Policies
        </h1>
        <p className="mx-10 mt-2 text-center text-base font-light text-white/80 sm:w-[40rem]">
          Read our policies for more information on our constitution, club
          space, committee and staff, makerspace, etc.
        </p>

        <div className="mx-7 mt-6 flex w-full max-w-xl flex-col items-center justify-center gap-4">
          {files.map((file, index) => (
            <Button
              as={Link}
              color={index == 0 ? "primary" : "default"}
              href={`/policies/${file}`}
              className="w-full"
              key={file}
            >
              {file.split(".")[0]}
            </Button>
          ))}
        </div>

        <p className="mt-6 text-center text-base font-light text-white/80 sm:w-[40rem]">
          We are committed to providing a safe and inclusive environment for all
          members.{" "}
          <mark className="bg-transparent text-primary">
            If you have any questions, please feel free to contact us.
          </mark>
        </p>
      </div>
    </MainWrapper>
  );
}

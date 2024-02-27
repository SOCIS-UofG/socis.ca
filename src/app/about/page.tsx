"use client";

import { BrowserView } from "react-device-detect";
import MemberCard from "@/components/MemberCard";
import { useEffect, useState, type JSX } from "react";
import { trpc } from "@/lib/trpc/client";
import { type User } from "next-auth";
import {
  CustomCursor,
  LoadingSpinnerCenter,
  Navbar,
  MainWrapper,
  Background,
  NavbarTabs,
  LinkButton,
} from "socis-components";
import { compareRoles } from "@/lib/utils/roles";

/**
 * About page.
 *
 * @returns JSX.Element
 */
export default function AboutPage(): JSX.Element {
  return (
    <>
      <Navbar underlined={NavbarTabs.ABOUT} />
      <Background text="ABOUT" className="-z-10" />

      <BrowserView>
        <CustomCursor />
      </BrowserView>

      <Components />
    </>
  );
}

/**
 * The main components for the about page.
 *
 * @returns JSX.Element
 */
function Components(): JSX.Element {
  const { mutateAsync: fetchUsers, status } =
    trpc.getAllUsersSecure.useMutation();
  const [users, setUsers] = useState<User[]>([]);

  /**
   * Fetch the users (team members) from the database.
   */
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data.users);
    });
  }, [fetchUsers]);

  /**
   * If the fetch is still in progress, display a loading spinner.
   */
  if (status === "loading") {
    return <LoadingSpinnerCenter />;
  }

  /**
   * Return the main component.
   */
  return (
    <MainWrapper className="flex flex-col items-start justify-start gap-10 p-10 pt-32 sm:flex-row lg:flex-row lg:p-16 lg:pt-40">
      {/**
       * Wrap the information sections in a div so that they stick together
       * with the flex wrap.
       */}
      <div className="flex max-w-[40rem] flex-col items-start justify-start gap-10">
        {/**
         * Who we are section.
         *
         * This is just a brief information section.
         */}
        <div className="flex w-full max-w-[40rem] flex-col items-start justify-start gap-2">
          <h1 className="text-left text-4xl font-extralight text-white md:text-6xl xl:text-7xl">
            <mark className="bg-transparent text-primary">Who</mark> is SOCIS?
          </h1>
          <p className="text-left text-lg font-thin text-white/80">
            The Society of Computing and Information Science (SOCIS) is the
            official student society for the School of Computer Science students
            at the University of Guelph.
          </p>
          {/**
           * TODO: Add socials here.
           */}
          <div className="flex flex-wrap gap-4"></div>
        </div>

        {/**
         * What we do section.
         *
         * This is just a brief information section.
         */}
        <div className="flex w-full max-w-[40rem] flex-col items-start justify-start">
          <h1 className="text-left text-4xl font-extralight text-white md:text-6xl xl:text-7xl">
            <mark className="bg-transparent text-primary">What</mark> do we do?
          </h1>

          <p className="mt-2 text-left text-lg font-thin text-white/80">
            We focus on community building, creating opportunities for students,
            and advocating for students interests. We also run events, organize
            hackathons, administer clubs, and represent School of Computer
            Science students.
          </p>
        </div>

        {/**
         * Why we do it section
         *
         * This is just a brief information section.
         */}
        <div className="flex w-full max-w-[40rem] flex-col items-start justify-start">
          <h1 className="text-left text-4xl font-extralight text-white md:text-6xl xl:text-7xl">
            <mark className="bg-transparent text-primary">Why</mark> do we do
            it?
          </h1>

          <p className="mt-2 text-left text-lg font-thin text-white/80">
            We play a role in uniting students and improving their university
            experience. Through this role we want to empower students to
            innovate, network, and succeed because students are what make the
            University of Guelph great.
          </p>
        </div>

        {/**
         * Policies section (link to policies page)
         *
         * This is just a brief information section.
         */}
        <div className="flex w-full max-w-[40rem] flex-col items-start justify-start">
          <h1 className="text-left text-4xl font-extralight text-white md:text-6xl xl:text-7xl">
            <mark className="bg-transparent text-primary">SOCIS</mark> Policies
          </h1>

          <p className="mt-2 text-left text-lg font-thin text-white/80">
            For more information on our constitution, club space policy,
            committee and staff policy, makerspace policy, and more, visit our
            policies and constitution page.
          </p>
          <LinkButton href="/policies" className="mt-4">
            Policies & Consitution
          </LinkButton>
        </div>
      </div>

      {/**
       * Meet the team section
       *
       * The initial fetch of the users was for this. Here all of the team members will
       * be exhibited on a card -- along with their custom set user profile picture, name,
       * email, and roles.
       */}
      <div className="flex w-full flex-wrap items-start justify-start gap-4 sm:gap-7">
        {users
          // filter out the users with only one role
          .filter((user) => user.roles.length > 1)
          // sort the users by their roles
          .sort((a, b) => compareRoles(a.roles, b.roles))
          .map((user) => (
            <MemberCard user={user} key={user.id} />
          ))}
      </div>
    </MainWrapper>
  );
}

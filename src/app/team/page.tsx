"use client";

import { BrowserView } from "react-device-detect";
import { useEffect, useState, type JSX } from "react";
import { trpc } from "@/lib/trpc/client";
import { type User } from "next-auth";
import { compareRoles } from "@/lib/utils/roles";
import { Button, NextUIProvider, Spinner } from "@nextui-org/react";
import MainWrapper from "@/components/ui/global/MainWrapper";
import Background from "@/components/ui/global/Background";
import Navbar from "@/components/ui/global/Navbar";
import CustomCursor from "@/components/ui/global/CustomCursor";
import Link from "next/link";
import { type Status } from "@/types/global/status";
import { Filter } from "@/components/ui/other/Filter";
import { UserCard } from "@/components/ui/other/UserCard";

// linktree fa icons
import { FaExternalLinkAlt, FaInstagram, FaDiscord } from "react-icons/fa";

/**
 * About page.
 *
 * @returns JSX.Element
 */
export default function AboutPage(): JSX.Element {
  return (
    <NextUIProvider>
      <Navbar />
      <Background text="ABOUT" />

      <BrowserView>
        <CustomCursor />
      </BrowserView>

      <Components />
    </NextUIProvider>
  );
}

/**
 * The main components for the about page.
 *
 * @returns JSX.Element
 */
function Components(): JSX.Element {
  const { mutateAsync: fetchUsers } = trpc.getAllUsersSecure.useMutation();

  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const [rolesSelected, setRolesSelected] = useState<string[]>([]);
  const [teamsSelected, setTeamsSelected] = useState<string[]>([]);
  const [yearsSelected, setYearsSelected] = useState<string[]>([]);
  const handleSelectionChange = (selectedYears: string[]) => {
    setYearsSelected(selectedYears);
    console.log(selectedYears);
  };

  /**
   * Fetch the users (team members) from the database.
   */
  useEffect(() => {
    if (status !== "idle") {
      return;
    }

    setStatus("loading");

    fetchUsers()
      .then((res) => {
        setUsers(res.users);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [fetchUsers]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  /**
   * If the fetch is still in progress, display a loading spinner.
   */
  if (status === "loading") {
    return (
      <MainWrapper className="relative z-40 flex min-h-screen w-screen flex-col items-center justify-center p-24">
        <Spinner size="lg" color="primary" />
      </MainWrapper>
    );
  }

  /**
   * Return the main component.
   */
  return (
    <MainWrapper className="relative z-40 flex min-h-screen w-screen flex-col gap-36 px-16 py-32 xl:flex-row">
      {/**
       * Wrap the information sections in a div so that they stick together
       * with the flex wrap.
       */}
      <div className="flex w-full max-w-xl flex-col items-start justify-start gap-10 xl:max-w-2xl">
        {/**
         * Who we are section.
         *
         * This is just a brief information section.
         */}
        <div className="flex w-full max-w-xl flex-col items-start justify-start gap-2 2xl:max-w-2xl">
          <h1 className="text-left text-4xl font-extrabold tracking-wide text-white md:text-6xl">
            <mark className="bg-transparent text-primary">Who</mark> is SOCIS?
          </h1>
          <p className="text-left font-thin text-white/80 2xl:text-lg">
            The Society of Computing and Information Science (SOCIS) is the
            official student society for the School of Computer Science students
            at the University of Guelph.
          </p>

          {/**
           * TODO: Add socials here.
           */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/socis.uog/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaInstagram className="btn h-6 w-6 text-white" />
            </a>

            <a
              href="https://discord.com/invite/vhryqfkQ3u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaDiscord className="btn h-6 w-6 text-white" />
            </a>

            <a
              href="https://linktr.ee/socis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaExternalLinkAlt className="btn h-6 w-6 p-1 text-white" />
            </a>
          </div>
        </div>

        {/**
         * What we do section.
         *
         * This is just a brief information section.
         */}
        <div className="flex w-full max-w-xl flex-col items-start justify-start 2xl:max-w-2xl">
          <h1 className="text-left text-4xl font-extrabold tracking-wide text-white md:text-6xl">
            <mark className="bg-transparent text-primary">What</mark> do we do?
          </h1>

          <p className="mt-2 text-left font-thin text-white/80 2xl:text-lg">
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
        <div className="flex w-full max-w-xl flex-col items-start justify-start 2xl:max-w-2xl">
          <h1 className="text-left text-4xl font-extrabold tracking-wide text-white md:text-6xl">
            <mark className="bg-transparent text-primary">Why</mark> do we do
            it?
          </h1>

          <p className="mt-2 text-left font-thin text-white/80 2xl:text-lg">
            We play a role in uniting students and improving their university
            experience. Through this role we want to empower students to
            innovate, network, and succeed because students are what make the
            University of Guelph great.
          </p>

          <Button as={Link} href="/policies" className="mt-4" color="default">
            See our Policies & Consitution
          </Button>
        </div>
      </div>

      {/**
       * Meet the team section
       *
       * The initial fetch of the users was for this. Here all of the team members will
       * be exhibited on a card -- along with their custom set user profile picture, name,
       * email, and roles.
       */}
      <div className="flex h-fit w-full flex-col gap-4">
        <Filter selectionTitle={"Roles"} selectionOptions={["President", "Vice President", "Member"]} onSelectionChange={setRolesSelected} />
        <Filter selectionTitle={"Teams"} selectionOptions={["Events", "Tech", "Comms", "External", "Internal", "Finance"]} defaultSelection={["Events"]} onSelectionChange={setTeamsSelected} />
        <Filter selectionTitle={"Year"} selectionOptions={["2023", "2024"]} defaultSelection={["2023"]} onSelectionChange={setYearsSelected} />
        <div className="flex h-fit w-full flex-wrap items-start justify-start gap-4 sm:gap-7">
          {users
            .filter((user) => user.roles.length > 0)
            .filter((user) => user.roles.some(role => yearsSelected.includes(role)))
            .filter((user) => user.roles.some(role => teamsSelected.includes(role)))
            .filter((user) => user.roles.some(role => rolesSelected.includes(role)))
            // sort the users by their roles
            .sort((a, b) => compareRoles(a.roles, b.roles))
            .map((user) => (
              <UserCard user={user} key={user.id}/>
            ))}
        </div>
        <Link href="/membership" className="flex px-4 py-2 rounded-lg transition-all duration-300 text-primary bg-background border-1 border-background hover:border-primary justify-center">
          <button>Join the Team!</button>
        </Link>
      </div>
    </MainWrapper>
  );
}

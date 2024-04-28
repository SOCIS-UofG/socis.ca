"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

import {
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
  type FC,
  useEffect,
} from "react";

import Link from "next/link";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export default function Navbar(): JSX.Element {
  // Set navbar background color to black on scroll
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
      return;
    }

    const showBg = (): void => {
      navbar.classList.add("bg-secondary");
      navbar.classList.remove("md:bg-transparent");
    };

    const removeBg = (): void => {
      navbar.classList.remove("bg-secondary");
      navbar.classList.add("md:bg-transparent");
    };

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        if (window.scrollY === 0) {
          removeBg();
        }
      } else {
        showBg();
      }
    });

    window.addEventListener("scroll", () => {
      if (window.innerWidth < 768) {
        return;
      }

      if (window.scrollY > 0) {
        showBg();
      } else if (window.scrollY === 0) {
        removeBg();
      }
    });
  }, []);

  const NavbarButton: FC<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  > = (props): JSX.Element => (
    <div className="btn group relative flex flex-col items-center justify-center px-6 py-2">
      <a
        {...props}
        className={cn(
          "z-10 cursor-pointer text-center text-base font-thin text-white ease-in-out group-hover:font-light",
          props.className,
        )}
      >
        {props.children}
      </a>

      <span className="absolute z-0 h-full w-0 rounded-xl bg-primary duration-300 ease-in-out group-hover:w-full"></span>
    </div>
  );

  return (
    <NextUINavbar
      className="navbar fixed z-[100] border-b-2 border-b-primary bg-secondary md:border-0 md:bg-transparent"
      maxWidth="full"
      height="5rem"
      isBlurred={false}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="center">
        <p className="font-thin text-white">
          Society of Computing Information Sciences
        </p>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarBrand>
          <Logo />

          <p className="ml-7 hidden font-thin text-white xl:block">
            Society of Computing Information Sciences
          </p>
        </NavbarBrand>

        <NavbarItem>
          <NavbarButton href="https://socis.ca">HOME</NavbarButton>
        </NavbarItem>

        <NavbarItem>
          <NavbarButton href="https://events.socis.ca">EVENTS</NavbarButton>
        </NavbarItem>

        <NavbarItem>
          <NavbarButton href="https://socis.ca/about">ABOUT US</NavbarButton>
        </NavbarItem>

        <NavbarItem>
          <NavbarButton href="https://socis.ca/membership">
            MEMBERSHIP
          </NavbarButton>
        </NavbarItem>

        <NavbarItem>
          <NavbarButton href="https://clubs.socis.ca">CLUBS</NavbarButton>
        </NavbarItem>

        <NavbarMenuItem>
          <Button
            as={Link}
            className="btn bg-primary font-light text-white"
            href="https://account.socis.ca"
          >
            MY ACCOUNT
          </Button>
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarMenu className="z-[100] max-h-72 min-h-fit border-b-2 border-b-primary bg-secondary font-thin text-white md:hidden">
        <NavbarMenuItem>
          <Link className="text-base hover:underline" href="https://socis.ca">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-base hover:underline"
            href="https://events.socis.ca"
          >
            Events
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-base hover:underline"
            href="https://socis.ca/about"
          >
            About Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-base hover:underline"
            href="https://socis.ca/membership"
          >
            Membership
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-base hover:underline"
            href="https://clubs.socis.ca"
          >
            Clubs
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="mt-4">
          <Button
            className="btn bg-primary font-light text-white"
            href="https://account.socis.ca"
          >
            My Account
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}

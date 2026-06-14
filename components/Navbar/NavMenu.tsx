"use client";
import { NavigationItem } from "@/lib/types/common.types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../ui/Link/NavLink";
import LinkComponent from "../ui/Link/Link";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants/socialLinks";

type NavMenuProps = {
  readonly navigationItems: readonly NavigationItem[];
  readonly isOpen?: boolean;
  readonly onClose?: () => void;
};

const NavMenu = ({ navigationItems, isOpen = false, onClose }: NavMenuProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen && onClose) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="hidden lg:flex w-fit flex-row gap-8">
        {navigationItems.map((item) => (
          <NavLink key={item.href} href={item.href} isActive={isActive(item.href)}>
            {item.label}
          </NavLink>
        ))}
      </div>

      {isClient && (
        <div
          className={`fixed w-screen min-h-screen top-0 right-0 z-50 flex gap-2 justify-end  bg-background-950/80 backdrop-blur-sm px-4 pt-8 pb-8 transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
            <div className="w-80 max-w-sm rounded-3xl border border-border-800/30 bg-background-900 p-6 shadow-2xl h-fit">
              <div className="mb-6 flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/assets/app/kiran-bg.png"
                    width={36}
                    height={36}
                    alt="Kiran"
                    className="rounded-full"
                  />
                  <span className="text-base font-semibold text-primary-900 uppercase">Kiran</span>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    isActive={isActive(item.href)}
                    className="block w-full rounded-2xl bg-background-800/70 px-4 py-3 text-lg text-primary-100 transition hover:bg-background-800"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <LinkComponent
                  external
                  href={LINKEDIN_URL}
                  className="flex items-center justify-between rounded-2xl bg-background-800/70 px-4 py-3 text-lg text-primary-100 transition hover:bg-background-800"
                >
                  <span>LinkedIn</span>
                  <LinkedinIcon size={18} />
                </LinkComponent>
                <LinkComponent
                  external
                  href={GITHUB_URL}
                  className="flex items-center justify-between rounded-2xl bg-background-800/70 px-4 py-3 text-lg text-primary-100 transition hover:bg-background-800"
                >
                  <span>GitHub</span>
                  <GithubIcon size={18} />
                </LinkComponent>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className=" inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-800/60 bg-background-900 text-primary-100 shadow-sm transition hover:bg-background-800"
            >
              <HiX size={24} />
            </button>
        </div>
      )}
    </>
  );
};

export default NavMenu;

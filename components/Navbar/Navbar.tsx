"use client";

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { navigationItems } from "@/lib/constants/navigation.config";
import NavMenu from "./NavMenu";
import NavActions from "./NavActions";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-linear-to-b from-background-900 via-background-900 to-transparent p-8 pb-24">
      <div className="w-full mx-auto flex items-center justify-between p-4 bg-background-800/50 border border-border-800/20 rounded-lg">
        <div>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/assets/app/kiran-bg.png"
              className="rounded-full"
              width={36}
              height={36}
              alt="Kiran"
            />
            <h1 className="text-h3 text-primary-900 uppercase">Kiran</h1>
          </Link>
        </div>

        <div className="flex items-center gap-4 justify-end lg:justify-between w-[65%]">
          <div>
            <NavMenu
              navigationItems={navigationItems}
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>

          <div className="flex items-center gap-4">
            <NavActions />
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-800/60 bg-background-900 text-primary-100 shadow-sm transition hover:bg-background-800 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <HiMenu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

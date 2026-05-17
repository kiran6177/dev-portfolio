"use client";
import { NavigationItem } from "@/lib/types/common.types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLink from "../ui/Link/NavLink";

type NavMenuProps = {
  readonly navigationItems: readonly NavigationItem[];
};

const NavMenu = ({ navigationItems }: NavMenuProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  
  
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  return (
    <div className="w-fit flex gap-8">
      {navigationItems.map((item) => (
        <NavLink key={item.href} href={item.href} isActive={isActive(item.href)}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;

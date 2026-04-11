import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode | string;
  isActive?: boolean;
};

const NavLink = ({ href, className, children, isActive }: LinkProps) => {
  return (
    <Link href={href} className={cn("text-tertiary text-base font-heading font-normal hover:text-primary-900 transition-colors",
    isActive && "text-primary-900 underline",
    className)}>
      {children}
    </Link>
  );
};

export default NavLink;

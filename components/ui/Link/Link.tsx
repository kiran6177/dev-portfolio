import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode | string;
  external?: boolean
};

const LinkComponent = ({ href, className, children , external }: LinkProps) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className={cn(
        "text-tertiary text-base font-heading font-normal hover:text-primary-900 transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

LinkComponent.displayName = "Link";

export default LinkComponent;

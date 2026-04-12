import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const variants = {
  default : "text-tertiary text-base font-heading font-normal hover:text-primary-900 transition-colors",
  terminal : "font-terminal! text-primary-900/80 hover:text-primary-900 small-p transition-colors duration-200",
  outlined: "font-terminal! border-2 border-secondary-900/40 bg-secondary-900/10 text-secondary-900  transition-colors px-3 py-1",
} as const;

type Variant = keyof typeof variants

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode | string;
  variant?: Variant
  external?: boolean
};

const LinkComponent = ({ href, className, children , variant = "default", external }: LinkProps) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className={cn(
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
};

LinkComponent.displayName = "Link";

export default LinkComponent;

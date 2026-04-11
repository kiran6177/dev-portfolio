import { cn } from "@/lib/utils";

const variants = {
  large: "max-w-[1200px] mx-auto",
  medium: "max-w-[1024px] mx-auto",
  small: "max-w-[768px] mx-auto",
} as const;

type Variant = keyof typeof variants;

type MainLayoutProps = {
  children: React.ReactNode;
  variant?: Variant;
};

function MainLayout({ children, variant }: MainLayoutProps) {
  return <main className={cn("w-full", variants[variant || "large"])}>{children}</main>;
}

export default MainLayout;

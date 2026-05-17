import { navigationItems } from "@/lib/constants/navigation.config";
import NavMenu from "./NavMenu";
import NavActions from "./NavActions";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-linear-to-b  from-background-900 via-background-900 to-transparent p-8 pb-24">
      <div className="w-full mx-auto  flex items-center justify-between p-4 bg-background-800/50 border border-border-800/20 rounded-lg">
        <div>
          <Link href="/"><h1 className="text-h3 text-primary-900 uppercase">Kiran</h1></Link>
        </div>
        <NavMenu navigationItems={navigationItems} />
        <NavActions />
      </div>
    </div>
  );
}

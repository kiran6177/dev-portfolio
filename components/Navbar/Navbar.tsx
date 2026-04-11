import { navigationItems } from "@/lib/constants/navigation.config";
import NavMenu from "./NavMenu";
import NavActions from "./NavActions";

export default function Navbar() {
    
  return (
    <div className="fixed w-[calc(100%-4rem)]  top-8 left-8 right-0 z-50 flex items-center justify-between p-4 bg-background-800/60 border border-border-800/20 rounded-lg">
      <div>
        <h1 className="text-h3 text-primary-900 uppercase">Kiran</h1>
      </div>
      <NavMenu navigationItems={navigationItems} />
      <NavActions />
    </div>
  );
}

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav className="flex w-full justify-between align-middle p-6 md:p-16 lg:p-28 md:pb-0 lg:pb-0">
      <DesktopNav className="hidden md:block" />
      <MobileNav />
    </nav>
  );
};

export default Header;

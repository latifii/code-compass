import Image from "next/image";
import TopNavigation from "./top-navigation";

function Header() {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image src="/images/logo-dark.svg" alt="logo" width={80} height={36} />
        <TopNavigation />
        <span className="mr-auto">user Auth</span>
      </div>
    </header>
  );
}
export default Header;

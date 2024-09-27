import Image from "next/image";
import TopNavigation from "./top-navigation";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/logo_no_text.webp"
          alt="logo"
          width={140}
          height={120}
        />
        <TopNavigation />
        <Link href="/signin">ورود/ثبت نام</Link>
      </div>
    </header>
  );
}
export default Header;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره های ری اکت و نسکت",
    href: "/courses",
  },
  {
    title: "مطلب و مقالات",
    href: "/blog",
  },
];

function TopNavigation() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              className={`hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default TopNavigation;

"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "@/types/menu";
import { usePathname, useRouter } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const router = useRouter();

  const handleNavigate = () => {
    router.push(item.href);
  };

  const path = usePathname();

  return (
    <div className="relative w-full">
      <button
        onClick={item.children ? handleToggle : handleNavigate}
        className={`flex items-center justify-between w-full rounded-xl px-4 py-3 text-black dark:text-white transition-colors duration-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 focus:outline-none ${path == item.href ? "!text-primary" : null} ${path.startsWith(`/${item.label.toLowerCase()}`) ? "!text-primary" : null}`}
      >
        {item.label}
        {item.children && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </button>
      {submenuOpen && item.children && (
        <div className="w-full rounded-xl bg-white p-2 dark:bg-darklight">
          {item.children.map((subItem: HeaderItem, index: number) => (
            <Link
              key={index}
              href={subItem.href}
              className="block rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-primary dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-primary"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;

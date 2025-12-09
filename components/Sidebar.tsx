"use client";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Links from "@/utils/Links";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={Logo} alt="logo" className="mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        {Links.map((link) => {
          return (
            <Button
              key={link.href}
              asChild
              variant={pathname === link.href ? "default" : "link"}>
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;

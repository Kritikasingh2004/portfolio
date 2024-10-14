'use client';

import { IconHome, IconUser, IconBriefcase, IconCode } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from '@/lib/utils';

const navItems = [
    { name: "Home", link: "#hero", icon: <IconHome className="h-4 w-4 text-yellow-300" /> },
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4 text-yellow-300" /> },
    { name: "Projects", link: "#projects", icon: <IconCode className="h-4 w-4 text-yellow-300" /> },
    { name: "Resume", link: "#resume", icon: <IconBriefcase className="h-4 w-4 text-yellow-300" /> },
];

const NavbarSection = ({ className }: { className?: string }) => {
    return (
        <>
            <div
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-yellow-300 rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[500]  px-8 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link-${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative hover:text-neutral-50 items-center flex space-x-1 text-yellow-300"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}

            </div>
        </>
    );
};

export default NavbarSection;

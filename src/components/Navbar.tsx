"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-2 inset-x-0 max-w-4xl mx-auto z-50 border border-cyan-300 rounded-full", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Overview</HoveredLink>
                        <HoveredLink href="/interface-design">Instructors</HoveredLink>
                        <HoveredLink href="/seo">Admissions</HoveredLink>
                        <HoveredLink href="/branding">FAQs</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Piano/Keyboard</HoveredLink>
                        <HoveredLink href="/interface-design">Guitar (Acoustic, Electric, Classical)</HoveredLink>
                        <HoveredLink href="/seo">Saxophone</HoveredLink>
                        <HoveredLink href="/branding">Trumpet</HoveredLink>
                        <HoveredLink href="/branding">Drums/Percussion</HoveredLink>
                        <HoveredLink href="/branding">Voice/Singing</HoveredLink>
                    </div>
                </MenuItem>
                {/* <MenuItem setActive={setActive} active={active} item="Gallery">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem> */}
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Linkedin</HoveredLink>
                        <HoveredLink href="/interface-design">Facebook</HoveredLink>
                        <HoveredLink href="/seo">Instagram</HoveredLink>
                        <HoveredLink href="/branding">Email</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

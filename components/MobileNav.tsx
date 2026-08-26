"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@/components/Icons";
import { NAV_ITEMS } from "@/lib/site-content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown dropdown-end mobile-nav">
      <button
        type="button"
        className="btn btn-ghost btn-square mobile-nav-trigger"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <MenuIcon className="mobile-nav-icon" />
      </button>
      {open ? (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-50 mt-3 w-60 border border-base-300 p-2 shadow-xl" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}><Link href={href} onClick={() => setOpen(false)}>{label}</Link></li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

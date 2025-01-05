"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

interface Team {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  {
    name: "Promo Finder",
    href: "/promo-finder",
    icon: HomeIcon,
    current: true,
  },
  { name: "Promo-converter", href: "#", icon: UsersIcon, current: false },
  { name: "Trends", href: "#", icon: UsersIcon, current: false },
  { name: "Sports Screen", href: "#", icon: UsersIcon, current: false },
  { name: "Positive-ev", href: "#", icon: FolderIcon, current: false },
  { name: "Arbitrage", href: "/arbitage", icon: CalendarIcon, current: false },
  { name: "Middles", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Low-Hold", href: "#", icon: ChartPieIcon, current: false },
  { name: "Parlay Builder", href: "#", icon: ChartPieIcon, current: false },
  { name: "Pricing", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Sidebar Component
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="pt-16 ">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden "
        >
          {/* Dialog Backdrop */}
          <DialogBackdrop className="fixed inset-0 bg-gray-900/80 " />

          {/* Mobile Sidebar */}
          <div className="fixed inset-0 flex ">
            <DialogPanel className="relative w-full max-w-xs bg-indigo-600 p-6 ">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              {/* Mobile navigation */}
              <nav className="mt-5">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-gray-700 text-white" : "text-white",
                      "block py-2 px-3 rounded-md"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Desktop Sidebar */}
        <div className="hidden  lg:fixed lg:top-16 lg:left-0 lg:z-40 lg:flex lg:w-72 lg:h-full lg:flex-col bg-gray-800 mt-1">
          <nav className="flex-1 px-6 py-4 space-y-2 ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? "bg-indigo-700 text-white" : "text-indigo-200",
                  "block py-2 px-3 rounded-md text-sm font-semibold"
                )}
              >
                <item.icon className="inline-block w-5 h-5 mr-2" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        {/* <main className="lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">Your content here</div>
        </main> */}
      </div>
    </>
  );
}

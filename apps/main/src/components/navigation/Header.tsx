import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <div className="flex items-center">
          <a
            href="/"
            className="mr-6 flex items-center space-x-2 font-semibold text-white"
          >
            Astrofree
          </a>
          <NavigationMenu className="max-w-none justify-start">
            <NavigationMenuList className="justify-start gap-1 space-x-0">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white data-[state=open]:bg-slate-800",
                      )}
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 justify-end">
          <a href="/login">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Login
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

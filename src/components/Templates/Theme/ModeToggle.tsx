"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="themeModeIcon"
          className="bg-transparent hover:bg-transparent hover:dark:border-[rgb(98, 0, 218)] hover:text-[rgb(0,218,210)]"
        >
          <Sun className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-[#0e1111] border-input"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Basic Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

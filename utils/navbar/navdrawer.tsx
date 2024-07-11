"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Logout } from "./logout"

export function NavDrawer() {

    const [loggedIn , setLoggedIn] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
            <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Yorka Tabs</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/pricing"}>
                Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href={"/blogs"}>
            Blogs
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href={"/products"}>
            Products
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href={"/how-to-use"}>
            How to Use
            </Link>
        </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <>
        {loggedIn ? (
            <>
             <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Link href={"/dashboard"}>
                        Console
                    </Link>
                </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={"/login"}>
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>Support</DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/billing"}>
                        Billing
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Logout
            </DropdownMenuItem>
            </>
        ) : (
            <>
                <DropdownMenuItem>
                    <Link href={"/sign-in"}>
                        Login
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/sign-up"}>
                        Sign up
                    </Link>
                </DropdownMenuItem>
            </>
        )}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

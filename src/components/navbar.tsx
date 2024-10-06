import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import Logout from "@/components/logout";
import ThemeSwitch from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Navbar({ user }: { user: any }) {
    return (
        <NavigationMenu className="w-full max-w-full">
            <NavigationMenuList className="w-lvw justify-between p-2 border-b border-b-stone-800">
                <NavigationMenuItem>
                    <NavigationMenuLink href="/dashboard" asChild>
                        <Link href="/dashboard" title="Home">
                            <Button variant="ghost">Home</Button>
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="flex gap-2 justify-center items-center">
                    <ThemeSwitch />

                    {user?.user ? (
                        <Logout />
                    ) : (
                        <NavigationMenuLink href="/signin" asChild>
                            <Link href="/signin" title="Sign In">
                                <Button variant="outline">Sign In</Button>
                            </Link>
                        </NavigationMenuLink>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
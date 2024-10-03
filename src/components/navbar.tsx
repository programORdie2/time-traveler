import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import Logout from "./logout";
import ThemeSwitch from "./theme-switch";


export default async function Navbar({ user }: { user: any }) {
    return (
        <NavigationMenu className="w-full max-w-full">
            <NavigationMenuList className="w-lvw justify-between p-2 border-b border-b-stone-800">
                <NavigationMenuItem>
                    <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="flex gap-3 justify-center items-center">
                    <ThemeSwitch />

                    {user?.user ? (
                        <Logout />
                    ) : (
                        <NavigationMenuLink href="/signin">Login</NavigationMenuLink>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
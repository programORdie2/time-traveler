import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import Logout from "@/components/logout";
import ThemeSwitch from "@/components/theme-switch";
import { Button } from "@/components/ui/button";


export default async function Navbar({ user }: { user: any }) {
    return (
        <NavigationMenu className="w-full max-w-full">
            <NavigationMenuList className="w-lvw justify-between p-2 border-b border-b-stone-800">
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" asChild>
                        <Button variant="ghost">Home</Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="flex gap-3 justify-center items-center">
                    <ThemeSwitch />

                    {user?.user ? (
                        <Logout />
                    ) : (
                        <NavigationMenuLink href="/signin" asChild><Button variant="ghost">Sign In</Button></NavigationMenuLink>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
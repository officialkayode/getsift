import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center">
            <NavigationMenuItem>
              <Link to="/" className="text-xl font-bold hover:text-accent mr-8">
                Sift
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/how-it-works" className="text-lg font-medium hover:text-accent">
                How It Works
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-6">
              <Link to="/use-cases" className="text-lg font-medium hover:text-accent">
                Use Cases
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="text-lg font-medium hover:text-accent">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-6">
              <Link to="/integrations" className="text-lg font-medium hover:text-accent">
                Integrations
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
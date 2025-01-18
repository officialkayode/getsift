import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-gelasio font-bold text-foreground">
            Sift
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Link to="/" className="text-lg font-medium hover:text-accent transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/integrations" className="text-lg font-medium hover:text-accent transition-colors">
                  Integrations
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-8">
            <NavigationMenuItem>
              <Link 
                to="/" 
                className={`text-lg font-medium hover:text-accent transition-colors ${
                  location.pathname === "/" ? "text-accent" : "text-white"
                }`}
              >
                Sift
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                to="/how-it-works" 
                className={`text-lg font-medium hover:text-accent transition-colors ${
                  location.pathname === "/how-it-works" ? "text-accent" : "text-white"
                }`}
              >
                How Sift works
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
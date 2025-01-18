import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center">
            <NavigationMenuItem>
              <Link 
                to="/" 
                className={`text-xl font-bold hover:text-accent mr-8 transition-colors ${
                  location.pathname === "/" ? "text-accent" : ""
                }`}
              >
                Sift
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                to="/how-it-works" 
                className={`text-lg font-medium hover:text-accent transition-colors ${
                  location.pathname === "/how-it-works" ? "text-accent" : ""
                }`}
              >
                How Sift Works
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
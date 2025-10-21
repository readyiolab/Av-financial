import { Link } from "react-router-dom";
import { LayoutDashboard, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isSheet?: boolean;
}

const Sidebar = ({ isSheet = false }: SidebarProps) => {
  const navItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/subscribers", label: "Subscribers", icon: Users },
    { to: "/admin/applications", label: "Applications", icon: FileText },
  ];

  const content = (
    <nav className="flex-1">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-white/80 hover:bg-white/10",
                  "py-2 px-4"
                )}
              >
                <item.icon className="mr-3" size={20} />
                {item.label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (isSheet) {
    return (
      <SheetContent
        side="left"
        className="w-64 bg-black border-r border-white/10 p-4"
      >
        <h2 className="text-xl font-bold text-white mb-6">Admin Panel</h2>
        {content}
      </SheetContent>
    );
  }

  return (
    <aside
      className={cn(
        "w-64 bg-black border-r border-white/10 p-4 flex flex-col",
        "h-screen sticky top-0"
      )}
    >
      <h2 className="text-xl font-bold text-white mb-6">Admin Panel</h2>
      {content}
    </aside>
  );
};

export default Sidebar;
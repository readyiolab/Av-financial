// src/components/layout/AdminHeader.tsx
import { Button } from "@/components/ui/button";
import { Menu, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const AdminHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast({ title: "Logged out", description: "See you soon!" });
    navigate("/admin/login");
  };

  return (
    <header className="bg-white p-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar isSheet />
          </SheetContent>
        </Sheet>

        <h1 className="text-xl md:text-2xl font-bold text-[#1a2957]">
          AV Financial Admin
        </h1>
      </div>

      <Button
        onClick={handleLogout}
        variant="outline"
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </header>
  );
};

export default AdminHeader;
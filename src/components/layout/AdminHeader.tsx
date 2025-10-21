import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const AdminHeader = () => {
  return (
    <header
      className={cn(
        "bg-white p-4 flex items-center justify-between shadow-md",
        "sticky top-0 z-10"
      )}
    >
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:bg-white/10 md:hidden"
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <Sidebar isSheet />
        </Sheet>
        <h1 className="text-xl md:text-2xl font-bold text-black">
          AV Financial Admin
        </h1>
      </div>
      <Button
        variant="outline"
        className="text-white bg-black hover:bg-gray-800 hover:text-white"
      >
        Logout
      </Button>
    </header>
  );
};

export default AdminHeader;
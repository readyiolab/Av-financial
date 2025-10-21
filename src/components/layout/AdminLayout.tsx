import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className={cn("flex-1 p-4 md:p-6 bg-gray-50", "overflow-auto")}>
          <Outlet />
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
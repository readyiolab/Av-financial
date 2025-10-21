import { cn } from "@/lib/utils"; // shadcn utility for className merging

const AdminFooter = () => {
  return (
    <footer
      className={cn(
        "bg-black p-4 text-center text-white",
        "text-sm md:text-base"
      )}
    >
      &copy; 2025 AV Financial Admin. All rights reserved.
    </footer>
  );
};

export default AdminFooter;
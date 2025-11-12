// src/components/ApplicationModal.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Download, Loader2 } from "lucide-react";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  pdf: z.string().min(1, "PDF is required"),
});

type FormData = z.infer<typeof schema>;

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfTitle: string;
  onSuccess: () => void;
}

const ApplicationModal = ({ open, onOpenChange, pdfTitle, onSuccess }: ApplicationModalProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { 
      name: "",
      email: "",
      phone: "",
      pdf: "" 
    },
  });

  // Update pdf field whenever pdfTitle changes
  useEffect(() => {
    if (pdfTitle) {
      setValue("pdf", pdfTitle);
    }
  }, [pdfTitle, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Submitting data:", data); // Debug log
      
      const res = await fetch("http://localhost:4000/api/applications/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: "Success!",
          description: result.message || "Your request was submitted!",
        });

        

        onSuccess();
        onOpenChange(false);
        reset();
      } else {
        console.error("Server error:", result); // Debug log
        toast({
          title: "Error",
          description: result.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Network error:", err); // Debug log
      toast({
        title: "Network Error",
        description: "Please check your connection",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#1a2957]">
            Download: <span className="text-sm font-normal block mt-1">{pdfTitle}</span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} placeholder="John Doe" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...register("phone")} placeholder="+1 (555) 000-1234" />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <input type="hidden" {...register("pdf")} value={pdfTitle} />

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-[#1a2957] hover:bg-[#1a2957]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
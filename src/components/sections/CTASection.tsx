import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="group relative">
          <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg  transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
           
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-4 sm:mb-6 group-hover:text-gray-100 transition-colors duration-300">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 text-center mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto group-hover:text-white/80 transition-colors duration-300">
              Schedule a free consultation today and discover how AV Financial can help you build lasting protection and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1a2957] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                Book Your Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-slate-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
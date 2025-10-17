import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div >
          {/* CTA Card */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            
            {/* Main Card */}
            <div >
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-2xl"></div>

             

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                Ready to Secure Your Financial Future?
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-center mb-8 leading-relaxed max-w-2xl mx-auto">
                Schedule a free consultation today and discover how AV Financial can help 
                you build lasting protection and confidence.
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group/btn"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
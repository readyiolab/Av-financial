import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Typewriter from 'typewriter-effect';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
                AV Financial
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Protect')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Grow')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Secure')
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  delay: 75,
                  cursor: '|',
                  loop: true,
                }}
              />
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Your Financial Future
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90">
              Starts with AV Financial
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
              At AV Financial, we help individuals, families, and business owners build lifelong
              financial protection with clarity and confidence.
            </p>
            <p className="text-base sm:text-lg font-semibold text-white/90">
              Your life, your goals… protected with purpose.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white text-[#1a2957] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                alt="Financial Planning"
                className="w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
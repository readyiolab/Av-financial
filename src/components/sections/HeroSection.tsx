import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Typewriter from 'typewriter-effect';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Typewriter Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500">
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

            <h2 className="text-3xl md:text-4xl font-semibold text-white/90">
              Your Financial Future
            </h2>

            <p className="text-2xl font-medium text-white/90">
              Starts with AV Financial
            </p>

            {/* Subtitle */}
            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              At AV Financial, we help individuals, families, and business owners build lifelong
              financial protection with clarity and confidence. Whether you're preparing for retirement,
              securing your family's future, or planning for long-term care, we design strategies that
              simplify your decisions and strengthen your legacy.
            </p>

            {/* Tagline */}
            <p className="text-xl font-semibold text-white/90">
              Your life, your goals… protected with purpose.
            </p>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-transparent border border-white text-white text-lg px-8 py-6 hover:bg-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                alt="Financial Planning"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
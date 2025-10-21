import { Shield, GraduationCap, Target, Zap } from "lucide-react";
import { Button } from "../ui/button";

export const ApproachSection = () => {
  const approaches = [
    {
      icon: Shield,
      title: "Protection with Purpose",
      description: "Every solution we design begins with understanding your goals, protecting your income, your family, and your peace of mind.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: GraduationCap,
      title: "Education at Every Step",
      description: "We don't just give advice, we teach you how your plan works so you can make smart, confident financial decisions.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      icon: Target,
      title: "Personalized Strategies",
      description: "No generic templates here. Every plan is customized around your lifestyle, priorities, and future aspirations.",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
    {
      icon: Zap,
      title: "Simplicity that Empowers",
      description: "Finance shouldn't feel overwhelming. We explain everything in simple, actionable steps that make sense for you.",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full mb-4 sm:mb-6 border border-slate-200">
            <span className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-widest">
              Our Approach
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Built on Principles
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Prioritizing your success and peace of mind
          </p>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${approach.bgGradient} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg`} />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${approach.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:scale-110 transition-all duration-300`}>
                  <approach.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                  {approach.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium">
            Ready to experience the difference?
          </p>
          <Button className="mt-4 bg-[#1a2957] hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300">
            Let's Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
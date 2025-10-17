import { Shield, GraduationCap, Target, Zap } from "lucide-react";

export const ApproachSection = () => {
  const approaches = [
    {
      icon: Shield,
      title: "Protection with Purpose",
      description: "Every solution we design begins with understanding your goals, protecting your income, your family, and your peace of mind.",
    },
    {
      icon: GraduationCap,
      title: "Education at Every Step",
      description: "We don't just give advice, we teach you how your plan works so you can make smart, confident financial decisions.",
    },
    {
      icon: Target,
      title: "Personalized Strategies",
      description: "No generic templates here. Every plan is customized around your lifestyle, priorities, and future aspirations.",
    },
    {
      icon: Zap,
      title: "Simplicity that Empowers",
      description: "Finance shouldn't feel overwhelming. We explain everything in simple, actionable steps that make sense for you.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Our <span className="bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built on principles that prioritize your success and peace of mind
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Border Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-700">
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full group-hover:w-16 transition-all duration-300"></div>

                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shadow-lg border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                    <approach.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {approach.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {approach.description}
                </p>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 right-8 w-8 h-1 bg-gradient-to-l from-white to-gray-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="max-w-6xl mx-auto mt-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </section>
  );
};
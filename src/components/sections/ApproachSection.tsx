import { Shield, GraduationCap, Target, Zap } from "lucide-react";

export const ApproachSection = () => {
  const approaches = [
    {
      icon: Shield,
      title: "Protection with Purpose",
      description: "Every solution we design begins with understanding your goals, protecting your income, your family, and your peace of mind.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: GraduationCap,
      title: "Education at Every Step",
      description: "We don't just give advice, we teach you how your plan works so you can make smart, confident financial decisions.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Target,
      title: "Personalized Strategies",
      description: "No generic templates here. Every plan is customized around your lifestyle, priorities, and future aspirations.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: Zap,
      title: "Simplicity that Empowers",
      description: "Finance shouldn't feel overwhelming. We explain everything in simple, actionable steps that make sense for you.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Built on principles that prioritize your success and peace of mind
          </p>
          <div className="w-20 h-1.5 bg-black mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="group relative"
            >
             
              
              {/* Main Card */}
              <div className={`relative h-full flex flex-col bg-white/90 backdrop-blur-sm  rounded-3xl p-8 shadow-lg  transition-all duration-500  min-h-[280px]`}>  
                
              

                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 rounded-2xl  flex items-center justify-center  transition-all duration-500`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${approach.gradient} flex items-center justify-center`}>
                      <approach.icon className="w-6 h-6 text-white"  />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {approach.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {approach.description}
                </p>

                {/* Bottom Right Accent */}
                <div className={`absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br ${approach.gradient} rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg font-medium">
            Ready to experience the difference?
          </p>
          <div className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-2xl text-sm font-semibold shadow-lg  transition-all duration-300 cursor-pointer">
            Let's Get Started
          </div>
        </div>
      </div>
    </section>
  );
};
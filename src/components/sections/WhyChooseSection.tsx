import { CheckCircle2, Eye, Clock, Handshake } from "lucide-react";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Integrity First",
      description: "Every recommendation is made with transparency, honesty, and your best interests at heart.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: Eye,
      title: "Clarity in Every Step",
      description: "We make sure you understand your plan — no fine print, no jargon, no surprises.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: Clock,
      title: "Long-Term Commitment",
      description: "Our relationship doesn't end after enrollment. We review, adjust, and grow with you year after year.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description: "We proudly work with industry leaders like Corebridge (AIG), F&G, Nationwide, Athene, and Mutual of Omaha, bringing you trusted solutions from top-rated carriers.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-white bg-black px-4 py-2 rounded-full uppercase tracking-wider">
              You Choose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Why Choose AV Financial
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Trusted expertise, genuine care, and lasting partnerships
          </p>
          <div className="w-20 h-1.5 bg-black mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reasons Grid - All Same Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Main Card - Fixed Height */}
              <div className="relative h-full flex flex-col bg-white/90 backdrop-blur-sm  rounded-3xl p-8 shadow-lg  transition-all duration-500  min-h-[280px]">
                
               

                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.bgGradient} flex items-center justify-center  border-white  transition-all duration-500`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center`}>
                      <reason.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3  className="text-xl font-semibold mb-4 text-gray-900   transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>

               
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"></div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto relative">
         
          
          {/* Quote Card */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 border-2 border-blue-200 rounded-3xl p-10 md:p-16 shadow-2xl backdrop-blur-sm overflow-hidden">
            
           

            {/* Quote Mark */}
            <div className="text-7xl font-serif bg-black bg-clip-text text-transparent opacity-30 mb-4 leading-none">"</div>

            {/* Quote Text */}
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-800 italic">
                "I believe financial protection should be personal, practical, and empowering. 
                My mission is to help families protect what matters most — their dreams, their 
                health, and their future."
              </p>
              <footer className="flex items-center gap-4">
                <span className="w-12 h-1 bg-black  rounded-full"></span>
                <span className="text-lg font-bold bg-black bg-clip-text text-transparent">
                  Shrutep Amin
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
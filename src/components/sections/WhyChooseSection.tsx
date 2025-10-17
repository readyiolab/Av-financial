import { CheckCircle2, Eye, Clock, Handshake } from "lucide-react";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Integrity First",
      description: "Every recommendation is made with transparency, honesty, and your best interests at heart.",
    },
    {
      icon: Eye,
      title: "Clarity in Every Step",
      description: "We make sure you understand your plan — no fine print, no jargon, no surprises.",
    },
    {
      icon: Clock,
      title: "Long-Term Commitment",
      description: "Our relationship doesn't end after enrollment. We review, adjust, and grow with you year after year.",
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description: "We proudly work with industry leaders like Corebridge (AIG), F&G, Nationwide, Athene, and Mutual of Omaha, bringing you trusted solutions from top-rated carriers.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">AV Financial</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted expertise, genuine care, and lasting partnerships
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-white mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              
              {/* Main Card */}
              <div className="relative flex gap-6 bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-700 backdrop-blur-sm">
                
                {/* Top Left Accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-2xl group-hover:border-white/40 transition-colors duration-300"></div>

                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center shadow-lg border border-white/20 group-hover:from-white/25 group-hover:to-white/10 group-hover:border-white/40 transition-all duration-300">
                    <reason.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Right Accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-2xl group-hover:border-white/40 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20"></div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-2xl"></div>
          
          {/* Quote Card */}
          <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700 rounded-3xl p-12 md:p-16 shadow-2xl backdrop-blur-sm overflow-hidden">
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-bl-3xl"></div>

            {/* Quote Mark */}
            <div className="text-6xl text-white/10 mb-4 font-serif">"</div>

            {/* Quote Text */}
            <blockquote className="text-white relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-100">
                "I believe financial protection should be personal, practical, and empowering. 
                My mission is to help families protect what matters most — their dreams, their 
                health, and their future."
              </p>
              <footer className="text-lg font-bold text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-gradient-to-r from-white/40 to-white/20 rounded-full"></span>
                Shrutep Amin
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
import { CheckCircle2, Eye, Clock, Handshake } from "lucide-react";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Integrity First",
      description: "Every recommendation is made with transparency, honesty, and your best interests at heart.",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
    {
      icon: Eye,
      title: "Clarity in Every Step",
      description: "We make sure you understand your plan — no fine print, no jargon, no surprises.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Clock,
      title: "Long-Term Commitment",
      description: "Our relationship doesn't end after enrollment. We review, adjust, and grow with you year after year.",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description: "We work with industry leaders like Corebridge, F&G, Nationwide, Athene, and Mutual of Omaha.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
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
              Why Choose Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Why Choose <span className="text-slate-700">AV Financial</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Trusted expertise, genuine care, and lasting partnerships
          </p>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg`} />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:scale-110 transition-all duration-300`}>
                  <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-slate-400 rounded-br-3xl group-hover:border-slate-500 transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-slate-400 rounded-tl-3xl group-hover:border-slate-500 transition-colors duration-300" />
            <div className="text-5xl sm:text-6xl font-serif text-slate-900 opacity-30 mb-4 leading-none">"</div>
            <blockquote className="relative z-10">
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 italic mb-6 sm:mb-8">
                "I believe financial protection should be personal, practical, and empowering. My mission is to help families protect what matters most — their dreams, their health, and their future."
              </p>
              <footer className="flex items-center gap-4">
                <span className="w-12 h-1 bg-slate-900 rounded-full" />
                <span className="text-sm sm:text-base font-bold text-slate-900">Shrutep Amin</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
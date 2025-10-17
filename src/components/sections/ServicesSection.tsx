import { Button } from "@/components/ui/button";
import { HeartPulse, PiggyBank, Stethoscope, Home, Plane, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: HeartPulse,
      title: "Life Insurance Planning",
      description: "Safeguard your family's financial well-being. From Term Life to Universal and Whole Life, we'll help you choose the right protection for every stage of life.",
      gradient: "from-rose-500 to-pink-600",
      glowColor: "rose",
    },
    {
      icon: PiggyBank,
      title: "Retirement & Annuities",
      description: "Build a tax-efficient retirement income you can count on. We design annuity and retirement strategies that help your money grow while minimizing risk.",
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "emerald",
    },
    {
      icon: Stethoscope,
      title: "Medicare & Health Coverage",
      description: "Understand your Medicare and Health Insurance options clearly — from Advantage Plans to Supplemental coverage — and choose the best fit with expert guidance.",
      gradient: "from-blue-500 to-indigo-600",
      glowColor: "blue",
    },
    {
      icon: Home,
      title: "Long-Term Care Planning",
      description: "Prepare for the unexpected with long-term care solutions that protect your independence and financial future.",
      gradient: "from-amber-500 to-orange-600",
      glowColor: "amber",
    },
    {
      icon: Plane,
      title: "Dental, Vision & Travel Coverage",
      description: "From everyday wellness to global travel protection, we make sure your coverage moves with your life.",
      gradient: "from-purple-500 to-violet-600",
      glowColor: "purple",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-white bg-black px-4 py-2 rounded-full uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Tailored Insurance and Financial Solutions
          </p>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">
            At AV Financial, we offer a full range of insurance and protection plans designed to 
            help you build security, plan your future, and protect your legacy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-50 to-transparent rounded-tr-3xl opacity-50" />
              
              {/* Hover Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Top Border Accent */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-3/4 transition-all duration-500 rounded-full`} />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/btn hover:gap-2 transition-all duration-300`}>
                  Learn More
                  <ArrowRight className={`ml-2 w-4 h-4 text-${service.glowColor}-500 group-hover/btn:translate-x-1 transition-transform duration-300`} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};
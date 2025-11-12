import { useState } from "react";
import { Target, TrendingUp, Heart, Shield, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const AboutPage = () => {
  const missionPoints = [
    {
      icon: Shield,
      title: "Protection",
      desc: "Safeguarding what matters most through properly structured insurance and wealth-preservation strategies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Implementing tax-efficient and sustainable methods to help clients accumulate and retain wealth over time.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Legacy",
      desc: "Supporting long-term planning that allows clients to pass on financial assets and confidence to future generations.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const corePrinciples = [
    {
      icon: Shield,
      title: "Education",
      desc: "We help clients understand every option before they make a decision.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      desc: "We give clients control over their future through informed decisions.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Ethical Practice",
      desc: "Full compliance and transparency in every recommendation.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const highlights = [
    { text: "Licensed Life & Health Insurance Producer", icon: CheckCircle2 },
    { text: "Licensed Across the United States", icon: CheckCircle2 },
    { text: "15+ Years Financial Services Experience", icon: CheckCircle2 },
    { text: "1000+ Families Protected", icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
                  About AV Financial
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Meet Shrutep Amin
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
                Your Financial Clarity Partner
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-semibold">
                Empowering families to build wealth with clarity, confidence, and integrity
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Licensed Life and Health Insurance Producer dedicated to helping individuals, families, and businesses take control of their financial future with personalized strategies and unwavering ethical standards.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300"
                  >
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm font-medium text-blue-100">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="w-full sm:w-auto bg-white hover:bg-white-90 text-[#1a2957] text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-white hover:text-[#1a2957] text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors">
                  Explore Services
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="av.webp"
                  alt="Shrutep Amin - Financial Advisor"
                  className="w-full  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Bio Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2957] rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-widest">
                Who is Shrutep Amin
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              The Journey to <span className="text-slate-700">Financial Clarity</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-slate-400 rounded-br-3xl group-hover:border-slate-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-slate-400 rounded-tl-3xl group-hover:border-slate-500 transition-colors duration-300"></div>

                <div className="space-y-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed relative z-10">
                  <p>
                    <span className="font-bold text-slate-900">Shrutep Amin</span> is a licensed Life and Health Insurance Producer with a mission to transform how people think about financial planning. His journey began with a simple realization: <span className="italic text-slate-800 font-semibold">true financial freedom is not about luck or inheritance, but about understanding how money works and making informed, intentional choices.</span>
                  </p>
                  <p>
                    Over the years, Shrutep has worked with people from all walks of life—young professionals, families, and small business owners. He's helped them protect what they've built, prepare for the unexpected, and create a lasting legacy that extends far beyond financial assets.
                  </p>
                  <p>
                    Partnering with industry-leading carriers such as <span className="font-bold">Corebridge Financial (AIG), F&G, Nationwide, North American Company, American Equity, Athene, Mutual of Omaha, and Lincoln Financial</span>, Shrutep provides access to comprehensive fixed and indexed insurance and annuity products—all designed with full compliance to U.S. financial and insurance regulations.
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-slate-200 relative z-10">
                  <blockquote className="italic text-lg sm:text-xl md:text-2xl text-slate-800 font-semibold mb-4">
                    "Financial independence doesn't come from shortcuts or speculation—it comes from clarity, structure, and consistency. My mission is to make complex financial concepts simple and actionable so families can move forward with confidence."
                  </blockquote>
                  <p className="text-sm sm:text-base text-slate-600 font-semibold">— Shrutep Amin, Founder, AV Financial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-white bg-clip-text text-transparent uppercase tracking-wide">
                Our Foundation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Mission & Vision
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Guiding principles that drive everything we do
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Mission
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-3 sm:mb-4">
                  To educate and empower families to make informed financial decisions aligned with their goals.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                  We replace confusion with clarity, helping individuals protect their income, preserve their assets, and plan for a secure future with confidence and control.
                </p>
                <div className="space-y-3 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-white/80">Replace confusion with clarity and understanding</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-white/80">Build lasting relationships based on trust</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-white/80">Deliver measurable, actionable results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Vision
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-3 sm:mb-4">
                  Build a nationwide community of financially informed, confident families.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                  We envision a world where financial literacy is accessible to all, creating a recognized symbol of transparency, dependability, and empowerment bridging professional advice and everyday financial understanding.
                </p>
                <div className="space-y-3 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-white/80">Make financial literacy universally accessible</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-white/80">Champion ethical financial practices nationwide</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-white/80">Empower generational wealth building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {missionPoints.map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden h-full flex flex-col">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </section>

      {/* Core Principles Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-widest">
                AV Financial
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Three Guiding <span className="text-slate-700">Principles</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The foundation of everything we do
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {corePrinciples.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative">
            <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
             

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-4 sm:mb-6 group-hover:text-gray-100 transition-colors duration-300">
                Ready to Take Control?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 text-center mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto group-hover:text-white/80 transition-colors duration-300">
                Build financial security, grow your assets, and protect your family's future. Schedule a free consultation with Shrutep Amin and AV Financial today to start your journey toward financial clarity and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1a2957] font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-slate-800 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default AboutPage;
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
      <Header />
      {/* Hero Section - Dark */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  About AV Financial
                </span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Meet Shrutep Amin
                </h1>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-8">
                  Your Financial Clarity Partner
                </p>
              </div>

              <p className="text-md md:text-xl text-slate-300 font-semibold">
                Empowering families to build wealth with clarity, confidence, and integrity
              </p>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Licensed Life and Health Insurance Producer dedicated to helping individuals, families, and businesses take control of their financial future with personalized strategies and unwavering ethical standards.
              </p>

              <div className="space-y-3 py-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-4">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg p-3  rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="w-full sm:w-auto border-2 border-slate-700 text-white bg-transparent hover:bg-slate-800 text-lg p-3 rounded-lg font-semibold transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="relative rounded-tl-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Shrutep Amin - Financial Advisor"
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Bio Section - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 bg-slate-100 rounded-full mb-6 border border-slate-200">
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Who is Shrutep Amin</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                The Journey to <span className="text-slate-700">Financial Clarity</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

              <div className="relative bg-gradient-to-br from-white/80 to-white/50 border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-slate-400 rounded-br-3xl group-hover:border-slate-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-slate-400 rounded-tl-3xl group-hover:border-slate-500 transition-colors duration-300"></div>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed relative z-10">
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

                {/* Quote Section */}
                <div className="mt-10 pt-10 border-t-2 border-slate-200 relative z-10">
                  <blockquote className="italic text-xl text-slate-800 font-semibold mb-4">
                    "Financial independence doesn't come from shortcuts or speculation—it comes from clarity, structure, and consistency. My mission is to make complex financial concepts simple and actionable so families can move forward with confidence."
                  </blockquote>
                  <p className="text-slate-600 font-semibold">— Shrutep Amin, Founder, AV Financial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Dark */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Mission & Vision
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Mission</h3>
                <p className="text-lg font-semibold text-white/90 mb-4">
                  To educate and empower families to make informed financial decisions aligned with their goals.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We replace confusion with clarity, helping individuals protect their income, preserve their assets, and plan for a secure future with confidence and control.
                </p>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-white/80">Replace confusion with clarity and understanding</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-white/80">Build lasting relationships based on trust</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-white/80">Deliver measurable, actionable results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Vision</h3>
                <p className="text-lg font-semibold text-white/90 mb-4">
                  Build a nationwide community of financially informed, confident families.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We envision a world where financial literacy is accessible to all, creating a recognized symbol of transparency, dependability, and empowerment bridging professional advice and everyday financial understanding.
                </p>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-white/80">Make financial literacy universally accessible</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-white/80">Champion ethical financial practices nationwide</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <p className="text-white/80">Empower generational wealth building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-10">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionPoints.map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-slate-100 rounded-full mb-6 border border-slate-200">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">AV Financial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
              Three Guiding <span className="text-slate-700">Principles</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The foundation of everything we do
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {corePrinciples.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className=" bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div >
            <div className="group relative">
              <div className="relative  rounded-3xl p-10 md:p-16 shadow-lg hover:shadow-xl transition-all duration-300  overflow-hidden">
                
                <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-6">
                  Ready to Take Control?
                </h2>

                <p className="text-lg text-white/70 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
                  Build financial security, grow your assets, and protect your family's future. Schedule a free consultation with Shrutep Amin and AV Financial today to start your journey toward financial clarity and confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto border-2 border-slate-700 text-white bg-transparent hover:bg-slate-800 font-bold p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutPage;
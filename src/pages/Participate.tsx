import { useState } from "react";
import { Users, TrendingUp, Clock, Award, Target, Zap, CheckCircle2, ArrowRight, Lightbulb, Rocket } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ParticipatePage = () => {
  const benefits = [
    {
      icon: Target,
      title: "Proven Success System",
      description: "Step-by-step training designed to help you grow your skills and income quickly.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Unlimited Earning Potential",
      description: "Your growth is in your hands—no income caps or artificial limits.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Flexible Work Environment",
      description: "Work from anywhere, on a schedule that suits your lifestyle.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Mentorship & Support",
      description: "Learn directly from experienced leaders and industry professionals.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Career Growth Opportunities",
      description: "Build your career while helping others achieve financial security.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Rocket,
      title: "Elite Community Network",
      description: "Connect with driven professionals and build lasting relationships.",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content: "Joining AV Financial gave me the freedom to work on my terms and the tools to exceed my expectations. In just 6 months, I built a sustainable income stream.",
      achievement: "+$5K Monthly Income"
    },
    {
      name: "James T.",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      content: "The mentorship and community here are unmatched. I went from zero experience to earning a full-time income confidently and helping others do the same.",
      achievement: "Built Team of 20+"
    },
    {
      name: "Emily R.",
      role: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      content: "This opportunity transformed my career. I now have the confidence and skills to build a path I truly love while making real impact.",
      achievement: "Top 10% Earner"
    }
  ];

  const features = [
    "Comprehensive training program",
    "One-on-one mentorship",
    "Proven marketing strategies",
    "Access to industry-leading tools",
    "Flexible work schedule",
    "Performance-based rewards",
    "Supportive team community",
    "Continuous education",
    "Weekly training sessions",
    "Advanced certification path",
    "Networking events",
    "Income growth tracking"
  ];

  const process = [
    {
      step: "1",
      icon: Users,
      title: "Schedule Call",
      description: "Connect with our team for a confidential consultation about your goals.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "2",
      icon: Lightbulb,
      title: "Begin Training",
      description: "Get access to our proven system and start your personalized training program.",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "3",
      icon: Rocket,
      title: "Launch & Grow",
      description: "Start building your business with ongoing mentorship and support.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold bg-white bg-clip-text text-transparent uppercase tracking-wide">
                  Join Our Mission
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Build Your Future with
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                AV Financial
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-semibold">
                Become part of an elite community of driven professionals
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                At AV Financial, we provide a complete ecosystem: proven systems, expert mentorship, and a thriving community to help you achieve financial independence while making meaningful impact.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">1000+ Team Members</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">$50M+ Generated Income</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">98% Retention Rate</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Schedule Your Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-slate-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-tl-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
                  alt="Join AV Financial"
                  className="w-full h-[500px] md:h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-widest">
                Why Join Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Why Choose <span className="text-slate-700">AV Financial</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive benefits designed for your success
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-black animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-black uppercase tracking-wide">
                Success Stories
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Meet Our Top Performers
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Real people, real transformations
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white border border-slate-700/50 rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-600 overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                  <div className="relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mb-4 sm:mb-6 border-2 border-slate-700 group-hover:border-slate-600 transition-colors duration-300"
                    />
                    <p className="text-sm sm:text-base text-black leading-relaxed mb-4 sm:mb-6 italic flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="pt-4 sm:pt-6 border-t border-slate-700/50">
                      <div className="font-bold text-base sm:text-lg text-black">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-blue-400 font-semibold">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-widest">
                Comprehensive Support
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              What You'll <span className="text-slate-700">Get</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                <div className="relative flex items-center border-2 border-slate-200 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white shadow-md hover:shadow-lg group-hover:border-slate-300 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-black animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-black uppercase tracking-wide">
                Get Started
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Your Path to Success
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Simple, straightforward steps to launch your career
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-white border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden h-full flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 sm:mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mt-2 sm:mt-4`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4  transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black leading-relaxed flex-grow  transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/20 to-white/10 border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative">
            <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
             

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 text-center mb-4 sm:mb-6 group-hover:text-slate-800 transition-colors duration-300">
                Ready to Transform <span className="text-blue-600">Your Future?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 text-center mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto group-hover:text-slate-700 transition-colors duration-300">
                Take the first step toward a rewarding career with AV Financial. Learn, grow, and achieve financial independence while helping families secure their futures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto border-2 border-slate-400 text-slate-900 bg-white hover:bg-slate-50 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ParticipatePage;
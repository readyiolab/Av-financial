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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-blue-900/80" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-300 uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Join Our Mission
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                  Build Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">AV Financial</span>
                </h1>

                <p className="text-xl text-slate-200 font-semibold leading-relaxed">
                  Become part of an elite community of driven professionals dedicated to financial empowerment and generational wealth building.
                </p>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                At AV Financial, we don't just offer opportunities—we provide the complete ecosystem: proven systems, expert mentorship, and a thriving community to help you achieve financial independence while making meaningful impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="group cursor-pointer ">
                  <div className="text-2xl  text-blue-400 group-hover:text-blue-300 transition-colors">1000+</div>
                  <div className="text-sm text-slate-400">Team Members</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl  text-blue-400 group-hover:text-blue-300 transition-colors">$50M+</div>
                  <div className="text-sm text-slate-400">Generated Income</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl  text-blue-400 group-hover:text-blue-300 transition-colors">98%</div>
                  <div className="text-sm text-slate-400">Retention Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-4">
                <button className=" bg-gradient-to-r from-blue-600 to-blue-700  text-white text-md p-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ">
                  Schedule Your Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                </button>

                <button className="w-full sm:w-auto border-2 border-slate-600 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm text-md p-3  rounded-xl font-semibold transition-all duration-300 hover:border-slate-500">
                  Learn More
                </button>
              </div>

            </div>

            {/* Right Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Gradient card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>

                {/* Main card */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-slate-100 rounded-full mb-6 border border-slate-200">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Why Join Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
              Why Choose <span className="text-slate-700">AV Financial</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive benefits designed for your success
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Dark */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Meet Our <span className="text-blue-400">Top Performers</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Real people, real transformations. See what our team members have achieved.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                  {/* Profile Image */}
                  <div className="mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"
                    />
                  </div>

                  {/* Achievement Badge */}
                  <div className="inline-block mb-4 px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full">
                    <span className="text-sm font-semibold text-blue-400">{testimonial.achievement}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 italic mb-6 leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Name & Role */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-blue-400 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-slate-100 rounded-full mb-6 border border-slate-200">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Comprehensive Support</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
              What You'll <span className="text-slate-700">Get</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to succeed
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                 

                  <div className="relative flex items-center border-2 border-gray-100 gap-4 p-6 rounded-xl  group-hover:border-slate-300 transition-all duration-300 bg-white group-hover:shadow-md">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Dark */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Your Path to <span className="text-blue-400">Success</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Simple, straightforward steps to launch your career
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Schedule Call",
                  desc: "Connect with our team for a confidential consultation about your goals.",
                  icon: Users
                },
                {
                  step: "2",
                  title: "Begin Training",
                  desc: "Get access to our proven system and start your personalized training program.",
                  icon: Lightbulb
                },
                {
                  step: "3",
                  title: "Launch & Grow",
                  desc: "Start building your business with ongoing mentorship and support.",
                  icon: Rocket
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                    <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white mb-6 shadow-lg">
                        <span className="text-2xl font-bold text-black">{item.step}</span>
                      </div>

                    

                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Ready to Transform <span className="text-blue-400">Your Future?</span>
                </h2>

                <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Take the first step toward a rewarding career with AV Financial. Learn, grow, and achieve financial independence while helping families secure their futures.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold p-3   rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                    Learn More
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

export default ParticipatePage;
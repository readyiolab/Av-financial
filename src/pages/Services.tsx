import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  HeartPulse,
  TrendingUp,
  Stethoscope,
  Home,
  Plane,
  Eye,
  FileText, Calculator,
  CheckCircle2,
  Lock,
  Users,
  ArrowRight,
  Shield,
  Sparkles,
  ChevronRight,
  Target,
  Zap,
  PenTool,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: HeartPulse,
      iconColor: "from-rose-400 to-pink-600",
      iconBg: "from-rose-500/20 to-pink-500/20",
      title: "Life Insurance & Annuities",
      items: [
        {
          name: "Term Life Insurance",
          description: "Affordable coverage for a specified period, with flexible premiums. Ideal for income protection and family security.",
          highlight: "Most Popular"
        },
        {
          name: "Whole Life Insurance",
          description: "Lifetime coverage with cash value growth, tax-deferred savings, and borrowing options."
        },
        {
          name: "Universal Life Insurance",
          description: "Permanent coverage with adjustable premiums and potential cash value growth for flexible financial planning."
        },
        {
          name: "Final Expense Insurance",
          description: "Simplified plans to cover funeral, medical, and legal expenses, reducing financial burden on your loved ones."
        },
        {
          name: "Linked & Living Benefits",
          description: "Innovative life insurance solutions that allow you to access cash for critical illnesses or long-term needs.",
          highlight: "Innovative"
        },
        {
          name: "Annuities",
          description: "Fixed, indexed, or rollover annuities to ensure secure retirement income with guaranteed growth and protection."
        }
      ]
    },
    {
      icon: Stethoscope,
      iconColor: "from-blue-400 to-cyan-600",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      title: "Medicare Solutions",
      items: [
        {
          name: "Medicare Advantage Plans",
          description: "Comprehensive coverage for healthcare services with added benefits.",
          highlight: "Comprehensive"
        },
        {
          name: "Medicare Supplement (Medigap) Insurance",
          description: "Close gaps in Original Medicare to reduce out-of-pocket costs."
        },
        {
          name: "Part D Prescription Drug Plans",
          description: "Affordable prescription coverage tailored to your medication needs."
        },
        {
          name: "Eligibility Guidance & Plan Comparison",
          description: "Helping you select the right plan with confidence."
        }
      ]
    },
    {
      icon: Shield,
      iconColor: "from-emerald-400 to-teal-600",
      iconBg: "from-emerald-500/20 to-teal-500/20",
      title: "Health Insurance Solutions",
      items: [
        {
          name: "Individual & Family Health Plans",
          description: "Comprehensive coverage through the Health Insurance Marketplace.",
          highlight: "For Families"
        },
        {
          name: "Short-Term Medical Insurance",
          description: "Temporary coverage for unexpected healthcare needs."
        },
        {
          name: "Health Savings Accounts (HSAs)",
          description: "Tax-advantaged savings for medical expenses.",
          highlight: "Tax Benefits"
        },
        {
          name: "Essential Health Benefits",
          description: "Access preventive care, doctor visits, and treatments with confidence."
        }
      ]
    },
    {
      icon: Home,
      iconColor: "from-amber-400 to-orange-600",
      iconBg: "from-amber-500/20 to-orange-500/20",
      title: "Long-Term Care Insurance",
      items: [
        {
          name: "Comprehensive Coverage",
          description: "Assistance with daily living tasks at home, assisted living, or nursing facilities."
        },
        {
          name: "Flexible Benefits",
          description: "Daily or monthly coverage, policy maximums, and automatic inflation adjustments."
        },
        {
          name: "Peace of Mind",
          description: "Protects your savings from high long-term care costs and ensures independence.",
          highlight: "Recommended"
        }
      ]
    },
    {
      icon: Plane,
      iconColor: "from-purple-400 to-violet-600",
      iconBg: "from-purple-500/20 to-violet-500/20",
      title: "Travel Insurance",
      items: [
        {
          name: "Accidents & Illness",
          description: "Medical coverage while traveling internationally."
        },
        {
          name: "Trip Protection",
          description: "Trip cancellations, lost luggage, and rental car coverage.",
          highlight: "Complete Coverage"
        },
        {
          name: "Customized Solutions",
          description: "Evaluate current coverage and provide additional international travel protection if needed."
        }
      ]
    },
    {
      icon: Eye,
      iconColor: "from-indigo-400 to-blue-600",
      iconBg: "from-indigo-500/20 to-blue-500/20",
      title: "Dental & Vision Insurance",
      items: [
        {
          name: "Dental Coverage",
          description: "PPOs, HMOs, and indemnity plans for preventive care, basic procedures, and major dental work."
        },
        {
          name: "Vision Insurance",
          description: "Coverage for exams, lenses, frames, and corrective procedures."
        },
        {
          name: "Flexible Plans",
          description: "Options for individuals, families, and businesses, tailored to your needs.",
          highlight: "Flexible"
        }
      ]
    }
  ];

  const process = [
    {
      step: "1",
      icon: Lightbulb,
      title: "Personalized Consultation",
      description: "We begin by understanding your goals, concerns, and current financial situation.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "2",
      icon: PenTool,
      title: "Custom Strategy Development",
      description: "Receive a detailed, tailored plan designed to protect, grow, and secure your wealth.",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "3",
      icon: Zap,
      title: "Implementation & Support",
      description: "Take action with confidence—our team guides you through each step and connects you with trusted partners.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: "4",
      icon: CheckCircle2,
      title: "Continuous Review",
      description: "Your financial situation evolves, and so does our plan. Annual reviews ensure your strategy stays aligned with your goals.",
      color: "from-orange-500 to-orange-600"
    }
  ];
  const resources = [
    {
      icon: FileText,
      title: "PDF Guides",
      description: "Step-by-step planning and educational resources.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Compound Interest Calculator",
      description: "See your money grow over time.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Debt Payoff Simulator",
      description: "Plan a faster path to financial freedom.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];


  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Protect", "Grow", "Secure"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Shield, text: "Comprehensive Protection" },
    { icon: TrendingUp, text: "Wealth Growth Strategies" },
    { icon: Lock, text: "Secure Your Legacy" }
  ];

  const whyChoose = [
    {
      icon: CheckCircle2,
      title: "Trusted Expertise",
      desc: "Years of experience helping families navigate complex financial decisions.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      desc: "No cookie-cutter plans—every strategy is customized to your goals.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Comprehensive Coverage",
      desc: "From life insurance to Medicare, travel, and beyond.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "USA Compliance",
      desc: "All strategies follow regulatory standards and best practices.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const planningItems = [
    {
      title: "Custom Wealth Roadmaps",
      description: "Tailored plans to align with your goals and lifestyle.",
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Debt Management Strategies",
      description: "Systems to reduce debt efficiently and reinvest in wealth-building.",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Educational Resources",
      description: "Tools, PDFs, and calculators to understand your finances clearly.",
      icon: Sparkles,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Ongoing Guidance",
      description: "Annual reviews and strategy updates as your life evolves.",
      icon: Shield,
      color: "from-orange-500 to-orange-600"
    }
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
              backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 mt-2  ">
                {/* <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  Professional Financial Services
                </span> */}
              </div>

              <div >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Empowering Your
                </h1>

                <div className="h-24 flex items-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
                    {words[currentWord]}
                  </h2>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Financial Future
                </h1>
              </div>

              <p className="text-md md:text-xl text-slate-300 font-semibold">
                Strategies That Protect, Grow, and Secure Your Wealth
              </p>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                At AV Financial, we believe financial success isn't just about numbers—it's about
                clarity, confidence, and control. Our services are designed to guide you through
                every stage of life with personalized strategies.
              </p>

              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 rounded-full border border-slate-700 hover:border-blue-600 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-slate-200">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-7"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-700 text-white bg-transparent hover:bg-slate-800 text-lg px-10 py-7"
                >
                  Explore Services
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 pb-4">
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-slate-400">Families Protected</div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="relative rounded-tl-[3rem] overflow-hidden ">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                  alt="Financial Planning Excellence"
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-slate-100 rounded-full mb-6 border border-slate-200">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
              Why Choose <span className="text-slate-700">AV Financial</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of personalized financial planning with a trusted partner
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Why Choose Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                {/* Card */}
                <div className="relative bg-white  rounded-2xl p-8 shadow-lg hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-400 overflow-hidden h-full flex flex-col">

                  {/* Top Left Corner Accent */}


                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {item.desc}
                  </p>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        

       

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-500/30 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-black animate-pulse" />
              <span className="text-sm font-semibold bg-black bg-clip-text text-transparent uppercase tracking-wide">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 text-center mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Comprehensive Financial
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Tailored protection strategies for every stage of your life
            </p>
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-16 h-1 bg-white  rounded-full" />
            </div>
          </div>

          {/* Services - Zigzag Layout */}
          <div className="space-y-24 max-w-7xl mx-auto">
            {services.map((service, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative">
                  {/* Connecting line for zigzag effect */}
                  {idx < services.length - 1 && (
                    <div className={`absolute ${isLeft ? 'right-0 top-full' : 'left-0 top-full'} w-1/2 h-24 pointer-events-none hidden lg:block`}>
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d={isLeft ? "M 0 0 Q 50 50 100 100" : "M 100 0 Q 50 50 0 100"}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}

                  <div className={`flex flex-col lg:flex-row gap-8 items-center ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Service Icon & Title */}
                    <div className={`lg:w-2/5 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                      <div className={`inline-flex ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col items-center gap-6 mb-4`}>
                        {/* Colorful Icon */}
                        <div className="relative group">
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse`} />
                          <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${service.iconColor} flex items-center justify-center shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className="w-12 h-12 text-white drop-shadow-lg" />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                            {service.title}
                          </h3>
                          <div className={`h-1 w-20 bg-gradient-to-r ${service.iconColor} rounded-full ${isLeft ? 'lg:ml-auto' : 'lg:mr-auto'} mx-auto`} />
                        </div>
                      </div>
                    </div>

                    {/* Service Items Grid */}
                    <div className="lg:w-3/5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="group/card relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover/card:opacity-100 blur-xl transition-all duration-500" />

                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-slate-600 backdrop-blur-sm transition-all duration-300 overflow-hidden h-full">
                              {/* Animated gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                              {/* Highlight badge */}
                              {item.highlight && (
                                <div className="absolute -top-1 -right-2 z-10">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur-md animate-pulse" />
                                    <div className="relative px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-lg border border-yellow-300 shadow-lg flex items-center gap-1">
                                      <Sparkles className="w-3 h-3" />
                                      {item.highlight}
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="relative z-10">
                                {/* Card header with indicator */}
                                <div className="flex items-start gap-3 mb-3">
                                  
                                  <h4 className="font-bold text-lg text-white group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-blue-300 group-hover/card:via-purple-300 group-hover/card:to-pink-300 group-hover/card:bg-clip-text transition-all duration-300">
                                    {item.name}
                                  </h4>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed text-sm group-hover/card:text-slate-300 transition-colors duration-300">
                                  {item.description}
                                </p>

                                {/* Bottom accent line */}
                                <div className="mt-4 h-1 w-0 group-hover/card:w-full bg-white rounded-full transition-all duration-500" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-blue-500/30 rounded-tl-3xl" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-purple-500/30 rounded-br-3xl" />
      </section>

      {/* Financial Planning - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div >
            {/* Main Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"></div>

              {/* Card Container */}
              <div className="relative  p-10 md:p-16 ">

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-slate-400 rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-slate-400 rounded-tl-3xl group-hover:border-slate-500 transition-colors duration-300"></div>



                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 text-center mb-6">
                  Financial Planning & Education
                </h2>

                {/* Subtitle */}
                <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                  We don't just provide services—we empower you to take control of your financial future
                </p>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mb-12 rounded-full"></div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {planningItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/item relative"
                    >
                      {/* Item glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-transparent rounded-2xl opacity-0 group-hover/item:opacity-40 transition-opacity duration-300 blur-lg"></div>

                      {/* Item Card */}
                      <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:border-slate-300 overflow-hidden h-full flex flex-col">

                        {/* Card corner accent */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-300 rounded-br-xl group-hover/item:border-slate-400 transition-colors duration-300"></div>

                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover/item:text-slate-800 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed flex-grow group-hover/item:text-slate-700 transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-300 rounded-tl-xl group-hover/item:border-slate-400 transition-colors duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Dark */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full border-white/30 mb-6">
              <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              How We Work Together
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A proven 4-step process to build your financial success
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Glow effect */}

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 overflow-hidden h-full flex flex-col">





                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mt-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-tl-2xl group-hover:border-white/40 transition-colors duration-300"></div>
                </div>

                {/* Arrow Connector */}
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

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div >
            {/* CTA Card */}
            <div className="group relative">


              {/* Main Card */}
              <div className="relative ">

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-slate-400 rounded-br-3xl group-hover:border-slate-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-slate-400 rounded-tl-3xl group-hover:border-slate-500 transition-colors duration-300"></div>



                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 text-center mb-6 group-hover:text-slate-800 transition-colors duration-300">
                  Start Your Journey Today
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 text-center mb-12 leading-relaxed max-w-3xl mx-auto group-hover:text-slate-700 transition-colors duration-300">
                  Build financial security, grow your assets, and protect your family's future. Schedule a free consultation with Shrutep Amin and AV Financial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Button
                    size="lg"
                    className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-10 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn text-lg"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-400 text-slate-900 bg-white hover:bg-slate-50 font-bold px-10 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Try Our Tools
                  </Button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full border-white/30 mb-6">
              <span className="text-sm font-semibold text-white uppercase tracking-wide">Try Our Tools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Financial Planning Tools
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Empower yourself with our interactive resources designed to help you make informed financial decisions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {resources.map((resource, idx) => (
              <div key={idx} className="group relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-white/20 overflow-hidden h-full flex flex-col">

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-br-2xl group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-tl-2xl group-hover:border-white/40 transition-colors duration-300"></div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-300">
                    {resource.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-semibold">Access Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative">


              {/* About Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-14 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden">

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-br-3xl group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-tl-3xl group-hover:border-white/40 transition-colors duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    AV Financial
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    Building confidence, clarity, and control into every financial decision. Protect your wealth, educate your family, and plan for a future you can rely on.
                  </p>

                  {/* Divider */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm">
                      Let us help you navigate your financial journey with expertise, trust, and personalized guidance every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
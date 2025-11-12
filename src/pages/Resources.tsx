// src/pages/Resources.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  TrendingUp,
  Shield,
  Calculator,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import ApplicationModal from "@/components/ApplicationModal";

const Resources = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const resources = [
    {
      icon: Shield,
      title: "Tax-Advantaged Income Stream",
      description: "Navigate Medicare with confidence and make every dollar count.",
      gradient: "from-blue-500 to-blue-600",
      pdf: "Tax-Advantaged Income Stream.pdf",
      points: [
        "Learn how to choose the right plans for your needs",
        "Understand coverage options, costs, and ways to minimize out-of-pocket expenses",
        "Take control of your healthcare decisions with clarity and peace of mind",
      ],
    },
    {
      icon: TrendingUp,
      title: "Medicare Benefits Without Overpaying",
      description: "Discover how annuities can provide steady, tax-smart income for retirement.",
      gradient: "from-purple-500 to-purple-600",
      pdf: "Medicare Benefits Without Overpaying.pdf",
      points: [
        "Learn the different types of annuities and their benefits",
        "Understand how to structure payouts for long-term financial security",
        "Make informed choices that help your money grow while reducing tax burdens",
      ],
    },
    {
      icon: Calculator,
      title: "Smart Investments ",
      description: "Harness the power of compounding to grow your wealth over time.",
      gradient: "from-emerald-500 to-emerald-600",
      pdf: "Smart Investments.pdf",
      points: [
        "Visualize how consistent, strategic investments can multiply",
        "Learn practical techniques to boost returns without unnecessary risk",
        "Plan for short-term goals and long-term financial freedom with confidence",
      ],
    },
  ];

  const openModal = (pdfTitle: string) => {
    setSelectedPdf(pdfTitle);
    setModalOpen(true);
  };

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
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold bg-white bg-clip-text text-transparent uppercase tracking-wide">
                  Free Educational Resources
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Unlock Knowledge
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Protect & Grow Your Wealth
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-semibold">
                Expert-Crafted Financial Guides
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Take control of your financial future with Shrutep Amin's free guides. Each resource provides actionable steps and clear insights on complex financial topics, free of jargon.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">3 Free Guides</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">Expert Insights</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">100% Free Access</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Download Free Guides
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-slate-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Resources
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-tl-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
                  alt="Financial Education Resources"
                  className="w-full h-[500px] md:h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guides Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2957] rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-widest">
                Our Free Guides
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Expert Knowledge, <span className="text-slate-700">Free Access</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Download comprehensive guides designed to help you make informed financial decisions
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {resources.map((resource, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                  <div className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col border border-slate-200">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                    >
                      <resource.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-grow group-hover:text-slate-700 transition-colors duration-300">
                      {resource.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {resource.points.map((point, pointIdx) => (
                        <li
                          key={pointIdx}
                          className="flex items-start gap-2 sm:gap-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-slate-300 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-700"></div>
                          </div>
                          <span className="text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => openModal(resource.pdf)}
                      className="w-full bg-[#1a2957] hover:bg-[#1a2957]/90 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Download Now
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <Calculator className="w-3 h-3 sm:w-4 sm:h-4 text-black animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-black bg-clip-text text-transparent uppercase tracking-wide">
                Interactive Tools
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                More Ways to Learn & Plan
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore our interactive calculators and join our growing network
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Calculator,
                title: "Compound Growth Calculator",
                description: "See how your money can grow when you plan strategically. Use our interactive calculator to visualize different investment scenarios.",
                gradient: "from-blue-500 to-blue-600",
                link: "/calculator",
                buttonText: "Use Calculator",
              },
              {
                icon: TrendingUp,
                title: "Join AV Financial Partners",
                description: "Be part of our growing network of professionals helping others achieve financial peace of mind—while earning income and impact.",
                gradient: "from-purple-500 to-purple-600",
                link: "/participate",
                buttonText: "Join Now",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white border border-slate-700/50 rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-600 overflow-hidden h-full flex flex-col">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black leading-relaxed mb-4 sm:mb-6 flex-grow transition-colors duration-300">
                    {item.description}
                  </p>
                  <Link to={item.link}>
                    <Button className="w-full sm:w-auto border-2 bg-[#1a2957] text-white hover:bg-white hover:text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                      {item.buttonText}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative">
            <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 text-center mb-4 sm:mb-6 group-hover:text-slate-800 transition-colors duration-300">
                Need Personalized Guidance?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 text-center mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto group-hover:text-slate-700 transition-colors duration-300">
                If you're looking for advice specific to your situation, Shrutep Amin is here to help. Schedule a free consultation and get a roadmap tailored to your goals, lifestyle, and family's future.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-[#1a2957] hover:bg-[#1a2957]/90 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Schedule Your Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        pdfTitle={selectedPdf}
        onSuccess={() => {
          // Optional: analytics, confetti, etc.
        }}
      />
    </div>
  );
};

export default Resources;
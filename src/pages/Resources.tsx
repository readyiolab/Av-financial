import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download, TrendingUp, Shield, Calculator, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      icon: Shield,
      title: "The Ultimate Guide to Maximizing Medicare Benefits Without Overpaying",
      description: "Navigate Medicare with confidence and make every dollar count.",
      gradient: "from-blue-500 to-blue-600",
      points: [
        "Learn how to choose the right plans for your needs",
        "Understand coverage options, costs, and ways to minimize out-of-pocket expenses",
        "Take control of your healthcare decisions with clarity and peace of mind"
      ]
    },
    {
      icon: TrendingUp,
      title: "How to Turn Annuities Into a Reliable, Tax-Advantaged Income Stream",
      description: "Discover how annuities can provide steady, tax-smart income for retirement.",
      gradient: "from-purple-500 to-purple-600",
      points: [
        "Learn the different types of annuities and their benefits",
        "Understand how to structure payouts for long-term financial security",
        "Make informed choices that help your money grow while reducing tax burdens"
      ]
    },
    {
      icon: Calculator,
      title: "Compound Your Money: How Small, Smart Investments Lead to Big Growth",
      description: "Harness the power of compounding to grow your wealth over time.",
      gradient: "from-emerald-500 to-emerald-600",
      points: [
        "Visualize how consistent, strategic investments can multiply",
        "Learn practical techniques to boost returns without unnecessary risk",
        "Plan for short-term goals and long-term financial freedom with confidence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
    
        {/* Hero Section - Dark */}
        <section  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80')"
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
                    Free Educational Resources
                  </span>
                </div>

                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Unlock Knowledge.
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
                    Protect Your Wealth.
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Grow Confidently.
                  </h3>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Start taking control of your financial future with Shrutep Amin's free, expert-crafted guides.
                  Each guide is designed to give you actionable steps and clarity on complex financial topics—without
                  confusing jargon.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-7"
                  >
                    Download Free Guides
                    <Download className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-700 text-white bg-transparent hover:bg-slate-800 text-lg px-10 py-7"
                  >
                    Explore Resources
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-white">3</div>
                    <div className="text-sm text-slate-400">Free Guides</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-slate-400">Free Access</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-bold text-white">Expert</div>
                    <div className="text-sm text-slate-400">Insights</div>
                  </div>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative">
                <div className="relative rounded-tl-[3rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
                    alt="Financial Education Resources"
                    className="w-full h-[650px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Guides Section - Light */}
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
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Our Free Guides</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                Expert Knowledge, <span className="text-slate-700">Free Access</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Download comprehensive guides designed to help you make informed financial decisions
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Resources - Alternating Layout */}
            <div className="relative max-w-7xl mx-auto py-16 px-6">
              {/* Vertical timeline line (centered) */}
              <div className="absolute left-1/2 top-0 w-1 bg-slate-200 h-full transform -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-24">
                {resources.map((resource, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                        } md:gap-12 group`}
                    >
                      
                     

                      {/* Content section */}
                      <div className="relative md:w-2/3">
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                          
                          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                            {resource.title}
                          </h3>
                          <p className="text-lg text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                            {resource.description}
                          </p>

                          {/* Points */}
                          <ul className="space-y-3 mb-8">
                            {resource.points.map((point, pointIdx) => (
                              <li
                                key={pointIdx}
                                className="flex items-start gap-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                              >
                                <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-slate-300 transition-colors duration-300">
                                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                </div>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            <Download className="w-4 h-4 mr-2" />
                            Download Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Additional Resources - Dark */}
        <section className="py-20 md:py-32 bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Interactive Tools</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
                More Ways to Learn & Plan
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Explore our interactive calculators and join our growing network
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 overflow-hidden h-full flex flex-col">

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-br-2xl group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-tl-2xl group-hover:border-white/40 transition-colors duration-300"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    Compound Growth Calculator
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-300">
                    See how your money can grow when you plan strategically. Use our interactive calculator
                    to visualize different investment scenarios.
                  </p>
                  <Link to="/calculator">
                    <Button
                      variant="outline"
                      className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      Use Calculator
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 overflow-hidden h-full flex flex-col">

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-br-2xl group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-tl-2xl group-hover:border-white/40 transition-colors duration-300"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    Join AV Financial Partners
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-300">
                    Be part of our growing network of professionals helping others achieve financial peace
                    of mind—while earning income and impact.
                  </p>
                  <Link to="/participate">
                    <Button
                      variant="outline"
                      className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      Join Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Light */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* CTA Card */}
              <div className="group relative">
                {/* Main Card */}
                <div className="relative">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-slate-400 rounded-br-3xl group-hover:border-slate-500 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-slate-400 rounded-tl-3xl group-hover:border-slate-500 transition-colors duration-300"></div>

                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 text-center mb-6 group-hover:text-slate-800 transition-colors duration-300">
                    Need Personalized Guidance?
                  </h2>

                  {/* Description */}
                  <p className="text-xl text-slate-600 text-center mb-12 leading-relaxed max-w-3xl mx-auto group-hover:text-slate-700 transition-colors duration-300">
                    If you're looking for advice specific to your situation, Shrutep Amin is here to help.
                    Schedule a free consultation and get a roadmap tailored to your goals, lifestyle, and
                    family's future.
                  </p>

                  {/* Button */}
                  <div className="flex justify-center">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-10 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                      >
                        Schedule Your Free Consultation
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
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

export default Resources;
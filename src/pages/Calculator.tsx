import { useState } from "react";
import { TrendingUp, DollarSign, Target, ArrowRight, Zap, LineChart, PieChart, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CalculatorPage = () => {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(20);

  const calculateCompound = () => {
    const monthlyRate = interestRate / 100 / 12;
    const months = years * 12;
    
    const futureValueInitial = initialAmount * Math.pow(1 + monthlyRate, months);
    const futureValueContributions = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    const totalValue = futureValueInitial + futureValueContributions;
    const totalContributed = initialAmount + (monthlyContribution * months);
    const totalEarnings = totalValue - totalContributed;
    
    return {
      totalValue: Math.round(totalValue),
      totalContributed: Math.round(totalContributed),
      totalEarnings: Math.round(totalEarnings),
      growthPercentage: Math.round((totalEarnings / totalContributed) * 100)
    };
  };

  const results = calculateCompound();

  const tips = [
    {
      icon: Target,
      title: "Start Early",
      description: "Even small amounts grow significantly over time with the power of compound interest.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Invest Regularly",
      description: "Consistent contributions compound faster than one-time deposits.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Optimize Returns",
      description: "Combine contributions with tax-efficient or high-yield investments for maximum impact.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const features = [
    { icon: LineChart, text: "Real-Time Visualization" },
    { icon: Target, text: "Multiple Scenarios" },
    { icon: DollarSign, text: "Expert Guidance" }
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
              backgroundImage: "url('https://images.unsplash.com/photo-1642783261276-8fe07d7c0e5d?w=1920&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Financial Planning Tool
                </span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Watch Your Money
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
                  Grow
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Over Time
                </h1>
              </div>

              <p className="text-md md:text-xl text-slate-300 font-semibold">
                Interactive Wealth Growth Calculator
              </p>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Visualize the true power of compound interest. Adjust your investment strategy in real-time and see exactly how your wealth can grow over decades.
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
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm p-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="w-full sm:w-auto border-2 border-slate-700 text-white bg-transparent hover:bg-slate-800 text-sm p-3 rounded-lg font-semibold transition-colors duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4 pb-4">
                <div>
                  <div className="text-3xl font-bold text-white">8.5x</div>
                  <div className="text-sm text-slate-400">Average Growth</div>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-slate-400">Year Planning</div>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-400">Free Tool</div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-tl-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Financial Growth"
                  className="w-full h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-black rounded-full mb-6 border border-slate-200">
              <span className="text-sm font-semibold text-white uppercase tracking-widest">Plan Your Growth</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
              See Your Wealth <span className="text-slate-700">Projection</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Adjust the sliders below to explore different scenarios and see your personalized wealth growth
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-10 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                   
                    Your Invetments
                  </h3>

                  <div className="space-y-8">
                    {/* Initial Amount */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-semibold text-slate-900">Initial Investment</label>
                        <span className="text-2xl font-bold text-black">${initialAmount.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="1000"
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(Number(e.target.value))}
                        className="w-full h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-black"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>$0</span>
                        <span>$100,000</span>
                      </div>
                    </div>

                    {/* Monthly Contribution */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-semibold text-slate-900">Monthly Contribution</label>
                        <span className="text-2xl font-bold text-black">${monthlyContribution.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        className="w-full h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-black"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>$0</span>
                        <span>$5,000</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-semibold text-slate-900">Annual Interest Rate</label>
                        <span className="text-2xl font-bold text-black">{interestRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="0.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-black"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>1%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    {/* Time Period */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-semibold text-slate-900">Time Period</label>
                        <span className="text-2xl font-bold text-black">{years} years</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="40"
                        step="1"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-black"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>1 year</span>
                        <span>40 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                {/* Main Result */}
                <div className="bg-black rounded-2xl p-10 text-white shadow-xl">
                  <div className="text-sm font-semibold opacity-90 mb-2">Total Future Value</div>
                  <div className="text-5xl font-bold mb-2">
                    ${results.totalValue.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-80">
                    In {years} years
                  </div>
                </div>

                {/* Two Small Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6  transition-colors duration-300">
                    <div className="text-xs text-slate-600 mb-2">Amount Contributed</div>
                    <div className="text-2xl font-bold text-slate-900">
                      ${results.totalContributed.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6  transition-colors duration-300">
                    <div className="text-xs text-slate-600 mb-2">Interest Earned</div>
                    <div className="text-2xl font-bold text-black">
                      ${results.totalEarnings.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Growth Percentage */}
                <div className="bg-slate-100 rounded-xl p-6 border-2 border-slate-200">
                  <div className="text-sm text-slate-600 mb-2">Overall Growth</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-slate-900">{results.growthPercentage}%</span>
                    <span className="text-sm text-slate-600">increase over {years} years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters - Dark */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Why This Matters</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Understanding Compound Interest
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              The foundation of wealth building is understanding how your money grows over time
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-white/30 to-white/10 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: LineChart,
                title: "See Your Progress",
                desc: "Visualize how your contributions and interest accumulate over time with detailed breakdowns."
              },
              {
                icon: Target,
                title: "Plan Strategically",
                desc: "Explore different scenarios to find the investment strategy that works best for you."
              },
              {
                icon: DollarSign,
                title: "Decide Confidently",
                desc: "Make informed investment decisions based on real, personalized projections."
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips - Light */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-slate-100 rounded-full mb-6 border border-slate-200">
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Expert Tips</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
              Accelerate Your <span className="text-slate-700">Wealth</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven strategies to maximize your returns and build lasting financial security
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tips.map((tip, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden h-full flex flex-col border border-slate-200">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <tip.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {tip.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {tip.description}
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
              

              <div className="relative  p-10 md:p-16 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden text-center">
               
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 relative z-10">
                  Ready to Build Your Wealth?
                </h2>

                <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative z-10">
                  Use this calculator to explore your possibilities. Then work with our financial experts to create a personalized roadmap for lasting wealth growth and financial security.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
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

export default CalculatorPage;
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
                  Financial Planning Tool
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Watch Your Money
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
                Grow Over Time
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-semibold">
                Interactive Wealth Growth Calculator
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Visualize the true power of compound interest. Adjust your investment strategy in real-time and see exactly how your wealth can grow over decades.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300"
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                      <span className="text-xs sm:text-sm font-medium text-blue-100">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1a2957] text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-transparent text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>

             
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-tl-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Financial Growth"
                  className="w-full h-[500px] md:h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2957] rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-widest">
                Plan Your Growth
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              See Your Wealth <span className="text-slate-700">Projection</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Adjust the sliders below to explore different scenarios and see your personalized wealth growth
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Inputs */}
              <div className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                 

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
                    Your Investments
                  </h3>

                  <div className="space-y-6 sm:space-y-8">
                    {/* Initial Amount */}
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <label className="text-sm sm:text-base font-semibold text-slate-900">Initial Investment</label>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">${initialAmount.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="1000"
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(Number(e.target.value))}
                        className="w-full h-2 sm:h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-[#1a2957]"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-slate-500 mt-2">
                        <span>$0</span>
                        <span>$100,000</span>
                      </div>
                    </div>

                    {/* Monthly Contribution */}
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <label className="text-sm sm:text-base font-semibold text-slate-900">Monthly Contribution</label>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">${monthlyContribution.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        className="w-full h-2 sm:h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-[#1a2957]"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-slate-500 mt-2">
                        <span>$0</span>
                        <span>$5,000</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <label className="text-sm sm:text-base font-semibold text-slate-900">Annual Interest Rate</label>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">{interestRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="0.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 sm:h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-[#1a2957]"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-slate-500 mt-2">
                        <span>1%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    {/* Time Period */}
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <label className="text-sm sm:text-base font-semibold text-slate-900">Time Period</label>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">{years} years</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="40"
                        step="1"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full h-2 sm:h-3 bg-slate-300 rounded-full appearance-none cursor-pointer accent-[#1a2957]"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-slate-500 mt-2">
                        <span>1 year</span>
                        <span>40 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4 sm:space-y-6">
                {/* Main Result */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-600 overflow-hidden">
                    <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-slate-700 rounded-br-3xl group-hover:border-slate-600 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-slate-700 rounded-tl-3xl group-hover:border-slate-600 transition-colors duration-300"></div>

                    <div className="text-xs sm:text-sm font-semibold text-slate-400 mb-2 sm:mb-3">Total Future Value</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">${results.totalValue.toLocaleString()}</div>
                    <div className="text-xs sm:text-sm text-slate-400">In {years} years</div>
                  </div>
                </div>

                {/* Two Small Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="text-xs sm:text-sm text-slate-600 mb-2">Amount Contributed</div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">${results.totalContributed.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="text-xs sm:text-sm text-slate-600 mb-2">Interest Earned</div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">${results.totalEarnings.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                {/* Growth Percentage */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                  <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-xs sm:text-sm text-slate-600 mb-2">Overall Growth</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{results.growthPercentage}%</span>
                      <span className="text-xs sm:text-sm text-slate-600">increase over {years} years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <LineChart className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-white bg-clip-text text-transparent uppercase tracking-wide">
                Why This Matters
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Understanding Compound Interest
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The foundation of wealth building is understanding how your money grows over time
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: LineChart,
                title: "See Your Progress",
                description: "Visualize how your contributions and interest accumulate over time with detailed breakdowns.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Plan Strategically",
                description: "Explore different scenarios to find the investment strategy that works best for you.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: DollarSign,
                title: "Decide Confidently",
                description: "Make informed investment decisions based on real, personalized projections.",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 overflow-hidden h-full flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>

      {/* Expert Tips Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2957] rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-widest">
                Expert Tips
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Accelerate Your <span className="text-slate-700">Wealth</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Proven strategies to maximize your returns and build lasting financial security
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {tips.map((tip, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col border border-slate-200">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <tip.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {tip.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                    {tip.description}
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
                Ready to Build Your Wealth?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 text-center mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto group-hover:text-white/80 transition-colors duration-300">
                Use this calculator to explore your possibilities. Then work with our financial experts to create a personalized roadmap for lasting wealth growth and financial security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="w-full sm:w-auto bg-white hover:bg-white/80 text-[#1a2957] font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
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

export default CalculatorPage;
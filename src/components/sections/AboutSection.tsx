import { Button } from "@/components/ui/button";
import { Heart, Target, Users2, Shield, TrendingUp, Award } from "lucide-react";
import { useState, useEffect } from "react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 backdrop-blur-sm border border-slate-700/50 transition-all duration-700 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const StatCounter = ({ end, label, suffix = "", delay }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div className="text-center group cursor-default min-w-[120px]">
      <div className="text-3xl font-medium bg-white bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-slate-400 font-medium">{label}</div>
    </div>
  );
};

export const AboutSection = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Tailored life and health insurance solutions that adapt to your unique circumstances and life stages.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Data-driven strategies designed to maximize your financial security and long-term wealth accumulation.",
    },
    {
      icon: Users2,
      title: "Nationwide Service",
      description: "Licensed across all 50 states, providing consistent expert guidance wherever life takes you.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-500/30 mb-8">
              <Award className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Licensed Life & Health Insurance Producer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Guiding You Toward
              </span>
              <br />
              <span className="bg-white bg-clip-text text-transparent">
                Lifelong Financial Confidence
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-xl text-slate-300 leading-relaxed mb-6 max-w-3xl mx-auto">
              I've seen how uncertain life can be, and how empowering it feels when you have a plan
              that truly protects what matters. As a{" "}
              <span className="text-blue-400 font-semibold">Licensed Life & Health Insurance Producer</span>{" "}
              serving clients across the U.S., my mission is to simplify your path to security and freedom.
            </p>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              At <span className="text-blue-400">AV Financial</span>, we don't just provide policies...
              we create strategies that bring you peace of mind today and stability for tomorrow.
            </p>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-black px-8 py-6 text-lg rounded-xl shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More About Shrutep
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`flex flex-row space-x-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible mb-20 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <StatCounter end={50} label="States Licensed" suffix="+" delay={600} />
          <StatCounter end={1000} label="Clients Served" suffix="+" delay={800} />
          <StatCounter end={99} label="Satisfaction Rate" suffix="%" delay={1000} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full animate-spin-slow delay-500" />
      </div>
    </section>
  );
};
import { Users, DollarSign, Award } from "lucide-react";
import CountUp from "react-countup";

export const StatsSection = () => {
  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Clients Served", gradient: "from-blue-500 to-blue-600" },
    { icon: DollarSign, value: 150, suffix: "M+", label: "Assets Secured", gradient: "from-purple-500 to-purple-600" },
    { icon: Award, value: 99, suffix: "%", label: "Client Retention Rate", gradient: "from-emerald-500 to-emerald-600" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-row space-x-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 min-w-[200px]"
            >
              <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg" />
              <div className="relative flex flex-col items-center text-center">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
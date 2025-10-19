import { Users, DollarSign, Award } from "lucide-react";
import CountUp from "react-countup";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Clients Served",
      color: "text-cyan-600",
    },
    {
      icon: DollarSign,
      value: 150,
      suffix: "M+",
      label: "Assets Secured",
      color: "text-blue-600",
    },
    {
      icon: Award,
      value: 99,
      suffix: "%",
      label: "Client Retention Rate",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
             
              <div className="text-2xl md:text-3xl font-medium font-heading mb-2 bg-black bg-clip-text text-transparent">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-gray-700 text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
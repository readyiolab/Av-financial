import { Users, DollarSign, Award } from "lucide-react";
import CountUp from "react-countup";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Clients Served",
      color: "text-black",
    },
    {
      icon: DollarSign,
      value: 150,
      suffix: "M+",
      label: "Assets Secured",
      color: "text-black",
    },
    {
      icon: Award,
      value: 99,
      suffix: "%",
      label: "Client Retention Rate",
      color: "text-black",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300  border border-gray-100"
            >
              <div className={`mb-3 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-2xl md:text-2xl font-semibold font-heading mb-1 text-black bg-inherit">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
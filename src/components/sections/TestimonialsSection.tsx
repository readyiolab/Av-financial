import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "AV Financial helped us secure our family's future with a comprehensive plan that was easy to understand.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Retiree",
      content: "The retirement planning service was exceptional. They helped us maximize our income while minimizing taxes.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Healthcare Professional",
      content: "I was overwhelmed by Medicare options until I met with AV Financial. They simplified everything.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full mb-4 sm:mb-6 border border-slate-200">
            <span className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Real Clients. <span className="text-slate-700">Real Security.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See what our clients say about their experience with AV Financial
          </p>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-6 sm:mt-8 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg" />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-t-2 border-l-2 border-slate-400 rounded-br-2xl group-hover:border-slate-500 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 sm:w-10 h-8 sm:h-10 border-b-2 border-r-2 border-slate-400 rounded-tl-2xl group-hover:border-slate-500 transition-colors duration-300" />
                <div className="mb-4">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-slate-500 transition-colors duration-300" />
                </div>
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-600 text-slate-600 group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 italic flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-slate-200 pt-4 group-hover:border-slate-400 transition-colors duration-300">
                  <div className="text-sm sm:text-base font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
            <div className="flex justify-center gap-2 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-600 text-slate-600" />
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3">
              Trusted by Hundreds of Families
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              Our clients' satisfaction and peace of mind are what drive us every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
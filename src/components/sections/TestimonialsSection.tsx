import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "AV Financial helped us secure our family's future with a comprehensive plan that was easy to understand. Shrutep took the time to explain everything and made us feel confident in our decisions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Retiree",
      content: "The retirement planning service was exceptional. They helped us maximize our income while minimizing taxes. We finally have peace of mind knowing our future is secure.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Healthcare Professional",
      content: "I was overwhelmed by Medicare options until I met with AV Financial. They simplified everything and helped me choose the perfect coverage. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Real Clients. <span className="text-slate-700">Real Security.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            See what our clients have to say about their experience with AV Financial
          </p>
          <div className="w-20 h-1 bg-slate-300 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Shadow Glow on Hover */}
              <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
              
              {/* Main Card */}
              <div className="relative bg-white border border-slate-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-400 h-full flex flex-col">
                
                {/* Top Left Corner Accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-400 rounded-tl-2xl"></div>

                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-slate-400 group-hover:text-slate-500 transition-colors duration-300" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-slate-600 text-slate-600 group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-slate-700 leading-relaxed mb-6 italic text-sm flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-300 pt-4 group-hover:border-slate-400 transition-colors duration-300">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">{testimonial.role}</div>
                </div>

                {/* Bottom Right Corner Accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-400 rounded-br-2xl group-hover:border-slate-500 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-300 rounded-2xl p-8 md:p-12 text-center shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-slate-600 text-slate-600" />
              ))}
            </div>
            <p className="text-xl font-bold text-slate-900 mb-3">
              Trusted by Hundreds of Families
            </p>
            <p className="text-slate-600 text-sm">
              Our clients' satisfaction and peace of mind are what drive us every day. Join families across the U.S. who trust AV Financial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
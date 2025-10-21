
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const faqs = [
    {
      question: "How can AV Financial help me with both insurance and investment planning?",
      answer: "At AV Financial, we integrate insurance solutions like life, dental, travel, and Medicare plans with strategic investment options such as annuities, retirement accounts, and college savings strategies. This combination protects your family while helping your money grow efficiently."
    },
    {
      question: "What makes Shrutep Amin's approach to financial planning different?",
      answer: "Shrutep's approach is highly personalized and education-focused. Instead of just offering products, he helps clients understand why each strategy matters, how it fits into their long-term goals, and how to take confident action."
    },
    {
      question: "How do I join Shrutep's team and start building my own career?",
      answer: "Joining AV Financial's team means entering a supportive, mentorship-driven environment. You'll receive structured training, access to proven strategies, and guidance on compliance and client service. Schedule a call through our Participate page to start."
    },
    {
      question: "Can AV Financial help me plan for healthcare and long-term care expenses?",
      answer: "Yes. Shrutep and his team specialize in Medicare, supplemental health, dental, travel insurance, and long-term care solutions. We create plans that anticipate future healthcare costs, ensuring you and your loved ones are financially secure."
    },
    {
      question: "How does AV Financial make complex financial planning easy to understand?",
      answer: "We simplify complex concepts by providing clear, jargon-free explanations, visual tools, and interactive calculators. Shrutep focuses on showing clients exactly how each strategy works for transparent, confident decisions."
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Confidence",
      description: "Make informed financial decisions with clarity and peace of mind.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Every recommendation is honest, transparent, and in your best interest.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Receive consistent, expert guidance that adapts as your needs change.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: CheckCircle,
      title: "Legacy",
      description: "Build lasting impact for your family and community through thoughtful financial planning.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "admin@avfinancial.com",
      link: "mailto:admin@avfinancial.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(206) 801-0330",
      link: "tel:2068010330",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Tap to Chat",
      link: "#",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Serving clients nationwide across the USA",
      link: "#",
      color: "from-orange-500 to-orange-600"
    }
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
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold bg-white bg-clip-text text-transparent uppercase tracking-wide">
                  Get In Touch
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let's Start Your
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Financial Journey
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Together
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-white font-semibold">
                Personalized Financial Guidance
              </p>

              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl">
                Whether you have questions about life insurance, retirement planning, Medicare, or any other financial services, Shrutep Amin and the AV Financial team are here to provide clarity and guidance.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">24/7 Support</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">Fast Response</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-500/30 hover:border-blue-400 hover:from-blue-600/30 hover:to-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-100">Free Consultation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1a2957] text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-600 text-white bg-transparent hover:bg-transparent text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Call Us Now
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-tl-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                  alt="Contact AV Financial"
                  className="w-full h-[500px] md:h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2957] rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Let's Talk About <span className="text-slate-700">Your Goals</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below, and we'll get back to you within 24 hours
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-[#1a2957] mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, idx) => (
                <a key={idx} href={method.link} className="group relative block">
                  <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                  <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300  group-hover:border-[#1a2957] overflow-hidden flex items-center gap-4 sm:gap-6">
                    

                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm sm:text-base font-semibold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors duration-300">
                        {method.label}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                        {method.value}
                      </div>
                    </div>
                    <div className="text-slate-400 group-hover:text-slate-600 transition-colors duration-300 flex-shrink-0">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
              <div className="group relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#1a2957] overflow-hidden">
                  <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-[#1a2957] rounded-br-3xl group-hover:border-slate-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-[#1a2957] rounded-tl-3xl group-hover:border-slate-400 transition-colors duration-300"></div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Why Choose AV Financial?</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600">Personalized financial strategies tailored to your goals</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600">Expert guidance on insurance and investment planning</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600">Trusted by families nationwide across the USA</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600">Free consultation to discuss your financial future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-600 overflow-hidden">
                 

                  <h3 className="text-lg sm:text-xl font-bold text-[#1a2957] mb-4 sm:mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-[#1a2957]">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-slate-600  text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-[#1a2957]">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-slate-600  text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-[#1a2957]">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-slate-600  text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="(XXX) XXX-XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-[#1a2957]">Reason for Contact *</label>
                        <select
                          required
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-slate-600  text-[#1a2957] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option>General Inquiry</option>
                          <option>Life Insurance</option>
                          <option>Retirement Planning</option>
                          <option>Medicare</option>
                          <option>Annuities</option>
                          <option>Travel/Dental Insurance</option>
                          <option>Long-Term Care</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-[#1a2957]">Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-slate-600  text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Share your questions or describe your financial goals..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#1a2957] hover:bg-[#1a2957] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-white bg-clip-text text-transparent uppercase tracking-wide">
                Our Values
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Why Connect with AV Financial
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Partner with a trusted financial professional who prioritizes your future
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
              <div className="w-12 sm:w-16 h-1 bg-white rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-600 overflow-hidden h-full flex flex-col text-center">
                  
                 

                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3  transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed flex-grow  transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2957] rounded-full mb-4 sm:mb-6 border border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-widest">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Frequently Asked <span className="text-slate-700">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services or financial planning strategies? Browse our FAQs or contact us directly for personalized guidance.
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-slate-400 to-[#1a2957] mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="group relative bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-[#1a2957] hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
                  <AccordionTrigger className="relative px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left hover:no-underline group [&[data-state=open]>svg]:rotate-90">
                    <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4 group-hover:text-slate-800 transition-colors">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-6 md:px-8 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Contact;
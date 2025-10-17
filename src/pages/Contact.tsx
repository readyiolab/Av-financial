import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
      <Header />
     
        {/* Hero Section - Dark */}
        <section  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')"
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
                    Get In Touch
                  </span>
                </div>

                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Let's Start Your
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
                    Financial Journey
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Together
                  </h3>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Whether you have questions about life insurance, retirement planning, Medicare, or any 
                  other financial services, Shrutep Amin and the AV Financial team are here to provide 
                  clarity and guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-7"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-700 text-white bg-transparent hover:bg-slate-800 text-lg px-10 py-7"
                  >
                    Call Us Now
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-slate-400">Support Available</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-bold text-white">Fast</div>
                    <div className="text-sm text-slate-400">Response Time</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-bold text-white">Free</div>
                    <div className="text-sm text-slate-400">Consultation</div>
                  </div>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative">
                <div className="relative rounded-tl-[3rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                    alt="Contact AV Financial"
                    className="w-full h-[650px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Combined with Address & Form */}
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-white rounded-full mb-6 border border-slate-200 shadow-sm">
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900">
                Let's Talk About Your Goals
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
              {/* Left Side - Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, idx) => (
                    <a
                      key={idx}
                      href={method.link}
                      className="group relative block"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                      {/* Card */}
                      <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 overflow-hidden flex items-center gap-6">
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-300 rounded-br-2xl group-hover:border-slate-400 transition-colors duration-300"></div>

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                          <method.icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <div className="font-semibold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors duration-300">
                            {method.label}
                          </div>
                          <div className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors duration-300">
                            {method.value}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-400 group-hover:text-slate-600 transition-colors duration-300 flex-shrink-0">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Additional Info Card */}
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose AV Financial?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm">Personalized financial strategies tailored to your goals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm">Expert guidance on insurance and investment planning</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm">Trusted by families nationwide across the USA</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm">Free consultation to discuss your financial future</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:sticky lg:top-24">
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"></div>

                  {/* Form Card */}
                  <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-300 overflow-hidden">
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-slate-300 rounded-br-3xl group-hover:border-slate-400 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-slate-300 rounded-tl-3xl group-hover:border-slate-400 transition-colors duration-300"></div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="(XXX) XXX-XXXX"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Reason for Contact *</label>
                          <select
                            required
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                        <label className="block text-sm font-medium mb-2 text-slate-700">Message *</label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                          placeholder="Share your questions or describe your financial goals..."
                        />
                      </div>

                      <Button 
                        type="button"
                        onClick={handleSubmit}
                        size="lg" 
                        className="w-full bg-black hover:bg-gray-900 text-white text-lg py-7 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Light */}
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
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">Our Values</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                Why Connect with <span className="text-slate-700">AV Financial</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                When you reach out to Shrutep Amin, you're partnering with a trusted financial professional 
                who prioritizes your future
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-slate-200 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>

                  {/* Card */}
                  <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 overflow-hidden h-full flex flex-col text-center">
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-300 rounded-br-2xl group-hover:border-slate-400 transition-colors duration-300"></div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs - Light */}
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
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Have questions about our services or financial planning strategies? Browse our FAQs or 
                contact us directly for personalized guidance.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Accordion */}
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group [&[data-state=open]>svg]:rotate-90">
                      <span className="text-lg font-semibold text-slate-900 pr-4 group-hover:text-slate-700 transition-colors">{faq.question}</span>
                     
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
     
      <Footer />
    </div>
  );
};

export default Contact;
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from '/src/assets/av-financial-logo.webp';


export const Footer = () => {
  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const services = [
    { label: "Life Insurance", href: "#services" },
    { label: "Retirement Planning", href: "#services" },
    { label: "Medicare", href: "#services" },
    { label: "Long-Term Care", href: "#services" },
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src="/assets/av-financial-logo.webp" alt="AV Financial" className="h-14 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Building lifelong financial protection with clarity and confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Shrutep@avfinancial.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>2679800485</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Serving clients across the United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 AV Financial. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

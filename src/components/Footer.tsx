import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-warm-brown text-cream">
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-bold text-gold mb-4">CGR Manjeera Hotel</h3>
          <p className="text-sm text-cream/70 leading-relaxed">
            Providing comfort and quality service since 2010. Your home away from home with 24 well-appointed rooms.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/rooms", label: "Rooms" },
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-cream/70 hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <a href="mailto:cgrmanjeerahotel@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={16} /> cgrmanjeerahotel@gmail.com
            </a>
            <a href="tel:+919948882222" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={16} /> +91 9948882222
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" /> Sangareddy, Telangana, India
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 mt-10 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} CGR Manjeera Hotel. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/main.jpeg";

const Contact = () => (
  <main className="pt-16">
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="CGR Manjeera Hotel" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-cream">Contact Us</h1>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Get In Touch" subtitle="We'd love to hear from you. Reach out for bookings or inquiries." />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-5">
              <a href="mailto:cgrmanjeerahotel@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <span className="text-sm">cgrmanjeerahotel@gmail.com</span>
              </a>
              <a href="tel:+91 9948882222" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <span className="text-sm">+91 9948882222</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-gold" />
                </div>
                <span className="text-sm">Manjeera Road, Hyderabad,<br />Telangana 500001, India</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606.588869067166!2d78.08014007493958!3d17.58874798333324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfa20b6061773%3A0x836c45a8a52a1686!2sOYO%2073247%20Cgr%20Manjeera!5e0!3m2!1sen!2sus!4v1774701588954!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input type="text" placeholder="Your full name" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;

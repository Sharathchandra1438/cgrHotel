import { Link } from "react-router-dom";
import { Bed, Car, Clock, Wifi, WashingMachine, Lock, Star, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/main.jpeg";
import roomPremium from "@/assets/room3.jpeg";
import lobby from "@/assets/entrance.jpeg";
import dining from "@/assets/cor2.jpeg";

const features = [
  { icon: Bed, title: "24 Rooms", desc: "Comfortable and well-appointed rooms" },
  { icon: Car, title: "Parking", desc: "Complimentary parking facility" },
  { icon: Clock, title: "24/7 Room Service", desc: "Round-the-clock assistance" },
  { icon: Star, title: "Premium Rooms", desc: "Luxury suites available" },
  { icon: WashingMachine, title: "Laundry Service", desc: "Same-day laundry" },
  { icon: Lock, title: "Lockers", desc: "Secure in-room lockers" },
  { icon: Wifi, title: "Free WiFi", desc: "High-speed internet access" },
];

const testimonials = [
  { name: "Rajesh Kumar", text: "Wonderful stay! The rooms were clean, staff was courteous. Highly recommended for families.", rating: 5 },
  { name: "Priya Sharma", text: "Excellent service and great location. The premium room was worth every penny.", rating: 5 },
  { name: "Amit Patel", text: "Very comfortable and affordable. Been coming here since 2015, never disappointed.", rating: 4 },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="CGR Manjeera Hotel exterior at golden hour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <p className="text-gold-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">Since 2010</p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 leading-tight">
          CGR Manjeera Hotel
        </h1>
        <p className="text-cream/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-8">
          Where comfort meets elegance — your perfect stay in the heart of the city.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-warm-brown font-semibold rounded-md hover:bg-gold-light transition-colors text-lg"
        >
          Book Now <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Welcome to CGR Manjeera" subtitle="Experience the perfect blend of comfort, affordability, and reliability." />
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <img src={lobby} alt="Hotel lobby" className="rounded-lg shadow-lg w-full h-72 object-contain" loading="lazy" width={800} height={600} />
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Established in 2010, CGR Manjeera Hotel has been a trusted name in hospitality for over 15 years. With 24 well-appointed rooms, we offer a warm and welcoming stay for business travelers, families, and tourists alike.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our commitment to quality service, cleanliness, and guest satisfaction has made us one of the preferred choices in the city.
            </p>
            <Link to="/about" className="text-primary font-semibold hover:text-gold transition-colors inline-flex items-center gap-1">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Why Choose Us" subtitle="Everything you need for a comfortable and memorable stay." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center p-5 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                <f.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="A Glimpse Inside" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[roomPremium, lobby, dining].map((src, i) => (
            <img key={i} src={src} alt="Hotel gallery" className="rounded-lg w-full h-56 object-cover shadow hover:scale-[1.02] transition-transform" loading="lazy" width={800} height={600} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="text-primary font-semibold hover:text-gold transition-colors inline-flex items-center gap-1">
            View full gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Guest Reviews" subtitle="What our guests say about their experience." />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-lg bg-card border border-border">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < t.rating ? "fill-gold text-gold" : "text-muted"} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <p className="font-heading font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-8">
          <Link to="/reviews" className="text-primary font-semibold hover:text-gold transition-colors inline-flex items-center gap-1">
            See all reviews <ArrowRight size={16} />
          </Link>
        </div> */}
      </div>
    </section>

    {/* Special Offer Banner */}
    {/* <section className="py-16 bg-warm-brown">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold mb-4">Special Weekend Offer</h2>
        <p className="text-cream/70 text-lg mb-6 max-w-xl mx-auto">Get 20% off on premium room bookings for weekend stays. Limited availability!</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-warm-brown font-semibold rounded-md hover:bg-gold-light transition-colors"
        >
          Book Now <ArrowRight size={18} />
        </Link>
      </div>
    </section> */}
  </main>
);

export default Index;

import SectionHeading from "@/components/SectionHeading";
import { Heart, Shield, Users, Award } from "lucide-react";
import heroImg from "@/assets/main.jpeg";

const values = [
  { icon: Heart, title: "Warm Hospitality", desc: "Every guest is treated like family from the moment they arrive." },
  { icon: Shield, title: "Trust & Safety", desc: "Your security and comfort are our top priorities." },
  { icon: Users, title: "Guest Satisfaction", desc: "We go above and beyond to exceed expectations." },
  { icon: Award, title: "Quality Service", desc: "15+ years of consistent, reliable service." },
];

const About = () => (
  <main className="pt-16">
    {/* Hero banner */}
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="CGR Manjeera Hotel" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-cream">About Us</h1>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeading title="Our Story" />
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Founded in 2010, CGR Manjeera Hotel began with a simple vision — to provide travelers a place where they feel truly at home. What started as a modest establishment has grown into a trusted name in hospitality, serving thousands of satisfied guests over the years.
          </p>
          <p>
            Located in a prime area, our hotel offers easy access to key business districts, shopping hubs, and tourist attractions. With 24 thoughtfully designed rooms, we cater to solo travelers, couples, families, and business professionals alike.
          </p>
          <p>
            Our dedicated team works tirelessly to ensure every stay is comfortable, convenient, and memorable. From round-the-clock room service to complimentary parking and high-speed WiFi, we take care of every detail so you can focus on what matters most.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;

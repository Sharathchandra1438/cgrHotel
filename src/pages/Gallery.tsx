import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/main.jpeg";
import roomPremium from "@/assets/room3.jpeg";
import roomStandard from "@/assets/room1.jpeg";
import roomDeluxe from "@/assets/room2.jpeg";
import lobby from "@/assets/cor.jpeg";
import dining from "@/assets/cor2.jpeg";
import exteriorNight from "@/assets/entrance.jpeg";
import bathroom from "@/assets/inside.jpeg";

const images = [
  { src: heroImg, alt: "Hotel exterior at golden hour" },
  { src: roomPremium, alt: "Premium room" },
  { src: lobby, alt: "Hotel lobby" },
  { src: roomStandard, alt: "Standard room" },
  { src: dining, alt: "Restaurant & dining" },
  { src: roomDeluxe, alt: "Deluxe suite" },
  { src: exteriorNight, alt: "Exterior night view" },
  { src: bathroom, alt: "Bathroom" },
];

const Gallery = () => (
  <main className="pt-16">
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="CGR Manjeera Hotel" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-cream">Gallery</h1>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Explore Our Hotel" subtitle="Take a visual tour of our rooms, amenities, and spaces." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Gallery;

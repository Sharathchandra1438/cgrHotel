import { useState } from "react";
import { Link } from "react-router-dom";
import { Wifi, Car, Clock, Tv, Wind, Coffee, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import roomStandard from "@/assets/room2.jpeg";
import roomPremium from "@/assets/room1.jpeg";
import roomDeluxe from "@/assets/room3.jpeg";

const rooms = [
  {
    name: "Standard Room",
    acPrice: 1000,
    nonAcPrice: 750,
    img: roomStandard,
    desc: "Comfortable budget-friendly room ideal for short stays.",
    amenities: [Wifi, Tv, Wind],
  },
  {
    name: "Premium Room",
    acPrice: 1350,
    nonAcPrice: 1100,
    img: roomPremium,
    desc: "Spacious room with enhanced comfort for couples and business travelers.",
    amenities: [Wifi, Tv, Wind, Coffee, Clock],
  },
  {
    name: "Deluxe Suite",
    acPrice: 1600,
    nonAcPrice: 1350,
    img: roomDeluxe,
    desc: "Luxury suite with premium interiors and top-class amenities.",
    amenities: [Wifi, Tv, Wind, Coffee, Car, Clock],
  },
];

const Rooms = () => {
  const [isAC, setIsAC] = useState(true);

  return (
    <main className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            title="Our Rooms"
            subtitle="Choose from our selection of comfortable and well-appointed rooms."
          />

          {/* Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-muted p-1 rounded-lg flex">
              <button
                onClick={() => setIsAC(true)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  isAC ? "bg-primary text-white" : "text-muted-foreground"
                }`}
              >
                A/C Rooms
              </button>
              <button
                onClick={() => setIsAC(false)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  !isAC ? "bg-primary text-white" : "text-muted-foreground"
                }`}
              >
                Non A/C Rooms
              </button>
            </div>
          </div>

          {/* Rooms */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {rooms.map((room, i) => {
              const price = isAC ? room.acPrice : room.nonAcPrice;

              return (
                <div
                  key={room.name}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <img
                    src={room.img}
                    alt={room.name}
                    className={`rounded-lg shadow-lg w-full h-72 object-cover ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                    loading="lazy"
                  />

                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      {room.name}
                    </h3>

                    <p className="text-gold text-xl font-semibold mb-1">
                      ₹{price.toLocaleString()}
                      <span className="text-sm text-muted-foreground font-normal">
                        {" "}
                        / night
                      </span>
                    </p>

                    <p className="text-xs text-muted-foreground mb-3">
                      +12% luxury tax • Extra bed ₹200
                    </p>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {room.desc}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {room.amenities.map((Icon, j) => (
                        <div
                          key={j}
                          className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center"
                        >
                          <Icon size={16} className="text-gold" />
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors text-sm"
                    >
                      Book Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            Prices may vary during peak seasons. Contact us for best offers.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rooms;
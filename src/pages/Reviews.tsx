// import { useState } from "react";
// import { Star } from "lucide-react";
// import SectionHeading from "@/components/SectionHeading";
// import heroImg from "@/assets/main.jpeg";

// const dummyReviews = [
//   { name: "Rajesh Kumar", date: "March 2026", rating: 5, text: "Wonderful stay! The rooms were spotless, and the staff was incredibly courteous. Highly recommended for families." },
//   { name: "Priya Sharma", date: "February 2026", rating: 5, text: "Excellent service and great location. The premium room was spacious and worth every penny. Will definitely come back!" },
//   { name: "Amit Patel", date: "January 2026", rating: 4, text: "Very comfortable and affordable. I've been coming here since 2015 — never disappointed. Great value for money." },
//   { name: "Sunita Reddy", date: "December 2025", rating: 5, text: "Perfect for a business trip. Fast WiFi, clean rooms, and the staff arranged early breakfast for my early flight. Exceptional!" },
//   { name: "Vikram Singh", date: "November 2025", rating: 4, text: "Nice and quiet hotel. Parking was convenient. Room service was prompt. Only wish they had a gym." },
//   { name: "Meena Devi", date: "October 2025", rating: 5, text: "We stayed for a week during our family vacation. The hotel felt like home. Kids loved it too!" },
// ];

// const Reviews = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <main className="pt-16">
//       <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
//         <img src={heroImg} alt="CGR Manjeera Hotel" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
//         <div className="absolute inset-0 bg-hero-overlay" />
//         <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-cream">Guest Reviews</h1>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4 md:px-8">
//           <SectionHeading title="What Our Guests Say" subtitle="Real experiences from our valued guests." />
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
//             {dummyReviews.map((r) => (
//               <div key={r.name} className="p-6 rounded-lg bg-card border border-border">
//                 <div className="flex gap-0.5 mb-2">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} size={16} className={i < r.rating ? "fill-gold text-gold" : "text-muted"} />
//                   ))}
//                 </div>
//                 <p className="text-sm text-muted-foreground mb-4 italic">"{r.text}"</p>
//                 <div className="flex justify-between items-center">
//                   <p className="font-heading font-semibold text-sm">{r.name}</p>
//                   <p className="text-xs text-muted-foreground">{r.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <button
//               onClick={() => setShowForm(!showForm)}
//               className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors"
//             >
//               {showForm ? "Close" : "Leave a Review"}
//             </button>
//           </div>

//           {showForm && (
//             <div className="max-w-lg mx-auto mt-8 p-6 rounded-lg bg-card border border-border animate-fade-in">
//               <h3 className="font-heading text-xl font-semibold mb-4">Share Your Experience</h3>
//               <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//                 <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
//                 <div>
//                   <label className="text-sm text-muted-foreground mb-1 block">Rating</label>
//                   <div className="flex gap-1">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star key={i} size={20} className="text-gold cursor-pointer hover:fill-gold transition-colors" />
//                     ))}
//                   </div>
//                 </div>
//                 <textarea rows={4} placeholder="Tell us about your stay..." className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
//                 <button type="submit" className="w-full py-2.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors">
//                   Submit Review
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Reviews;

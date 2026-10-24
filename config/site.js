// Replace these values with confirmed business details before publishing.
const WHATSAPP_NUMBER = "92XXXXXXXXXX";
/** @type {{ title: string; items: string[] }[]} */
const whatWeOffer = [
  { title: "Service options", items: ["Outdoor seating", "No-contact delivery", "Delivery", "Takeout", "Dine-in"] },
  { title: "Highlights", items: ["Great coffee", "Great tea selection"] },
  { title: "Offerings", items: ["Coffee", "Late-night food", "Quick bite", "Small plates"] },
  { title: "Dining options", items: ["Seating", "Table service"] },
  { title: "Atmosphere", items: ["Casual", "Trendy"] },
  { title: "Crowd", items: ["College students", "Groups"] },
  { title: "Children", items: ["Good for kids"] }
];

/** @type {{ day: string; open: string; close: string; label: string; openHour: number; closeHour: number }[]} */
const openingHours = [
  { day: "Sunday", open: "6 PM", close: "3 AM", label: "6 PM – 3 AM (next day)", openHour: 18, closeHour: 3 },
  { day: "Monday", open: "6 PM", close: "3 AM", label: "6 PM – 3 AM (next day)", openHour: 18, closeHour: 3 },
  { day: "Tuesday", open: "6 PM", close: "3 AM", label: "6 PM – 3 AM (next day)", openHour: 18, closeHour: 3 },
  { day: "Wednesday", open: "6 PM", close: "3 AM", label: "6 PM – 3 AM (next day)", openHour: 18, closeHour: 3 },
  { day: "Thursday", open: "6 PM", close: "3 AM", label: "6 PM – 3 AM (next day)", openHour: 18, closeHour: 3 },
  { day: "Friday", open: "6 PM", close: "3 AM", label: "6 PM – 3 AM (next day)", openHour: 18, closeHour: 3 },
  { day: "Saturday", open: "6 PM", close: "4 AM", label: "6 PM – 4 AM (next day)", openHour: 18, closeHour: 4 }
];
const address = "Madni Masjid Rd, Federal B Area Hussainabad Block 3 Gulberg Town, Karachi, Pakistan";

window.AAG_BAGOOLA_CONFIG = {
  whatsappNumber: WHATSAPP_NUMBER,
  phone: "[REPLACE: phone number]",
  address,
  openingHours,
  priceRange: "Rs 1,000–2,000",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  mapEmbedUrl: "",
  instagramUrl: "[REPLACE: Instagram profile URL]",
  leaveReviewUrl: "[REPLACE: Google review link]",
  googleReviewsUrl: "[REPLACE: Google reviews link]",
  rating: null,
  reviewCount: null,
  offer: "[REPLACE: current offer]",
  whatWeOffer
};

// ============================================================
// EDIT THIS FILE ONLY. Everything marked TODO needs your input.
// ============================================================
window.EVENT = {
  // TODO: your event details
  name: "Autumn Dinner Night",
  tagline: "A three-course dinner with live music.",
  date: "Saturday, November 14, 7:00 PM",
  venue: "The Garden Room, 12 Main Street, Accra",
  contactPhone: "+233 XX XXX XXXX",     // TODO: your WhatsApp/phone number
  contactEmail: "you@example.com",      // TODO: your email
  whatsapp: "233XXXXXXXXX",             // TODO: your WhatsApp number, country code, no + or spaces

  // TODO: one entry per ticket type.
  // payLink = the Paystack Payment Page / Payment Link URL you create
  // in the Paystack dashboard (Payments > Payment Pages). One per tier.
  tickets: [
    { name: "Standard",     note: "Shared tables",            price: 150, payLink: "TODO_PASTE_PAYSTACK_LINK_STANDARD" },
    { name: "Chef’s table", note: "Front seats, wine pairing", price: 250, payLink: "TODO_PASTE_PAYSTACK_LINK_CHEFS_TABLE" }
  ],
  currency: "GH₵"
};

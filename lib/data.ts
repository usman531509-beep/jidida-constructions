const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects = [
  {
    image: u("photo-1600585154340-be6161a56a0c"),
    category: "Residential",
    title: "Full House Renovation",
    description:
      "Complete interior and exterior refurbishment, delivered on schedule.",
  },
  {
    image: u("photo-1507089947368-19c1da9775ae"),
    category: "Renovation",
    title: "Modern Kitchen Upgrade",
    description: "Bespoke kitchen fitting with new units, worktops and finishes.",
  },
  {
    image: u("photo-1497366811353-6870744d04b2"),
    category: "Commercial",
    title: "Retail Shop Fit-Out",
    description: "Full retail fit-out designed around daily business use.",
  },
  {
    image: u("photo-1486406146926-c627a92ad1ab"),
    category: "Commercial",
    title: "Office Refurbishment",
    description:
      "A modern, practical workspace transformation for a commercial client.",
  },
  {
    image: u("photo-1600607688969-a5bfcd646154"),
    category: "Residential",
    title: "Loft Conversion",
    description: "Unused roof space converted into a bright, usable living area.",
  },
  {
    image: u("photo-1541888946425-d81bb19240f5"),
    category: "Maintenance",
    title: "Exterior Repairs",
    description: "Roofing, rendering and weatherproofing repairs to protect the home.",
  },
];

export const services = [
  {
    image: u("photo-1581094794329-c8112a89af12"),
    title: "Renovations",
    text: "Full house, flat and commercial refurbishments with complete planning and finishing support.",
  },
  {
    image: u("photo-1560518883-ce09059eeffa"),
    title: "Extensions",
    text: "Rear extensions, side returns, garage conversions and extra living-space improvements.",
  },
  {
    image: u("photo-1556909114-f6e7ad7d3136"),
    title: "Kitchen & Bathroom",
    text: "Modern kitchens, bathrooms, tiling, plumbing coordination and final decoration.",
  },
  {
    image: u("photo-1497366811353-6870744d04b2"),
    title: "Shop Fitting",
    text: "Retail, office and small commercial fit-outs designed around daily business use.",
  },
  {
    image: u("photo-1504917595217-d4dc5ebe6122"),
    title: "Roofing & Exterior",
    text: "Roof repairs, exterior finishes, gutters, facias and weatherproofing improvements.",
  },
  {
    image: u("photo-1497366754035-f200968a6e72"),
    title: "Maintenance",
    text: "General repairs, landlord maintenance, painting, decorating and small building works.",
  },
];

export const team = [
  {
    image: u("photo-1500648767791-00dcc994a43e", 800),
    name: "Ahmed Khan",
    role: "Project Manager",
  },
  {
    image: u("photo-1560250097-0b93528c311a", 800),
    name: "Daniel Brooks",
    role: "Site Supervisor",
  },
  {
    image: u("photo-1519085360753-af0119f7cbe7", 800),
    name: "Imran Ali",
    role: "Renovation Lead",
  },
  {
    image: u("photo-1507003211169-0a1dd7228f2d", 800),
    name: "Michael Reed",
    role: "Finishing Specialist",
  },
];

export const posts = [
  {
    image: u("photo-1556156653-e5a7c69cc263"),
    meta: "Renovation - Building Advice",
    title: "Planning a Home Renovation Without Stress",
  },
  {
    image: u("photo-1517581177682-a085bb7ffb38"),
    meta: "Advice - Building Advice",
    title: "What To Check Before Choosing a Builder",
  },
  {
    image: u("photo-1503387762-592deb58ef4e"),
    meta: "Commercial - Building Advice",
    title: "How To Budget for a Shop Refurbishment",
  },
];

export const products = [
  {
    image: u("photo-1586864387967-d02ef85d93e8"),
    title: "Renovation Consultation",
    price: "£95",
  },
  {
    image: u("photo-1572981779307-38b8cabb2407"),
    title: "Maintenance Visit",
    price: "£75",
  },
  {
    image: u("photo-1600566752355-35792bedcfea"),
    title: "Bathroom Package",
    price: "Quote",
  },
  {
    image: u("photo-1586864387789-628af9feed72"),
    title: "Shop Fit-Out Survey",
    price: "£120",
  },
];

export const galleryImages = [
  u("photo-1600585154340-be6161a56a0c"),
  u("photo-1600566753190-17f0baa2a6c3"),
  u("photo-1507089947368-19c1da9775ae"),
  u("photo-1503389152951-9f343605f61e"),
  u("photo-1597047084897-51e81819a499"),
  u("photo-1541888946425-d81bb19240f5"),
];

export const productText = "Sample package for layout only. Replace with your real offers.";
export const postText = "Helpful guidance for property owners planning improvement work.";

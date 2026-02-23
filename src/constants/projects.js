const screenshot = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&type=png&meta=false&embed=screenshot.url`;

export const PROJECTS = [
  {
    title: "NYC Lux Ride",
    desc: "Luxury chauffeur booking platform with real-time pricing, payments, dispatch integration, and SEO worker.",
    url: "https://nycluxride.com",
  },
  {
    title: "Tikka Masala (Bellevue, WA)",
    desc: "Authentic Halal Indian & Pakistani cuisine Conveniently located in Bellevue WA.",
    url: "https://mz9201ju.github.io/tikka-masala-v2/",
  },
  {
    title: "Rashida Little Champs DayCare",
    desc: "Little Champs DayCare is a Day Care Center & Head Start Center located in Bellevue, WA that services all of Bellevue & the surrounding areas. We offer Child Care, Toddler Care, Home Day Care, Day Care Services, Child Care Services, Child Education, Child Care Development, Well Mannered Services, Family Day Care, Home Child Care, 24/7 Day Care Service & more. Our staff are highly trained to care for and help develop your kids' creative, physical, and analytical skills. If you are looking for a Fun Play Day Care, Preschool or After School Program, then Little Champs DayCare is the smart choice. We will treat your children as if they are our own. Call us today to inquire about our programs and to schedule a tour of our facility.",
    url: "https://mz9201ju.github.io/RashidaLittleChampsDayCare/",
  },
  {
    title: "Skylight KSA",
    desc: "Enterprise-level construction & engineering website with multi-service structure, SEO automation, and cloud deployment.",
    url: "https://mz9201ju.github.io/skylight-ksa",
  },
  {
    title: "Omer Portfolio",
    desc: "Space-themed personal portfolio with 3D visuals, AI worker integration, and multi-page React architecture.",
    url: "https://omerzahid.com",
  },
  {
    title: "Bell Aviation / ROMISOFT LLC",
    desc: "Bell Aviation Services has a rich history in Aircraft Maintenance, Repair, Operations, Worldwide Recovery, Avionics, Fleet Maintenance & Logistics.",
    url: "https://mz9201ju.github.io/bell-aviation-romisoft/",
  },
  {
    title: "Deeba's Day Care",
    desc: "At Deeba's Daycare, we offer exceptional home day care services, so the little ones are properly taken care of during your busy day.",
    url: "https://mz9201ju.github.io/deebasDayCare/",
  },
  {
    title: "ELIA Barber Shop",
    desc: "A local Bellevue barber shop website I built to help the business grow its online visibility.",
    url: "https://mz9201ju.github.io/ELIA_BarberShop_WebSite/",
  },
].map((project) => ({
  ...project,
  img: screenshot(project.url),
}));

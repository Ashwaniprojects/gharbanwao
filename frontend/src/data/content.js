export const PHONES = ["09648249999", "09648259999"];
export const WHATSAPP_URL = "https://wa.me/919648249999";

// Primary header nav (lean — Calculator and Contact live elsewhere: Calculator is inside Services, Contact moved to footer)
export const NAV = [
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Packages", id: "packages" },
  { label: "About", id: "about" },
];

// Footer "Explore" column — the full sitemap, including items removed from the header
export const FOOTER_NAV = [
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Calculator", id: "calculator" },
  { label: "Packages", id: "packages" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

// Services dropdown under the header nav. Architecture hands off to our sister company's
// dedicated architecture/design studio.
export const SERVICES_MENU = [
  { label: "New Home Construction", id: "services" },
  { label: "Architecture & Floor Plans", href: "https://nakshaabanwao.com/", external: true },
  { label: "Interior Design & Execution", id: "services" },
  { label: "Renovation & Extension", id: "services" },
];

export const REGISTER_TYPES = [
  { key: "vendor", label: "Vendor Registration", tagline: "Supply materials — cement, steel, tiles, fittings — directly to our live sites." },
  { key: "channel_partner", label: "Channel Partner", tagline: "Refer landowners and homeowners, earn commission on every signed project." },
  { key: "hiring", label: "Careers / Hiring", tagline: "Join our site, design, or support teams across Lucknow, Kanpur and Varanasi." },
];

export const ANNOUNCEMENTS = [
  "📞 09648249999 · 09648259999  ·  Serving Lucknow / Varanasi / Kanpur  ·  WhatsApp: Chat on WhatsApp →",
  "Free site visit + written quote in 48 hours  ·  No consultation fee  ·  Call 09648249999",
  "260+ homes handed over since 2017  ·  37 sites live this week  ·  10-year structural warranty",
];

export const TRUST = [
  { number: "260+", label: "Homes handed over", note: "Across UP since 2017" },
  { number: "37+", label: "Ongoing construction", note: "Live on the project map below" },
  { number: "4.8 / 5", label: "Google rating", note: "From 180+ verified reviews" },
  { number: "9+ yrs", label: "On the ground", note: "Lucknow headquartered" },
];

export const WHY = [
  { icon: "ClipboardCheck", title: "150+ onsite quality checks", text: "Documented stage-wise. You see the checklist, not just the result." },
  { icon: "FileText", title: "100% materials transparency", text: "Brand, grade, and quantity on every delivery note." },
  { icon: "FlaskConical", title: "Materials quality control", text: "Sample testing before site delivery. Rejected batches get returned." },
  { icon: "Camera", title: "Real-time project tracking", text: "Your WhatsApp gets site photos every Monday and Thursday." },
  { icon: "ShieldCheck", title: "100% money safety", text: "Payments linked to stage completion, not calendar dates." },
  { icon: "Landmark", title: "Structural warranty", text: "10 years on structure. In writing. Transferable on resale." },
  { icon: "CalendarRange", title: "Flexible payment schedule", text: "7 or 9 installments, mapped to your cash flow, not ours." },
  { icon: "Headset", title: "Dedicated customer support", text: "One project manager per build. One WhatsApp number. One accountable name." },
  { icon: "Timer", title: "On-time delivery", text: "Average delay across 260+ homes: 11 days. We publish it." },
  { icon: "History", title: "9+ years of experience", text: "Started 2017. Still Lucknow-headquartered." },
  { icon: "HardHat", title: "Dedicated engineers", text: "One structural, one site, one quality — assigned per project." },
  { icon: "Wrench", title: "Post-handover support", text: "12 months of free fixes on anything we built." },
];

export const SERVICES = [
  { img: "IMG-02", title: "New Home Construction", text: "Plot to key handover, turnkey.", cta: "See projects", id: "projects" },
  { img: "IMG-03", title: "Architectural Planning & Design", text: "Vastu-aligned, approval-ready drawings.", cta: "See floor plans", id: "projects" },
  { img: "IMG-04", title: "Interior Design & Execution", text: "Modular kitchen, wardrobes, false ceiling, finishes.", cta: "See interiors", id: "projects" },
  { img: "IMG-05", title: "Renovation & Extension", text: "Floor addition, remodeling, structural retrofit.", cta: "See renovations", id: "projects" },
];

export const PROCESS = [
  { n: "01", name: "Design & Approval", img: "IMG-06", points: ["Site survey + soil test", "Vastu-aligned plan, 3 revisions", "LDA / Nagar Nigam approval filed"] },
  { n: "02", name: "Foundation", img: "IMG-07", points: ["Excavation to design depth", "PCC + footing steel inspection", "Anti-termite treatment"] },
  { n: "03", name: "Structure", img: "IMG-08", points: ["RCC columns, beams, slabs", "Cube test every pour", "Curing log shared on WhatsApp"] },
  { n: "04", name: "Brickwork", img: "IMG-09", points: ["Plumb + level checks per wall", "Conduits before plaster", "Lintels and chajjas cast"] },
  { n: "05", name: "Finishing", img: "IMG-10", points: ["Flooring, tiling, putty", "Electrical + plumbing fit-out", "Two coats paint, final snag list"] },
  { n: "06", name: "Handover", img: "IMG-11", points: ["150-point checklist walk", "Warranty + drawings handed over", "12-month support begins"] },
];

export const BRANDS = ["UltraTech", "ACC", "Shree", "Tata TISCON", "JSW Neosteel", "Jindal Panther", "Asian Paints", "Berger", "Jaquar", "Hindware", "Kajaria", "Somany", "Finolex", "Havells", "Legrand"];

export const TESTIMONIALS = [
  ["Rakesh Verma", "Gomti Nagar", "Jun 2026", "The team shared photos every Monday. 8 months, no surprise cost. My father kept asking kaun si company hai yeh. Ab wo bhi ghar banwa raha hai inhi se.", "GB-229", "30×50 ft"],
  ["Pooja Srivastava", "Indira Nagar", "May 2026", "Steel brand likha tha quote mein. Wahi brand site pe aaya. Bas itna hi chahiye tha humein.", "GB-214", "25×50 ft"],
  ["Anil Tiwari", "Jankipuram", "May 2026", "11 din late hue. Pehle din hi bata diya, baad mein nahi. That honesty is rare.", "GB-198", "30×60 ft"],
  ["Meenakshi Gupta", "Aliganj", "Apr 2026", "Payment stage ke baad hi maanga. Weekly cash calls nahi. Budget kabhi hila nahi.", "GB-241", "20×45 ft"],
  ["Farhan Khan", "Hazratganj", "Apr 2026", "One WhatsApp number for 9 months. Never once unanswered past an hour.", "GB-187", "35×60 ft"],
  ["Sunita Yadav", "Alambagh", "Mar 2026", "Handover pe 150 points ka checklist dikhaya. Ek ek cheez tick karke. Aisa koi nahi karta.", "GB-233", "30×50 ft"],
  ["Deepak Mishra", "Vikas Nagar", "Mar 2026", "We cross-checked their calculator with two contractors. Theirs was within 4%.", "GB-176", "25×40 ft"],
  ["Ritu Pandey", "Mahanagar", "Feb 2026", "Engineer har visit pe mila. Papa roz jaate the site. Kabhi akela nahi laga.", "GB-205", "30×50 ft"],
  ["Sanjay Agarwal", "Sushant Golf City", "Feb 2026", "Premium package. Every tile, every fitting approved by us before purchase. Zero substitution.", "GB-251", "40×70 ft"],
  ["Nidhi Shukla", "Chinhat", "Jan 2026", "Quote mein jo likha, wahi bana. Ek rupaya extra nahi. Hum khud hairaan the.", "GB-162", "25×50 ft"],
  ["Vikas Dubey", "Rajajipuram", "Jan 2026", "Cube test har slab pe. Reports WhatsApp pe. Humne pehli baar structural report dekhi.", "GB-149", "30×45 ft"],
  ["Anjali Rastogi", "Aashiana", "Dec 2025", "Delivered in 9 months 4 days. They said 9 months. That's it.", "GB-221", "30×50 ft"],
  ["Mohit Chaturvedi", "Telibagh", "Dec 2025", "Material delivery note har baar brand ke saath. Humne khud UltraTech ke bags gine.", "GB-193", "20×50 ft"],
  ["Shalini Saxena", "Kanpur Road", "Nov 2025", "Post-handover 2 small leaks fixed in 48 hours. Free. 7 months after we moved in.", "GB-168", "25×45 ft"],
  ["Rahul Dixit", "Vrindavan Yojana", "Nov 2025", "Project manager ka naam Arvind. 9 mahine ek hi aadmi. Yahi accountability hai.", "GB-211", "30×60 ft"],
  ["Kavita Bajpai", "Gomti Nagar", "Oct 2025", "Monday aur Thursday photos. Hum Dubai mein the. Ghar yahan ban raha tha. Kabhi tension nahi hui.", "GB-184", "35×50 ft"],
  ["Ashok Awasthi", "Indira Nagar", "Oct 2025", "Signature package. Mid-premium finish at an honest price. Would pick it again.", "GB-157", "30×50 ft"],
  ["Preeti Singh", "Jankipuram", "Sep 2025", "Warranty certificate 10 saal ka, likhit. Resale pe transfer bhi hota hai. Yeh kisi ne nahi diya.", "GB-139", "25×50 ft"],
  ["Imran Siddiqui", "Aliganj", "Sep 2025", "Approval unhone handle kiya. LDA ke 3 chakkar hum nahi, wo lagaye.", "GB-203", "20×40 ft"],
  ["Geeta Tripathi", "Mahanagar", "Aug 2025", "Mid-construction mein kitchen badla. Change order likhit, cost saaf. Koi drama nahi.", "GB-171", "30×50 ft"],
  ["Naveen Kumar", "Alambagh", "Aug 2025", "Tested their brick sample in front of us. Rejected one lot. Sent it back the same day.", "GB-146", "25×45 ft"],
  ["Swati Mishra", "Sushant Golf City", "Jul 2025", "Budget 58 lakh tha. Final 58.6 lakh. Difference humari apni upgrades thi.", "GB-237", "40×60 ft"],
  ["Rajesh Pathak", "Chinhat", "Jul 2025", "First-time builder. Essential package. Weekly engineer visit was enough. No regrets.", "GB-128", "20×45 ft"],
  ["Alka Srivastava", "Vikas Nagar", "Jun 2025", "Har stage pe sign karwaya. Agla payment tabhi. Paisa kabhi aage nahi gaya.", "GB-159", "30×50 ft"],
  ["Tarun Gupta", "Hazratganj", "Jun 2025", "Renovation + floor addition. Structural retrofit explained with drawings. Felt safe.", "GB-116", "30×60 ft"],
  ["Rekha Yadav", "Rajajipuram", "May 2025", "Mummy ke liye ground floor accessible banaya. Suggestion unka tha, charge nahi liya.", "GB-134", "25×50 ft"],
  ["Sumit Verma", "Telibagh", "May 2025", "Delay 6 days. Clause written in agreement. They honoured it without us asking.", "GB-181", "30×45 ft"],
  ["Neha Tiwari", "Aashiana", "Apr 2025", "Interior + construction ek saath. Ek team, ek timeline. Coordination ka jhanjhat khatam.", "GB-199", "30×50 ft"],
  ["Pankaj Shukla", "Vrindavan Yojana", "Apr 2025", "Kanpur se Lucknow shift. Site visit sirf 4 baar. Photos se sab pata chalta tha.", "GB-152", "25×50 ft"],
  ["Divya Agarwal", "Gomti Nagar", "Mar 2025", "Ghar banata hai ek baar. Inhone ek baar mein sahi banaya. That's the whole review.", "GB-143", "30×50 ft"],
].map(([name, locality, date, quote, project_id, project_size], i) => ({
  name,
  locality,
  date,
  quote,
  project_id,
  project_size,
  rating: i % 7 === 3 ? 4 : 5,
  source: "Google review",
  portrait: `IMG-${15 + i}`,
  thumb: `IMG-${45 + i}`,
}));

export const VIDEOS = [
  { code: "VID-01", name: "Rakesh Verma", locality: "Gomti Nagar", project: "GB-229", length: "1:22" },
  { code: "VID-02", name: "Pooja Srivastava", locality: "Indira Nagar", project: "GB-214", length: "0:58" },
  { code: "VID-03", name: "Farhan Khan", locality: "Hazratganj", project: "GB-187", length: "1:10" },
  { code: "VID-04", name: "Sunita Yadav", locality: "Alambagh", project: "GB-233", length: "1:05" },
  { code: "VID-05", name: "Sanjay Agarwal", locality: "Sushant Golf City", project: "GB-251", length: "1:30" },
  { code: "VID-06", name: "Kavita Bajpai", locality: "Gomti Nagar", project: "GB-184", length: "0:49" },
];

export const GOOGLE_REVIEWS = [
  { name: "Abhishek Rai", date: "2 days ago", rating: 5, text: "Site visit was free, quote came in 2 days, in writing. Started last week." },
  { name: "Mamta Jaiswal", date: "1 week ago", rating: 5, text: "Weekly photos are real. Not a marketing line. Monday 10am, every week." },
  { name: "Harsh Vardhan", date: "2 weeks ago", rating: 4, text: "Good team. Slight delay in tile delivery but they informed us before, not after." },
  { name: "Sadhna Nigam", date: "3 weeks ago", rating: 5, text: "Calculator estimate and final cost were within 3%. First contractor who was honest about numbers." },
  { name: "Zeeshan Ahmed", date: "1 month ago", rating: 5, text: "Structural warranty certificate given at handover. Transferable. Checked with my lawyer." },
  { name: "Rohini Kapoor", date: "1 month ago", rating: 5, text: "Project manager Pallavi handled everything. One number, nine months, zero chaos." },
];

export const PRICING = [
  { name: "Essential", price: "₹1,650", best: "First-time builders, tight budgets", rows: ["10 years", "7", "Weekly", "Standard", "Essential", "6 months"], cta: "Get Quote", featured: false },
  { name: "Signature", price: "₹1,950", best: "Most homeowners, best value", rows: ["10 years", "9", "2× weekly", "Mid-premium", "Enhanced", "12 months"], cta: "Get Quote", featured: true },
  { name: "Premium", price: "₹2,450", best: "Larger plots, custom finishes", rows: ["10 years", "9 + custom", "2× weekly + on-demand", "Premium", "Custom-specified", "24 months"], cta: "Book Design Session", featured: false },
];
export const PRICING_ROWS = ["Structure warranty", "Payment stages", "Site visits by engineer", "Material grade", "Finishing level", "Post-handover support"];

export const COMPARISON = [
  ["Payment linked to stages", "7 or 9 stages", "Weekly cash calls"],
  ["Material brand named in quote", "Yes, in writing", "\"As per site\""],
  ["Structural warranty", "10 years written", "None"],
  ["Weekly site photos to homeowner", "Mon + Thu", "\"Come visit anytime\""],
  ["Dedicated project manager", "One name, one WhatsApp", "Owner is also 4 other sites"],
  ["Post-handover fixes", "12 months free", "Charged"],
  ["Written on-time delivery clause", "Yes", "No"],
];

export const TEAM = [
  { img: "IMG-75", name: "Arvind Srivastava", role: "Head of Projects", years: "14 yrs", specialty: "Has personally handed over 190 of the 260 homes." },
  { img: "IMG-76", name: "Er. Neha Tripathi", role: "Lead Structural Engineer", years: "11 yrs", specialty: "RCC design, soil-bearing analysis, retrofit." },
  { img: "IMG-77", name: "Pallavi Mehrotra", role: "Head of Quality", years: "9 yrs", specialty: "Owns the 150-point checklist. Rejects batches." },
  { img: "IMG-78", name: "Ramesh Kushwaha", role: "Site Supervisor", years: "17 yrs", specialty: "Brickwork and plaster. Plumb line in pocket." },
  { img: "IMG-79", name: "Sana Rizvi", role: "Interior Lead", years: "8 yrs", specialty: "Modular kitchens, wardrobes, lighting plans." },
  { img: "IMG-80", name: "Vivek Rastogi", role: "Customer Success Lead", years: "6 yrs", specialty: "The one WhatsApp number. Replies in under 2 hours." },
];

export const AWARDS = [
  { label: "MSME Registered", value: "UDYAM-UP-50-00XXXXX" },
  { label: "GST", value: "09AAXXXXXXXXZ5" },
  { label: "Udyam Registration", value: "Verified 2024" },
  { label: "ISO 9001:2015", value: "Quality management" },
  { label: "CREDAI Member", value: "UP chapter" },
  { label: "Warranty Certificate", value: "Preview PDF" },
];

export const FAQS = [
  ["How much does a 1500 sqft 2 BHK cost in Lucknow in 2026?", "Between ₹24.75 lakh (Essential, ₹1,650/sqft) and ₹36.75 lakh (Premium, ₹2,450/sqft) for construction. Most homeowners land near ₹29 lakh on Signature. Plot cost, approvals, and interiors beyond the package are separate. Use the calculator above for your exact size."],
  ["How long does construction actually take?", "8 to 11 months for a 1500 to 2500 sqft home. Our average across 260 homes is 9 months 2 weeks. Monsoon, approval queues, and mid-way design changes are the three variables that move this."],
  ["What happens if construction gets delayed?", "The agreement has a written delay clause. Delays caused by us carry a per-day deduction. Delays from approvals, weather, or your changes are logged and shared on WhatsApp the day they happen. Our published average delay is 11 days."],
  ["Can I visit the site anytime?", "Yes. No appointment needed. The site supervisor is there 9am to 6pm, six days a week. Many homeowners' parents visit daily. We also send photos every Monday and Thursday."],
  ["Who approves which cement, steel, bricks are used?", "You do. Brands and grades are named in the quote before you sign. Any change needs your written OK. Samples are tested before site delivery and rejected batches are returned."],
  ["What is the payment schedule?", "7 installments on Essential, 9 on Signature and Premium. Each one is released only after you sign off the completed stage. No payment is tied to a calendar date."],
  ["What is NOT included in your quote?", "Plot cost, government approval fees, electricity and water connection charges, boundary wall beyond 4 ft, and interiors not listed in the package. Every exclusion is listed on page 2 of the quote."],
  ["What is the structural warranty? What does it cover?", "10 years, in writing, on the RCC structure: foundation, columns, beams, slabs. Covers structural cracks and settlement. It is transferable if you sell the home. Finishes carry a separate 12-month support."],
  ["Do you handle approvals and permits?", "Yes. LDA or Nagar Nigam plan sanction, and the completion certificate. Government fees are at actuals and shown separately. It depends on the authority — typically 4 to 7 weeks."],
  ["Can I use my own architect?", "Yes. We build from your architect's approved drawings. Our structural engineer reviews them first and we will tell you if anything needs to change for safety."],
  ["What if I want to change something mid-construction?", "Common. We issue a written change order with the cost and timeline impact before doing the work. You approve it on WhatsApp. Nothing changes without that."],
  ["How do I know you won't disappear?", "260 homes on the map above, each with a real address. 9 years, same office in Lucknow. MSME and GST registered. Payments are stage-linked so your money is never ahead of the work."],
];

export const SEARCH_POPULAR = ["2 BHK cost Lucknow", "30×50 house plan", "turnkey package", "brick quality", "GB-229"];

export const siteConfig = {
  name: "Astravox",
  legalName: "",
  registrationNumber: "",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  serviceArea: "Glasgow, the wider UK and international clients",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://astravoxtech.uk",
  bookingUrl: "",
  linkedin: "",
  instagram: "",
  searchConsoleVerification:
    process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION || "",
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
  copyrightYear: 2026,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Education", href: "/education" },
  { label: "Digital Growth", href: "/digital-growth" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type DivisionKey = "technology" | "education" | "digital-growth";

export const divisions = {
  technology: {
    key: "technology",
    label: "Astravox Technology",
    shortLabel: "Technology",
    href: "/technology",
    accent: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #4F46E5)",
    headline: "Software Built Around Your Business",
    description:
      "From mobile applications and websites to cloud platforms and intelligent automation, Astravox creates reliable digital solutions designed for real business needs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern software dashboard on a laptop screen",
    services: [
      {
        slug: "mobile-app-development",
        title: "Mobile Application Development",
        text: "Android, iOS and cross-platform applications planned around your users, workflows and long-term support needs.",
        items: [
          "Android development",
          "iOS development",
          "Cross-platform applications",
          "Application modernisation",
          "API integration",
          "Ongoing support",
        ],
      },
      {
        slug: "web-development",
        title: "Web Development",
        text: "High-quality websites, web applications, portals and e-commerce foundations built for performance and usability.",
        items: [
          "Business websites",
          "Web applications",
          "Customer portals",
          "E-commerce solutions",
          "Responsive development",
          "Website modernisation",
        ],
      },
      {
        slug: "custom-software",
        title: "Custom Software Development",
        text: "Bespoke internal systems and integrations that replace messy manual processes with clearer digital operations.",
        items: [
          "Internal business systems",
          "Workflow platforms",
          "Booking systems",
          "Customer management tools",
          "Reporting dashboards",
          "Bespoke integrations",
        ],
      },
      {
        slug: "cloud-solutions",
        title: "Cloud and Backend Solutions",
        text: "Secure backends, APIs and database foundations for products that need to grow reliably.",
        items: [
          "Cloud-ready applications",
          "Backend APIs",
          "Database solutions",
          "Secure authentication",
          "Third-party integrations",
          "Monitoring and maintenance",
        ],
      },
      {
        slug: "ai-automation",
        title: "AI and Automation",
        text: "Practical automation and AI-assisted workflows for repetitive business tasks, reporting and customer support triage.",
        items: [
          "Business process automation",
          "AI-assisted workflows",
          "Intelligent search",
          "Customer support assistants",
          "Data extraction",
          "Reporting automation",
        ],
      },
      {
        slug: "ui-ux-design",
        title: "UI and UX Design",
        text: "User-centred interfaces for websites, web apps and mobile products, from structure to polished interaction design.",
        items: [
          "User research",
          "Wireframes",
          "Prototypes",
          "Mobile UI",
          "Web UI",
          "Design systems",
        ],
      },
    ],
  },
  education: {
    key: "education",
    label: "Astravox Education",
    shortLabel: "Education",
    href: "/education",
    accent: "#8B5CF6",
    gradient: "linear-gradient(135deg, #2563EB, #8B5CF6)",
    headline: "Clear Guidance for Your International Study Journey",
    description:
      "Astravox supports students in making informed choices, preparing strong applications and understanding each stage of the international education process.",
    image: "/education-students.png",
    alt: "International students discussing study plans on a university campus",
    services: [
      {
        slug: "study-in-uk",
        title: "Study in the UK Guidance",
        text: "Support for students comparing UK courses, locations, entry requirements and application timelines.",
        items: [
          "Academic profile review",
          "Course comparison",
          "University shortlisting",
          "Entry requirement guidance",
          "Study destination comparison",
        ],
      },
      {
        slug: "study-in-europe",
        title: "Study in Europe Guidance",
        text: "Structured guidance for students considering Ireland, Germany, Italy and other European destinations.",
        items: [
          "Destination comparison",
          "Course research",
          "Document planning",
          "Deadline guidance",
          "General orientation",
        ],
      },
      {
        slug: "university-applications",
        title: "University Application Support",
        text: "Clear planning, document checklists and practical help navigating university application requirements.",
        items: [
          "Application planning",
          "Document checklist",
          "Application form guidance",
          "Deadline tracking",
          "Communication guidance",
        ],
      },
      {
        slug: "personal-statement-support",
        title: "Personal Statement and SOP Support",
        text: "Ethical review and improvement guidance that helps students communicate their own genuine story clearly.",
        items: [
          "Structure review",
          "Clarity improvement",
          "Motivation development",
          "Academic alignment",
          "Proofreading guidance",
        ],
      },
      {
        slug: "interview-preparation",
        title: "Interview Preparation",
        text: "Mock interviews, feedback and confidence-building sessions for students preparing for academic interviews.",
        items: [
          "Mock interviews",
          "Common question preparation",
          "Communication guidance",
          "Confidence building",
          "Feedback sessions",
        ],
      },
      {
        slug: "student-journey-guidance",
        title: "Student Journey Guidance",
        text: "Pre-departure and transition support for students preparing for offer acceptance, travel and arrival.",
        items: [
          "Offer acceptance guidance",
          "Document preparation",
          "Accommodation research guidance",
          "Travel preparation",
          "Arrival checklist",
          "General orientation",
        ],
      },
    ],
  },
  "digital-growth": {
    key: "digital-growth",
    label: "Astravox Digital Growth",
    shortLabel: "Digital Growth",
    href: "/digital-growth",
    accent: "#4F46E5",
    gradient: "linear-gradient(135deg, #4F46E5, #8B5CF6, #06B6D4)",
    headline: "Turn Digital Attention Into Business Growth",
    description:
      "Astravox helps businesses improve online visibility, strengthen their brand, connect with customers and generate measurable opportunities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Marketing analytics dashboard showing business growth charts",
    services: [
      {
        slug: "seo",
        title: "Search Engine Optimisation",
        text: "Technical, local and content-led SEO foundations that help customers find and understand your business.",
        items: [
          "Technical SEO",
          "On-page SEO",
          "Local SEO",
          "Keyword research",
          "Content optimisation",
          "SEO reporting",
        ],
      },
      {
        slug: "social-media",
        title: "Social Media Marketing",
        text: "Planning, creative direction and campaign support for brands that want a clearer social presence.",
        items: [
          "Social strategy",
          "Content planning",
          "Post design",
          "Campaign management",
          "Community support",
          "Performance reporting",
        ],
      },
      {
        slug: "paid-advertising",
        title: "Paid Advertising",
        text: "Search and social campaigns planned around goals, budgets, tracking and continuous optimisation.",
        items: [
          "Google Ads",
          "Search campaigns",
          "Social advertising",
          "Landing page planning",
          "Conversion tracking",
          "Campaign optimisation",
        ],
      },
      {
        slug: "content-marketing",
        title: "Content Marketing",
        text: "Useful website, blog and campaign content that supports visibility, trust and conversion.",
        items: [
          "Website content",
          "Blog content",
          "Service pages",
          "Campaign copy",
          "Social content",
          "Content calendars",
        ],
      },
      {
        slug: "branding",
        title: "Brand Identity",
        text: "Brand direction, messaging and visual foundations that make your business easier to recognise.",
        items: [
          "Brand positioning",
          "Colour direction",
          "Typography",
          "Logo direction",
          "Marketing materials",
          "Brand guidelines",
        ],
      },
      {
        slug: "web-design",
        title: "Website Design",
        text: "Responsive, conversion-focused websites with strong SEO foundations and analytics-ready structure.",
        items: [
          "Business websites",
          "Landing pages",
          "Conversion-focused design",
          "Responsive design",
          "SEO foundations",
          "Analytics setup",
        ],
      },
    ],
  },
} as const;

export const processSteps = [
  ["Discover", "We clarify your goals, audience, constraints and next best move."],
  ["Plan", "We shape a practical roadmap with priorities, content and responsibilities."],
  ["Deliver", "We build, prepare or launch the agreed work with clear communication."],
  ["Support", "We help you review progress, improve decisions and plan what comes next."],
];

export const trustItems = [
  "UK-based service with international perspective",
  "Clear consultation process before any commitment",
  "Privacy-conscious enquiry handling",
  "Transparent scope, limitations and next steps",
  "Tailored advice instead of one-size-fits-all packages",
  "Long-term support mindset",
];

export const insightPosts = [
  {
    slug: "mobile-app-cost-uk",
    category: "Technology",
    title: "How Much Does It Cost to Build a Mobile App in the UK?",
    excerpt:
      "A practical guide to the factors that affect app budgets, from features and platforms to integrations and support.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "native-vs-cross-platform",
    category: "Technology",
    title: "Native Android vs Cross-Platform Development",
    excerpt:
      "How to compare performance, cost, timelines and maintenance before choosing a mobile development approach.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "shortlist-uk-universities",
    category: "Education",
    title: "How to Shortlist UK Universities",
    excerpt:
      "A structured way to compare course fit, entry requirements, location, student support and future plans.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "strong-personal-statement",
    category: "Education",
    title: "What Makes a Strong Personal Statement?",
    excerpt:
      "Clarity, evidence and honest motivation matter more than exaggerated claims or copied language.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "what-is-local-seo",
    category: "Digital Marketing",
    title: "What Is Local SEO?",
    excerpt:
      "Why local search visibility matters for small businesses and what foundations should be in place first.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "seo-vs-google-ads",
    category: "Digital Marketing",
    title: "SEO vs Google Ads",
    excerpt:
      "How organic visibility and paid advertising can work together without promising guaranteed results.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
];

export const caseStudies = [
  {
    title: "Demonstration Technology Case Study",
    type: "Growing service business",
    challenge:
      "The organisation needed a clearer online enquiry journey and a more reliable way to manage customer requests.",
    solution:
      "A modern service website concept with structured forms, content hierarchy and an integration-ready enquiry workflow.",
    outcome:
      "Outcome metrics should be added only after a verified real project is available.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Demonstration Education Case Study",
    type: "International student applicant",
    challenge:
      "The student needed help comparing study options and organising application requirements without unrealistic promises.",
    solution:
      "A guided shortlisting and document planning process with ethical personal statement review support.",
    outcome:
      "Institution, scholarship and visa decisions remain with the relevant official bodies.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Demonstration Digital Growth Case Study",
    type: "Local professional services brand",
    challenge:
      "The business needed better visibility and a more consistent digital presence across search and social channels.",
    solution:
      "A local SEO foundation, content plan and campaign landing page approach prepared for performance tracking.",
    outcome:
      "Marketing results should be reported after campaigns run with verified analytics data.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
];

export const faqs = {
  technology: [
    ["Can Astravox build both websites and apps?", "Yes. The technology division can support websites, web applications, mobile apps, backend systems and integrations after scoping."],
    ["Do you provide fixed prices?", "Projects are priced after a consultation because scope, features, integrations and support needs vary."],
    ["Can you maintain an existing product?", "Yes, if the codebase and access are suitable. A technical review is usually the first step."],
  ],
  education: [
    ["Do you guarantee admission?", "No. Admission decisions are made by universities and institutions. Astravox provides guidance and application support only."],
    ["Do you provide visa advice?", "Astravox provides general educational information, not regulated immigration advice. Students should use official sources or authorised advisers for visa guidance."],
    ["Can you write my statement for me?", "No. We provide ethical review, structure and clarity guidance so your own statement remains genuine."],
  ],
  "digital-growth": [
    ["Do you guarantee rankings or leads?", "No. Digital marketing depends on competition, budget, market conditions and execution. Astravox focuses on transparent planning and improvement."],
    ["Can you manage social media and ads together?", "Yes. Campaigns can combine content planning, social media support, paid advertising and landing page improvements."],
    ["Do I need a new website first?", "Not always. We can review your current site and decide whether improvements or a rebuild make more sense."],
  ],
};

export function getDivision(key: DivisionKey) {
  return divisions[key];
}

export function getAllServices() {
  return Object.values(divisions).flatMap((division) =>
    division.services.map((service) => ({
      ...service,
      division: division.key as DivisionKey,
      divisionLabel: division.label,
      href: `/${division.key}/${service.slug}`,
      accent: division.accent,
    })),
  );
}

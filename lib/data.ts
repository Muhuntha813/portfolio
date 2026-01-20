export const projects = [
  {
    slug: "hostel-ecommerce",
    title: "Hostel E-commerce Website",
    description: "A full-scale system to manage hostel operations including room allocation, mess management, and student records. Streamlines administrative tasks and improves resident experience.",
    fullDescription: `
      This project is a comprehensive solution designed to modernize hostel management. 
      It addresses key challenges such as manual room allocation, paper-based mess tracking, and inefficient communication channels.

      Key Features:
      - **Digital Room Allocation:** Automated algorithm for room assignment based on preferences and availability.
      - **Mess Management:** Digital token system for meals, reducing food wastage and queue times.
      - **Complaint Portal:** Real-time ticketing system for maintenance issues.
      - **E-commerce Store:** Integrated shop for students to buy daily essentials within the campus.
      - **Admin Dashboard:** Analytics on occupancy, finances, and student feedback.
    `,
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    techStack: [
      { name: "Frontend", tools: "React, Tailwind CSS, Framer Motion" },
      { name: "Backend", tools: "Node.js, Express" },
      { name: "Database", tools: "PostgreSQL" },
      { name: "Payments", tools: "Stripe / Razorpay Integration" }
    ],
    link: "#",
    github: "#",
    images: [],
    isPrivate: false
  },
  {
    slug: "b2b-plastics-marketplace",
    title: "B2B Platform for Plastics Market",
    description: "A marketplace connecting plastic raw material suppliers with manufacturers. Facilitates bulk ordering, quoting, and supply chain tracking.",
    fullDescription: `
      A specialized B2B marketplace engineered to bridge the gap between raw plastic material suppliers and manufacturing units.
      The platform brings transparency to pricing and logistics in a traditionally opaque market.

      Key Features:
      - **RFQ System:** Request for Quote functionality allows buyers to get competitive pricing.
      - **Bulk Order Management:** Optimized workflows for high-volume transactions.
      - **Live Inventory:** Real-time stock updates from verified suppliers.
      - **Logistics Tracking:** Integration with shipping providers for shipment status.
    `,
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    techStack: [
      { name: "Frontend", tools: "Next.js 14, TypeScript" },
      { name: "Styling", tools: "Tailwind CSS, Shadcn UI" },
      { name: "Database", tools: "PostgreSQL with Prisma" },
      { name: "Auth", tools: "NextAuth.js" }
    ],
    link: "#",
    github: "#",
    images: [],
    isPrivate: true
  },
  {
    slug: "college-web-scraper",
    title: "College Web Scraper & UI Upgrade",
    description: "Scrapes attendance data and presents it in a modern, user-friendly interface. Replaces legacy portals with a responsive and accessible dashboard.",
    fullDescription: `
      This project was born out of the need for a better user experience for accessing college academic data.
      The legacy portal was slow and mobile-unfriendly. This solution acts as a modern wrapper, fetching data in real-time and presenting it beautifully.

      Key Features:
      - **Automated Scraping:** Headless browser scripts to securely fetch user data.
      - **Attendance Analytics:** Visual graphs showing attendance trends and "bunk" calculations.
      - **Mobile First:** A PWA-ready design that works perfectly on smartphones.
      - **Notifications:** Alerts for low attendance or new results.
    `,
    tags: ["React", "Node.js", "Supabase", "Express"],
    techStack: [
      { name: "Scraper", tools: "Puppeteer / Selenium" },
      { name: "Backend", tools: "Node.js, Express" },
      { name: "Frontend", tools: "React, Chart.js" },
      { name: "Storage", tools: "Supabase" }
    ],
    link: "#",
    github: "#",
    images: [],
    isPrivate: false
  },
  {
    slug: "smart-planner",
    title: "Smart Planner",
    description: "Desktop application for task management with Google Calendar sync and multi-device support. Built with JavaFX and optimized for productivity.",
    fullDescription: `
      Smart Planner is a native desktop application designed for power users who need robust task management offline and online.
      It combines the speed of a native app with the connectivity of cloud calendars.

      Key Features:
      - **2-Way Sync:** Seamless synchronization with Google Calendar.
      - **Focus Mode:** Pomodoro timer and distraction blocking features.
      - **Cross-Platform:** Runs on Windows, Mac, and Linux.
      - **Analytics:** Productivity insights and task completion rates.
    `,
    tags: ["Java", "JavaFX", "PostgreSQL", "Google API"],
    techStack: [
      { name: "Language", tools: "Java 17" },
      { name: "GUI Framework", tools: "JavaFX, CSS" },
      { name: "Database", tools: "PostgreSQL (Cloud Hosted)" },
      { name: "APIs", tools: "Google Calendar API" }
    ],
    link: "#",
    github: "#",
    images: [],
    isPrivate: false
  }
];

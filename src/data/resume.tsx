import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Kennedy Banda",
  initials: "KB",
  url: "https://ken004ban.github.io",
  location: "Chipata, Zambia",
  locationLink: "https://www.google.com/maps/place/Chipata",
  description:
    "Applications Support Professional | Full-Stack Developer | BSc Computer Science | ICTAZ Registered",
  summary:
    "Applications support professional and full-stack developer with a BSc in Computer Science and over three years of hands-on experience managing and supporting enterprise applications, RESTful APIs, cloud-hosted databases, and multi-platform IT environments. Proven track record in database administration (PostgreSQL, MySQL), API integration and support, front-end application development (React, JavaScript), React Native mobile development, source code management (Git), and end-user technical support across government, statistical, and enterprise environments. Brings a unique combination of development depth and support discipline — able to troubleshoot applications from the front-end interface down to the database layer.\n\nFounder of Nyota Tech Limited, building practical digital solutions for Zambian businesses including enterprise management systems, mobile apps, and offline-first tools.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React.js", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "JavaScript", icon: undefined },
    { name: "PHP / Laravel", icon: undefined },
    { name: "React Native", icon: undefined },
    { name: "Expo", icon: undefined },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: undefined },
    { name: "Supabase", icon: undefined },
    { name: "REST APIs", icon: undefined },
    { name: "Git / GitHub", icon: undefined },
    { name: "Microsoft 365", icon: undefined },
    { name: "Postman", icon: undefined },
    { name: "Jest", icon: undefined },
    { name: "Linux", icon: undefined },
    { name: "System Administration", icon: undefined },
    { name: "Application Support", icon: undefined },
    { name: "IT Support & Troubleshooting", icon: undefined },
    { name: "Database Administration", icon: undefined },
    { name: "Role-Based Access Control (RBAC)", icon: undefined },
    { name: "Data Entry & Validation", icon: undefined },
    { name: "Incident Management", icon: undefined },
    { name: "User Training", icon: undefined },
    { name: "Technical Documentation", icon: undefined },
    { name: "Cloud Infrastructure", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kennedybanda.info@gmail.com",
    tel: "+260974136598",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ken004Ban",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kennedybandainfo/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kennedybanda.info@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nyota Tech Limited",
      href: "#",
      badges: [],
      location: "Zambia",
      title: "Founder & Lead Developer",
      logoUrl: "/nyota-tech.png",
      start: "2023",
      end: "Present",
      description:
        "Founded and operate a software solutions company building digital tools for Zambian businesses. Developed the Nyota Tech Business Management System — a cloud-deployed operations and workflow management platform for SMEs. Built Quick Receipt, a React Native + Expo mobile application for receipt generation and business record keeping — currently in testing phase. Developed VaultSync, an offline-first peer-to-peer file sharing platform over Wi-Fi and LAN (no internet required). Built a Mystery Shopping Reporting System using Laravel for Gatoma Motorcycles. Focused on enterprise software, system hosting, infrastructure management, and digital transformation across Zambia.",
    },
    {
      company: "Gatoma Enterprises",
      href: "#",
      badges: [],
      location: "Chipata, Zambia",
      title: "Lead Applications Developer & Support Engineer",
      logoUrl: "/gatoma.png",
      start: "November 2025",
      end: "Present",
      description:
        "Sole technical owner of a cloud-based enterprise management system covering POS transactions, multi-branch inventory, and financial reporting. Built full-stack solution: React (frontend), Node.js (backend), PostgreSQL on Supabase (cloud database) with real-time data sync across branches. Implemented role-based access control (RBAC), row-level security, and JWT authentication to protect sensitive financial data. Built and maintained RESTful APIs; tested and documented with Postman. Managed source code with Git/GitHub; conducted testing with Jest and Postman. Sole application support contact — incident response, API troubleshooting, database query resolution, and user support.",
    },
    {
      company: "Chipata City Council",
      href: "#",
      badges: [],
      location: "Chipata, Zambia",
      title: "Data Entry & Systems Clerk",
      logoUrl: "/chipata-council.png",
      start: "February 2026",
      end: "April 2026",
      description:
        "Entered and validated government financial and beneficiary records in ICDMIS (Integrated CDF Management Information System). Cleaned electronic data to ensure coherent, audit-ready database records. Prepared and submitted monthly data reports within agreed deadlines. Maintained strict data security and confidentiality standards aligned with government financial compliance requirements.",
    },
    {
      company: "ZAMSTATS (Zambia Statistics Agency)",
      href: "#",
      badges: [],
      location: "Zambia",
      title: "Team Lead Enumerator — Digital Data Systems",
      logoUrl: "/zamstats.png",
      start: "September 2025",
      end: "November 2025",
      description:
        "Led a field team operating digital data capture platforms across multiple national survey sites. Provided real-time technical troubleshooting and quality control to maintain data integrity under operational pressure. Compiled data summary reports tracking collection volumes and quality metrics. Managed device security and data recovery procedures to prevent data loss.",
    },
    {
      company: "Chipata City Council",
      href: "#",
      badges: [],
      location: "Chipata, Zambia",
      title: "IT Systems & Applications Support Volunteer",
      logoUrl: "/chipata-council.png",
      start: "September 2023",
      end: "August 2025",
      description:
        "Delivered day-to-day IT and application support across multiple council departments — resolving hardware, software, and network issues. Administered LGIIS digital registration system — managing user accounts, data entry, and system documentation. Supported Microsoft 365 and email configuration for council staff. Delivered user training and onboarding sessions on internal systems. Assisted in maintaining IT infrastructure, backup procedures, and security practices.",
    },
    {
      company: "Garnet Solutions",
      href: "#",
      badges: [],
      location: "Chipata, Zambia",
      title: "IT Technician",
      logoUrl: "/garnet-solutions.png",
      start: "June 2023",
      end: "August 2023",
      description:
        "Installed, configured, and supported client-facing software applications across Windows environments. Provided remote and on-site application and hardware support to resolve incidents and improve system uptime. Assisted with network setup, diagnostics, and Microsoft 365 administration. Delivered Tier-1 and Tier-2 support for approximately 20 users. Produced technical documentation and user guides to support knowledge transfer.",
    },
  ],
  education: [
    {
      school: "DMI St. Eugene University",
      href: "#",
      degree: "Bachelor of Science in Computer Science (ZAQA Verified)",
      logoUrl: "",
      start: "2021",
      end: "November 2025",
    },
  ],
  certifications: [
    {
      title: "ICTAZ Registered Member",
      issuer: "ICT Association of Zambia",
      href: "#",
      status: "",
    },
    {
      title: "BSc Computer Science",
      issuer: "DMI St. Eugene University (ZAQA Verified)",
      href: "#",
      status: "",
    },
    {
      title: "CompTIA Network+",
      issuer: "CompTIA",
      href: "#",
      status: "In Progress",
    },
  ],
  projects: [
    {
      title: "Enterprise Business Management System",
      href: "#",
      dates: "2025 – Present",
      active: true,
      description:
        "Cloud-based enterprise platform for multi-branch retail operations covering POS transactions, inventory management, and financial reporting. Features real-time data sync across branches, role-based access control, and row-level security. Sole technical owner responsible for development, deployment, security, incident management, and ongoing support.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
        "JWT",
        "Git",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Nyota Tech Business Management System",
      href: "#",
      dates: "2024 – Present",
      active: true,
      description:
        "Cloud-deployed business operations platform helping Zambian SMEs manage workflows, reporting, and daily operations digitally. Designed to improve efficiency and support business growth through modern digital systems.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Supabase",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Quick Receipt — Mobile App",
      href: "#",
      dates: "2025 – Present (In Testing)",
      active: true,
      description:
        "React Native + Expo mobile application for receipt generation and business record keeping, designed for small Zambian businesses and traders. Currently in active testing phase — launching soon.",
      technologies: [
        "React Native",
        "Expo",
        "JavaScript",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Alitasha Lodge — Business Website",
      href: "https://alitasha-lodge-bk.onrender.com",
      dates: "2026 – Present",
      active: true,
      description:
        "Live hospitality website built for Alitasha Lodge. Features property showcase, room listings, and booking interface. Deployed on Render.",
      technologies: [
        "React",
        "Node.js",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://alitasha-lodge-bk.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Signal — AI Research Tool",
      href: "https://signal-beta-one.vercel.app",
      dates: "2026 – Present",
      active: true,
      description:
        "Scroll-driven cinematic research tool that transforms from quiet particle animations into a fully functional web search interface. Powered by the Tavily search API, delivering clean, structured results with a focus on research clarity.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Tavily API",
      ],
      links: [
        {
          type: "Website",
          href: "https://signal-beta-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "VaultSync",
      href: "#",
      dates: "2023 – 2024",
      active: false,
      description:
        "Offline-first file sharing platform using peer-to-peer connectivity over Wi-Fi and LAN networks — no internet connection required. Built for environments with limited or no connectivity.",
      technologies: [
        "Node.js",
        "JavaScript",
        "P2P Networking",
        "LAN/Wi-Fi",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as { title: string; dates: string; location: string; description: string; image: string; mlh?: string; win?: string; icon?: string; links: { title: string; icon: React.ReactNode; href: string }[] }[],
} as const;

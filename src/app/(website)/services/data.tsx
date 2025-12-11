import {
  Headset,
  TrendingUp,
  Settings,
  RefreshCw,
  ShoppingCart,
  Phone,
  CreditCard,
  Calendar,
  MessageSquare,
  MessageCircle,
  CheckCircle,
  Database,
  Bot,
  Languages,
  Globe,
  Truck,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  User,
} from "lucide-react";
export const coreServices = [
  {
    title: "Inbound Customer Support",
    points: ["24/7 Availability", "Query Resolution", "Order Assistance"],
    icon: (
      <Headset
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Outbound Sales & Lead Gen",
    points: ["Lead Qualification", "Cold Calling", "Appointment Setting"],
    icon: (
      <TrendingUp
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Technical Support (L1/L2/L3)",
    points: ["Troubleshooting", "Software Help", "Hardware Support"],
    icon: (
      <Settings
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Customer Retention & Renewals",
    points: ["Churn Reduction", "Loyalty Programs", "Feedback Loop"],
    icon: (
      <RefreshCw
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Order Management & Tracking",
    points: ["Order Processing", "Shipment Updates", "Returns Management"],
    icon: (
      <ShoppingCart
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Telemarketing & Promotions",
    points: ["Campaign Management", "Product Launches", "Market Surveys"],
    icon: (
      <Phone className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    title: "Collections & Payment Follow-Up",
    points: ["Payment Reminders", "Debt Recovery", "Invoice Clarification"],
    icon: (
      <CreditCard
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Appointment Scheduling",
    points: ["Calendar Management", "Confirmation Calls", "Rescheduling"],
    icon: (
      <Calendar
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Helpdesk & Ticketing Support",
    points: ["Ticket Creation", "Priority Handling", "SLA Monitoring"],
    icon: (
      <MessageSquare
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "WhatsApp / Email / Chat Support",
    points: ["Omnichannel Support", "Instant Replies", "Chatbot Integration"],
    icon: (
      <MessageCircle
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Quality Assurance (QA)",
    points: ["Call Monitoring", "Performance Audits", "Training Feedback"],
    icon: (
      <CheckCircle
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Back-Office & Data Processing",
    points: ["Data Entry", "Form Processing", "Document Verification"],
    icon: (
      <Database
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "AI IVR & Voicebot Handling",
    points: ["Automated Routing", "Voice Recognition", "Self-Service Options"],
    icon: (
      <Bot className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    title: "Multilingual Support",
    points: ["30+ Languages", "Native Speakers", "Cultural Alignment"],
    icon: (
      <Languages
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Industry-Specific Solutions",
    points: ["Tailored Workflows", "Compliance Adherence", "Sector Expertise"],
    icon: (
      <Globe className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
];

export const industryDetails = [
  {
    id: "spice",
    title: "Spice / Masala Lead Generation",
    content:
      "Specialized campaigns for the spice industry, targeting distributors, retailers, and bulk buyers. We understand the nuances of the FMCG market and help you expand your reach regionally and nationally.",
    icon: <CheckCircle className="w-6 h-6 text-white" />,
  },
  {
    id: "logistics",
    title: "Shipping & Logistics Support",
    content:
      "End-to-end support for logistics companies including shipment tracking, delivery scheduling, driver coordination, and customer notifications. We ensure your supply chain communication is seamless.",
    icon: <Truck className="w-6 h-6 text-white" />,
  },
  {
    id: "campaigns",
    title: "National & International Campaigns",
    content:
      "Scalable calling campaigns tailored for diverse markets. Whether it's a local product launch or a global survey, our multilingual teams adapt to the target audience for maximum impact.",
    icon: <Globe className="w-6 h-6 text-white" />,
  },
  {
    id: "bfsi",
    title: "Finance / BFSI",
    content:
      "Secure and compliant support for banking, financial services, and insurance. Services include loan verification, insurance renewals, fraud detection alerts, and general customer inquiries.",
    icon: <Building2 className="w-6 h-6 text-white" />,
  },
  {
    id: "education",
    title: "Education",
    content:
      "Student counseling, course enrollment support, and administrative assistance for educational institutions. We help bridge the gap between institutions and prospective students.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    content:
      "HIPAA-compliant patient support, appointment scheduling, telemedicine coordination, and insurance verification. Compassionate care starts with clear communication.",
    icon: <HeartPulse className="w-6 h-6 text-white" />,
  },
  {
    id: "realestate",
    title: "Real Estate",
    content:
      "Lead qualification for property sales, tenant inquiries, maintenance scheduling, and open house coordination. We help real estate professionals close deals faster.",
    icon: <Home className="w-6 h-6 text-white" />,
  },
];

export const whyChooseUsCards = [
  {
    label: "EXPERTISE",
    title: "Domain Knowledge",
    description: "Deep understanding of diverse industries.",
    icon: <User className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    label: "SCALABILITY",
    title: "Grow With Us",
    description: "Flexible staffing to match your seasonal peaks.",
    icon: <TrendingUp className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    label: "QUALITY",
    title: "QA Monitoring",
    description: "Rigorous quality checks for every interaction.",
    icon: <CheckCircle className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
];

// 360° Customer Experience Overview
export const customerExperienceOverview = {
  title: "360° Customer Experience Solutions",
  subtitle: "Human Intelligence. Artificial Intelligence. Unlimited Scale.",
  tagline:
    "Delivering next-generation customer experience management powered by innovation and precision.",
  description: `In today's highly competitive landscape, customer experience is the ultimate brand differentiator. Modern customers expect speed, empathy, and accurate resolutions across every interaction—whether through voice, chat, email, or emerging digital channels.

HK Nexus Global delivers this excellence through a powerful blend of AI-driven technologies and skilled customer experience professionals. Our advanced AI products accelerate response times, enhance accuracy, and reduce operational costs, while our human experts ensure every interaction feels personalized, thoughtful, and relationship-driven.

With operations across India, the UAE, and the USA, we support global clients with scalable delivery models, multilingual capabilities, and deep expertise in CX strategy and execution. We help organizations elevate support quality, streamline processes, and create customer experiences that truly stand out.`,
};

// Emergency Helpline Service
export const emergencyHelplineService = {
  title: "Emergency Helpline and E-Governance Support in India",
  description: `Responses to emergencies should not be delayed. The Emergency Helpline Solutions from HK Nexus Global enable governments to create quick-reaction systems that link residents to vital assistance when it matters most. As a reputable emergency service provider, we create comprehensive public safety solutions that incorporate technology, skilled labor, and smooth coordination. Our platforms guarantee that any citizen can instantly and consistently contact the appropriate department, from local distress calls to national emergency hotlines.`,
  cta: {
    title: "Start an Emergency Helpline Right Now",
    subtitle: "Start today to create a safer tomorrow.",
  },
};

// Digital Transformation Services
export const digitalTransformationOverview = {
  title: "Digital Transformation Services Powered by Generative AI",
  subtitle: "Innovation at Scale",
  description:
    "Reengineering business operations through intelligent, agile digital solutions that drive sustainable growth, improve operational efficiency, and deliver a seamless 360° customer experience.",
};

export const digitalTransformationServices = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    overview: `Enabling organizations to operate with greater agility, resilience, and sustainable growth through enterprise-grade digital transformation services. We partner with businesses to modernize core workflows, transform legacy ecosystems, and deploy AI-powered applications that elevate both customer and employee experiences.

Our capabilities span end-to-end process reengineering, enterprise system modernization, and seamless integration of advanced CRM and ERP platforms. By embedding intelligence, automation, and scalability at the core, we help organizations move beyond incremental change—setting new benchmarks in operational efficiency, performance, and long-term value creation.`,
    benefits: [
      "Intelligent, AI-driven workflows that optimize enterprise operations",
      "Deeper customer engagement and improved lifetime value through personalized experiences",
      "Data-led insights enabling faster, smarter, and more confident decision-making",
    ],
    icon: (
      <Settings className="w-8 h-8" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    id: "it-helpdesk",
    title: "Enterprise IT Helpdesk Services",
    overview: `Delivering mission-critical, enterprise-class IT support designed to ensure system reliability, operational continuity, and workforce productivity at scale. Our Enterprise IT Helpdesk services go beyond traditional support models by combining advanced analytics, automation, and AI-enabled service management.

We proactively identify and mitigate technology incidents using predictive intelligence, real-time remote infrastructure monitoring, and multi-platform support across endpoints, applications, and enterprise environments. Integrated self-service platforms and AI-powered virtual assistants enable faster issue resolution, reduce service desk volumes, and empower users with immediate support.

Built to align with enterprise governance and security standards, our solutions deliver consistent, high-quality support across distributed teams, geographies, and business units.`,
    benefits: [
      "Up to 30% faster resolution through intelligent automation",
      "Centralized, scalable, and ITIL-aligned service desk operations",
      "Unified employee and customer support experience across devices and channels",
    ],
    icon: (
      <Headset className="w-8 h-8" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    id: "it-outsourcing",
    title: "Enterprise IT Outsourcing",
    overview: `Enable scalable, secure, and cost-efficient IT operations through our enterprise-class IT outsourcing services. We help organizations expand and optimize IT capabilities without the complexity and overhead of in-house infrastructure, delivering consistent performance across dynamic business environments.

Our outsourcing model encompasses end-to-end infrastructure management, cybersecurity operations, cloud migration and optimization, and application support services. Clients benefit from predictable operating costs, access to a global, high-skilled talent pool, and guaranteed system availability backed by 24×7 monitoring and proactive incident management.

Whether supporting rapid business growth, digital transformation initiatives, or operational transitions, our solutions are designed to ensure business continuity, regulatory compliance, and long-term operational stability—while significantly reducing total cost of ownership.`,
    benefits: [
      "Comprehensive, end-to-end IT infrastructure and application support",
      "Optimized cost structures through globally distributed, expert talent",
      "Secure, compliant, and highly reliable systems with enterprise-grade governance",
    ],
    icon: (
      <Database className="w-8 h-8" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    overview: `Empower confident, data-led decision-making by transforming enterprise data into actionable intelligence. Our Enterprise Business Intelligence services enable organizations to unlock the full value of their data assets—moving beyond static reporting to deliver strategic insights that drive measurable business outcomes.

Our BI frameworks encompass enterprise-grade data warehousing, real-time analytics and visualization, and AI-powered predictive modeling. These capabilities allow leaders to identify emerging trends, optimize resource allocation, and forecast market opportunities with accuracy—converting raw data into a sustainable competitive advantage.`,
    benefits: [
      "Advanced, interactive reporting and executive-ready dashboards",
      "AI-driven predictive analytics for proactive, strategic decision-making",
      "Optimized resource allocation through data-backed insights",
    ],
    icon: (
      <TrendingUp
        className="w-8 h-8"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    id: "rpa",
    title: "Robotic Process Automation (RPA)",
    overview: `Accelerate operational efficiency and workforce productivity through enterprise-class Robotic Process Automation solutions. We design, deploy, and scale intelligent bots that seamlessly automate high-volume, rules-based processes across finance, human resources, compliance, and customer operations—with precision, speed, and consistency.

Our RPA solutions enable organizations to eliminate manual errors, compress cycle times, and redeploy skilled talent toward strategic initiatives, innovation, and high-value customer engagement. Built for scalability and governance, our automation frameworks integrate seamlessly with existing enterprise systems to deliver measurable cost savings and long-term operational impact.`,
    benefits: [
      "Accelerated workflows with significant cycle-time reduction",
      "Highly accurate, error-free operations through automation",
      "Scalable cost efficiency and improved operational margins",
    ],
    icon: <Bot className="w-8 h-8" style={{ stroke: "url(#icon-gradient)" }} />,
  },
];

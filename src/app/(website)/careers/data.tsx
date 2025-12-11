import { TrendingUp, Award, Clock, Smile, Zap, Monitor } from "lucide-react";
export const benefits = [
  {
    title: "Growth-Focused",
    description: "Clear career paths and regular performance appraisals.",
    icon: <TrendingUp className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    title: "Competitive Pay",
    description:
      "Attractive salary packages with performance-based incentives.",
    icon: <Award className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    title: "Skill Development",
    description: "Regular training sessions and upskilling opportunities.",
    icon: <Zap className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    title: "Friendly Culture",
    description: "A supportive, inclusive, and fun work environment.",
    icon: <Smile className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure and comfortable workspace.",
    icon: <Monitor className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    title: "Flexible Shifts",
    description: "Rotational shifts to suit different lifestyle needs.",
    icon: <Clock className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
];

export const jobOpenings = [
  {
    title: "Customer Support Executive (Inbound)",
    type: "Full-Time",
    location: "On-site",
    summary: "Handle incoming customer queries with empathy and efficiency.",
    responsibilities: [
      "Answer inbound calls and resolve customer issues.",
      "Maintain high customer satisfaction ratings.",
      "Document interactions in the CRM.",
    ],
    requirements: [
      "Excellent communication skills.",
      "Basic computer proficiency.",
      "Willingness to work in shifts.",
    ],
  },
  {
    title: "Telecaller (Outbound Sales)",
    type: "Full-Time",
    location: "On-site",
    summary:
      "Drive sales and generate leads through targeted outbound calling.",
    responsibilities: [
      "Make outbound calls to prospective customers.",
      "Explain product features and benefits.",
      "Close sales and meet monthly targets.",
    ],
    requirements: [
      "Prior sales experience is a plus.",
      "Strong persuasion and negotiation skills.",
      "Goal-oriented mindset.",
    ],
  },
  {
    title: "Technical Support Associate (L1/L2)",
    type: "Full-Time",
    location: "On-site",
    summary: "Provide technical assistance for software and hardware issues.",
    responsibilities: [
      "Troubleshoot technical problems via phone/chat.",
      "Escalate complex issues to L3 support.",
      "Guide users through step-by-step solutions.",
    ],
    requirements: [
      "Technical background or degree.",
      "Problem-solving aptitude.",
      "Knowledge of basic networking/OS.",
    ],
  },
  {
    title: "Quality Analyst (QA)",
    type: "Full-Time",
    location: "On-site",
    summary:
      "Ensure service quality by monitoring calls and providing feedback.",
    responsibilities: [
      "Audit calls and chat interactions.",
      "Provide coaching and feedback to agents.",
      "Prepare quality reports for management.",
    ],
    requirements: [
      "Experience in a QA role.",
      "Attention to detail.",
      "Strong analytical skills.",
    ],
  },
  {
    title: "Team Leader – Operations",
    type: "Full-Time",
    location: "On-site",
    summary: "Lead and motivate a team of agents to achieve performance goals.",
    responsibilities: [
      "Manage team attendance and performance.",
      "Conduct team meetings and huddles.",
      "Handle escalations and client reporting.",
    ],
    requirements: [
      "2+ years of leadership experience.",
      "Strong people management skills.",
      "Ability to work under pressure.",
    ],
  },
  {
    title: "Chat/Email Support Executive",
    type: "Full-Time",
    location: "On-site",
    summary:
      "Provide non-voice support to customers via chat and email channels.",
    responsibilities: [
      "Respond to customer emails and chats promptly.",
      "Multitask between multiple chat windows.",
      "Ensure accurate and professional written communication.",
    ],
    requirements: [
      "Excellent written communication skills.",
      "Fast typing speed.",
      "Detail-oriented approach.",
    ],
  },
  {
    title: "HR Recruiter",
    type: "Full-Time",
    location: "On-site",
    summary: "Manage the end-to-end recruitment process for bulk hiring.",
    responsibilities: [
      "Source candidates from job portals.",
      "Screen resumes and conduct initial interviews.",
      "Coordinate onboarding for new hires.",
    ],
    requirements: [
      "Experience in BPO recruitment.",
      "Good networking skills.",
      "Familiarity with hiring platforms.",
    ],
  },
  {
    title: "Supervisor – Calling Team",
    type: "Full-Time",
    location: "On-site",
    summary: "Oversee floor operations and ensure smooth workflow.",
    responsibilities: [
      "Monitor floor activities and agent discipline.",
      "Ensure adherence to SLAs and KPIs.",
      "Assist Team Leaders in daily operations.",
    ],
    requirements: [
      "Prior supervisory experience.",
      "Strong organizational skills.",
      "Result-driven attitude.",
    ],
  },
  {
    title: "Back-Office Executive",
    type: "Full-Time",
    location: "On-site",
    summary: "Handle data entry and administrative tasks accurately.",
    responsibilities: [
      "Process forms and update databases.",
      "Verify documents for accuracy.",
      "Generate daily reports.",
    ],
    requirements: [
      "Good typing speed and accuracy.",
      "Proficiency in MS Office.",
      "Ability to handle repetitive tasks.",
    ],
  },
];

export const lifeAtCompany = [
  {
    title: "Collaborative Workspace",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Training & Development",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Team Celebrations",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Modern Infrastructure",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
  },
];

export const locationData = {
  country: "India",
  states: [
    {
      name: "Madhya Pradesh",
      cities: ["Bhopal", "Indore", "Jabalpur"],
    },
    {
      name: "Maharashtra",
      cities: ["Mumbai", "Pune", "Nagpur"],
    },
    {
      name: "Karnataka",
      cities: ["Bangalore", "Mysore", "Hubli"],
    },
    {
      name: "Delhi",
      cities: ["New Delhi", "Noida", "Gurgaon"],
    },
    {
      name: "Tamil Nadu",
      cities: ["Chennai", "Coimbatore", "Madurai"],
    },
  ],
};

export interface WorkExperienceType {
  id: number;
  company: string;
  slug: string;
  position: string;
  location: string;
  startYear: string;
  endYear: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  tags: string[];
  highlights: string[];
  logo: string;
}

export const workExperience: WorkExperienceType[] = [
  {
    id: 0,
    company: "BeGroup",
    slug: "begroup",
    position: "Senior Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    startYear: "Jun 2024",
    endYear: "Present",
    shortDescription: "Executed full-stack development in digital goods and embedded finance while automating data collection for research teams.",
    fullDescription: "Engaged in full-stack development for various projects spanning digital goods and embedded finance sectors, and designed automation tools to facilitate efficient data gathering for the research team.",
    technologies: ["Golang", "NextJs", "GCP", "Kubenetes"],
    tags: ["Microservices", "GCP", "Kubenetes", "Full-stack", "Golang", "NextJs"],
    // highlights: [
    //   "Led development of REC trading platform",
    //   "Managed 5-member Scrum team",
    //   "Implemented microservices architecture with Azure"
    // ],
    highlights: [],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFAYUVFOyXfAQ/company-logo_200_200/B56ZeQhmOXHQAI-/0/1750476416636?e=1759363200&v=beta&t=OBuJzD1XS6RHqehnF0X9LGx_jQdLXimps7vAeZto4zM"
  },
  {
    id: 1,
    company: "REDEX.ECO",
    slug: "redex-eco",
    position: "Senior Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    startYear: "Sep 2023",
    endYear: "Jun 2024",
    shortDescription: "Lead development of applications within the ecosystem to manage Renewable Energy Certificates (RECs)",
    fullDescription: "Led a Scrum team of five engineers to deliver a robust spot exchange feature for Renewable Energy Certificate (REC) trading, leveraging C#, ReactJS, and Azure cloud services. Developed scalable applications based on microservices architecture, utilizing Azure Service Bus, Event Grid, MSSQL, Blob Storage, and Hangfire for background job processing. Accountable for creating end-to-end solutions within the renewable energy ecosystem.",
    technologies: ["C#", "ReactJS", "Azure", "ASP.NET MVC", "API", "WCF", "Angular", "Sass", "MSSQL", "Azure Service Bus", "EventGrid", "Blob Storage", "Hangfire"],
    tags: ["Team Leadership", "Microservices", "Azure", "Renewable Energy"],
    highlights: [
      "Led development of REC trading platform",
      "Managed 5-member Scrum team",
      "Implemented microservices architecture with Azure"
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEfZi_cO1AuEg/company-logo_200_200/company-logo_200_200/0/1678243309090/trecs_ai_logo?e=1759363200&v=beta&t=-jkoezv6AsfKHZTTQZMel4G_mIE-yHIhwSwj-USJV_Y"
  },
  {
    id: 2,
    company: "GalaxyOne (Sovico Group)",
    slug: "galaxyone-sovico",
    position: "Senior Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    startYear: "Apr 2022",
    endYear: "Sep 2023",
    shortDescription: "Developed products for the company and Sovico Group with team management responsibilities",
    fullDescription: "Developed comprehensive products for GalaxyOne and Sovico Group. Built APIs using .NET with Abp framework and implemented client applications using Angular/ReactJS with refine.dev framework. Successfully managed a team of 7 members while delivering high-quality software solutions for enterprise clients.",
    technologies: [".NET", "Abp Framework", "Angular", "ReactJS", "refine.dev", "API Development"],
    tags: ["Team Management", "Enterprise", "Full-stack"],
    highlights: [
      "Managed team of 7 developers",
      "Delivered products for Sovico Group",
      "Implemented modern frontend frameworks"
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFldb8ICqimYA/company-logo_200_200/company-logo_200_200/0/1712200152121/galaxyone_logo?e=1759363200&v=beta&t=GBCiJo2F-Vt1Xte7UxXjyxnEer-7bI26war8tVDh5Zs"
  },
  {
    id: 3,
    company: "KMS Technology",
    slug: "kms-technology",
    position: "Senior Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    startYear: "Jun 2017",
    endYear: "Apr 2022",
    shortDescription: "Contributed to various outsource projects, developing web applications for US clients",
    fullDescription: "Contributed to diverse outsource projects developing web applications for US clients. Analyzed, designed, and implemented new change requests while investigating root causes of complex issues. Built internal tools for team efficiency and provided comprehensive training for new members. Utilized SSIS, SSRS, and Crystal Reports to create custom reporting solutions.",
    technologies: ["C#", "TypeScript", "SQL", "SSIS", "SSRS", "Crystal Reports", ".NET"],
    tags: ["Outsourcing", "US Clients", "Training", "Reporting"],
    highlights: [
      "Delivered projects for US clients",
      "Built internal team tools",
      "Provided training for new members",
      "Created custom reporting solutions"
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFVx7L2Y-Fz2w/company-logo_200_200/company-logo_200_200/0/1630588427440/kms_technology_logo?e=1759363200&v=beta&t=D9yBj_EIsaK8ILfc1J4C1tO2hux6oE9hR1kNi2NsJHI"
  },
  {
    id: 4,
    company: "KOOTORO Vietnam Corporation",
    slug: "kootoro-vietnam",
    position: "Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    startYear: "May 2015",
    endYear: "Jun 2017",
    shortDescription: "Built payment gateway and admin dashboard for company's products",
    fullDescription: "Built a comprehensive payment gateway for the company's products and developed the Admin Dashboard to manage the system. Analyzed, designed, and implemented the complete backend system. Supported the team leader in training newcomers and collaborated with the sales department to ensure smooth operations.",
    technologies: ["C#", "SQL", "ASP.NET MVC", "API", "WCF", "Bootstrap", "Entity Framework"],
    tags: ["Payment Gateway", "Backend", "Training Support"],
    highlights: [
      "Built payment gateway system",
      "Developed complete admin dashboard",
      "Supported team training initiatives"
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGgZE3Zi4FV5w/company-logo_200_200/company-logo_200_200/0/1630671800625/kootoro_vietnam_logo?e=1759363200&v=beta&t=5POWvu7RO_OT1trW9OHcFuuaBP-RR0JhE7xva2eiIjk"
  },
  {
    id: 5,
    company: "SOFTTEL CO.LTD",
    slug: "softtel",
    position: "Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    startYear: "Apr 2014",
    endYear: "May 2015",
    shortDescription: "Developed APIs and web applications for company products and outsourcing projects",
    fullDescription: "Developed APIs and web applications for the company's products while working on various outsourcing projects including web and Android applications. Gained experience across multiple platforms and technologies, contributing to both internal products and client projects.",
    technologies: ["C#", "Java", "ASP.NET MVC", "API", "Android Development"],
    tags: ["API Development", "Mobile", "Outsourcing"],
    highlights: [
      "Developed web and Android applications",
      "Built APIs for company products", 
      "Worked on diverse outsourcing projects"
    ],
    "logo": ""
    // logo: "https://via.placeholder.com/80x80/ef4444/ffffff?text=S"
  }
];
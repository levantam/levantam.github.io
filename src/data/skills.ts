export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TechStackData {
  allSkills: string[];
  categories: SkillCategory[];
}

export const skillsData: TechStackData = {
  allSkills: [
    '.NET', 'Azure', 'AWS', 'GCP', 'React.js', 'Angular', 'Next.js',
    'MS SQL', 'MySQL', 'Microservices', 'Serverless', 'Cloud Architecture',
  ],
  categories: [
    {
      title: "Backend & Cloud",
      skills: [".NET", "C#", "Golang", "ABP Framework", "MS SQL", "Azure", "AWS", "GCP"]
    },
    {
      title: "Frontend & UI", 
      skills: ["React.js", "Angular", "Next.js", "TypeScript"]
    }
  ]
};

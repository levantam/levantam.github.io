export interface ProfileData {
  name: string;
  title: string;
  description: string;
  avatar: {
    url: string;
    alt: string;
  };
  socialLinks: {
    linkedin: string;
  };
  mainSkills: string[];
}

export const profileData: ProfileData = {
  name: "Tam Le",
  title: "Senior Software Engineer",
  description: "I'm a Senior Software Engineer specializing in backend development with .NET and cloud platforms (Azure, AWS, GCP). Also experienced in frontend development using ReactJS for full-stack solutions.",
  avatar: {
    url: "https://media.licdn.com/dms/image/v2/D5603AQHXUWs6ic3vgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713155618225?e=1757548800&v=beta&t=4bl0CFbhiEuPWZek59jsJy6uKiQHPuWo6bFWQqQ3gK4",
    alt: "Tam Le - Senior Software Engineer"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lvtam/"
  },
  mainSkills: [
    ".NET",
    "Azure / GCP / ASW", 
    "React.js",
    "System Architecture",
    "Team Leadership"
  ]
};

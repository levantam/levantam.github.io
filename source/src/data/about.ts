export interface AboutData {
  title: string;
  paragraphs: string[];
  ctaButton: {
    label: string;
    url: string;
  };
}

export const aboutData: AboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a Senior Software Engineer with extensive experience in backend development specializing in .NET technologies and cloud services including Azure, AWS, and GCP. Skilled in designing and implementing scalable, high-performance solutions in cloud environments. In addition to backend expertise, proficient in frontend development using ReactJS, enabling full-stack capabilities to deliver comprehensive software solutions.",
    "My core focus is designing and implementing backend systems, APIs, and database architectures that power modern applications. I excel at optimizing database performance, implementing microservices patterns, and deploying scalable cloud infrastructure.",
    "I believe in building software that not only works but scales gracefully and stands the test of time. Let's create something extraordinary together!"
  ],
  ctaButton: {
    label: "Get In Touch",
    url: "https://www.linkedin.com/in/lvtam/"
  }
};

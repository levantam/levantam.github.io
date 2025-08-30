import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { workExperience, WorkExperienceType } from '../data/workExperience';

// Utility function to calculate total work experience
const calculateTotalExperience = (experiences: WorkExperienceType[]) => {
  let totalMonths = 0;

  experiences.forEach((exp) => {
    // Parse start date
    const startDate = parseWorkDate(exp.startYear);
    // Parse end date (use current date if "Present")
    const endDate = exp.endYear === "Present" ? new Date() : parseWorkDate(exp.endYear);

    if (startDate && endDate) {
      // Calculate difference in months
      const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                        (endDate.getMonth() - startDate.getMonth());
      totalMonths += monthsDiff;
    }
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months, totalMonths };
};

// Helper function to parse work date strings like "Jun 2024", "Apr 2022"
const parseWorkDate = (dateString: string): Date | null => {
  const monthMap: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  const parts = dateString.trim().split(' ');
  if (parts.length !== 2) return null;

  const [month, year] = parts;
  const monthIndex = monthMap[month];
  const yearNum = parseInt(year);

  if (monthIndex === undefined || isNaN(yearNum)) return null;

  return new Date(yearNum, monthIndex, 1);
};

interface WorkExperienceProps {
  experience: WorkExperienceType;
  index: number;
  isHighlighted: boolean;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experience, index, isHighlighted }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isCurrentJob = experience.endYear === "Present";

  // Calculate duration for this specific job
  const calculateJobDuration = (startYear: string, endYear: string) => {
    const startDate = parseWorkDate(startYear);
    const endDate = endYear === "Present" ? new Date() : parseWorkDate(endYear);

    if (!startDate || !endDate) return { years: 0, months: 0 };

    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                      (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    return { years, months };
  };

  const jobDuration = calculateJobDuration(experience.startYear, experience.endYear);

  // Format duration string
  const formatDuration = (years: number, months: number) => {
    if (years === 0 && months === 0) return "Less than 1 month";
    if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
    if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  };

  return (
    <div 
      id={experience.slug}
      style={{ animationDelay: `${index * 0.2}s` }}
      className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
        isCurrentJob
          ? 'bg-gradient-to-br ring-4 shadow-2xl border-primary-500 ring-primary-500/20 from-primary-50/50 to-white/80'
          : isHighlighted 
            ? 'ring-4 shadow-2xl border-neutral-900 ring-neutral-900/20' 
            : 'border-neutral-200/50'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-1 items-start space-x-4">
          {/* Company Logo */}
          {
            experience.logo && (
              <div className="flex-shrink-0">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="object-cover w-16 h-16 rounded-full border-2 shadow-md border-neutral-200"
                />
              </div>
            )
          }
          
          {/* Company Info */}
          <div className="flex-1 min-w-0">
            <h3 className="mb-2 text-2xl font-black transition-colors text-neutral-900 group-hover:text-neutral-700">
              {experience.position}
            </h3>
            <p className="mb-1 text-xl font-semibold text-neutral-600">{experience.company}</p>
            <p className="text-sm text-neutral-500">{experience.location}</p>
          </div>
        </div>
        <div className="mt-3 md:mt-0 flex flex-col items-end space-y-2">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
            isCurrentJob
              ? 'text-white ring-2 bg-primary-600 ring-primary-200'
              : 'text-white bg-gray-400'
          }`}>
            {experience.startYear} - {experience.endYear}
            {isCurrentJob && (
              <span className="px-2 py-1 ml-2 text-xs font-bold rounded-full bg-white/20">
                CURRENT
              </span>
            )}
          </span>
          <div className="flex items-center px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 border border-neutral-200">
            <svg className="w-3 h-3 mr-1 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-neutral-600">
              {formatDuration(jobDuration.years, jobDuration.months)}
            </span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-6">
        {experience.tags.map((tag, tagIndex) => (
          <span
            key={tag}
            style={{ animationDelay: `${tagIndex * 0.1}s` }}
            className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-900 hover:text-white animate-fade-in-delay"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-lg leading-relaxed text-neutral-700">
          {showFullDescription ? experience.fullDescription : experience.shortDescription}
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="inline-flex items-center mt-4 text-sm font-semibold transition-all duration-300 group text-neutral-600 hover:text-neutral-900"
        >
          {showFullDescription ? 'Show Less' : 'Show Full Description'}
          <svg 
            className={`ml-2 w-4 h-4 transition-transform duration-300 ${showFullDescription ? 'rotate-180' : ''} group-hover:translate-x-1`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Highlights */}
      {showFullDescription && experience.highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-900">Key Achievements:</h4>
          <ul className="space-y-1 list-disc list-inside">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-700">{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div>
        <h4 className="mb-4 text-sm font-bold text-neutral-900">Technologies & Tools:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={tech}
              style={{ animationDelay: `${techIndex * 0.05}s` }}
              className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 bg-neutral-50 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:scale-105 animate-fade-in-delay border-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const location = useLocation();
  const [highlightedCompany, setHighlightedCompany] = useState<string | null>(null);
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  // Calculate total work experience
  const totalExperience = calculateTotalExperience(workExperience);
  
  // Format the experience string
  const formatExperience = (years: number, months: number) => {
    if (years === 0 && months === 0) return "0 months";
    if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
    if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
  };

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (location.hash) {
      const targetSlug = location.hash.substring(1); // Remove the #
      setHighlightedCompany(targetSlug);
      setActiveCompany(targetSlug);
      
      // Delay scroll to ensure the page is rendered
      setTimeout(() => {
        const element = document.getElementById(targetSlug);
        if (element) {
          const elementTop = element.offsetTop - 100;
          
          try {
            window.scrollTo({
              top: elementTop,
              behavior: 'smooth'
            });
          } catch (error) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }
      }, 100);

      // Remove highlight after 3 seconds
      setTimeout(() => {
        setHighlightedCompany(null);
      }, 3000);
    }
  }, [location.hash]);

  // Scroll listener to update active company
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const exp of workExperience) {
        const element = document.getElementById(exp.slug);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveCompany(exp.slug);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to specific work experience
  const scrollToExperience = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      setActiveCompany(slug);
      setHighlightedCompany(slug);
      
      // Use both scrollIntoView and manual scroll for better compatibility
      const elementTop = element.offsetTop - 100; // Add some offset for better positioning
      
      // Try modern scrollTo first
      try {
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for older browsers
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
      
      // Remove highlight after 2 seconds
      setTimeout(() => {
        setHighlightedCompany(null);
      }, 2000);
    }
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="mb-6 text-5xl font-black leading-tight md:text-6xl text-neutral-900">
          Work Experience
        </h1>
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full border border-primary-200">
            <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg font-semibold text-primary-800">
              Total Experience: {formatExperience(totalExperience.years, totalExperience.months)}
            </span>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600">
            Journey through my professional career and the technologies that have shaped my expertise.
          </p>
        </div>
      </div>

      {/* Work Experience Navigation */}
      <div className="flex justify-center mb-12 animate-fade-in-up">
        <div className="flex items-center space-x-6">
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="relative group">
              <button
                onClick={() => scrollToExperience(exp.slug)}
                className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                  activeCompany === exp.slug
                    ? 'border-primary-600 bg-primary-600 shadow-lg'
                    : exp.endYear === 'Present'
                      ? 'border-green-500 bg-green-500 shadow-md'
                      : 'border-neutral-300 bg-white hover:border-neutral-500'
                }`}
              >
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-cover w-full h-full rounded-full"
                  />
                ) : (
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-neutral-200">
                    <span className="text-xs font-bold text-neutral-600">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                )}
                
                {/* Current job indicator */}
                {exp.endYear === 'Present' && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                )}
              </button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 z-10 px-3 py-2 mb-2 text-sm text-white whitespace-nowrap rounded-lg opacity-0 transition-opacity duration-200 transform -translate-x-1/2 pointer-events-none bg-neutral-900 group-hover:opacity-100">
                <div className="font-semibold">{exp.company}</div>
                <div className="text-xs text-neutral-300">{exp.startYear} - {exp.endYear}</div>
                <div className="absolute top-full left-1/2 border-4 border-transparent transform -translate-x-1/2 border-t-neutral-900"></div>
              </div>
              
              {/* Connection line (except for last item) */}
              {index < workExperience.length - 1 && (
                <div className="absolute top-1/2 left-full w-6 h-0.5 bg-neutral-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {workExperience.map((experience, index) => (
          <WorkExperience 
            key={experience.id} 
            experience={experience} 
            index={index}
            isHighlighted={highlightedCompany === experience.slug}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="p-8 text-center rounded-lg bg-primary-50">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Interested in Working Together?</h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-700">
          I'm always open to discussing new opportunities and interesting projects. 
          Let's connect and see how we can create something amazing together.
        </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
                      <a
              href="https://www.linkedin.com/in/lvtam/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-medium text-white rounded-lg transition-colors bg-primary-600 hover:bg-primary-700"
            >
              Get In Touch
            </a>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-medium rounded-lg border transition-colors border-primary-600 text-primary-600 hover:bg-primary-50"
          >
            Download Resume
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
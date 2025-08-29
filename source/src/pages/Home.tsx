import React from 'react';
import { profileData } from '../data/profile';
import { skillsData } from '../data/skills';
import { aboutData } from '../data/about';

const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-12 pb-20 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Avatar */}
          <div className="relative animate-float">
            <div className="overflow-hidden w-36 h-36 rounded-full ring-4 ring-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-110">
              <img
                src={profileData.avatar.url}
                alt={profileData.avatar.alt}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute -right-2 -bottom-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white animate-bounce-subtle"></div>
          </div>

          {/* Introduction */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl font-black leading-none md:text-6xl lg:text-7xl text-neutral-900 animate-fade-in-up">
              Hi, I'm {profileData.name}
            </h1>
            <h1 className="mt-6 text-2xl font-light leading-tight md:text-3xl lg:text-4xl text-neutral-400 animate-fade-in-up">
              {profileData.title}
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl text-neutral-600 animate-fade-in-delay">
              {profileData.description}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mt-8 animate-fade-in-delay">
              {profileData.mainSkills.map((skill, index) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 text-sm font-medium bg-white rounded-full border shadow-sm text-neutral-700 border-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-8 sm:flex-row animate-slide-in-right">
            <a
              href="/work"
              className="flex justify-center items-center px-8 py-4 font-medium text-white rounded-full shadow-lg transition-all duration-300 group bg-primary-600 hover:bg-primary-700 hover:shadow-xl hover:scale-105"
            >
              View My Work
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-medium rounded-full border-2 transition-all duration-300 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 hover:scale-105"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </section>





      {/* Skills Overview */}
      <section className="p-12 rounded-3xl border shadow-lg backdrop-blur-sm bg-white/80 border-neutral-200/50 animate-fade-in">
        <h2 className="mb-12 text-4xl font-black text-center text-neutral-900">Technical Stack</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {skillsData.allSkills.map((skill, index) => (
            <div
              key={skill}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="p-4 font-medium text-center rounded-2xl transition-all duration-300 cursor-pointer group bg-neutral-50 text-neutral-700 hover:bg-primary-600 hover:text-white hover:scale-105 hover:shadow-lg animate-fade-in-delay"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-4xl">
        <div className="p-12 text-white bg-gradient-to-br rounded-3xl shadow-2xl from-primary-600 to-primary-700 animate-scale-in">
          <h2 className="mb-8 text-4xl font-black text-white">{aboutData.title}</h2>
          <div className="space-y-6 max-w-none prose prose-lg prose-invert">
            <p className="text-xl leading-relaxed text-primary-50">
              {aboutData.paragraphs[0]}
            </p>
            
            {/* Technology Stack */}
            <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2">
              {skillsData.categories.map((category, index) => (
                <div key={category.title}>
                  <h4 className="mb-4 text-lg font-semibold text-white">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="px-4 py-2 rounded-lg bg-white/10">
                        <span className="text-sm font-medium text-primary-100">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-primary-100">
              {aboutData.paragraphs[1]}
            </p>
            <p className="text-lg leading-relaxed text-primary-100">
              {aboutData.paragraphs[2]}
            </p>
          </div>
          <div className="mt-8">
            <a
              href={aboutData.ctaButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 font-semibold bg-white rounded-full transition-all duration-300 text-primary-700 hover:bg-primary-50 hover:text-primary-800 hover:scale-105 hover:shadow-lg"
            >
              {aboutData.ctaButton.label}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
export interface ToolType {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  type: string;
  icon: string;
  featured: boolean;
}

export const tools: ToolType[] = [
  {
    id: 1,
    name: "React Component Generator",
    description: "A CLI tool to quickly generate React components with TypeScript, tests, and stories",
    category: "Development",
    tags: ["React", "CLI", "TypeScript", "Testing"],
    link: "https://github.com/yourname/react-component-generator",
    type: "Open Source",
    icon: "⚛️",
    featured: true
  },
  {
    id: 2,
    name: "CSS Grid Generator",
    description: "Visual tool for generating CSS Grid layouts with live preview and code export",
    category: "Design",
    tags: ["CSS", "Grid", "Layout", "Tool"],
    link: "https://css-grid-generator.netlify.app",
    type: "Web App",
    icon: "🎨",
    featured: true
  },
  {
    id: 3,
    name: "Color Palette Extractor",
    description: "Extract color palettes from images for use in web design projects",
    category: "Design",
    tags: ["Colors", "Design", "Images", "Palette"],
    link: "https://color-extractor.example.com",
    type: "Web App",
    icon: "🎨",
    featured: false
  },
  {
    id: 4,
    name: "API Response Formatter",
    description: "Chrome extension to format and beautify JSON API responses in the browser",
    category: "Development",
    tags: ["API", "JSON", "Chrome Extension", "Debugging"],
    link: "https://chrome.google.com/webstore/detail/api-formatter",
    type: "Browser Extension",
    icon: "🔧",
    featured: true
  },
  {
    id: 5,
    name: "Responsive Breakpoint Tester",
    description: "Test your websites across different screen sizes and devices in one view",
    category: "Testing",
    tags: ["Responsive", "Testing", "Mobile", "Desktop"],
    link: "https://breakpoint-tester.example.com",
    type: "Web App",
    icon: "📱",
    featured: false
  },
  {
    id: 6,
    name: "SVG Icon Optimizer",
    description: "Optimize and compress SVG icons while maintaining quality and accessibility",
    category: "Optimization",
    tags: ["SVG", "Icons", "Optimization", "Performance"],
    link: "https://svg-optimizer.example.com",
    type: "Web App",
    icon: "⚡",
    featured: false
  },
  {
    id: 7,
    name: "Tailwind Config Generator",
    description: "Generate custom Tailwind CSS configurations with your brand colors and spacing",
    category: "Development",
    tags: ["Tailwind", "CSS", "Configuration", "Customization"],
    link: "https://tailwind-config.example.com",
    type: "Web App",
    icon: "💨",
    featured: true
  },
  {
    id: 8,
    name: "Frontend Checklist",
    description: "Comprehensive checklist for frontend developers to ensure project quality",
    category: "Reference",
    tags: ["Checklist", "Quality", "Best Practices", "Reference"],
    link: "https://frontend-checklist.example.com",
    type: "Reference",
    icon: "✅",
    featured: false
  }
];

export const categories: string[] = [
  "All",
  "Development",
  "Design",
  "Testing",
  "Optimization",
  "Reference"
];
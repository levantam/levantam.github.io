# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Home Page**: Personal introduction with avatar, skills overview, and quick stats
- **Work Experience**: Detailed work history with expandable descriptions, technologies used, and achievements
- **Tools & Resources**: Collection of development tools and utilities with search and filtering
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and hover effects

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
  components/
    Layout.js          # Main layout with navigation and footer
  pages/
    Home.js           # Home page with personal info
    Work.js           # Work experience page
    Tools.js          # Tools and resources page
  data/
    workExperience.js # Work experience data
    tools.js          # Tools and resources data
  App.js              # Main app component with routing
  index.css           # Global styles with Tailwind imports
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Home Page** (`src/pages/Home.js`):
   - Change name, title, and description
   - Update avatar initials
   - Modify skills and stats

2. **Work Experience** (`src/data/workExperience.js`):
   - Add your work experiences
   - Update company names, positions, dates
   - Include technologies and achievements

3. **Tools** (`src/data/tools.js`):
   - Add your tools and projects
   - Update links and descriptions

### Styling

The project uses Tailwind CSS with a custom color palette. You can modify:

- **Colors**: Update `tailwind.config.js` to change the primary color scheme
- **Fonts**: Modify font imports in `src/index.css`
- **Components**: Customize individual components in their respective files

### Navigation

Update navigation items in `src/components/Layout.js` to add or remove pages.

## Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

The built app can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: tam.le@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
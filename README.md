# Carmen Sierra Sancho - Architecture Portfolio

A modern, interactive portfolio website designed as a book with page-turning animations. Built with React, Framer Motion, and modern CSS.

## Features

- 📖 **Book-style Interface**: Navigate through your portfolio like turning pages of a book
- ✨ **Smooth Animations**: Beautiful page transitions using Framer Motion
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⌨️ **Keyboard Navigation**: Use arrow keys, spacebar, Home, and End keys to navigate
- 🎨 **Modern Design**: Clean, professional aesthetic with architectural color palette
- 🌟 **Interactive Elements**: Hover effects, animated loading screen, and smooth transitions

## Structure

- **Cover Page**: Introduction with your name and title
- **About**: Personal information and design philosophy
- **Education**: Academic background and achievements
- **Experience**: Work history and internships
- **Projects**: Featured architectural projects with descriptions
- **Skills**: Technical skills and software proficiency
- **Gallery**: Visual showcase of your work
- **Contact**: Contact information and social links

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5174](http://localhost:5174) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Customization

### Adding Your Content

1. **Personal Information**: Update the content in each page component (`src/components/pages/`)
2. **Images**: Replace placeholder images with your actual photos and project images
3. **Colors**: Modify the color scheme in `src/index.css` by changing the CSS custom properties
4. **Projects**: Add your projects in `ProjectsPage.jsx`
5. **Skills**: Update your skills and software proficiency in `SkillsPage.jsx`

### Adding Images

1. Create an `assets` folder in `src/`
2. Add your images to the assets folder
3. Import and use them in the components:

```jsx
import myPhoto from '../assets/my-photo.jpg';

// Use in component
<img src={myPhoto} alt="Carmen Sierra Sancho" />
```

### Navigation Controls

- **Mouse**: Click the navigation buttons or use the dropdown menu
- **Keyboard**:
  - `→` / `Space`: Next page
  - `←`: Previous page
  - `Home`: Go to first page
  - `End`: Go to last page

## Technologies Used

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Framer Motion**: Animation library for smooth page transitions
- **React Intersection Observer**: For scroll-triggered animations
- **Modern CSS**: Grid, Flexbox, custom properties, and advanced styling

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Drag and drop the `dist` folder or connect your GitHub repo
- **Vercel**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use GitHub Actions to deploy from your repository

## Support

For questions or customization help, feel free to reach out!

---

*Built with ❤️ for architecture students and professionals*

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

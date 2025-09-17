# Carmen Sierra Sancho - Architecture Portfolio

A modern, professional portfolio website with an interactive PDF viewer for your architecture portfolio. Built with React, Framer Motion, and modern CSS featuring architectural gray themes.

## Features

- 📱 **Responsive Design**: Fully responsive layout optimized for all devices
- 📄 **Interactive PDF Viewer**: Navigate through your actual portfolio PDF with realistic page-turning animations
- 👆 **Touch & Swipe Support**: Swipe left/right or drag to navigate through portfolio pages
- ⌨️ **Keyboard Navigation**: Use arrow keys, spacebar, Home, and End keys to navigate
- 🎨 **Architectural Design**: Clean, professional gray color scheme perfect for architecture
- ✨ **Smooth Animations**: Beautiful transitions and micro-interactions
- 📖 **Full-Width PDF Display**: Portfolio PDF takes full advantage of screen real estate
- 🔄 **Loading Animations**: Professional loading screen with animated book icon

## Structure

- **Hero Section**: Full-screen introduction with your name, title, and call-to-action buttons
- **About Section**: Personal information, philosophy, education details, and areas of interest
- **Portfolio Section**: Interactive PDF viewer displaying your actual portfolio with:
  - Full-width PDF display
  - Realistic page-turning animations
  - Swipe/drag navigation
  - Keyboard shortcuts
  - Page thumbnails for quick navigation
  - Zoom controls
- **CV Section**: Download and view your CV PDF
- **Contact Section**: Contact information and social media links

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

### Portfolio Navigation Controls

- **Touch/Mouse**: 
  - Swipe left/right or drag the PDF to navigate pages
  - Click navigation buttons for precise control
  - Click page thumbnails to jump to specific pages
- **Keyboard**:
  - `→` / `Space`: Next page
  - `←`: Previous page
  - `Home`: Go to first page
  - `End`: Go to last page
- **Zoom**: Use zoom controls to adjust PDF size for better viewing

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

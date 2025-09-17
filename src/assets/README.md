# Assets Folder

Place your portfolio images in this folder:

## Suggested Structure

```
assets/
├── photos/
│   ├── profile.jpg          # Your profile photo for About page
│   └── cover-image.jpg      # Main image for cover page
├── projects/
│   ├── project1/
│   │   ├── thumbnail.jpg    # Project thumbnail
│   │   ├── main.jpg        # Main project image
│   │   └── gallery/        # Additional project images
│   └── project2/
│       └── ...
└── icons/
    ├── logo.svg            # Your personal logo
    └── favicon.ico         # Website favicon
```

## Image Guidelines

- **Profile Photo**: 400x400px or larger, square format
- **Project Images**: 800x600px or larger, 4:3 or 16:9 aspect ratio
- **Cover Image**: 600x600px or larger, square format
- **File Format**: JPG for photos, PNG for graphics with transparency, SVG for icons
- **File Size**: Keep images under 1MB for web performance

## Usage in Components

```jsx
// Import images
import profilePhoto from '../assets/photos/profile.jpg';
import project1 from '../assets/projects/project1/thumbnail.jpg';

// Use in JSX
<img src={profilePhoto} alt="Carmen Sierra Sancho" />
<img src={project1} alt="Project 1" />
```
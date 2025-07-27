# 🚀 Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a clean design with dark/light theme support and smooth animations.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Modern UI**: Clean, professional design with subtle animations
- **Interactive Components**: Hover effects and smooth scrolling navigation
- **Project Showcase**: Interactive project cards with images and action buttons
- **Skills Display**: Organized skill categories with visual indicators
- **Contact Integration**: Easy-to-use contact form and social links
- **Music Section**: Personal music interests and recommendations
- **Performance Optimized**: Built with Vite for fast loading and development

## 🛠️ Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS transitions and transforms
- **Code Quality**: ESLint for code linting

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Music.jsx
│       ├── Contact.jsx
│       └── index.js
├── data/
│   ├── skills.js
│   ├── projects.js
│   └── index.js
├── hooks/
│   ├── useScrollSection.js
│   └── index.js
├── assets/
├── styles.css
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/xponent-dmg/myPortfolio.git
   cd myPortfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Personal Information

Update your personal details in the respective component files:

- **Hero Section**: Edit `src/components/sections/Hero.jsx`
- **About Section**: Update `src/components/sections/About.jsx`
- **Contact Info**: Modify `src/components/sections/Contact.jsx`

### Projects

Add or modify your projects in `src/data/projects.js`:

```javascript
{
  title: "Project Name",
  description: "Project description",
  image: "/path/to/project-image.jpg",
  github: "https://github.com/username/repo",
  website: "https://project-demo.com",
  technologies: ["React", "CSS", "JavaScript"]
}
```

### Skills

Update your skills in `src/data/skills.js`:

```javascript
{
  category: "Frontend",
  skills: ["React", "JavaScript", "CSS", "HTML"]
}
```

### Styling

- **Colors**: Modify CSS custom properties in `src/styles.css`
- **Fonts**: Update font imports and families in `src/styles.css`
- **Animations**: Adjust transition timings and effects in component-specific CSS

### Images

Replace placeholder images with your own:

1. Add your images to the `public` directory or `src/assets`
2. Update image paths in:
   - `src/data/projects.js` (project screenshots)
   - `src/components/sections/About.jsx` (background image)
   - Any other components using images

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Portfolio**: [Your Portfolio URL]
- **Email**: [your.email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [@xponent-dmg](https://github.com/xponent-dmg)

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://reactjs.org/)

---

⭐ If you found this portfolio template helpful, please consider giving it a star!

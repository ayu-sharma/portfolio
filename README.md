# 🚀 Ayush Sharma - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing my skills, experience, projects, and photography work. This portfolio features smooth animations, interactive components, and a professional design that highlights my journey as a frontend developer.


## ✨ Features

### 🎯 Core Sections
- **Hero Section**: Animated introduction with typewriter effects and smooth scrolling
- **About**: Skills showcase, certifications, and professional journey
- **Experience**: Detailed work history with achievements and technologies used
- **Projects**: Portfolio of completed and ongoing projects with live demos
- **Photography**: Creative showcase of photography work
- **Contact**: Interactive contact form with modern UI

### 🎨 Design & UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion and AOS for engaging interactions
- **Loading Experience**: Custom spinner with progress indicators
- **Dark/Light Theme**: Theme switching capability
- **Interactive Components**: Flip cards, modals, and hover effects

### 🛠 Technical Features
- **Next.js 14**: Latest React framework with App Router
- **Performance Optimized**: Lighthouse score 95+
- **SEO Friendly**: Meta tags and structured data
- **Accessibility**: WCAG compliant components
- **Modern Stack**: Latest React, TypeScript support

## 🛠 Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Material-UI** - Component library
- **Bootstrap** - Additional styling framework

### Development Tools
- **TypeScript** - Type safety (configured)
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Additional Libraries
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **AOS** - Scroll animations
- **React Type Animation** - Typewriter effects
- **Lottie React** - Animation support

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── Component/         # React components
│   │   │   ├── About/         # About section components
│   │   │   ├── Contact.js     # Contact form
│   │   │   ├── Experience.js  # Experience section
│   │   │   ├── Hersection.js  # Hero section
│   │   │   ├── Navbar.js      # Navigation
│   │   │   ├── Photography.js # Photography showcase
│   │   │   ├── Project.js     # Projects section
│   │   │   └── Footer.js      # Footer component
│   │   ├── constants/         # Data constants
│   │   │   ├── about.js       # About data
│   │   │   ├── projects.js    # Projects data
│   │   │   └── navigation.js  # Navigation data
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout
│   │   └── page.js            # Home page
│   ├── public/                # Static assets
│   │   ├── Images/           # Image assets
│   │   ├── certificates/     # PDF certificates
│   │   └── data/            # Resume and other data
│   ├── lib/                  # Utility functions
│   └── components.json       # Component configuration
├── lib/                  # Utility functions
└── components.json       # Component configuration
```

## 🎯 Key Projects Showcased

### 1. Trekadvisor
- **Description**: Modern tourism web application for Himachal Pradesh destinations
- **Tech Stack**: Next.js, Tailwind CSS, Framer Motion
- **Live Demo**: [https://trekadvisor.vercel.app/](https://trekadvisor.vercel.app/)
- **Status**: Featured Project

### 2. Smart Chat
- **Description**: AI-powered email management tool with smart summaries
- **Tech Stack**: Next.js, React 19, TailwindCSS
- **Live Demo**: [https://smartchat-mocha.vercel.app/](https://smartchat-mocha.vercel.app/)

### 3. Resale Software Site
- **Description**: Marketing website for software license resale platform
- **Tech Stack**: Next.js, Tailwind CSS
- **Live Demo**: [https://softsell-lime-two.vercel.app](https://softsell-lime-two.vercel.app)

### 4. Modern CPA
- **Description**: Cryptocurrency wallet with multi-chain support
- **Tech Stack**: Next.js, Tailwind CSS
- **Live Demo**: [https://moderncpa.vercel.app/](https://moderncpa.vercel.app/)

## 🎨 Customization

### Adding New Projects
1. Edit `app/constants/projects.js`
2. Add project details following the existing structure
3. Place project images in `public/Images/`

### Updating Personal Information
1. Edit `app/constants/about.js` for skills and certifications
2. Update experience data in the same file
3. Modify hero section in `app/Component/Hersection.js`

### Styling Changes
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **AWS Amplify**: Connect repository and deploy
- **DigitalOcean App Platform**: Deploy with container support

## 📱 Performance & Optimization

- **Lighthouse Score**: 95+ across all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Bundle Analysis**: Built-in with Next.js
- **SEO Optimization**: Meta tags and structured data

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [https://github.com/your-username](https://github.com/your-username)
- **Portfolio**: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **React Icons** - For the comprehensive icon library
- **Unsplash** - For beautiful placeholder images

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ using Next.js and Tailwind CSS*

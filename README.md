# 🚀 Sharad Mishra - Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, dark/light mode support, and integration with GitHub/GitLab APIs.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-purple)

## ✨ Features

- 🎨 **Modern UI Design** - Clean, professional design with gradient effects and smooth animations
- 🌙 **Dark/Light Mode** - Automatic theme switching with next-themes
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js 16 and optimized for speed
- 🎭 **Smooth Animations** - Framer Motion powered animations and transitions
- 🔗 **API Integration** - GitHub and GitLab project fetching
- 📧 **Contact Integration** - LinkedIn and email integration
- 🎯 **SEO Optimized** - Next.js built-in SEO features

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** Heroicons & Custom SVGs
- **APIs:** GitHub API, GitLab API

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharadm20/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable components
│   │   ├── Certifications.tsx
│   │   ├── LinkedInIntegration.tsx
│   │   ├── Projects.tsx
│   │   ├── ResumeEditor.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/           # React contexts
│   │   └── ProjectsContext.tsx
│   ├── services/           # API services
│   │   ├── githubService.ts
│   │   ├── gitlabService.ts
│   │   └── linkedinService.ts
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── src/                    # Legacy source (for migration)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Theme Configuration

The app uses `next-themes` for theme management. Default theme is set to dark mode.

```tsx
// app/layout.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {/* Your app content */}
</ThemeProvider>
```

### Color Scheme

Colors are defined using Tailwind CSS custom properties. Main gradients:
- Primary: `from-indigo-600 to-purple-600`
- Secondary: `from-green-500 to-emerald-500`
- Accent: `from-pink-500 to-rose-500`

### Animations

All animations use Framer Motion with consistent timing:
- Duration: `0.6s` for most transitions
- Easing: Custom cubic-bezier curves
- Stagger: `0.1s` delay between elements

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for API configurations:

```env
# GitHub API (no token required for public repos)
GITHUB_USERNAME=your-github-username

# GitLab API (optional)
GITLAB_USERNAME=your-gitlab-username

# LinkedIn Integration (optional)
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

### GitHub Projects

The app automatically fetches and displays your top 3-4 GitHub projects based on:
1. Star count (primary)
2. Recent activity (secondary)
3. Excludes forks and archived repositories

## 📱 Components

### Core Components

- **Hero Section** - Animated introduction with call-to-action buttons
- **Skills** - Interactive skill cards with animated progress bars
- **Projects** - GitHub/GitLab project showcase with live demos
- **Certifications** - Professional credentials display
- **Resume Editor** - Interactive resume builder with LinkedIn sync
- **Contact** - Social links and contact information

### Theme Toggle

Floating theme toggle button in the top-right corner for switching between light and dark modes.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sharad Mishra**
- Email: sharad.m2003@gmail.com
- LinkedIn: [linkedin.com/in/sharad-mishra-1847738b](http://linkedin.com/in/sharad-mishra-1847738b)
- GitHub: [github.com/sharadm20](https://github.com/sharadm20)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.

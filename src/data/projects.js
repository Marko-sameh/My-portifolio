import { projectsSEO } from "@/data/seo";

// Enhanced projects with SEO optimization
export const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Revolutionary web application",
    desc: "Revolutionary web application with cutting-edge features including real-time data synchronization, advanced user authentication, and responsive design patterns.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tag: "Web Application",
    fullDescription: "A comprehensive web application that revolutionizes user interaction through innovative design patterns and seamless functionality. Built with modern technologies to ensure scalability and performance. Features include real-time collaboration, advanced data visualization, and enterprise-grade security.",
    features: [
      "Real-time data synchronization with Socket.io", 
      "Advanced JWT-based authentication system", 
      "Responsive design with mobile-first approach", 
      "RESTful API integration with comprehensive error handling",
      "Performance optimization with lazy loading and code splitting",
      "Comprehensive testing suite with Jest and React Testing Library"
    ],
    liveUrl: "#",
    githubUrl: "#",
    seo: projectsSEO.find(p => p.id === 1)
  },
  {
    id: 2, 
    title: "Project Beta",
    description: "Mobile-first design system",
    desc: "Comprehensive mobile-first design system for modern applications with reusable components, design tokens, and cross-platform compatibility.",
    tech: ["React Native", "TypeScript", "Styled Components", "Storybook"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tag: "Design System",
    fullDescription: "A comprehensive design system built with mobile-first principles, ensuring consistent user experience across all platforms. Features reusable components, design tokens, and accessibility-focused development practices. Includes comprehensive documentation and interactive component playground.",
    features: [
      "Cross-platform compatibility (iOS, Android, Web)", 
      "Comprehensive component library with 50+ components", 
      "Design tokens for consistent theming and spacing", 
      "WCAG 2.1 AA accessibility compliance",
      "Interactive Storybook documentation",
      "TypeScript support for type-safe development"
    ],
    liveUrl: "#",
    githubUrl: "#",
    seo: projectsSEO.find(p => p.id === 2)
  },
  {
    id: 3,
    title: "Project Gamma", 
    description: "AI-powered analytics platform",
    desc: "Intelligent analytics platform leveraging machine learning algorithms for enterprise-scale data processing and actionable business insights.",
    tech: ["Python", "TensorFlow", "AWS", "React", "D3.js"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "AI/ML Platform",
    fullDescription: "An intelligent analytics platform that leverages machine learning algorithms to provide actionable insights from complex datasets. Built for enterprise-scale data processing with real-time analytics, advanced visualization, and cloud-native architecture. Processes millions of data points with sub-second response times.",
    features: [
      "Machine learning models with TensorFlow and scikit-learn", 
      "Real-time analytics processing with Apache Kafka", 
      "Interactive data visualization with D3.js and Chart.js", 
      "Scalable cloud deployment on AWS with auto-scaling",
      "Advanced data pipeline with ETL processes",
      "Enterprise security with role-based access control"
    ],
    liveUrl: "#",
    githubUrl: "#",
    seo: projectsSEO.find(p => p.id === 3)
  }
];
import DemoDesktop from "../components/DemoDesktop";
import StyledEarth from "../components/StyledEarth";

export const navLinks = [
    {
      id: 1,
      name: 'About',
      href: '#about',
    },
    {
      id: 2,
      name: 'Work',
      href: '#work',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
      },

    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
export const techStack = [
{
  id: 1,
  name: "React.js",
},
{
  id: 2,
  name: "Redux.js",
},
{
  id: 3,
  name: "Redux Toolkit",
},
{
  id: 4,
  name: "JavaScript",
},
{
  id: 5,
  name: "ES6",
},
{
  id: 6,
  name: "Node.js",
},
{
  id: 13,
  name: "Webpack"
},
{
  id: 14,
name: "Babel"},
{
  id: 7,
  name: "Material UI",
},
{
  id: 8,
  name: "Tailwind CSS",
},
{
  id: 9,
  name: "Rest APIs",
},
{
  id: 10,
  name: "Firebase"
},
{
  id: 11,
  name: "BootStrap"
},
{
  id: 12,
name: "Payments Gateway"
},
{
  id: 15,
name: "Git"},

]

export const socialLinks = [
  {
    id: "github",
    icon: "/assets/github.svg",
    url: "https://github.com/Vaibhav-giriman-gour",
  },
  {
    id: "linkedin",
    icon: "/assets/linkedin.svg",
    url: "https://www.linkedin.com/in/vaibhav-giriman-gour-frontend-developer/",
  },
  {
    id: "Instagram",
    icon: "/assets/instagram.svg",
    url: "https://www.instagram.com/vaibhav_giriman_gour/",
  },
];
  export const experiences = [
  {
    title: "Associate Software Engineer II",
    company_name: "HighRadius Technologies",
    location: "Hyderabad, India",
    iconBg: "#383E56",
    icon: "/assets/HighradiusLogo.png",
    date: "Augest 2023 - Present",
    points: [
      "Took ownership of complex frontend modules, delivering secure and efficient user data management features in React-based systems.",
      "Built tools to automate routine tasks, significantly reducing manual workload and improving operational efficiency.",
      "Worked on different payment methods like credit card, ACH, Echeck enabling users for multiple options for payments.",
      "Collaborated with stakeholders to identify gaps, define requirements, and translate business needs into scalable features.",
    ],
  },
  {
    title: "Associate Software Engineer I",
    company_name: "HighRadius Technologies",
    location: "Hyderabad, India",
    iconBg: "#383E56",
        icon: "/assets/HighradiusLogo.png",


    date: "July 2022 - July 2023",
    points: [
      "Improved application performance by optimizing Redux usage and reducing unnecessary component re-renders.",
      "Participated in building user-centric dashboards that allowed for better data representation and interaction",
      "Partnered with cross-functional teams to refine UI/UX components and improve overall accessibility.",
      "Streamlined sprint planning & task breakdown, improving development predictability by 20% and ensuring on-time delivery.",
    ],
  },
  {
    title: "Software Trainee",
    company_name: "HighRadius Technologies",
    location: "Remote",
    iconBg: "#383E56",
        icon: "/assets/HighradiusLogo.png",

    date: "July 2021 - June 2022",
    points: [
      "Developed responsive frontend interfaces using React and Redux as part of internal product development",
      "Collaborated in a training environment to learn and apply modern JavaScript practices in real-world scenarios.",
    ],
  },
  
];
  export const myProjects = [
    {
      title: 'LM Finance - Financial Management App',
      desc: 'A comprehensive loan management platform allowing users to securely apply for loans and monitor EMI payments. It provides a user-friendly interface for easy loan application and real-time status updates.',
      subdesc:
        [
          'Developed secure application flow for loan requests.',
          'Added features like lead tracking and agent application forms.',
          'Optimized UI/UX for better user engagement and navigation.',
        ],
      href: 'https://lmfinance.in/',
      texture: '/textures/project/LMFinance.mp4',
      logo: '/assets/LMfinance.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.svg',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
      ],
    },
    {
      title: 'Chrome UX Report App',
      desc: 'A full-stack web application that fetches and displays real-world performance metrics from the Chrome UX (CrUX) API based on user-entered URLs. Built with React, Material-UI, Node.js.',
      subdesc:
        [
          'Developed a responsive and intuitive user interface using React and Material UI, enabling users to easily input URLs and view performance metrics.',
          'Implemented a Node.js backend that handles API requests to the CrUX API, processes the data, and serves it to the frontend.',
          'Configured environment variables and utilized Axios for efficient API communication and data fetching.'  
        ],
      href: 'https://github.com/Vaibhav-giriman-gour/crux-report-app',
      texture: '/textures/project/crux-report-app2.mp4',
      logo: '/assets/cruxApp.svg',
      logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Material-UI',
          path: 'assets/material-ui.svg',
        },
        {
          id: 3,
          name: 'Axios',
          path: '/assets/axios-icon.svg',
        },
        {
          id: 4,
          name: 'Vite',
          path: '/assets/Vite.js.svg',
        },
        {
          id: 5,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
        {
          id: 6,
          name: 'Crux API',
          path: '/assets/cruxAPI.svg',
        }
      ],
    },
    {
      title: 'Knight Music - Music Streaming App',
      desc: 'An ongoing project focused on creating a modern, responsive music streaming web app that mimics the functionality and experience of Spotify, offering users the ability to browse, stream, and organize music through personalized playlists.',
      subdesc:
        [
          'Currently designing a scalable component structure to support future features like search, recommendations, and user profiles.',
          'Implementing Redux for consistent and efficient state control across the app, including track playback, queue management, and user preferences.',
          'Planning to integrate third-party music APIs for dynamic content delivery and enhance the app with features like real-time audio analysis and genre-based filtering.',
        ],
      href: '/',
      texture: '/textures/project/KnightMusic.mp4',
      logo: '/assets/Knight_Music.png',
      logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Redux',
          path: '/assets/redux.svg',
        },
        {
          id: 5,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
      ],
    },
    {
      title: 'Keep IT (Personal note-taking app)',
      desc: 'A secure, lightweight notes application that allows users to create, store, and manage personal notes with real-time sync and responsive accessibility across devices.',
      subdesc:
        [
          'Leveraged Firebase’s Firestore to implement live data synchronization, ensuring instant updates across sessions.',
          'Developed a distraction-free interface using Tailwind CSS, optimized for both mobile and desktop users.',
          'Integrated offline-first strategies to allow note access and updates even without a constant internet connection.'
        ],
      href: '/',
      texture: '/textures/project/KeepIT.mp4',
      logo: '/assets/KeepIT.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Redux',
          path: '/assets/redux.svg',
        },
        {
          id: 4,
          name: 'Firebase',
          path: '/assets/firebase-icon.svg',
        },
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.7 : isMobile ? .8 : isTablet ? .9 : 1,
      deskPosition: isSmall ? [.4,-1.2, -3.4 ] : isMobile ? [0.6, -1.5, -3.6 ] : isTablet ? [0.5,-1.5, -2.4 ] : [.8,-1.8, -2 ] , //[0.8, -3.6, -1.2]
      deskRotation: isSmall ? [0, -Math.PI / 2, 6] : isMobile ? [0, -Math.PI / 2, 6] : isTablet ? [0, -Math.PI / 2, 6] : [0, -Math.PI / 2, 6],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [6, 4, -14] : isMobile ? [8, 5, -10] : isTablet ? [15, 2, -15] : [18, 6, -10],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -6, -10] : isMobile ? [-8, -6, -10] : isTablet ? [-11, -6, -10] : [-18, -6, -10],
      demoDesktopPosition: isSmall ? [0,-0.2, 3] : isMobile ? [0,-0.2, 3] : isTablet ? [0,-0.5, 4] : [0,-1, 3],
      dempDesktopRotation: isSmall ? [.16, 0, 0] : isMobile ? [.16, 0, 0] : isTablet ? [.16, 0, 0] : [.16, 0, 0],
      demoDesktopScale: isSmall ? 12 : isMobile ? 15: isTablet ? 20 : 25,
      styledEarthSacale: isSmall ? 2: isMobile ? 2 : isTablet ? 2.5 : 3
    };
  };

  
  
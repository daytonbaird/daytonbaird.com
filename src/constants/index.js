import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nextjs,
  postgres,
  graphql,
  mongodb,
  java,
  figma,
  docker,
  python,
  altice,
  asincentral,
  cleara,
  quiktrip,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'My Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const competencies = [
  {
    title: 'Full-Stack Web & Mobile Development',
    icon: '🚀',
  },
  {
    title: 'Project Management',
    icon: '📐',
  },
  {
    title: 'Data Engineering',
    icon: '📊',
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
  },
  {
    title: 'Organizational Leadership',
    icon: '🎯',
  },
  {
    title: 'Training and Mentoring',
    icon: '📚',
  },
  {
    title: 'Digital & Video Marketing',
    icon: '🎥',
  },
  {
    title: 'Product Discovery',
    icon: '🔍',
  },
];

const technologies = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Postgres',
    icon: postgres,
  },
  {
    name: 'NextJs',
    icon: nextjs,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Corporate Trainer',
    company_name: 'QuikTrip',
    icon: quiktrip,
    iconBg: '#383E56',
    date: 'July 2016 - March 2021',
    points: [
      `Built React Native mobile app for QuikTrip's training team, written in JavaScript using the React
      Native CLI and SQLite, saving each employee 5 hours per week on average and increasing trainee retention rates by 12%`,
      `Orchestrated and executed comprehensive leadership training for over 400 individuals, crafting both technical and
      non-technical documentation (60+ documents)`,
      `Worked closely with key stakeholders on optimizing design, increasing employee retention averages by 20%`,
      `Awarded the "Best of the Best" award for leadership of the highest-performing QuikTrip team`,
    ],
  },
  {
    title: 'Front End Web Developer',
    company_name: 'Sneaky Deals LLC',
    icon: quiktrip,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      `Served as end-to-end designer and sole developer for a myriad of e-commerce brands, increasing sales 2x-3x through efficient CRO-forward design and development`,
      `Developed and maintained 10+ e-commerce websites, including a custom Shopify theme using Shopify Liquid, JavaScript, and CSS`,
      `Launched 3 e-commerce brands from ideation to launch, including brand identity, product sourcing, and website development`,
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: quiktrip,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: quiktrip,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { competencies, technologies, experiences, projects };

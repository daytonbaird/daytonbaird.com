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
  sneakydeals,
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
    title: 'Software Engineer',
    company_name: 'Altice USA (Juice Media)',
    icon: altice,
    iconBg: '#000000',
    date: 'Feb 2022 - Present',
    points: [
      `Led team of 5 full stack engineers in the development of flagship BI platform using React, Redux, Next.js,
      TypeScript to bring in $12M in additional company revenue and save consumer analysis time by 80%`,
      `Built 2 Python REST APIs using Flask for client data consumption and aggregation atop AWS Redshift and
      PostgreSQL deployed via Docker and AWS Fargate`,
      `Standardized agile project workflow as team size grew 5x through company acquisition, leading sprints and daily
      scrums for end-to-end delivery, speeding time-to-market upwards of 50%`,
      `Architected two major refactors for core services, increasing speed performance by a measured 74%`,
      `Coordinated with data science, data engineering and business intelligence teams to deliver data solutions using
      SQL, Python, TypeScript for powering in-house machine learning models behind $190M+ advertising campaigns`,
      `Overhauled high-scale ETL data ingest solution for 100s of terabytes of ad server and client pixel data built with Python, SQL and TypeScript using AWS CloudFront, Kinesis, S3, Lambda, Redshift, RDS and DBT`,
    ],
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'Cleara Inc',
    icon: cleara,
    iconBg: '#dcd4d4',
    date: 'Aug 2021 - Sep 2022',
    points: [
      `Spearheaded development of flagship mobile app written in TypeScript using React Native, Expo, GraphQL, Apollo, PostgreSQL and the Amazon Selling Partner APIs for analyzing 1000s of retail products per minute`,
      `Illustrated a responsive, mobile-first UI design for the mobile application and web app using Figma`,
      `Served as product owner and subject matter expert, mediating communication and requirements between all
      involved technical teams and non-technical cohorts`,
      `Led product discovery efforts, including user interviews, user testing, and market research for over 40 stakeholders`,
    ],
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'ASIN Central',
    icon: asincentral,
    iconBg: '#17140f',
    date: 'Jan 2021 - Aug 2022',
    points: [
      `Architected and delivered the company's flagship product, an automated interactive bot for use by Amazon sellers, written in JavaScript using Node.js, Express, MongoDB and Docker`,
      `Maintained 13 unique ecommerce product analysis tools for use by by over 300+ daily active Amazon Sellers,
      written in JavaScript using Node, Express, MongoDB, and Docker`,
      `Designed, developed, and deployed 3 web apps using React, Redux, JavaScript, and HTML/CSS`,
      `Led social media marketing efforts and automation processes for the sales funnel`,
    ],
  },
  {
    title: 'Front End Web Developer',
    company_name: 'Sneaky Deals LLC',
    icon: sneakydeals,
    iconBg: '#ffffff',
    date: 'Jan 2020 - Jan 2021',
    points: [
      `Served as end-to-end designer and sole developer for a myriad of e-commerce brands, increasing sales 2x-3x through efficient CRO-forward design and development`,
      `Developed and maintained 10+ e-commerce websites, including a custom Shopify theme using Shopify Liquid, JavaScript, and CSS`,
      `Launched 3 e-commerce brands from ideation to launch, including brand identity, product sourcing, and website development`,
    ],
  },
  {
    title: 'Corporate Trainer',
    company_name: 'QuikTrip',
    icon: quiktrip,
    iconBg: '#cf152d',
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

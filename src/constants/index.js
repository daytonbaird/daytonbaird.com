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
  followup,
  asin,
  hookhoops,
  threejs,
  sneakydeals,
  bolo,
  clearaproj,
  daytonbairdcom,
  polybot,
  queryenhancer,
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
    title: 'Founding Engineer',
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
    name: 'Follow Up',
    description:
      'Created with teachers, trainers, retailers, and salespeople in mind, FollowUp is a simple, easy-to-use CRM that helps you keep track of clients, customers, or students.',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'sqlite',
        color: 'green-text-gradient',
      },
      {
        name: 'objective-c (ios)',
        color: 'pink-text-gradient',
      },
    ],
    image: followup,
    source_code_link: 'https://github.com/daytonbaird/FollowUp',
    other_link:
      'https://apps.apple.com/us/app/follow-up-keep-in-touch/id1519649560',
  },
  {
    name: 'ASIN Central',
    description:
      'Web app and community for Amazon sellers to analyze product data, including sales rank, price, and reviews, and to track product trends over time.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'css/html',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      {
        name: 'hyper',
        color: 'blue-text-gradient',
      },
    ],
    image: asin,
    other_link: 'https://asincentral.io/',
    source_code_link: false,
  },
  {
    name: 'HookHoops',
    description:
      'One of the ecommerce brands for Sneaky Deals LLC I built and managed, Hookhoops is a magnetic-ring skill toy that can be spun, trickshot, and gamed with.',
    tags: [
      {
        name: 'liquid',
        color: 'blue-text-gradient',
      },
      {
        name: 'shopify',
        color: 'green-text-gradient',
      },
      {
        name: 'html/css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
    ],
    image: hookhoops,
    other_link: 'https://hookhoops.com',
    source_code_link: false,
  },
  {
    name: 'Cleara',
    description:
      'A comprehensive product sourcing app for Amazon sellers that allows users to analyze product data, including sales rank, price, and reviews, and to track product trends over time.',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'figma',
        color: 'green-text-gradient',
      },
      {
        name: 'graphql',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: clearaproj,
    other_link:
      'https://www.figma.com/proto/9v5zBzzK36FZLsAZIlckhL/Cleara?node-id=4-107&starting-point-node-id=4%3A107&show-proto-sidebar=1',
    source_code_link: false,
  },
  {
    name: 'DaytonBaird.com',
    description:
      'This website! I built this site using React, TailwindCSS, Framer Motion, Three.js, javascript, vite, postcss and some other technologies. I also generated custom graphics using Figma.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'three.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
    ],
    image: daytonbairdcom,
    other_link: 'https://github.com/daytonbaird/daytonbaird.com',
    source_code_link: 'https://github.com/daytonbaird/daytonbaird.com',
  },
  {
    name: 'BOLO Bot',
    description:
      'A product sales analysis API and Discord bot for Amazon sellers built for the ASIN Central community by over 300+ daily active Amazon sellers using Keepa and the Amazon Selling Partner APIs.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'docker',
        color: 'blue-text-gradient',
      },
    ],
    image: bolo,
    other_link: false,
    source_code_link: false,
  },
  {
    name: 'Poly Bot',
    description:
      'General community bot built to manage a partnered Discord server for an educational content creator (JavaScript, MongoDB, Discord.js)',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'discord.js',
        color: 'pink-text-gradient',
      },
    ],
    image: polybot,
    other_link: 'https://www.youtube.com/@PolyMatter',
    source_code_link: 'https://github.com/daytonbaird/polybot',
  },
  {
    name: 'Query Enhancer (Sunhacks)',
    description:
      '2018 Hackathon project. A command line search engine that allows the user to search for what was said inside a YouTube video via autogenerated captions. Built with Python.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'google apis',
        color: 'pink-text-gradient',
      },
    ],
    image: queryenhancer,
    other_link: 'https://github.com/daytonbaird/query-enhancer',
    source_code_link: 'https://github.com/daytonbaird/query-enhancer',
  },
];

export { competencies, technologies, experiences, projects };

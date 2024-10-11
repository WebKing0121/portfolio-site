import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/testimonial.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Paul Thompson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Full Stack Engineer</strong>
        with <strong className="text-stone-100">12 years</strong> of experience.
        My strongest skills are <strong className="text-stone-100">React, React Native </strong>
        and I specialize in driving innovation across the entire software development
        lifecycle—from rapid prototyping to architectural design. With a keen understanding
        of business challenges, I deliver tailored software solutions that align with
        organizational goals.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-left w-full">
        <strong className="text-stone-100">WHY CHOOSE ME?</strong>
        <br />
        ✅Dedicated to delivering top-quality results with ongoing support
        throughout the project's lifecycle.<br />
        ✅I take time to thoroughly understand requirements to provide innovative,
        business-focused solutions.<br />
        ✅Proven track record of exceeding expectations and achieving 100% satisfaction
        from stakeholders.<br />
        ✅Committed to building strong, long-term relationships with cross-functional
        teams.<br />
        ✅Agile and adaptable, ensuring timely delivery without compromising quality.<br />
        ✅Available for continuous collaboration and open communication to address any
        challenges swiftly.<br />
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a software engineer with 12 years of experience covering every stage
  of the software development lifecycle, including rapid prototyping and architecture guides.
  He understands business problems, plans, implements software solutions and contributes
  to organizations as a candid communicator and open-minded team player.`,
  aboutItems: [
    { label: 'Location', text: 'Atlanta, GA', Icon: MapIcon },
    { label: 'Interests', text: 'Swimming, Tennis, Bicycle', Icon: SparklesIcon },
    { label: 'Study', text: 'Stanford Brown College', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        level: 10,
      },
      {
        name: 'TypeScript',
        level: 10,
      },
      {
        name: 'HTML',
        level: 10,
      },
      {
        name: 'CSS',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2021 - Sep 2024',
    location: 'NodeAsset',
    title: 'Senior Full Stack Engineer - React, React Native, Node, Python',
    content: (
      <div>
        <p><strong>Technologies</strong>: React, Redux, Node, Python, AWS, GraphQL, AWS Amplify, AWS Lambda, DynamoDB, Mapbox, Highchart, React Native, Datadog, Jest, Enzyme, AWS serverless functions, Material-UI, Tailwind CSS, Heroku, Storybook, Figma</p>
        <br />
        <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
          <li>Visualized 4000+ companies' financial data on a map and utilized a chart library to present corresponding statistical data, enhancing data visualization capabilities and improving user understanding.</li>
          <li>Collaborated closely with the back-end team to integrate user-facing elements with server-side logic, resulting in a 20% reduction in server response time.</li>
          <li>Led a dynamic frontend team of 4 people, fostering the growth of junior members through mentorship, ensuring the team's adherence to cutting-edge best practices, and driving the development of highly robust and scalable applications.</li>
          <li>Enhanced the UI responsiveness of a React Native mobile app, ensuring compatibility across various device sizes and web browsers, resulting in a significant 20% increase in the number of customers utilizing the app.</li>
          <li>Engaged a state management tool to enhance performance, ensuring user-friendly responsiveness and facilitating global state updates for 50+ pages.</li>
          <li>Integrated AI for predictive analytics in the future to provide insights into patient health trends and outcomes, and designed a UI that leverages machine learning models trained on historical data.</li>
          <li>Integrated ChatGPT-powered AI features into a customer support chatbot, enabling automated and accurate responses to user queries, reducing response time by 50%.</li>
          <li>Developed and customized CMS solutions for content-driven websites, allowing non-technical users to easily manage and update web content, improving efficiency by 30%.</li>
          <li>Implemented unit and integration tests using Jest and React Testing Library, ensuring 95% code coverage and significantly reducing bugs in production.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Nov 2019 - Nov 2021',
    location: 'Meta',
    title: 'Senior React Engineer',
    content: (
      <div>
        <p><strong>Technologies</strong>: React, Redux, MUI, GraphQL, TypeScript</p>
        <br />
        <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
          <li>Applied Redux for state management, achieving a 25% reduction in code complexity and a 15% increase in team productivity.</li>
          <li>Implemented the UI for 5 projects using React and MUI, used GraphQL for creating endpoints to communicate with a backend.</li>
          <li>Wrote and executed comprehensive unit tests and integration tests using Jest and Enzyme, achieving test coverage of over 90%.</li>
          <li>Developed and maintained a custom component library used across 3+ sub-projects.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Oct 2016 - Oct 2019',
    location: 'Asure Software',
    title: 'Senior Full Stack Engineer',
    content: (
      <div>
        <p><strong>Technologies</strong>: JavaScript, TypeScript, React, Node, React Native, Redux, MongoDB, Apollo & GraphQL, React-Bootstrap, Amchart, AWS Lambda, Cypress, AWS Pinpoint, Material-UI</p>
        <br />
        <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
          <li>Established an e-commerce platform using the MERN stack, supporting 10K+ vendor accounts and product management.</li>
          <li>Spearheaded the implementation of REST APIs to connect the application to backend services, optimizing REST API calls to reduce load times by 15%, thereby increasing page speed.</li>
          <li>Coordinated with the UI/UX design team to 100+ implement responsive and user-friendly front-end interfaces, optimizing the user experience and improving overall usability.</li>
          <li>Created a reusable component library, reducing development time for new projects by 40%.</li>
          <li>Built a scalable and performant web applications using Apollo and GraphQL, implementing a robust API layer that efficiently fetched and updated data, resulting in improved user experience and reduced server load.</li>
          <li>Administered automated testing platforms and unit tests, achieving a 30% reduction in bug-related delays and a 20% increase in overall code quality.</li>
          <li>Executed a streamlined CI/CD pipeline using AWS services, including CodePipeline and CodeDeploy, to automate the build, testing, and deployment processes.</li>
          <li>I managed Google Analytics and integrated it with Firebase for 3+ projects to track user interactions, monitor website traffic, and gain insights into user behavior and engagement.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'May 2014 - Sep 2016',
    location: 'Meta Materials',
    title: 'Full Stack Developer',
    content: (
      <div>
        <p><strong>Technologies</strong>: React, Node, JavaScript, Vanilla JavaScript, AngularJS, HTML, CSS, Bootstrap</p>
        <br />
        <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
          <li>Worked alongside with backend developers to establish 100+ consistent data models and schemas for the application.</li>
          <li>Deployed accurate and visually compliant HTML and CSS templates based on provided designs.</li>
          <li>Formulated JavaScript functionality to enhance user interactivity and improve the overall user experience.</li>
          <li>Conducted comprehensive testing and debugging to identify and resolve issues, ensuring a stable application.</li>
          <li>Worked with the design team to incorporate animations, transitions, and interactive elements using CSS and JavaScript.</li>
          <li>Assisted in optimizing website performance through techniques like lazy loading and image optimization.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Jun 2012 - Apr 2014',
    location: 'Patsnap',
    title: 'Frontend Developer',
    content: (
      <div>
        <p><strong>Technologies</strong>: HTML, CSS, SCSS, PHP, JavaScript, MySQL, WordPress, CI</p>
        <br />
        <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
          <li>Worked on 5+ projects for clients, ranging from small businesses to startups.</li>
          <li>Partnered directly with clients to gather requirements, provide updates, and deliver high-quality solutions.</li>
          <li>Employed responsive designs and optimized websites.</li>
          <li>Maintained 3+ custom WordPress applications.</li>
          <li>Conducted third-party integrations and custom functionality to meet specific client needs</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: heroImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];

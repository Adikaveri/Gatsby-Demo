import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aditya Kaveri', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aditya Kaveri',
  subtitle: 'An Emerging Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Water Shielder',
    info: 'This device which aims on water pollution caused by industries. The basic idea of the system is to monitor & alert the authorities regarding the characteristic forms of effluents that are deposited in the water bodies.',
    info2: 'This system aims for a controlled outflow from sewages that are mixed in water bodies and identification is to be done with geo-informatics technology to have administrate control for certain industries who all are responsible for it. With the facility of IoT in this system to analyse the data over the time.'
    
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Development of Hospital Service',
    info: 'The project aims to make healthcare accessible to the people easily. The solution is to develop a platform wherein hospitals and medical practitioners can list their services and the common public can view and book those services and make it accessible to the people at an affordable price.',
    info2: 'I worked on the front-end UI with React native and JavaScript for the web application for hospitals to monitor requests, followed by designing a data base schema on Firebase Cloud Firestore.',
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Amazon Alexa',
    info: 'In this certified course, I build an Alexa Skill. I created a game "Stone-Paper-Scissor" ',
    info2: 'I learned deployment, building and testing of Alexa skill. My skill is published in Amazon Alexa Console.'
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
 
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

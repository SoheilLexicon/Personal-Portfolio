// Edit links here when a project is published. Leave demoUrl blank until it is live.
export const profile = {
  name: 'Soheil Mohajer',
  email: 'soheil.mohajer@lexut.se',
  location: 'Lund, Sweden',
  github: 'https://github.com/SoheilLexicon',
  linkedin: 'https://www.linkedin.com/in/soheil-mohajer-80ab6a149/',
  credly: 'https://www.credly.com/users/soheil-mohajer',
};

export const projects = [
  {
    id: 'cv',
    number: '01',
    category: 'INDIVIDUAL PROJECT · HTML & CSS',
    name: 'Modern CV Website',
    description: 'An accessible, responsive online CV with professional experience, technical skills and a downloadable ATS-friendly PDF.',
    stack: ['HTML5', 'CSS Grid', 'Responsive Design'],
    repoUrl: 'https://github.com/SoheilLexicon/Lexicon-CV',
    demoUrl: '', // Add a verified GitHub Pages URL after testing the live website.
    status: 'Repository available',
    theme: 'cv',
  },
  {
    id: 'support',
    number: '02',
    category: 'INDIVIDUAL PROJECT · REACT & VITE',
    name: 'Skåne IT Support',
    description: 'A Swedish-language website with a local Skåne identity, service cards, responsive image gallery and a contact form demo.',
    stack: ['React', 'JavaScript', 'Vite', 'CSS Grid'],
    repoUrl: '', // Add only after the repository has been published intentionally.
    demoUrl: '',
    status: 'Local demo ready',
    theme: 'skane',
  },
  {
    id: 'campus',
    number: '03',
    category: 'GROUP PROJECT · FRONTEND CONCEPT',
    name: 'CampusEats',
    description: 'A collaborative student food-delivery concept with restaurant discovery, menu navigation and an evolving ordering interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Wireframes'],
    repoUrl: '',
    demoUrl: '',
    status: 'Group project / prototype',
    theme: 'campus',
  },
];

export const skills = [
  { label: 'Frontend development', values: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive design'] },
  { label: 'Tools & workflow', values: ['Vite', 'Git & GitHub', 'VS Code', 'Debugging'] },
  { label: 'IT & systems', values: ['Windows', 'Microsoft 365', 'Networking fundamentals', 'Troubleshooting'] },
  { label: 'Currently learning', values: ['C#', '.NET', 'Backend APIs', 'Databases'] },
];

export const education = [
  { name: 'Full Stack C# .NET Web Development', school: 'Lexicon', meta: '2026 – Present' },
  { name: 'IT Support & Networking Training', school: 'Lexicon', meta: '2026' },
  { name: 'MSc International Management', school: 'University of Liverpool', meta: '2013 – 2018' },
  { name: 'Postgraduate Certificate in Intellectual Property Law', school: 'Bournemouth University', meta: '2020 – 2022' },
];

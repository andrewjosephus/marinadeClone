export const listOfKeywords = [
  'javascript',
  'css',
  'outsystems',
  'pilot',
  'learning',
];

export interface ProjectData {
  link: string;
  title: string;
  detail: string;
}

export interface DataHolder {
  [key: string]: ProjectData[];
}

export const projectData: DataHolder = {
  '2021': [
    {
      link: '#',
      title: 'Outsystems Traineeship',
      detail:
        'Took part in a traineeship using the Outsystems platform to create enterprise system for Advanced Micro Foundaries',
    },
    {
      link: 'https://www.outsystems.com/certifications/',
      title: 'Outsystems Certification',
      detail: 'Completed an Outsystems Traditonal Web Certification exam',
    },
    {
      link: '#',
      title: 'Outsystems Bootcamp',
      detail: 'Completed an Outsystems Traditonal Web Certification bootcamp',
    },
  ],
  '2020': [
    {
      link: 'https://www.sheenrealty.com',
      title: 'Created first freelance website',
      detail: 'Got my first freelance web developer job to create a website',
    },
    {
      link: '#',
      title: 'Started learning Javascript',
      detail:
        'Went back to learning javascript after years of not reading any code',
    },
    {
      link: '#',
      title: 'Started learning HTML and CSS',
      detail: 'Started learning HTML and CSS to begin my developer journey',
    },
    {
      link: '#',
      title: 'Ended career with airforce',
      detail: "Ended my contract with the force as I couldn't fly properly :(",
    },
  ],
  '2019': [
    {
      link: 'https://i.imgur.com/c02AeMD.jpg',
      title: 'Flying planes',
      detail: 'Was a pilot once. There will be another time',
    },
  ],
};

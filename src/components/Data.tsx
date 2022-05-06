export const listOfKeywords = [
  'javascript',
  'css',
  'outsystems',
  'pilot',
  'learning',
];

interface ProjectData {
  title: string;
  detail: string;
}

interface DataHolder {
  [key: string]: ProjectData[];
}

export const projectData: DataHolder = {
  2021: [
    {
      title: 'Outsystems Traineeship',
      detail:
        'Took part in a traineeship using the Outsystems platform to create enterprise system for Advanced Micro Foundaries',
    },
    {
      title: 'Outsystems Certification',
      detail: 'Completed an Outsystems Traditonal Web Certification exam',
    },
    {
      title: 'Outsystems Bootcamp',
      detail: 'Completed an Outsystems Traditonal Web Certification bootcamp',
    },
  ],
  2020: [
    {
      title: 'Created first freelance website',
      detail: 'Got my first freelance web developer job to create a website',
    },
    {
      title: 'Started learning Javascript',
      detail:
        'Went back to learning javascript after years of not reading any code',
    },
    {
      title: 'Started learning HTML and CSS',
      detail: 'Started learning HTML and CSS to begin my developer journey',
    },
    {
      title: 'Ended career with airforce',
      detail: "Ended my contract with the force as I couldn't fly properly :(",
    },
  ],
  2019: [
    {
      title: 'Flying planes',
      detail: 'Was a pilot once. There will be another time',
    },
  ],
};

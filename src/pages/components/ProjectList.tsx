import React from 'react';

const ProjectList: React.FC = function () {
  const arr = [
    {
      link: 'Created first freelance',
      writeup: 'Got my first freelance',
    },
    {
      link: 'started learning javascript',
      writeup: 'went back to learning',
    },
  ];

  return (
    <>
      <ul>
        {arr.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.link}</p>
              <p>{item.writeup}</p>
            </li>
          );
        })}
      </ul>
    </>
  );

  return null;
};

export default ProjectList;

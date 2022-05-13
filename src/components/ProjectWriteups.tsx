import React from 'react';

import {
  ProjectBlocks,
  Projectlist,
  Projectwriteup,
  RedLine,
  StyledALink,
  WriteupTitle,
  WriteupWrapper,
  YellowLine,
} from '../pages/styled';
import { ProjectData, projectData } from './Data';

interface ProjectWriteupsProps {
  keywords: string[];
}

const ProjectWriteups: React.FC<ProjectWriteupsProps> = (props) => {
  const { keywords } = props;
  const [data, setData] = React.useState<ProjectData[]>([...projectData]);

  const years: string[] = [];
  for (const yearObj of data) {
    years.push(yearObj['title']);
  }
  React.useEffect(() => {
    if (keywords.length < 1) {
      setData([...projectData]);
      console.log('projectData');
      console.log(projectData);
      return;
    }

    const dataHolder = [...projectData];
    console.log(dataHolder);

    // dataHolder.map((arrObj) => {
    //   const filter = arrObj['data'].filter((content) => {
    //     for (const keyword of keywords) {
    //       let re = new RegExp(keyword, 'i');
    //       if (
    //         content['title'].search(re) !== -1 ||
    //         content['detail'].search(re) !== -1
    //       ) {
    //         return arrObj;
    //       }
    //     }
    //   });
    //   console.log(filter);
    //   dataHolder
    // });

    for (const i in dataHolder) {
      const filter = dataHolder[i]['data'].filter((content) => {
        for (const keyword of keywords) {
          let re = new RegExp(keyword, 'i');
          if (
            content['title'].search(re) !== -1 ||
            content['detail'].search(re) !== -1
          ) {
            return dataHolder[i];
          }
        }
      });
      dataHolder[i]['data'] = filter;
    }

    console.log('dataHolderFiltered');
    console.log(dataHolder);
    setData(dataHolder);
  }, [keywords]);

  const filteredData = data.filter((yearItem) => yearItem['data'].length > 0);

  return (
    <WriteupWrapper width={100}>
      {years.map((year) => {
        const newData = filteredData.filter((obj) => obj['title'] === year);
        if (newData.length < 1) {
          return;
        }
        const data = newData[0]['data'];
        return (
          <>
            <WriteupTitle marginBlockEnd={5} key={year}>
              {year}
            </WriteupTitle>
            <RedLine></RedLine>
            <ProjectBlocks>
              <Projectlist>
                {data.map((prjdata) => (
                  <li key={prjdata['title']}>
                    <StyledALink href={prjdata['link']} target="_blank">
                      {prjdata['title']}
                    </StyledALink>
                    <Projectwriteup>{prjdata['detail']}</Projectwriteup>
                  </li>
                ))}
              </Projectlist>
            </ProjectBlocks>
          </>
        );
      })}

      <YellowLine />
    </WriteupWrapper>
  );
};

export default ProjectWriteups;

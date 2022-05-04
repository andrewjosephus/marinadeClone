import React from 'react';

import {
  Page,
  Projectblocks,
  Projectbutton,
  Projectfilterarea,
  Projectgrid,
  Projectlist,
  Projectwriteup,
  RedLine,
  StyledALink,
  WriteupTitles,
  WriteupWrapper,
} from '../pages/styled';
import { listOfKeywords, projectData } from './Data';

interface TagProps {
  isSelected: boolean;
  handleTagClick: (keyword: string) => void;
  keyword: string;
}

const Tag: React.FC<TagProps> = function (props) {
  const { keyword, handleTagClick, isSelected } = props;

  const handleClick = () => {
    handleTagClick(keyword);
  };

  return (
    <Projectbutton
      backgroundColor={isSelected ? 'red' : '#273641'}
      onClick={handleClick}
    >
      # {keyword}
    </Projectbutton>
  );
};

const usekeywordFiltering = () => {
  const [selectedKeywords, setSelectedKeywords] = React.useState<string[]>([]);

  // for (let i = 0; i < years.length; i++) {
  //   console.log(data[years[i]]);
  // }

  const filteredData = () => {
    // return data;
  };
  // console.log(searchResults);

  // searchValues.push();
  // console.log(searchValues);

  // data.forEach((value) => (for (let i = 0;data[value].length;i++){
  //   console.log(data[year][i])
  // });

  // console.log(data);

  const data = {};

  React.useEffect(() => {
    const years = Object.keys(projectData);
    years.reverse();
    console.log(years);

    const searchValues: any[] = [];
    selectedKeywords.forEach((keyword) => {
      console.log(keyword);
      let re = new RegExp(keyword, 'i');
      console.log(re);

      years.forEach((year) => {
        if (data[year] == null) {
          data[year] = [];
        }
        projectData[year].forEach((obj) => {
          if (data[year].includes(obj)) {
            return;
          }
          if (obj['title'].search(re) == -1) {
            if (obj['detail'].search(re) != -1) {
              data[year].push(obj);
            }
          } else {
            data[year].push(obj);
          }
        });
      });
    });

    console.log(searchValues);
    console.log('search');
    console.log(data);
  }, [selectedKeywords]);

  return { selectedKeywords, setSelectedKeywords };
};

export const KeywordTag = () => {
  const { selectedKeywords, setSelectedKeywords } = usekeywordFiltering();
  // console.log(selectedKeywords);

  const isKeywordSelected = (keyword: string) => {
    return selectedKeywords.includes(keyword);
  };

  const handleKeywordClick = (keyword: string) => {
    const newSelectedKeywords = [...selectedKeywords];
    if (selectedKeywords.includes(keyword)) {
      const index = selectedKeywords.indexOf(keyword);
      newSelectedKeywords.splice(index, 1);
    } else {
      newSelectedKeywords.push(keyword);
    }

    setSelectedKeywords(newSelectedKeywords);
  };

  return (
    <>
      {listOfKeywords.map((keyword) => (
        <Tag
          key={keyword}
          keyword={`${keyword}`}
          isSelected={isKeywordSelected(keyword)}
          handleTagClick={handleKeywordClick}
        />
      ))}
    </>
  );

  // what map is doing to the arr

  // |
  // v

  // return (
  //   <>
  //     <PreKeywordTag onClick={() => handleKeywordClick('javascript')}>
  //       javascript
  //     </PreKeywordTag>
  //     <button>css</button>
  //     <button>coding</button>
  //     <button>life</button>
  //   </>
  // );
};

export const ProjectSpace = () => {
  const years = Object.keys(projectData);
  years.reverse();
  return (
    <WriteupWrapper width={100}>
      {years.map((year) => (
        <>
          <WriteupTitles marginBlockEnd={5} key={year}>
            {year}
          </WriteupTitles>
          <RedLine></RedLine>
          <Projectblocks>
            <Projectlist>
              {projectData[year].map((writeup) => (
                <li key={writeup.title}>
                  <StyledALink>{writeup['title']}</StyledALink>
                  <Projectwriteup>{writeup['detail']}</Projectwriteup>
                </li>
              ))}
            </Projectlist>
          </Projectblocks>
        </>
      ))}
    </WriteupWrapper>
  );
};

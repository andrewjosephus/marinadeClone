import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { HeaderBar } from '../components/Header';
import CenterLayout from '../layouts/CenterLayout';
import {
  Body,
  Landing,
  Main,
  Page,
  StyledALink,
  Textbox,
  Writeup,
  WriteupBlock,
  WriteupTitle,
  WriteupWrapper,
  YellowLine,
} from '../styles/styled';

const Home: NextPage = function () {
  return (
    <CenterLayout>
      <Head>
        <title>AndrewJosephus</title>
        <meta name="description" content="Andrew Josephus Portfolio Site" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Main>
        <HeaderBar />
        <Body>
          <Page height={'55vh'}>
            <Landing>
              <Textbox justifyContent={'space-between'}>
                <h1>Andrew Josephus</h1>
                <p>
                  Hello there! I&#39;m a web developer currently living in
                  Singapore. I specialise in frontend web development work,
                  namely, website redesigns and improvements. <br /> <br />
                  Go to the{' '}
                  <StyledALink>
                    <Link href="/hireme" passHref>
                      Hire Me
                    </Link>
                  </StyledALink>{' '}
                  page to learn more!
                </p>
              </Textbox>
              <Image
                src="/img1.jpg"
                height={330}
                width={330}
                alt="My face"
              ></Image>
            </Landing>
          </Page>

          <Page height={'100vh'}>
            <WriteupWrapper width={40}>
              <WriteupBlock>
                <Writeup>
                  I&#39;m a creative who enjoys making unique site experiences
                  for people. I&#39;m currently working as an intern in{' '}
                  <StyledALink href="https://www.taskade.com/" target="_blank">
                    Taskade
                  </StyledALink>
                  . In my off time, I take on freelance projects on the side
                  with the skills that I learn during my internship. I&#39;
                  spent a few years building my IT career and you can read a bit
                  more about me and my past work in{' '}
                  <StyledALink>
                    <Link href="/projects" passHref>
                      Projects
                    </Link>
                  </StyledALink>{' '}
                  . I am available for freelance work in a consulting capacity,
                  or as a tech advisor. If you would like to get in touch with
                  me about working with you, email me and we&#39;ll chat!
                </Writeup>
                <Writeup>
                  Email me at:{' '}
                  <StyledALink href="mailto:andrewjosephus@gmail.com">
                    andrewjosephus@gmail.com
                  </StyledALink>
                </Writeup>
                <YellowLine></YellowLine>
              </WriteupBlock>
              <WriteupBlock>
                <WriteupTitle marginBlockEnd={20}>Hire Me</WriteupTitle>
                <Writeup marginBottom={40}>
                  Even though I&#39;m still new in my career in IT, I have a
                  passion for creating new and exciting experiences. I aim to
                  make each site I work on pleasant for users visiting and for
                  the people who maintain them. <br />
                  <br /> I provide a variety of services. Find out more{' '}
                  <StyledALink>
                    <Link href="/projects" passHref>
                      here!
                    </Link>
                  </StyledALink>
                </Writeup>
                <WriteupTitle marginBlockEnd={20}>Projects</WriteupTitle>
                <Writeup>
                  I current work as an intern at Taskade where I mainly
                  contribute to the frontend work of the application.
                </Writeup>
              </WriteupBlock>
            </WriteupWrapper>
          </Page>
        </Body>
      </Main>
    </CenterLayout>
  );
};

export default Home;

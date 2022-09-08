import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
        <title>marinade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <HeaderBar />
        <Body>
          <Page height={'55vh'}>
            <Landing>
              <Textbox justifyContent={'space-between'}>
                <h1>Andrew Josephus</h1>
                <p>
                  Paragraph about me: I&#39;m a creative engineer who builds
                  delightful web experiences. I can advise your company about
                  the web platform, performance, creative user interactions, and
                  usable machine learning.
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
                  I&#39;ve just ended an 8 year stint as a Senior Engineer at
                  Google, where I worked on making music and art and all sorts
                  of creative interactions with Machine Learning, web components
                  and web standards, and the guts of Chromium. You can read a
                  bit more about me and my past work. Most of my personal code
                  is on GitHub or on Glitch. <br /> <br /> I am available for
                  freelance work in a consulting capacity, or as a tech advisor.
                  If you would like to get in touch with me about working with
                  you, email me and we&#39;ll chat!
                </Writeup>
                <YellowLine></YellowLine>
              </WriteupBlock>
              <WriteupBlock>
                <WriteupTitle marginBlockEnd={40}>Hire Me</WriteupTitle>
                <Writeup>
                  I&#39;ve just ended an 2 year stint as a Pilot Trainee at the
                  {` `}
                  <StyledALink
                    href="https://form.gov.sg/#!/6253a1db6f45270011b89833"
                    target="_blank"
                  >
                    Republic of Singapore Air Force
                  </StyledALink>
                  , where I worked on not getting sent to detention barracks and
                  all sorts of creative interactions with superiors, peers and
                  instructors. You cannot read a bit more about me and my past
                  work. Most of my personal code is on my local machine at home.
                </Writeup>
                <Writeup marginBottom={50}>
                  <strong>RSS Feeds: </strong>
                  <StyledALink>the firehose</StyledALink> |{` `}
                  <StyledALink>the firehose</StyledALink> |{` `}
                  <StyledALink>the firehose</StyledALink>
                </Writeup>
                <WriteupTitle marginBlockEnd={40}>Projects</WriteupTitle>
                <Writeup>
                  I&#39;ve just ended an 8 year stint as a Senior Engineer at
                  Google, where I worked on making music and art and all sorts
                  of creative interactions with Machine Learning, web components
                  and web standards, and the guts of Chromium. You can read a
                  bit more about me and my past work. Most of my personal code
                  is on GitHub or on Glitch.
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

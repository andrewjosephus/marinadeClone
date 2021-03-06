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
  WriteupWrapper,
  YellowLine,
} from './styled';

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
              <Textbox justifyContent={'center'}>
                <h1>Let&#39;s work together</h1>
              </Textbox>
              <Image
                src="/img2.jpg"
                height={330}
                width={330}
                alt="My face"
              ></Image>
            </Landing>
          </Page>
          <Page height={'110vh'}>
            <WriteupWrapper width={40}>
              <Writeup>
                For the last decade I&#39;ve been working on user centered
                projects, from delivering a feature to the billions of users of
                Chrome, to taking a machine learning model and making it
                relevant to someone with no technical training. Nowadays I work
                freelance as a tech advisor or consultant, helping teams
                understand their users and their processes.
              </Writeup>
              <Writeup>I can help your team with:</Writeup>
              <Writeup>
                <ul>
                  <li>
                    <strong>project scoping:</strong> figure out and prioritize
                    the core features of your application based on what your
                    users actually need
                  </li>
                  <li>
                    <strong>user experience design/research:</strong> work with
                    you to design interactions that are easy to use and
                    intuitive for your users
                  </li>
                  <li>
                    <strong>data visualizations:</strong> tell a story through
                    your data, in a way that is easy to understand, self
                    explanatory and interesting
                  </li>
                  <li>
                    <strong>debugging your team:</strong> help you figure out
                    why your team might be stuck and have trouble focusing on
                    features or delivering them
                  </li>
                  <li>
                    <strong>engineering:</strong> answer technical questions
                    about web best practices (eg. the performance and
                    accessibility of your product), do code reviews, or offer
                    feedback and suggestions for improvement
                  </li>
                  <li>
                    <strong>mentorship, guidance & leadership:</strong> I can
                    help you brainstorm creative ideas, offer feedback on your
                    written materials and presentations, and help you craft your
                    key messaging.
                  </li>
                </ul>
              </Writeup>
              <Writeup>
                If this sounds like something you&#39;re interested in, send me
                an
                {` `}
                <StyledALink href="https://www.youtube.com/watch?v=XOi2jFIhZhA">
                  email!
                </StyledALink>
              </Writeup>
            </WriteupWrapper>
            <YellowLine></YellowLine>
          </Page>
        </Body>
      </Main>
    </CenterLayout>
  );
};

export default Home;

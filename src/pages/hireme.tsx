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
} from '../styles/styled';

const Home: NextPage = function () {
  return (
    <CenterLayout>
      <Head>
        <title>Hire Me</title>
        <meta name="description" content="Andrew Josephus Portfolio Site" />
        <link rel="icon" href="/Logo.svg" />
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
          <Page height={'50vh'}>
            <WriteupWrapper width={40}>
              <Writeup>I can help your team with:</Writeup>
              <Writeup>
                <ul>
                  <li>
                    <strong>Project scoping:</strong> figure out and prioritize
                    the core features of your application based on what your
                    users actually need
                  </li>
                  <li>
                    <strong>User experience design/research:</strong> work with
                    you to design interactions that are easy to use and
                    intuitive for your users
                  </li>
                  <li>
                    <strong>Website improvements:</strong> redesigning an
                    existing site or addding on to what is already there
                  </li>
                </ul>
              </Writeup>
              <Writeup>
                If this sounds like something you&#39;re interested in, send me
                an
                {` `}
                <StyledALink href="mailto:andrewjosephus@gmail.com">
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

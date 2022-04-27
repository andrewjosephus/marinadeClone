import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import WelcomeBox from '../components/WelcomeBox';
import CenterLayout from '../layouts/CenterLayout';
import { Body, Header, Landing, List, Main, Page, Textbox } from './styled';

const Home: NextPage = function () {
  return (
    <CenterLayout>
      <Head>
        <title>marinade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* create pr  */}
      <Main>
        <Header>
          <List>
            <li>
              <Link href="/">hire me</Link>
            </li>
            <li>
              <Link href="/">projects</Link>
            </li>
          </List>
        </Header>
        <Body>
          <Page height={'95vh'}>
            <Landing>
              <Textbox>
                <h1>Andrew Josephus</h1>
                <p>
                  Paragraph about me: Im a creative engineer who builds
                  delightful web experiences. I can advise your company about
                  the web platform, performance, creative user interactions, and
                  usable machine learning.
                </p>
              </Textbox>
              <Image
                src="/placeholder.png"
                height={450}
                width={450}
                alt="My face"
              ></Image>
            </Landing>
          </Page>

          <Page height={'100vh'}>Get started by editing</Page>
        </Body>
      </Main>
    </CenterLayout>
  );
};

export default Home;

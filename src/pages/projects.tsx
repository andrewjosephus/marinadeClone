import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { HeaderBar } from '../components/Header';
import ProjectSpace from '../components/Projects';
import CenterLayout from '../layouts/CenterLayout';
import { Body, Landing, Main, Page, Textbox } from '../styles/styled';

const Home: NextPage = function () {
  return (
    <CenterLayout>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Andrew Josephus Portfolio Site" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Main>
        <HeaderBar />
        <Body>
          <Page height={'65vh'}>
            <Landing>
              <Textbox justifyContent={'center'}>
                <h1>Projects</h1>
              </Textbox>
              <Image
                src="/img3.jpg"
                height={330}
                width={330}
                alt="My face"
              ></Image>
            </Landing>
          </Page>
          <Page height={'100vh'}>
            <ProjectSpace />
          </Page>
        </Body>
      </Main>
    </CenterLayout>
  );
};

export default Home;

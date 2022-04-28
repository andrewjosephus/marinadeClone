import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import WelcomeBox from '../components/WelcomeBox';
import CenterLayout from '../layouts/CenterLayout';
import {
  Body,
  Header,
  Landing,
  List,
  Main,
  Page,
  Projectblocks,
  Projectbutton,
  Projectfilterarea,
  Projectgrid,
  Projectlist,
  Projectwriteup,
  RedLine,
  StyledALink,
  StyledLink,
  Textbox,
  Writeup,
  WriteupBlock,
  WriteupTitles,
  WriteupWrapper,
  YellowLine,
} from './styled';

const Home: NextPage = function () {
  return (
    <CenterLayout>
      <Head>
        <title>andrew-projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {/* header is 10vh */}
        <Header>
          <List>
            <li style={{ fontFamily: 'og-emoji, sans-serif;' }}>
              <Link href={'/'}>🏠</Link>
            </li>
            <li>
              <Link href="/" passHref>
                <StyledLink>hire me</StyledLink>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <StyledLink>projects</StyledLink>
              </Link>
            </li>
          </List>
        </Header>
        <Body>
          <Page height={'55vh'}>
            <Landing>
              <Textbox justifyContent={'center'}>
                <h1>Projects</h1>
              </Textbox>
              <Image
                src="/placeholder.png"
                height={330}
                width={330}
                alt="My face"
              ></Image>
            </Landing>
          </Page>
          <Page height={'120vh'}>
            <Projectgrid>
              <Projectfilterarea>
                <WriteupTitles marginBlockEnd={0}>
                  Filter by <p>Year and Type</p>{' '}
                </WriteupTitles>
                <Projectbutton># javascript</Projectbutton>
                <Projectbutton># css</Projectbutton>
              </Projectfilterarea>
              <WriteupWrapper width={100}>
                <WriteupTitles marginBlockEnd={5}>2021</WriteupTitles>
                <RedLine></RedLine>
                <Projectblocks>
                  <Projectlist>
                    <li>
                      <StyledALink>Outsystems Traineeship</StyledALink>
                      <Projectwriteup>
                        Took part in a traineeship using the Outsystems platform
                        to create enterprise system for Advanced Micro
                        Foundaries
                      </Projectwriteup>
                    </li>
                    <li>
                      <StyledALink>Outsystems Certification</StyledALink>
                      <Projectwriteup>
                        Completed an Outsystems Traditonal Web Certification
                        exam
                      </Projectwriteup>
                    </li>
                    <li>
                      <StyledALink>Outsystems Bootcamp</StyledALink>
                      <Projectwriteup>
                        Completed an Outsystems Traditonal Web Certification
                        bootcamp
                      </Projectwriteup>
                    </li>
                  </Projectlist>
                </Projectblocks>
                <WriteupTitles marginBlockEnd={5}>2020</WriteupTitles>
                <RedLine></RedLine>
                <Projectblocks>
                  <Projectlist>
                    <li>
                      <StyledALink>Created first freelance website</StyledALink>
                      <Projectwriteup>
                        Got my first freelance web developer job to create a
                        website
                      </Projectwriteup>
                    </li>
                    <li>
                      <StyledALink>Started learning Javascript</StyledALink>
                      <Projectwriteup>
                        Went back to learning javascript after years of not
                        reading any code
                      </Projectwriteup>
                    </li>
                    <li>
                      <StyledALink>Started learning HTML and CSS</StyledALink>
                      <Projectwriteup>
                        Started learning HTML and CSS to begin my developer
                        journey
                      </Projectwriteup>
                    </li>
                    <li>
                      <StyledALink>Ended career with airforce</StyledALink>
                      <Projectwriteup>
                        Ended my contract with the force as I couldn't fly
                        properly :(
                      </Projectwriteup>
                    </li>
                  </Projectlist>
                </Projectblocks>
                <WriteupTitles marginBlockEnd={5}>2019</WriteupTitles>
                <RedLine></RedLine>
                <Projectblocks>
                  <Projectlist>
                    <li>
                      <StyledALink>Flying planes</StyledALink>
                      <Projectwriteup>
                        Was a pilot once. Maybe in another life
                      </Projectwriteup>
                    </li>
                  </Projectlist>
                </Projectblocks>
              </WriteupWrapper>
            </Projectgrid>
          </Page>
        </Body>
      </Main>
    </CenterLayout>
  );
};

export default Home;

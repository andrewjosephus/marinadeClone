/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header, List, StyledLink } from '../styles/styled';

export const HeaderBar = () => {
  const router = useRouter();
  if (router.pathname === '/') {
    return (
      <Header>
        <List>
          <li>
            <Link href="/hireme" passHref>
              <StyledLink>hire me</StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              <StyledLink>projects</StyledLink>
            </Link>
          </li>
        </List>
      </Header>
    );
  }
  return (
    <Header>
      <List>
        <li>
          <Link href="/" passHref>
            <Image
              className="pointerCursor"
              src="/house.png"
              height={20}
              width={20}
              alt="Home"
            />
          </Link>
        </li>
        <li>
          <Link href="/hireme" passHref>
            <StyledLink>hire me</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <StyledLink>projects</StyledLink>
          </Link>
        </li>
      </List>
    </Header>
  );
};

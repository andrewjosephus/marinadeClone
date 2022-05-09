/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header, List, StyledLink } from '../pages/styled';

export const HeaderBar = () => {
  const router = useRouter();
  if (router.pathname === '/') {
    return (
      <Header>
        <List>
          <li>
            <a href="/hireme">
              <StyledLink>hire me</StyledLink>
            </a>
          </li>
          <li>
            <a href="/projects">
              <StyledLink>projects</StyledLink>
            </a>
          </li>
        </List>
      </Header>
    );
  }
  return (
    <Header>
      <List>
        <li style={{ fontFamily: 'og-emoji, sans-serif;' }}>
          <a href={'/'}>🏠</a>
        </li>
        <li>
          <a href="/hireme">
            <StyledLink>hire me</StyledLink>
          </a>
        </li>
        <li>
          <a href="/projects">
            <StyledLink>projects</StyledLink>
          </a>
        </li>
      </List>
    </Header>
  );
};

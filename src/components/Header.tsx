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
  );
};

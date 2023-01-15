import { createStyles } from '@mantine/core';
import Head from 'next/head';
import React from 'react';
import { FooterSocial } from './Footer';
import { HeaderResponsive } from './Header';

type LayoutProps = {
  title?: string;
  description?: string;
  icon?: string;
  children: React.ReactNode;
};

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const useStyles = createStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  },
}));

const Layout = ({
  title = 'UVic Guitar Club',
  description = "Welcome to the University of Victoria's Guitar Club!",
  icon = '/UGCfavicon.png',
  children,
}: LayoutProps) => {
  const { classes } = useStyles();

  const footerLinks = [
    {
      title: 'test title',
      links: [
        { label: 'test label', link: 'https://youtube.com' },
        { label: 'test label', link: 'https://youtube.com' },
        { label: 'test label', link: 'https://youtube.com' },
      ],
    },
    {
      title: 'test title',
      links: [
        { label: 'test label', link: 'https://youtube.com' },
        { label: 'test label', link: 'https://youtube.com' },
        { label: 'test label', link: 'https://youtube.com' },
      ],
    },
  ];
  return (
    <div className={classes.layout}>
      <Head>
        <title>UVic Guitar Club</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/UGCfavicon.png" />
      </Head>
      <div>
        <header>
          <HeaderResponsive
            links={[
              { label: 'About', link: '/' },
              { label: 'Rentals', link: '/rentals' },
              { label: 'Contact', link: '/contact' },
            ]}
          />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <FooterSocial />
      </footer>
    </div>
  );
};

export default Layout;

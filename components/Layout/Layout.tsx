import { createStyles } from '@mantine/core';
import Head from 'next/head';
import React from 'react';
import { FooterLinks } from './Footer';
import { HeaderMegaMenu } from './Header';

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
    height: '100vh',
  },
}));

const Layout = ({
  title = 'UVic Guitar Club',
  description = "Welcome to the University of Victoria's Guitar Club!",
  icon = '/favicon.svg',
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
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <header>
        <HeaderMegaMenu />
      </header>
      <main>{children}</main>
      <footer>
        <FooterLinks data={footerLinks} />
      </footer>
    </div>
  );
};

export default Layout;

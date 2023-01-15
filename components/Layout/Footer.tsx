import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { IconBrandDiscord, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import config from '../../config/changeables';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <Image src="/UGCLogo.png" alt="Guitar Club Logo" width="60" height="30" />
        </div>
        <p>uvicguitarclub@gmail.com</p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <Link href={`https://discord.gg/${config.discord_invite_code}`} passHref>
              <IconBrandDiscord size={18} stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://www.youtube.com/channel/UCbp-x-ho233i2EwTiXD5P_g" passHref>
              <IconBrandYoutube size={18} stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://www.instagram.com/uvicguitarofficial/" passHref>
              <IconBrandInstagram size={18} stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

import { css } from '@emotion/react';
import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import DiscordInvite from '../Elements/DiscordInvite';
import styled from '@emotion/styled';
import { DiscordButton } from './DiscordButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../../config/changeables';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 150,
    paddingBottom: 150,
    backgroundImage:
      'url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors.orange[4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  schedule: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 600,
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.1,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'row',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

const ServerApi = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -2px;
  font-size: 18px;
  span:not(:last-child) {
    margin-right: 1em;
    line-height: 2.5em;
  }
  color: white;
  opacity: 0;
  animation: fadeIn 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const CountIndicator = css`
  height: 10px;
  width: 10px;
  margin: 0 8px 0 0;
  border-radius: 50%;
  display: inline-block;
`;

const OnlineCount = styled.span`
  background-color: #3ba55d;
  ${CountIndicator}
`;

const MemberCount = styled.span`
  background-color: #aaa;
  ${CountIndicator}
`;

interface ServerDataResponse {
  approximate_member_count: number;
  approximate_presence_count: 19;
  channel: { id: string; name: string; type: number };
  code: string;
  expires_at: any;
  guild: {
    id: string;
    name: string;
    splash: any;
    banner: any;
    description: any;
    features: any;
    icon: string;
    nsfw: boolean;
    nsfw_level: number;
    premium_subscription_count: number;
    vanity_url_code: any;
    verification_level: number;
  };
  inviter: {
    avatar: string;
    avatar_decoration: any;
    discriminator: string;
    id: string;
    public_flags: number;
    username: string;
  };
}

export function PageHero() {
  const { classes, cx } = useStyles();
  const [serverData, setServerData] = useState<ServerDataResponse>();

  useEffect(() => {
    const getInviteData = async () => {
      const response = await axios({
        method: 'get',
        url: `https://discord.com/api/v9/invites/${config.discord_invite_code}?with_counts=true&with_expiration=true`,
      });
      setServerData(response.data);
    };
    getInviteData();
  }, []);
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          UVic{' '}
          <Text component="span" inherit className={classes.highlight}>
            Guitar Club
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Learn to play guitar. Do something. Jam with us. Someone please make this text sound
            not-so-dead.
          </Text>
          <Text mt="lg" size="lg" className={classes.schedule}>
            {config.schedule}
          </Text>
        </Container>

        <div className={classes.controls}>
          <ServerApi>
            <span>
              <OnlineCount></OnlineCount>
              {serverData ? serverData.approximate_presence_count : '?'} Online
            </span>
            <span>
              <MemberCount></MemberCount>
              {serverData ? serverData.approximate_member_count : '?'} Members
            </span>
            <Link href={`https://discord.gg/${config.discord_invite_code}`}>
              <DiscordButton>Join our Discord Server</DiscordButton>
            </Link>
          </ServerApi>
        </div>
      </div>
    </div>
  );
}

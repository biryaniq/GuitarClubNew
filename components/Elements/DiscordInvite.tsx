import { css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { DiscordIcon } from '@mantine/ds';
import config from '../../config/changeables';

const DiscordImitationRoot = styled.div`
  display: block;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.15);
`;

const DiscordImitationHeader = styled.div`
  padding: 0.5em 1em;
  border-radius: 4px 4px 0 0;
  background-color: #5865f2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

const DiscordImitationEmbed = styled.div`
  padding: 1em;
  border-radius: 0 0 4px 4px;
  background-color: #f2f3f5;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75em;
`;

const ServerIcon = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ServerInfo = styled.div`
  h3 {
    letter-spacing: 0.2px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const ServerApi = styled.div`
  margin-top: 2px;
  font-size: 13px;
  span:not(:last-child) {
    margin-right: 0.75em;
  }
`;

const CountIndicator = css`
  height: 8px;
  width: 8px;
  margin: 0 3px 1px 0;
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

const InviteButton = styled.button`
  background-color: #3ba55d;
  border: 0;
  border-radius: 4px;
  padding: calc(1.5 * 8px) 16px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: 0.25s ease;
  :hover {
    background-color: #2d7d46;
  }
`;

const FixDiscordIcon = styled(DiscordIcon)`
  font-size: 22px;
  margin-bottom: -5px;
  margin-right: 6px;
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

const DiscordInvite = () => {
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
    <DiscordImitationRoot>
      <DiscordImitationHeader>
        <FixDiscordIcon size={22} />
        JOIN OUR DISCORD SERVER
      </DiscordImitationHeader>
      <DiscordImitationEmbed>
        <ServerIcon>
          <Image alt="discord icon" src="/Logo.jpg" width={34} height={20} />
        </ServerIcon>
        <ServerInfo>
          <h3>UVic Guitar Club</h3>
          <ServerApi>
            <span>
              <OnlineCount></OnlineCount>
              {serverData ? serverData.approximate_presence_count : '?'} Online
            </span>
            <span>
              <MemberCount></MemberCount>
              {serverData ? serverData.approximate_member_count : '?'} Members
            </span>
          </ServerApi>
        </ServerInfo>
        <a href={`https://discord.gg/${config.discord_invite_code}`}>
          <InviteButton>Join</InviteButton>
        </a>
      </DiscordImitationEmbed>
    </DiscordImitationRoot>
  );
};

export default DiscordInvite;

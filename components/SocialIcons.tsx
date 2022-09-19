import React from "react";
import styled from "@emotion/styled";

export type SocialIcon = {
  icon: React.ReactNode;
  url: string;
};

const SocialIconRow = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIcons = ({ socialIcons }: { socialIcons: SocialIcon[] }) => {
  return (
    <SocialIconRow>
      {socialIcons.map((socialIcon: SocialIcon) => (
        // NavItem components go here
        <span>SOCIAL_ICON</span>
      ))}
    </SocialIconRow>
  );
};

export default SocialIcons;

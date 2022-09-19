import React from "react";
import styled from "@emotion/styled";
import NavBar, { NavigationLink } from "./NavBar";
import SocialIcons, { SocialIcon } from "./SocialIcons";

const Layout = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  display: block;
  flex: 1 0 auto;
`;

const Header = styled.div`
  padding: var(--lg) var(--lg) 0;
`;

const HeaderContent = styled.div`
  padding-bottom: var(--lg);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img``;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 calc(2 * var(--lg)) calc(2 * var(--lg));
`;

const FooterContent = styled.div`
  padding-top: calc(2 * var(--lg));
  border-top: 1px solid var(--black);
`;

const Sponsors = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const navLinks: NavigationLink[] = [
    { name: "Home", path: "/" },
    { name: "Home", path: "/" },
  ];
  const socialIcons: SocialIcon[] = [
    { icon: <></>, url: "google.com" },
    { icon: <></>, url: "google.com" },
  ];

  return (
    <Layout>
      <Header>
        <HeaderContent>
          <Logo src="#" />
          <NavBar navLinks={navLinks} />
        </HeaderContent>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          <Sponsors>SPONSORS</Sponsors>
          <SocialIcons socialIcons={socialIcons} />
        </FooterContent>
      </Footer>
    </Layout>
  );
};

export default Wrapper;

import React from "react";
import styled from "@emotion/styled";
import NavBar, { NavigationLink } from "./NavBar";

const Header = styled.div`
  padding: var(--lg);
  background: red;
`;

const SplitColumn = styled.div`
  background: beige;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img``;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const navLinks: NavigationLink[] = [
    { name: "Home", path: "/" },
    { name: "Home", path: "/" },
  ];

  return (
    <div>
      <Header>
        <SplitColumn>
          <Logo src="#" />
          <NavBar navLinks={navLinks} />
        </SplitColumn>
      </Header>
      {children}
      <div>FOOTER</div>
    </div>
  );
};

export default Wrapper;

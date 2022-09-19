import styled from "@emotion/styled";
import React from "react";

export type NavigationLink = {
  name: string;
  path: string;
};

const NavRow = styled.div``;

const NavBar = ({ navLinks }: { navLinks: NavigationLink[] }) => {
  return (
    <NavRow>
      {navLinks.map((navLink: NavigationLink) => (
        // NavItem components go here
        <span>PLACEHOLDER</span>
      ))}
    </NavRow>
  );
};

export default NavBar;

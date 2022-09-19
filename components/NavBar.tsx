import styled from "@emotion/styled";
import React from "react";
import NavItem from "./NavItem";

export type NavigationLink = {
  name: string;
  path: string;
};

const NavRow = styled.div``;

const NavBar = ({ navLinks }: { navLinks: NavigationLink[] }) => (
  <NavRow>
    {navLinks.map((navLink: NavigationLink) => (
      <NavItem navLink={navLink} />
    ))}
  </NavRow>
);

export default NavBar;

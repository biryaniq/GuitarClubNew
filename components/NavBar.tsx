import React from "react";

export type NavigationLink = {
  name: string;
  path: string;
};

const NavBar = ({ navLinks }: { navLinks: NavigationLink[] }) => {
  return (
    <div>
      {navLinks.map((navLink: NavigationLink) => (
        // NavItem components go here
        <div>{navLink.name}</div>
      ))}
    </div>
  );
};

export default NavBar;

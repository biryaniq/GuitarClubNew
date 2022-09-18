import React from "react";
import Button from "../components/Button";
import styled from "@emotion/styled";

const Table = styled.div`
  padding: 1em;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  :not(:last-child) {
    padding-bottom: 1em;
  }
`;

const Components = () => {
  return (
    <Table>
      <Row>
        <Button size="sm" text="Small Button" />
        <Button link="https://google.com" text="Button with link" />
        <Button text="Default Button" />
        <Button size="lg" text="Large Button" />
      </Row>
      <Row>Check the usage of these components in pages/components.tsx</Row>
    </Table>
  );
};

export default Components;

import React from "react";
import styled from "styled-components";
import Navbar from "../navbar";

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;

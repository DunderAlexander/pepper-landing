"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: black;
  color: white;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: inherit;
}
`;
export const GlobalStylesProvider = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};
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
  overflow-x: hidden;
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
strong {
  font-weight:900;
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

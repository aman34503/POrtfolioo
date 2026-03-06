import { createGlobalStyle } from "styled-components";

const NormalizeStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
*,*::before,*::after{
    box-sizing: box-border;
    outline: none;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #f8f9fa;
    color: #1a1a1a;
    transition: background-color 0.3s ease, color 0.3s ease;
}
html[data-theme="dark"] body {
    background-color: #0d0d0d;
    color: #e8e8e8;
}
html{
    scroll-behavior: smooth;
}

`;

export default NormalizeStyle;

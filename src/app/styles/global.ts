'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root{
  --white: #ffffff;
  --gray-100:#EDF4FA;
  --gray-200:#E6ECF2;
  --gray-300:#DEE5EB;
  --gray-400:#D9D9D9;

  --black: #000000;
  
  --blue-100:#D5EDFE;
  --blue-200:#81BFFB;
  --blue-300:#7BB4FF;
  --blue-400:#2E82F2;
  --blue-800:#263660;

  --bg: #F6FBFE;

  --success: #4ab532;
  --information:#6298FC;
  --warning:#FFA705;
  --important :#FF4B38;

  --title: #25303F;
  --text: #666F7A;
  --text-off: #9AA3AA;
  
}

html{
    font-size: 62.5%;
}

html,body{
  background: var(--bg);

  -webkit-font-smoothing: antialiased;

  width:100%;
  /* height:100vh; */
}

body, form, input, textarea, select, button {
    /* font: 700 1rem "Open+Sans", sans-serif; */
}

a, button, img{
    cursor: pointer;
}

a{
    color: inherit; // poe a cor do link a mesma do elemento pai
    text-decoration:none; //tirar o underline dos links
}

`

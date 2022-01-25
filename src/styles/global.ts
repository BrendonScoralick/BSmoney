import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue:#5429cc;
    --blue-light:#363f5f;
    --text-body:#969CB3;
    --shape: #FFFFFF;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
font-family: 'Poppins', sans-serif;
}

html {

    @media (max-width: 1080px){
        font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5;
        }
        button{
            cursor: pointer;
        }

        [disabled] {
opacity:0.6;
cursor: not-allowed;
        }
    
}
`
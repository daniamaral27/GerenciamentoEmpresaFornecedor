import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   

    }

    :root{
        --azul-opacidadeBaixa:#123c7f99;
        --azul-claro: #AACAD7;
        --azul-saturado: #2e9cb4;
        --azul-escuro: #063f55;
        
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color:  #AACAD7;
    }

    input, textarea{
        cursor: text;
        border: 0;
        outline: none;
        background-color: transparent;
        flex-direction: row;
        ::placeholder{
            opacity: 0.5;
        }

    button{
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        border: 0;
        marginRadius: 10;
    }
    
    a{
        text-decoration: none;
        color: #D0FA94;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }

   



    }
`

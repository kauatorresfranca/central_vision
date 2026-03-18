import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
}

export const colors = {
    // Azul Royal da logo (Confiança e Tecnologia)
    primary: '#005bb5', 
    // Azul Marinho profundo (Autoridade e Elegância)
    secondary: '#002e6d', 
    // Branco gelo para não cansar a vista (Saúde)
    background: '#f8faff', 
    // Cinza muito escuro para legibilidade máxima (SEO focado em leitura)
    text: '#1a1a1a', 
    // Cor de destaque para CTAs (Botão de WhatsApp / Agendamento)
    accent: '#00c853', 
    white: '#ffffff',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', 'Roboto', sans-serif; // Fontes limpas ajudam no UX
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${colors.background};
        color: ${colors.text};
        -webkit-font-smoothing: antialiased;
    }

    .container {
        max-width: ${breakpoints.desktop};
        margin: 0 auto;
        padding: 0 20px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    button {
        cursor: pointer;
        border: none;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }
`
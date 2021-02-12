import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/isaac-quesada-vovo.jpg';
import { url } from 'inspector';
import { findByLabelText } from '@testing-library/react';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background: linear-gradient(#ffcccc, #ccccff);
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    * {
        box-string: border-box;
        font-family: 'Catarmaran', sans-serif;

    }

    `;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    > p {
        color: #FFF;
    }

    .score {
        color: #FFF;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #FFF, #87F1FF);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow)(2px, 2px, #0085A3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #FFF, #FFCC91);
        border: 2px solid #D38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding 0 40px;
    }

    .start {
        max-width: 200px;
    }
`
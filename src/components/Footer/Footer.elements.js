//
//npm imports
import styled from 'styled-components';
//
//
const footerDivBackgroundColor = '4e48b8'; 
// footer container div 
export const FooterContainer = styled.div`
flex-shrink: 0;
text-align: center;
background-color: #${footerDivBackgroundColor};
border-radius: 30px 30px 30px 30px;
border-width: 15px;
border-style: solid;
border-color: #000000;
color: #eeebeb;
`;
// footer text
export const FooterText = styled.p`
    letter-spacing: 2px;
    color: #eeebeb;
    cursor: pointer;
    font-size: 12px;
    padding: 12px;
    @media screen and (min-width : 769px)
    {
        padding: 18px;
        font-size: 18px;
    }
`;
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

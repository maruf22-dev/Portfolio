import styled,{createGlobalStyle} from 'styled-components';
//
//
// creates a Global Style
const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans', sans-serif;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
}   
`;
export default GlobalStyle;
// cotianer div
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 60px;
    padding-left: 60px;
    @media screen and (max-width : 768px)
    {
        padding-right: 15px;
        padding-left: 10px;
    }
`;
// global button
export const Button = styled.button`
    border-radius: 5px;
    background-color: rgba(255,255,255,0.03);
    backdrop-filter: blur(10px);
    white-space: nowrap;
    padding: ${({ big }) => (big ? '20px' : '14px')};
    margin-left: 20px;
    color: #eeebeb;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    box-shadow: 0 0 0 3px #1a1a1a, 
                0 0 0 3.5px #fbfbfb,
                0 6px 24px 0 #6b6b6b30 ;
    border: none;
    cursor: pointer;
    margin-top:  ${({ topMar }) => (topMar ? topMar : '0')}px;
    &:focus, &:hover {
        transition: all 0.3s ease-out;
        box-shadow: 0 0 0 2px #dbdbdb, 0 0 0 4px #1a1a1a;
        background: #1a1a1a;
    }
    @media screen and (max-width: 960px)
    {
        box-shadow: 0 0 0 0px #dbdbdb, 0 0 0 0px #1a1a1a;
        background: rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.06);
        &:focus, &:hover {
            transition: all 0.3s ease-out;
            box-shadow: 0 0 0 0px #dbdbdb, 0 0 0 0px #1a1a1a;
            background: rgba(255,255,255,0.06);
        }
        padding: 14px;
        width: 90%;
    }
`;
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

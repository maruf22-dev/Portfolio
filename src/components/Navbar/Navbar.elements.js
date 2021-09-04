//
// npm imports
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 
import {FaMagento} from 'react-icons/fa'; 
//
// user defined import : Container : generic container div
import {Container} from '../../App/globalStyle';
//
// nav bar
export const Nav = styled.nav`
background:  #000000;
display: flex;
justify-content: 'center';
align-items:  'center';
font-size: 1.2rem;
position: sticky;
top:0;
z-index: 999;
color: #eeebeb;
`;
// nav container div
export const NavbarContainer = styled(Container)`
color: #eeebeb;
height: 80px;
display: flex;
justify-content: space-between;
${Container};
`;
// nav holder
export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #000000;
    @media screen and (max-width : 960px)
    {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) =>(click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
    }
`;
// ham icon (for mobile)
export const HamIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer; 
    }
`;
// nav item holder
export const NavItem = styled.li`
    display: inline-block;
    text-align: justify;
    @media screen and (max-width : 960px)
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    } 
`;
// nav Button holder
export const NavItemBtn = styled.li`
    outline: none;
    @media screen and (max-width : 960px)
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;
// nav Link
export const NavLinks = styled(Link)`
    color: #dbdbdb;
    text-decoration: none;
    text-align: center;
    padding: 8px 8px;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 2.5px solid transparent;
    &:hover {
        transition: all .5s ease-in;  border-bottom: 2.5px solid #616161;
    }
    @media screen and (max-width: 960px)
    {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
`;
// nav Button Link
export const NavBtnLink = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 100%;
        width: 100%;
        padding: 8px 16px;
        border: none; 
        outline: none;
`;
// navbbar Page title
export const PageTitle = styled.p`
    padding-top: 4px;
    font-size: 20px;
    letter-spacing: 2px;
    color: '#dbdbdb';
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width : 769px)
    {
        font-size: 25px;
        padding-top: 7px;
    }
`;
// NavLogo
export const NavLogo = styled(Link)`
    color: #dbdbdb;
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;
// NavIcon
export const NavIcon = styled(FaMagento)`
    margin: auto;
`;
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

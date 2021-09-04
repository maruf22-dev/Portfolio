// npm import
import styled from 'styled-components'; 
//
//
// section container 
export const SectionContainer = styled.div`
    top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    width: 100vw; 
    @media screen and (max-width : 960px)  and (orientation: landscape) { height: calc(200vh - 160px);}
`;
// container 
//
export const Section = styled.div`
    background-color: rgba(255,255,255,0.03);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 0 3px #1a1a1a, 
                0 0 0 4.5px #fbfbfb80,
                0 8px 32px 0 #6b6b6b30 ;
    display: grid;
    @media screen and (max-width : 960px)
    {
        height:90%;
        width: 90%;
        grid-template-columns: 100%;
        border-radius: 10px;
    } 
    @media screen and (min-width : 961px)
    {
        height:80%;
        width: 80%;
        grid-template-columns: 50% 50%;
        border-radius: 20px;
    }
`;
// info container div
export const InfoContainer = styled.div`
    position: absolute;
    @media screen and (orientation: landscape) and (max-width: 960px)
    {
    }
    @media screen and (min-width : 961px)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    } 
    @media screen and (max-width : 960px)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
    } 
`;
// image container div
// text container div
export const TextWrap = styled.div`
    position: absolute;
    top: 20px;
    height: 85%;
    max-height: 85%;
    min-height: 85%;
    width: 90%;
    overflow: scroll;
    @media screen and (max-width : 960px)
    {
        white-space: normal;
        overflow: scroll;
    } 
    @media screen and (orientation: landscape) and (max-width: 960px) {
        position: absolute;
        visibility: hidden;
        top: -9999px;
    }
    @media screen and (min-width : 961px){
    }
`;
export const LinkWrap = styled.div`
    position: absolute;
    top:90%;
    height: 10%;
    width: 80%;
    display: flex;
    justify-content: center;
    float: left;
`;
export const Link = styled.a`
    text-decoration: none;
    color: #dbdbdb;
    padding-right: 20px;
    font-size: 20px;
    &:focus, &:hover {
        text-decoration: underline;
    }
`;
export const ImgWrap = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (orientation: landscape) and (max-width: 960px)
    {
    }
    @media screen and (min-width : 961px)
    {
        left: 50%;
        height:100%;
        width:50%;
    }
    @media screen and (max-width : 960px)
    {
        top: 50%;
        height: 50%;
        width: 100%;
    } 
`;
// images
export const Img = styled.img`
    opacity: 1;
    @media screen and (max-width : 960px)
    {
        height: 90%;
        width: 90%;
    } 
    @media screen and (orientation: landscape ) and (max-width: 960px)
    {
    }
    @media screen and (min-width : 961px)
    {
        height: 90%;
        width: 90%;
    }
    @media screen and (orientation: landscape ) and (max-height: 400px)
    {
    }
`;
// lottie animation holder (icons)
export const AnimationIconContainer = styled.div`
    position: absolute;
    height: 35%;
    width: 35%;
    top: 8%;
    left: 55%;
    opacity: 0.8;
`;
    // lottie animation holder (background animation)
export const AnimationBackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0%;
    height: 100%;
    width: 100%;
    opacity:0.6;
    @media screen and (min-width : 960px)
    {
        left :  0%;
        height: 100%;
        width:  100%;
    } 
`;
// big text
export const BigText = styled.h1`
    font-size: 36px;
    letter-spacing: 1.5px;
    color: #dbdbdb;
    padding-bottom: 15px;
    padding-top: 15px;
    padding-left: 30px;
    @media screen and (max-width : 960px)
    {
        font-size: 20px;
        padding-bottom: 5px;
        padding-top: 5px;
        padding-left: 5px;
    }
`;
// medium text
export const MediumText = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: #dbdbdb;
    padding: 30px;
    cursor: pointer;
    @media screen and (max-width : 960px)
    {
        letter-spacing: 2px;
        font-size: 16px;
        padding: 5px;
    }
`;
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

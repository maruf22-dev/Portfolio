//
// npm imports
import React from 'react'
import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Tilt from 'react-vanilla-tilt'
//
// user defined : style component 
import {
    Section, InfoContainer, Img, ImgWrap, LinkWrap, Link,
    TextWrap, MediumText, BigText, SectionContainer
} from '../exports';
//
//
// motion {framer motion constructor call}
const MotionImageWrap = motion(ImgWrap);
const MotionMediumText = motion(MediumText);
const MotionBigText = motion(BigText);
const MotionInfoContainer = motion(InfoContainer);
//

const ProjectSection = ({ // project section : functional component
    title, description, hasImage, imageLink, hasSite, siteLink, hasGithub, githubLink
}) => {

    // scrolls page to top smoothly (on reload) . . .
    window.onload = function () { // 
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        //console.log(window.pageYOffset); <- use this for the scroll to top button ( if needed)
    };
    useEffect(() => { // scroll animation
        Aos.init({ duration: 850 });
    }, []);
    // animation styles
    const scrollAnimationStyle =
        [
            '',
            'zoom-in-up',
            'flip-up',
        ];
    // tilt on hover
    return (
        <>
            <SectionContainer>
                <Section home data-aos={scrollAnimationStyle[1]} data-aos-anchor-placement="center-bottom">
                    <MotionInfoContainer>
                        <TextWrap>
                            <MotionBigText>{title}</MotionBigText>
                            <MotionMediumText>{"{ "}{description}{" }"}</MotionMediumText>
                        </TextWrap>
                        <LinkWrap>
                            {hasSite ? (<Link href={siteLink} target="_blank">Website</Link>) : (<></>)}
                            {hasGithub ? (<Link href={githubLink} target="_blank">Github Link</Link>) : (<></>)}
                        </LinkWrap>
                    </MotionInfoContainer>
                    <MotionImageWrap>
                        {hasImage ? (<Img src={imageLink} />) : (<></>)}
                    </MotionImageWrap>
                </Section>
            </SectionContainer>
        </>
    )
}
export default ProjectSection
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

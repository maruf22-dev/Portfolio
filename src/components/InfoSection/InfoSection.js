//
// npm imports
import React from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Tilt from 'react-vanilla-tilt'
//
// user defined : style component 
import {
    Section, InfoContainer, AnimationIconContainer,
    AnimationBackgroundContainer, Img, ImgWrap,
    TextWrap, MediumText, BigText, Button, SectionContainer
} from '../exports';
//
//
// motion {framer motion constructor call}
const MotionImageWrap = motion(ImgWrap);
const MotionMediumText = motion(MediumText);
const MotionBigText = motion(BigText);
const MotionInfoContainer = motion(InfoContainer);
const MotionButton = motion(Button);
//
// removes spaces from string
const removeSpaces = (title) => { // param : string
    let extract = '';
    if (title === undefined) return null;
    for (let i of title)
        if (i !== ' ') extract += i;
    return extract;
}
// Text variant for framer motion animation
const TextVariant = {
    hover: {
        originX: 0,
        originY: 0,
        scale: 1.2,
        transition: { type: 'spring', duration: .2, stiffness: 500 },
    },
};
// Bitton variant for framer motion animation
const ButtonVariant = {
    hover: {
        originX: 0,
        originY: 0,
        scale: 1.15,
        transition: { type: 'spring', duration: .2, stiffness: 500 },
    },
};
// ps : stifness -- == -- elasticity
//
//
const InfoSection = ({ // info section : functional component
    firstMeduiumText, secondMeduiumText, firstBigText, fourthMediumText, thirdMediumText,
    fifthMediumText, padbtm, imgSource, copyButtonText,
    animationXfrom, animationXImg, animationYImg, animationYfrom,
    infoDelay, imgDelay, infoDuration, imgDuration, showLottieAsIcon,
    showLottieAsBackground, LottieSource, LottieIconSource, scrollAnimationIndex
}) => {
    let copiedText = removeSpaces(fourthMediumText);
    // toast - notification ( animated)
    const notify = () => toast.dark('Copied Text to clipboard', { // param : void 
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
    });
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
                <ToastContainer style={{ borderRadius: "20px" }} />
                <SectionContainer>
                <Section home data-aos={scrollAnimationStyle[scrollAnimationIndex]} data-aos-anchor-placement="top-bottom">
                    <MotionInfoContainer
                        initial={{ x: animationXfrom, y: animationYfrom }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ delay: infoDelay, duration: infoDuration, type: 'spring' }}>
                        <TextWrap>
                            {firstMeduiumText ? (<MotionMediumText  padbtm={padbtm} variants={TextVariant} whileHover={"hover"}>{firstMeduiumText} </MotionMediumText>) : (null)}
                            {secondMeduiumText ? (<MotionMediumText  variants={TextVariant} whileHover={"hover"}>{secondMeduiumText}</MotionMediumText>) : (null)}
                            {firstBigText ? (<MotionBigText  variants={TextVariant} whileHover={"hover"}>{firstBigText}</MotionBigText>) : (null)}
                            {thirdMediumText ? (<MotionMediumText  variants={TextVariant} whileHover={"hover"}>{thirdMediumText}</MotionMediumText>) : (null)}
                            {fourthMediumText ? (<MotionMediumText  variants={TextVariant} whileHover={"hover"}>{fourthMediumText}</MotionMediumText>) : (null)}
                            {(copyButtonText) ? (
                                <CopyToClipboard text={copiedText}>
                                    <MotionButton notNavButton={true} primary topMar={30} fontBig={true} big={true} onClick={notify} variants={ButtonVariant} whileHover={""}>{copyButtonText} </MotionButton>
                                </CopyToClipboard>) : (null)}
                            {fifthMediumText ? (<MotionMediumText  padtp variants={TextVariant} whileHover={"hover"}>{fifthMediumText}</MotionMediumText>) : (null)}
                        </TextWrap>
                    </MotionInfoContainer>
                    <MotionImageWrap initial={{ x: animationXImg, y: animationYImg, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: imgDelay, duration: imgDuration, type: 'spring' }} >
                        <Img src={imgSource} />
                        {(showLottieAsIcon === true) ? (
                            <AnimationIconContainer >
                                <lottie-player src={LottieIconSource} mode="bounce" background="transparent" speed="1" loop autoplay></lottie-player>
                            </AnimationIconContainer>) : (null)}
                        {(showLottieAsBackground === true) ? (
                            <AnimationBackgroundContainer >
                                <lottie-player src={LottieSource} mode="bounce" background="transparent" speed="1" loop autoplay></lottie-player>
                            </AnimationBackgroundContainer>) : (null)}
                    </MotionImageWrap>
                </Section>          
                </SectionContainer>
        </>
    )
}
export default InfoSection
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

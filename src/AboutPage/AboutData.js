import img2 from '../assets/svg2.svg';
import img3 from '../assets/svg3.svg';
import img4 from '../assets/svg4.svg';
import img5 from '../assets/svg5.svg';
//
//
const quotes =
    [
        { quote: 'A winner is a dreamer who never gives up.', by: '- Nelson Mendela' },
        { quote: 'The secret of getting ahead is getting started.', by: '– Mark Twain' },
        { quote: 'Impossible is just an opinion.', by: '- Paulo Cohelo' },
        { quote: 'If something is important enough, even if the odds are stacked against you, you should still do it.', by: '- Elon Musk' },
        { quote: 'Wherever you go, go with all your heart.', by: '- Confucius' },
        { quote: '', by: "Don't quit trying . . ." },
];
//
//
export const aboutObj_1 =
{
    lightBackground: true,
    firstMeduiumText: 'I am currently doing my Bachelors in computer science.',
    firstBigText: '@ North South University',
    fourthMediumText: 'Dhaka, Bangladesh',
    imgSource: img2,
    animationXfrom: -1200,
    animationXImg: 1200,
    infoDelay: 1,
    imgDelay: 1,
    infoDuration: 1,
    imgDuration: 1,
    showLottieAsIcon: true,
    LottieIconSource: 'https://assets6.lottiefiles.com/packages/lf20_ykqqu6va.json',
    scrollAnimationIndex: 1,
};
export const aboutObj_2 =
{
    lightBackground: false,
    firstMeduiumText: 'I am extremely passionate about problem solving and competitive programing.',
    firstBigText: '@ maruf22',
    fourthMediumText: 'codeforces, codechef, atcoder . . .',
    imgSource: img3,
    showLottieAsBackground: true,
    LottieSource: 'https://assets9.lottiefiles.com/packages/lf20_Aerz0y.json',
    scrollAnimationIndex: 1,
};
export const aboutObj_3 =
{
    lightBackground: true,
    firstMeduiumText: 'I am always interested to learn about new technologies and frameworks.',
    firstBigText: 'learnNewStuff++ ;',
    fourthMediumText: "current stack : c, c++, java, javascript (node, react) ",
    imgSource: img4,
    showLottieAsIcon: true,
    LottieIconSource: 'https://assets7.lottiefiles.com/packages/lf20_JO4FIR.json',
    scrollAnimationIndex: 1,
};
let randInd = Math.floor(Math.random() * quotes.length);
export const aboutObj_4 =
{
    lightBackground: false,
    firstMeduiumText: quotes[randInd].quote,
    firstBigText: quotes[randInd].by,
    imgSource: img5,
    showLottieAsBackground: true,
    LottieSource: 'https://assets9.lottiefiles.com/packages/lf20_Aerz0y.json',
    scrollAnimationIndex: 1,
}
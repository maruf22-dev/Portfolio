import React from 'react';
//
import { Navbar, InfoSection } from '../components/exports';
import { homeObj_1 } from './HomeData';
// eslint-disable-next-line
const title = '${Home}';
const Home = () => {
    return (
        <>
            <Navbar pageTitle={title} animationYfrom={-250} infoDelay = {2} infoDuration ={1}/>
            <InfoSection {...homeObj_1} />
        </>
    )
}
export default Home
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

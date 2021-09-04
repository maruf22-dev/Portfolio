import React from 'react'
import { motion } from 'framer-motion';
//
import { Navbar, Footer, InfoSection } from '../components/exports';
import { aboutObj_1, aboutObj_2, aboutObj_3, aboutObj_4 } from './AboutData';
// eslint-disable-next-line
const title = '${About}';
const About = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} >
                <Navbar pageTitle={title} animationYfrom={-250} infoDelay={2} infoDuration={1} />
                <InfoSection {...aboutObj_1} />
                <InfoSection {...aboutObj_2} />
                <InfoSection {...aboutObj_3} />
                <InfoSection {...aboutObj_4} />
                <Footer></Footer>
            </motion.div>
        </>
    )
}
export default About

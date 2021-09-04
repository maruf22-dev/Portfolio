import React from 'react'
import { motion } from 'framer-motion';
//
import {Navbar, InfoSection, Footer} from '../components/exports'
import { contactObject_1, contactObject_2, contactObject_3, contactObject_4 } from './contactsData'
//
//
// eslint-disable-next-line
const title = '${Contact}';
const Contact = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navbar pageTitle={title} animationYfrom={-250} infoDelay={2} infoDuration={1} />
                <InfoSection {...contactObject_1} />
                <InfoSection {...contactObject_2} />
                <InfoSection {...contactObject_3} />
                <InfoSection {...contactObject_4} />
                <Footer></Footer>
            </motion.div>
        </>
    )
}
export default Contact

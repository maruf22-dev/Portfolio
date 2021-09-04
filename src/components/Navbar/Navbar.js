//
// npm imports
import React from 'react'
import { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';
//
// user define imports : necessary styled components, icons . . .
import {
    Nav, NavbarContainer, Button,
    NavLogo, NavIcon, HamIcon, FaBars, FaTimes,
    NavMenu, NavItem, NavLinks,
    NavItemBtn, NavBtnLink, PageTitle
} from '../exports'
//
//
//
const title = 'Page=' 
const Navbar = ({ pageTitle, animationYfrom, infoDelay, infoDuration }) => { // functional component 
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [button, setButton] = useState(true);
    useEffect(() => { // effect used to show / hide hamIccon based on (mobile/ desktop)
        if (window != null) 
            (window.innerWidth <= 960) ? setButton(false) : setButton(true);
    }, []);
    return (
        <>
            <IconContext.Provider value={{ color: '#dbdbdb' }}>
                <motion.div initial={{ y: animationYfrom }} animate={{ y: 0 }} transition={{ type: 'spring', delay: infoDelay, duration: infoDuration, stiffness: 90 }} >
                    <Nav> <NavbarContainer>
                        <PageTitle> <NavLogo to='/'> <NavIcon /> </NavLogo> &nbsp; {title}{pageTitle} {';'} </PageTitle>
                        <HamIcon onClick={handleClick}> {click ? <FaTimes /> : <FaBars />} </HamIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                 <NavLinks to='/'> {'Home'} </NavLinks>
                            </NavItem> 
                            <NavItem> 
                                <NavLinks to='/about'> {'About'} </NavLinks> 
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/project'> {'Project'} </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {(button) ?
                                    (<NavBtnLink to='/contact'> <Button primary> Contact Me </Button> </NavBtnLink>)
                                    :
                                    (<NavBtnLink to='/contact'> <Button fontBig primary> Contact Me </Button> </NavBtnLink>)
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer> </Nav>
                </motion.div>
            </IconContext.Provider>
        </>
    )
}
export default Navbar;
//   __  __          _____  _    _ ______ ___  ___
//  |  \/  |   /\   |  __ \| |  | |  ____|__ \|__ \ 
//  | \  / |  /  \  | |__) | |  | | |__     ) |  ) |
//  | |\/| | / /\ \ |  _  /| |  | |  __|   / /  / /
//  | |  | |/ ____ \| | \ \| |__| | |     / /_ / /_
//  |_|  |_/_/    \_\_|  \_\____/|_|    |____|____|
//

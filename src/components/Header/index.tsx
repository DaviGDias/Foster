import style from './style.module.scss'
import {AiOutlineInstagram} from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import { Container, HeaderContainer, MobileIcon, NavContainer, NavLink } from './style'


export function Header(){

    const [isOpen, setIsOpen] = useState(false)

    function handleIsOpen(){
        setIsOpen(!isOpen)
    }
    
    return(
       <Container>
            <HeaderContainer>
             
                     <img src='/images/Logo2.jpg' alt=''/>
               

                <MobileIcon onClick={handleIsOpen}>
                    {isOpen ? <FaTimes size={32} /> : <FaBars size={32} /> }
                </MobileIcon>

                <NavContainer open={isOpen}>
                    <NavLink href='/' onClick={handleIsOpen}>
                        Home
                    </NavLink>
                    <NavLink href='sobre' onClick={handleIsOpen}>
                        Sobre
                    </NavLink>
                    <NavLink href='' onClick={handleIsOpen}>
                        Profissionais
                    </NavLink>
                    <NavLink href='' onClick={handleIsOpen}>
                        Contato
                    </NavLink>
                    <NavLink target={'_blank'} href='https://www.instagram.com/studiofosterpelotas/' onClick={handleIsOpen}>
                        <AiOutlineInstagram size={32} />
                    </NavLink>
                </NavContainer>
                
            </HeaderContainer>
       </Container>
    )
}

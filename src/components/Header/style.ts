import Link from 'next/link';
import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    z-index: 99999;
   
`;

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
 



    img{
        width: 4rem;
    }

`;


export const MobileIcon = styled.div`
    cursor: pointer;

@media screen and (min-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        display: none;
    }

`;
interface isOpenProps {
    open: boolean
}

export const NavContainer = styled.nav<isOpenProps>`
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px){
     
        background: #e1e1e1;
        flex-direction: column;
        position: absolute;
        justify-content: flex-start;
        align-items: center;
        left: ${({open}) => open ? '0' : '-100%' };
        width: 100%;
        height: 85%;
        top: 98px;
        transition: 0.5s all ease;
    }

`;

export const NavLink = styled(Link)`
    
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 100%;
    height: 100%;
    transition: 0.5s all ease;
    


    img{
        margin-top: -1rem;
    }

    &:hover{
        color: #F96000;
       
    }
`;



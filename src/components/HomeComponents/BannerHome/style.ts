import styled from "styled-components";

export const Container = styled.div`
    background-image:  url('/images/ImagemHome.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

export const ContainerContent = styled.div`
   padding: 2rem 2rem;
   display: flex;
   flex-direction: column;

   @media screen and (min-width: 1280px){
       height: 80vh;
        
    }


    
`;

export const Title = styled.h1`
    color: #fff;

    @media screen and (max-width: 1260px){
        
        font-size: 3rem;
        max-width: 600px;
    }
    @media screen and (min-width: 1280px){
        font-size: 4rem;
        max-width: 900px;
        
    }

    

`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;

    max-width: 600px;
`;

export const DivSegura = styled.div`
    width: 600px;

`;
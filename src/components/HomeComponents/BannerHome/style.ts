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
    justify-content: center;

   @media screen and (min-width: 1280px){
       height: 80vh;
        
    }


    
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    max-width: 450px;

  @media screen and (min-width: 1200px) { 
  
        font-size: 2.5rem;
        max-width: 700px;      
   }

@media screen and (min-width: 1300px) { 
  
    font-size: 3.5rem;
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

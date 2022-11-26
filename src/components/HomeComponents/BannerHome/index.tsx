import { Button } from "../Button/style";
import { Container, ContainerContent, DivSegura, Subtitle, Title } from "./style";

export function BannerHome(){
    return(
        <Container>
            <ContainerContent>

               
                <Title>
                    Chegou novo conceito de treinamento físico <br /> personalizado.
                </Title>
                
               
                <Subtitle>
                Excelência no serviço prestado, independente da modalidade escolhida.Metodologia de treinamento funcional própria e coletiva. Não há turmas nem horários fixos.
                </Subtitle>

                <Button href='/sobre'>Saiba Mais</Button>
            </ContainerContent>
        </Container>
    )
}
import styled from 'styled-components'
import variaveis from '../../styles/variaveis';
import { Botao } from '../../styles';


export const CardContainer = styled.div`
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const ContactInfo = styled.div`
    margin-top: 10px;

    p {
        margin: 5px 0;
    }
`
export const ContactForm = styled.div`
    display: grid;
    
`

export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
    
`

export const BotaoCancelarRemover = styled(Botao)`
    background-color: ${variaveis.vermelho};
`
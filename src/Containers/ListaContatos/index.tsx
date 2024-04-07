
import { useSelector } from 'react-redux'
import { MainContainer, Titulo } from '../../styles'
import Contato from '../../models/Contato'
import { ListItem } from './styles'
import ContatoCard from '../../components/Contato'

const ListaDeContatos = () => {
    const contatos = useSelector((state: any) => state.contatos.itens)

    return (
        <MainContainer>
            <Titulo>Lista de Contatos</Titulo>
            <ul>
                {contatos.map((contato: Contato) => (
                    <ListItem key={contato.id}>
                        <ContatoCard {...contato} />
                    </ListItem>
                ))}
            </ul>
        </MainContainer>
    )
}

export default ListaDeContatos

import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react';

import { cadastrar } from '../../store/reducers/contatos';
import * as S from './styles'
import { BotaoSalvar, Campo, Titulo } from '../../styles';

function BarraLateral() {
    const dispatch = useDispatch()

    const [nome, setNome] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    const cadastrarContato = (e: FormEvent) =>{
        e.preventDefault()

        dispatch(
            cadastrar({
                nome,
                tel,
                email
            })
        )

        setNome('')
        setTel('')
        setEmail('')
    }

    return (
        <S.Aside>
            <Titulo>Adicionar Contato</Titulo>
            <S.AsideForm onSubmit={cadastrarContato}>
            <Campo
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <Campo
                type="text"
                placeholder="Telefone"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
            />
            <Campo
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <BotaoSalvar type='submit'>Adicionar Contato</BotaoSalvar>
            </S.AsideForm> 
        </S.Aside>
    );
}

export default BarraLateral;

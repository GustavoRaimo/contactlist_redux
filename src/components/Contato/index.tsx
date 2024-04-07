import { useState } from 'react';
import { useDispatch } from 'react-redux';

import ContatoClass from '../../models/Contato';
import * as S from './styles';
import { editar, remover } from '../../store/reducers/contatos';
import { Botao, BotaoSalvar, Campo } from '../../styles';

type Props = ContatoClass;

const Contato = ({
    nome: nomeOriginal,
    tel: telOriginal,
    email: emailOriginal,
    id
}: Props) => {
    const dispatch = useDispatch();
    
    const [estaEditando, setEstaEditando] = useState(false);
    const [nome, setNome] = useState(nomeOriginal);
    const [tel, setTel] = useState(telOriginal);
    const [email, setEmail] = useState(emailOriginal);

    function cancelarEdicao() {
        setEstaEditando(false);
        setNome(nomeOriginal);
        setTel(telOriginal);
        setEmail(emailOriginal);
    }

    return (
        <S.CardContainer>
            {estaEditando ? (
                <S.ContactForm>
                    <Campo value={nome} onChange={(e) => setNome(e.target.value)} />
                    <Campo value={tel} onChange={(e) => setTel(e.target.value)} />
                    <Campo value={email} onChange={(e) => setEmail(e.target.value)} />
                    <S.BarraAcoes>
                        <BotaoSalvar onClick={() => {
                            dispatch(editar({ id, nome, tel, email }));
                            setEstaEditando(false);
                        }}>Salvar</BotaoSalvar>
                        <S.BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</S.BotaoCancelarRemover>
                    </S.BarraAcoes>
                </S.ContactForm>
            ) : (
                <S.ContactInfo>
                    <h2>{nome}</h2>
                    <p>Telefone: {tel}</p>
                    <p>Email: {email}</p>
                    <S.BarraAcoes>
                        <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                        <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
                    </S.BarraAcoes>
                </S.ContactInfo>
            )}
        </S.CardContainer>
    );
}

export default Contato;

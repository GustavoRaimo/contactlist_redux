
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';

type ContatosState = {
    itens: Contato[]
}


const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: 'Gustavo Raimo',
            tel: '(99) 99999-9999',
            email: 'gustavo.teste@gmail.com'
        },
        {
            id: 2,
            nome: 'Flavio Alves',
            tel: '(99) 99999-9999',
            email: 'flavio.teste@gmail.com'
        },
        {
            id: 3,
            nome: 'Diego Seixas',
            tel: '(99) 99999-9999',
            email: 'diego.teste@gmail.com'
        },
    ],
};

const contactSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoJaExiste = state.itens.find(
                (contato) =>
                    contato.nome.toLocaleLowerCase() === action.payload.nome.toLocaleLowerCase()
            )
            if (contatoJaExiste) {
                alert('Já existe um contato com esse nome')
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(contatoNovo)
            }
        }, 
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(
                (t) => t.id === action.payload.id
            )
            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },

    },
});

export const { cadastrar, remover, editar } = contactSlice.actions;
export default contactSlice.reducer;

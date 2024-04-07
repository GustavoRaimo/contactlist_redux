import { Provider } from 'react-redux'

import store from './store'
import EstiloGlobal, { Container } from './styles';
import BarraLateral from './Containers/BarraLateral';
import ListaContatos from './Containers/ListaContatos';


function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal/>
      <Container>
        <BarraLateral/>
        <ListaContatos/>
      </Container>
    </Provider>
  )
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';

import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaListaProdutos from './paginas/PaginaListaProdutos/PaginaListaProdutos';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: '/lista-produtos',
    element: <PaginaListaProdutos />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;

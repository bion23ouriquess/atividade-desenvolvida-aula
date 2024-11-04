import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return <Principal titulo="Página Inicial">

    <BotaoCustomizado cor={'primaria'} aoClicar={() => navigate('/lista-produtos')}>
      Lista de Produtos
    </BotaoCustomizado>

  </Principal>;
};

export default PaginaInicial;

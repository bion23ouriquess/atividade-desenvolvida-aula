import "./PaginaListaProdutos.css";
import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { FaTrashCan } from "react-icons/fa6";

const PaginaListaProdutos = () => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [listaProdutos, setListaProdutos] = useState([]);

  const adicionarNaLista = () => {
    if (nomeProduto && nomeProduto.trim() && preco && preco.trim()) {
      listaProdutos.push({ nomeProduto, preco});
      setListaProdutos([...listaProdutos]);
    } else {
      alert("Preencha o Nome e Preço do produto");
    }
    setNomeProduto("");
    setPreco("");
    document.getElementById("campoDescricao").focus();
  };

  const removerDaLista = (index) => {
    if (confirm(`Tem certeza que deseja remover o produto?`)) {
      listaProdutos[index].feita;
      listaProdutos.splice(index, 1);
      setListaProdutos([...listaProdutos]);
    }
  };

  return (
    <Principal
      titulo={`Lista de Produtos(${listaProdutos.length})`}
      voltarPara={"/"}
    >
      <div className="descricao-produto_root">
        <input
          className="nome-produto"
          id="campoDescricao"
          type="text"
          placeholder="Nome do Produto"
          value={nomeProduto}
          onChange={(event) => setNomeProduto(event.target.value)}
        />

        <input
          className="preco-produto"
          id="campoDescricao"
          type="text"
          placeholder="Preço do Produto"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
        />

        <BotaoCustomizado cor={"secundaria"} aoClicar={adicionarNaLista}>
          Adicionar
        </BotaoCustomizado>
      </div>
      {listaProdutos.map((item, index) => {
        return (
          <div key={index} className="lista-produtos_item">
            <span className="produto-nome_listado">
              <strong>Nome: </strong>
              {item.nomeProduto}
            </span>
            <span>
              <strong>Preço: </strong>
              R${item.preco}
            </span>
              <FaTrashCan color="red" onClick={() => removerDaLista(index)} />
          </div>
        );
      })}

      {listaProdutos.length === 0 && (
        <span className="pagina-lista-produtos_mensagem-vazia">
          Não há produtos para listar.
        </span>
      )}
    </Principal>
  );
};

export default PaginaListaProdutos;
import styles from "./App.module.css";
import FormularioProduto from "../FormularioProduto/FormularioProduto";
import ListaEstoque from "../ListaEstoque/ListaEstoque";
import { useState } from "react";

function App() {
    const [total, setTotal] = useState(1000);
    const [produtos, setProdutos] = useState([])

    const handlerAddProduct = ({nome, quantidadeEstoque, valorCompra, valorVenda}) => {
        setProdutos([...produtos, {
            id: Date.now(),
            nome,
            quantidadeEstoque,
            valorCompra,
            valorVenda
        }])
    }
    return (
        <div className={styles.aplicativo}>
            <h1 className={styles.titulo}>Gerenciador de Estoque</h1>
            <h2 className={styles.caixa}>Caixa: R$ {parseFloat(total)}</h2>
            <FormularioProduto handlerAddProduct={handlerAddProduct}/>
            {/* <ListaEstoque produtos={produtos}/> */}
        </div>
    )
}

export default App;
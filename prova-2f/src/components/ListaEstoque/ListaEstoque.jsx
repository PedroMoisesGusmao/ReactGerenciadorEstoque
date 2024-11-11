import styles from "./ListaEstoque.module.css";
import ItemEstoque from "../ItemEstoque/ItemEstoque.jsx";

function ListaEstoque({ produtos, buyProduct }) {
    return (
        <div>
        <ul>
            {produtos.map((produto) => {                    
                return <ItemEstoque key={produto.id} produto={produto} buyProduct={buyProduct}/>;
            }
            )}
        </ul>
    </div>
    )
}

export default ListaEstoque;
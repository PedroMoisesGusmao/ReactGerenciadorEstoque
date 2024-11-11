import styles from "./ListaEstoque.module.css";
import ItemEstoque from "../ItemEstoque/ItemEstoque";

function ListaEstoque({ produtos }) {
    return (
        <div>
        <ul>
            {produtos.map((produto) => {                    
                return <ItemEstoque key={produto.id} produto={produto}/>;
            }
            )}
        </ul>
    </div>
    )
}

export default ListaEstoque;
import styles from "./ItemEstoque.module.css";

function ItemEstoque({ produto, buyProduct }) {
    return (
        <>
            <div className={`${styles.produtoItem} ${produto.quantidade ?
                styles.estoqueNormal :
                styles.estoqueBaixo
            }`}>
                <span className={styles.nomeProduto}>{produto.nome}</span>
                <span className={styles.quantidadeProduto}>{produto.quantidadeEstoque}</span>
                <span className={styles.valorProduto}>R$ {parseFloat(produto.valorVenda)}</span>
                <button className={`${styles.botoesAcoes} ${styles.botaoComprar}`} onClick={(e) => {
                    buyProduct(produto.id, produto.valorCompra)
                }}>+</button>
                <button className={`${styles.botoesAcoes} ${styles.botaoVender}`}>-</button>
            </div>
        </>
    )
}

export default ItemEstoque;
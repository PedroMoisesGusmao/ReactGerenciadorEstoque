import styles from "./ItemEstoque.module.css";

function ItemEstoque({ produto }) {
    return (
        <>
            <div className={`${styles.produtoItem} ${produto.quantidade ?
                styles.estoqueNormal :
                styles.estoqueBaixo
            }`}>
                <span className={styles.nomeProduto}>{produto.nome}</span>
                <span className={styles.quantidadeProduto}>{produto.quantidade}</span>
                <span className={styles.valorProduto}>{produto.valor}</span>
                <button className={`${styles.botoesAcoes} ${styles.botaoComprar}`}></button>
            </div>
        </>
    )
}

export default ItemEstoque;
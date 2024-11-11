import styles from "./FormularioProduto.module.css";

function FormularioProduto({ handlerAddProduct }) {
    return (
        <>
            <div className={styles.formulario}>
                <label className={styles.label}>Nome do Produto:</label>
                <input id={styles.nome_produto} className={styles.input}></input>
                <label className={styles.label}>Quantidade em Estoque:</label>
                <input id={styles.quantidade_estoque} className={styles.input}></input>
                <label className={styles.label}>Valor de Compra:</label>
                <input id={styles.valor_compra} className={styles.input}></input>
                <label className={styles.label}>Valor de Venda:</label>
                <input id={styles.valor_venda} className={styles.input}></input>
                <button onClick={(e) => {
                    console.log("clicado");
    
                    const nome = document.getElementById(styles.nome_produto).value.trim();
                    
                    const quantidade = parseInt(document.getElementById(styles.quantidade_estoque).value);
                    const valorCompra = parseFloat(document.getElementById(styles.valor_compra).value);
                    const valorVenda = parseFloat(document.getElementById(styles.valor_venda).value);
                
                    handlerAddProduct({
                        nome,
                        quantidade,
                        valorCompra,
                        valorVenda
                    })
                }} className={styles.botao}>Adicionar Produto</button>
            </div>
        </>
    )
}

export default FormularioProduto;
import styles from "./Card.module.css";
import certo from "../../assets/certo.png";
import errado from "../../assets/errado.png";

function Card(props) {
    let preco;
    if (props.free) {
        preco =
        <h1 className={styles.preco}>$0</h1>;
    } else if (props.premium) {
        preco =
        <h1 className={styles.preco}>$99</h1>;
    } else if (props.pro) {
        preco =
        <h1 className={styles.preco}>$199</h1>;
    }
    return (
    <>
    <div className={styles.card}>
        <h1>{props.title}</h1>
        <p className={`${styles.item}`}><img src={certo}></img>  PNG templates</p>
        <p className={`${styles.item} ${props.free ? styles.disabled : styles.enabled }`}><img src={`${props.free ? errado : certo}`}></img> Figma responsive
        components</p>
        <p className={`${styles.item} ${props.free || props.premium ? styles.disabled : styles.enabled }`}> <img src={`${props.free || props.premium ? errado : certo}`}></img> Constant updates</p>
        <p className={`${styles.item} ${props.free || props.premium ? styles.disabled : styles.enabled }`}> <img src={`${props.free || props.premium ? errado : certo}`}></img> Custom templates</p>

        {preco}
        <p className={styles.per_mouth}>Per month</p>
    </div>
    </>
    )
}

export default Card;
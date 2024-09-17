import styles from "./Card.module.css";
function Card(props) {
    return (
        <>
            <div className={styles.card}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.description}</p>
            </div>
        </>
    )
}

export default Card;
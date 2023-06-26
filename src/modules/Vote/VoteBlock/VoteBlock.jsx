import styles from "./vote-block.module.scss"

const VoteBlock = ({title}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>{title}</h4>
        </div>
    )
}

export default VoteBlock;
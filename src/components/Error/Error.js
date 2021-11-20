import styles from './Error.module.css'

export default function Error(props) {
    const { error } = props

    return (
        <div className={styles.error}>
            { error }
        </div>
    )
}
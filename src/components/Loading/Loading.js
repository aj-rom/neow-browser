import styles from './Loading.module.css'

export default function Loading() {

    return (

        <div id='loading' className={styles.center}>
            <div className={styles.loading}/>
            <p>Loading</p>
        </div>
    )
}
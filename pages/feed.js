import Meta from "../src/components/Meta/Meta";
import styles from "../src/styles/Home.module.css";
import SearchContainer from "../src/containers/Search/SearchContainer";

export default function Feed() {

    const meta = {
        description: 'Test'
    }

    return (
        <div className={styles.container}>

            <Meta title='Feed' meta={meta}/>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1>
                        <b className={styles.b}>NeoW Feed</b>
                    </h1>
                    <p>Search for objects currently near Earth.</p>
                </div>
                <SearchContainer/>
            </main>

        </div>
    )
}
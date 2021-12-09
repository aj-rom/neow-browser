import Meta from "../components/Meta/Meta";
import styles from "../styles/Home.module.css";
import SearchContainer from "../containers/Search/SearchContainer";
import { Container } from "react-bootstrap";

export default function Feed() {

    const meta = {
        description: "Search NEO's within a given range of dates."
    }

    return (
        <Container>

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

        </Container>
    )
}
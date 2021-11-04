import styles from '../src/styles/Home.module.css'
import SearchContainer from "../src/containers/Search/SearchContainer";
import Footer from "../src/components/Footer/Footer";
import PageHead from "../src/components/Head/Head";

export default function Home() {
  return (
    <div className={styles.container}>
        <PageHead/>
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>
                    <b className={styles.b}>NeoW Browser</b>
                </h1>
                <p>Search for objects currently near Earth.</p>
            </div>
            <SearchContainer/>
        </main>
        <Footer/>
    </div>
  )
}

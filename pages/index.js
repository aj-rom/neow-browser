import styles from '../src/styles/Home.module.css'
import Link from 'next/link'
import Meta from "../src/components/Meta/Meta";

export default function Home() {

    const pageMeta = {
        description: "A browser for today's current Near Earth Object. API's provided by NASA's JPL Team",
        keywords: "Asteroid, NEO, NASA, JPL, ..."
    }

    return (
        <div className={styles.container}>
            <Meta title='Home' meta={pageMeta}/>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1>
                        <b className={styles.b}>Browser</b>
                    </h1>
                    <p>Detailed day by day browser of Near Earth Objects</p>
                </div>
                <Link href={{pathname: '/feed'}}>Feed</Link>
            </main>
        </div>
    )
}

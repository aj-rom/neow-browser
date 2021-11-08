import styles from './NavBar.module.css'
import NavLink from "./NavLink";

export default function NavBar() {

    const pageUrls = {
        browser: { pathname: '/'},
        feed: { pathname: '/feed'}
    }

    const { browser, feed } = pageUrls

    return (
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <NavLink link={browser}>Browser</NavLink>
                <NavLink link={feed}>Feed</NavLink>
            </ul>
        </nav>
    )
}


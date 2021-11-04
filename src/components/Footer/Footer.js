
import footerStyles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            Made by <a href='https://github.com/aj-rom'>A.J. Romaniello</a> | <a href='https://github.com/aj-rom/neo-browser'>Source Code</a>
            <br/>
            API Services by <a href='https://github.com/SpaceRocks/'>The SpaceRocks Team</a>
        </footer>
    )
}
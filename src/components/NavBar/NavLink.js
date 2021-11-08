import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NavLink.module.css";

export default function NavLink(props) {
    const router = useRouter()
    const isActive = () => {
        return props.link.pathname === router.pathname ? "nav-item active" : "nav-item";
    }

    return (
        <li className={isActive()}>
            <Link className={styles.link} href={props.link}>
                <a>{ props.children }</a>
            </Link>
        </li>
    )
}
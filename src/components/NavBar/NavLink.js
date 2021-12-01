import {useRouter} from "next/router";
import Link from "next/link";

export default function NavLink(props) {
    const router = useRouter()
    const isActive = () => {
        return props.link.pathname === router.pathname ? "nav-item active" : "nav-item";
    }

    return (
        <li className={isActive()}>
            <Link href={props.link.pathname}>
                <a className='nav-link'>{ props.children }</a>
            </Link>
        </li>
    )
}
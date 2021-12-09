import { useRouter } from "next/router"
import { Nav } from 'react-bootstrap'

export default function NavLink(props) {
    const router = useRouter()
    const isActive = () => {
        return props.href.pathname === router.pathname ? "nav-item active" : "nav-item";
    }

    return (
        <Nav.Link href={props.href.pathname} className={isActive()}>
            { props.children }
        </Nav.Link>
    )
}
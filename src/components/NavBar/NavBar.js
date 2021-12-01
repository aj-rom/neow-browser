import NavLink from "./NavLink";

export default function NavBar() {

    const pageUrls = {
        browser: { pathname: '/'},
        feed: { pathname: '/feed'}
    }

    const { browser, feed } = pageUrls

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand'>NEO Browser</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsable" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className='collapse navbar-collapse' id='collapsable'>
                <ul className='navbar-nav mr-auto'>
                    <NavLink link={browser}>Browser</NavLink>
                    <NavLink link={feed}>Feed</NavLink>
                </ul>
            </div>
        </nav>
    )
}


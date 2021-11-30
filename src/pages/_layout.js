import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout(props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="./favicon.ico" />
                <meta name="author" content="John Doe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <div className='container-fluid'>
                <NavBar/>
                {props.children}
                <Footer/>
            </div>
        </>
    )
}
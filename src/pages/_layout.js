import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout(props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" href="./favicon.ico" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Head>

            <div className='container-fluid'>
                <NavBar />
                {props.children}
                <Footer />
            </div>
        </>
    )
}
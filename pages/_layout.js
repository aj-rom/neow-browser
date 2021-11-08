import Head from "next/head";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";


export default function Layout(props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="./favicon.ico" />
                <meta name="author" content="John Doe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <NavBar/>
                {props.children}
            <Footer/>
        </>
    )
}
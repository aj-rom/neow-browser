import Head from "next/head";
import Header from "../src/components/Header/Header";
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

            <Header/>
                {props.children}
            <Footer/>
        </>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="./favicon.ico" />
        <meta name="author" content="A.J. Romaniello"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <Container fluid='xxl'>
        <NavBar/>
        {props.children}
        <Footer/>
      </Container>
    </>
  )
}

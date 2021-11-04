import Head from 'next/head'

export default function PageHead() {
    return (
        <Head>
            <title>NeoW Browser</title>
            <meta name="description" content="Near Earth Object Web Service Browser. Used to gain more information on objects passing by Earth." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
import Head from 'next/head'

export default function Meta(props) {
  function getMeta() {
    const { meta } = props

    return Object.entries(meta).map( (arr, idx) => {
      return <meta key={idx} name={arr[0]} content={arr[1]}/>
    })
  }

  return (
    <Head>
      <title>NeoW Browser - {props.title}</title>
      {getMeta()}
    </Head>
  )
}

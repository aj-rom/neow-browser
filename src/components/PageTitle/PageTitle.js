export default function PageTitle(props) {
  return (
    <div className='text-center'>
      <h1 className='text-primary'>
        <b>{ props.title }</b>
      </h1>
      <p className='text-dark'> { props.children }</p>
    </div>
  )
}

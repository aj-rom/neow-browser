export default function Error(props) {
  const { error } = props

  return (
    <div className='text-lg-center text-danger'>
      { error }
    </div>
  )
}

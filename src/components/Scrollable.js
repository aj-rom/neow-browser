export default function Scrollable(props) {
  const styles = {
    overflow: 'scroll',
    overflowY: 'hidden',
  }

  return (
    <div style={styles}>
      { props.children }
    </div>
  )
}

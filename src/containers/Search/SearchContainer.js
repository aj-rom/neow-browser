import { connect } from 'react-redux'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../../components/Search/SearchBar'
import styles from './SearchContainer.module.css'
import NEO from '../../components/NEO/NEO'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

function SearchContainer(props) {
  const { error, isLoading, results } = props

  function renderResults(results) {
    return Object.entries(results).map((data, idx) => {
      const key = data[0]
      const list = data[1]
      const mapped = list.map((e, i) => {
        return <NEO key={i} data={e}/>
      })
      return (
        <Container fluid='lg' key={idx} className={`my-2 ${styles.daySection}`}>
          <Row>
            <Col md={4}><h4>{key}</h4></Col>
          </Row>
          <Container fluid className='d-flex flex-lg-row flex-wrap justify-content-around'>
            { mapped }
          </Container>
        </Container>
      )
    })
  }

  if (error) {
    return (
      <div id='search'>
        <Error error={error}/>
        <SearchBar/>
      </div>
    )
  } else if (isLoading) {
    return <Loading/>
  } else {
    return (
      <div id='search'>
        <SearchBar/>
        <Container fluid='md' className='m-2'>
          { renderResults(results) }
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: state.search.results,
  isLoading: state.search.isLoading,
  error: state.search.error,
})

export default connect( mapStateToProps, null )(SearchContainer)

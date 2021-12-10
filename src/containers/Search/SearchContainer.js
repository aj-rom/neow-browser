import { connect } from 'react-redux'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../../components/SearchBar'
import NEO from '../../components/NEO'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error'

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
        <Accordion
          key={idx}
          className='my-3 p-4 bg-dark border-bottom border-dark rounded'
          defaultActiveKey={list[0].id}
          style={{ minWidth: '300px' }}
        >
          <Row>
            <Col md={4}>
              <h4 className='p-2 text-light border-bottom border-light'>{key}</h4>
            </Col>
          </Row>
          { mapped }
        </Accordion>
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
      <Container id='search'>
        <Row>
          <Col className='d-flex justify-content-center' style={{ minWidth: '300px' }}>
            <SearchBar/>
          </Col>
        </Row>
        <Row>
          <Col className='d-inline-block justify-content-center' style={{ minWidth: '300px' }}>
            { renderResults(results) }
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  results: state.search.results,
  isLoading: state.search.isLoading,
  error: state.search.error,
})

export default connect( mapStateToProps, null )(SearchContainer)

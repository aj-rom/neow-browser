import Meta from '../components/Meta/Meta'
import SearchContainer from '../containers/Search/SearchContainer'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle/PageTitle'
import Main from '../components/Main/Main'

export default function Feed() {
  const meta = {
    description: 'Search NEO\'s within a given range of dates.',
  }

  return (
    <Container>
      <Meta title='Feed' meta={meta}/>
      <Main>
        <PageTitle title='NEO Feed'>
          Search for objects currently near Earth.
        </PageTitle>
        <SearchContainer/>
      </Main>
    </Container>
  )
}

import Meta from '../components/Meta'
import SearchContainer from '../containers/Search/SearchContainer'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Main from '../components/Main'

export default function Feed() {
  const meta = {
    description: 'Search NEO\'s within a given range of dates.',
  }

  return (
    <>
      <Meta title='Feed' meta={meta}/>
      <Main>
        <PageTitle title='NEO Feed'>
          Search for objects currently near Earth.
        </PageTitle>
        <SearchContainer/>
      </Main>
    </>
  )
}

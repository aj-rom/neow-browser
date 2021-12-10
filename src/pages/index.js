import Meta from '../components/Meta'
import BrowseContainer from '../containers/Browse/BrowseContainer'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Main from '../components/Main'

export default function Home() {
  const pageMeta = {
    description: 'A browser for today\'s current Near Earth Object. API\'s provided by NASA\'s JPL Team',
    keywords: 'Asteroid, NEO, NASA, JPL, ...',
  }

  return (
    <Container>
      <Meta title='Home' meta={pageMeta}/>
      <Main>
        <PageTitle title='NEO Browser'>
          Detailed day by day browser of Near Earth Objects
        </PageTitle>
        <BrowseContainer/>
      </Main>
    </Container>
  )
}

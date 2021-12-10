import DiameterTable from './DiameterTable'
import CloseApproachTable from './CloseApproachTable'
import { Accordion } from 'react-bootstrap'

export default function NEO(props) {
  const { data } = props
  const {
    absolute_magnitude_h,
    is_sentry_object,
    is_potentially_hazardous_asteroid,
    close_approach_data,
    estimated_diameter,
  } = data

  return (
    <Accordion.Item className='bg-light' eventKey={data.id}>
      <Accordion.Header>{ data.name }</Accordion.Header>

      <Accordion.Body>
        <ul className='list-unstyled text=dark'>
          <li><b>ID</b>: {data.id}</li>
          <li><b>Absolute Magnitude</b>: {absolute_magnitude_h}</li>
          <li><b>Sentry Object</b>: {is_sentry_object.toString()}</li>
          <li>
            <b>Hazardous</b>: {is_potentially_hazardous_asteroid.toString()}
          </li>
        </ul>

        <h4 className='my-2 px-0 pb-1 text-dark'>Estimated Diameter</h4>
        <DiameterTable diameter={estimated_diameter}/>

        <h4 className='my-2 px-0 pb-1 text-dark'>Close Approach Data</h4>
        <CloseApproachTable data={close_approach_data}/>
      </Accordion.Body>
    </Accordion.Item>
  )
}

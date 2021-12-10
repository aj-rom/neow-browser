import styles from './NEO.module.css'
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
    <Accordion.Item className={`${styles.neo}`} eventKey={data.id}>
      <Accordion.Header>{ data.name }</Accordion.Header>

      <Accordion.Body>
        <ul>
          <li><b>ID</b>: {data.id}</li>
          <li><b>Absolute Magnitude</b>: {absolute_magnitude_h}</li>
          <li><b>Sentry Object</b>: {is_sentry_object.toString()}</li>
          <li>
            <b>Hazardous</b>: {is_potentially_hazardous_asteroid.toString()}
          </li>
        </ul>

        <h6 className='my-2 p-1'>Estimated Diameter</h6>
        <DiameterTable diameter={estimated_diameter}/>

        <h6 className='my-2 p-1'>Close Approach Data</h6>
        <CloseApproachTable data={close_approach_data}/>
      </Accordion.Body>
    </Accordion.Item>
  )
}

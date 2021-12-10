import styles from './NEO.module.css'
import DiameterTable from './DiameterTable'
import CloseApproachTable from './CloseApproachTable'

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
    <article className={styles.neo}>
      <header>
        <h5 className={styles.h6}>{data.name}</h5>
        <p>
                    | <a href={data.links.self}>API Response</a> |
        </p>
      </header>
      <details>
        <summary>More Info</summary>
        <ul>
          <li><b>ID</b>: {data.id}</li>
          <li><b>Absolute Magnitude</b>: {absolute_magnitude_h}</li>
          <li><b>Sentry Object</b>: {is_sentry_object.toString()}</li>
          <li>
            <b>Hazardous</b>: {is_potentially_hazardous_asteroid.toString()}
          </li>
        </ul>

        <h6 className={styles.h6}>Estimated Diameter</h6>
        <DiameterTable diameter={estimated_diameter}/>

        <h6 className={styles.h6}>Close Approach Data</h6>
        <CloseApproachTable data={close_approach_data}/>
      </details>
    </article>
  )
}

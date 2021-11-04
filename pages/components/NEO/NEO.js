import styles from './NEO.module.css'
export default function NEO(props) {

    const { data } = props

    const diameter = data.estimated_diameter

    console.log(data)
    return (
        <article className={styles.neo}>
            <header>
                <h5 className={styles.h6}>{data.name}</h5>
                <p>
                    | <a href={data.links.self}>API Response</a> | <a href={data.nasa_jpl_url}>NASA JPL</a> |
                </p>
            </header>
            <details>
                <summary>More Info</summary>
                <ul>
                    <li><b>ID</b>: {data.id}</li>
                    <li><b>Absolute Magnitude</b>: {data.absolute_magnitude_h}</li>
                    <li><b>Sentry Object</b>: {data.is_sentry_object.toString()}</li>
                    <li><b>Hazardous</b>: {data.is_potentially_hazardous_asteroid.toString()}</li>
                </ul>

                <h6 className={styles.h6}>Estimated Diameter</h6>
                <table>
                    <thead>
                        <td>Unit</td>
                        <td>Min</td>
                        <td>Max</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ft</td>
                            <td>{diameter.feet.estimated_diameter_min}</td>
                            <td>{diameter.feet.estimated_diameter_max}</td>
                        </tr>
                        <tr>
                            <td>meters</td>
                            <td>{diameter.meters.estimated_diameter_min}</td>
                            <td>{diameter.meters.estimated_diameter_max}</td>
                        </tr>
                        <tr>
                            <td>km</td>
                            <td>{diameter.kilometers.estimated_diameter_min}</td>
                            <td>{diameter.kilometers.estimated_diameter_max}</td>
                        </tr>
                        <tr>
                            <td>miles</td>
                            <td>{diameter.miles.estimated_diameter_min}</td>
                            <td>{diameter.miles.estimated_diameter_max}</td>
                        </tr>
                    </tbody>
                </table>

                <h6 className={styles.h6}>Close Approach Data</h6>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Orbiting</td>
                            <td>Relative Velocity (km/s)</td>
                            <td>Miss Distance (lunar)</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data.close_approach_data.map(e => {
                        return (
                            <tr>
                                <td>{e.close_approach_date}</td>
                                <td>{e.orbiting_body}</td>
                                <td>{e.relative_velocity.kilometers_per_second}</td>
                                <td>{e.miss_distance.lunar}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </details>
        </article>
    )
}
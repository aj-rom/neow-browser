
import styles from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleChange = e => {
        const { id, value } = e.target
        console.log(value)
        if (id === 'startDate') {
            setStartDate(value)
        } else {
            setEndDate(value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form className={styles.form}>
            <div>
                <label htmlFor='start_date' className={styles.label}>Start Date</label>
                <input
                    type='date'
                    id='startDate'
                    className={styles.input}
                    value={startDate}
                    onChange={e => handleChange(e)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor='end_date' className={styles.label}>End Date</label>
                <input
                    type='date'
                    id='endDate'
                    className={styles.input}
                    value={endDate}
                    onChange={handleChange}
                />
            </div>
            <br/>
            <input type='submit' className={styles.submit} value='Search' onSubmit={e => handleSubmit(e)}/>
        </form>
    )
}
import styles from './SearchBar.module.css'
import {Component} from "react";
import {connect} from "react-redux";
import {fetchNeo} from "../../actions/SearchActions";

class SearchBar extends Component {

    state = { start_date: '', end_date: ''}

    handleChange = e => {
        const { id, value } = e.target
        if (id === 'start_date') {
           this.setState({ start_date: value })
        } else {
            this.setState({ end_date: value })
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchNeo({ start_date: this.state.start_date, end_date: this.state.end_date })
    }

    render() {
        return (
            <form className={styles.form}>
                <div>
                    <label htmlFor='start_date' className={styles.label}>Start Date</label>
                    <input
                        type='date'
                        id='start_date'
                        className={styles.input}
                        value={this.state.start_date}
                        onChange={this.handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor='end_date' className={styles.label}>End Date</label>
                    <input
                        type='date'
                        id='end_date'
                        className={styles.input}
                        value={this.state.end_date}
                        onChange={this.handleChange}
                    />
                </div>
                <br/>
                <input type='button' className={styles.submit} value='Search' onClick={this.handleSubmit}/>
            </form>
        )
    }
}

export default connect(null, { fetchNeo })(SearchBar)

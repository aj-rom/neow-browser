import styles from './SearchBar.module.css'
import { Component } from "react"
import { connect } from "react-redux"
import { fetchNeo } from "../../actions/SearchActions"
import { Button, Container, Form } from "react-bootstrap"

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
            <Container className='my-2 row justify-content-center'>
                <Form id='search' className={`w-75 p-2 ${styles.form}`}>
                    <Form.Group className="mb-2">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control id='start_date'
                                      type='date'
                                      onChange={this.handleChange}
                                      value={this.state.start_date}
                                      size='sm'
                        />
                        <Form.Text className='text-muted'>The starting date.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            id='end_date'
                            type='date'
                            onChange={this.handleChange}
                            value={this.state.end_date}
                            size='sm'
                        />
                        <Form.Text className='text-muted'>The ending date.</Form.Text>
                    </Form.Group>
                    <div className='row justify-content-center'>
                        <Button className='w-75' variant='primary' type='submit' onClick={ e => this.handleSubmit(e)}>Search</Button>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default connect(null, { fetchNeo })(SearchBar)

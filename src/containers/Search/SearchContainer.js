import SearchBar from "../../components/Search/SearchBar";
import {fetchNeo} from "../../actions/SearchActions";
import {connect} from "react-redux";
import {Component} from "react";
import styles from "./SearchContainer.module.css"
import NEO from "../../components/NEO/NEO";

class SearchContainer extends Component {

    renderResults(results) {
        return Object.entries(results).map((data, idx) => {
            const key = data[0]
            const list = data[1]
            return (
                <div key={idx} className={styles.daySection}>
                    <h4>{key}</h4>
                    {list.map((e, i) => {
                        return <NEO key={i} data={e}/>
                    })}
                </div>
            )
        })
    }

    render() {
        const { error, isLoading, results } = this.props
        if (error) {
            return <div id='search'>
                <div className={styles.error}>Error: {error}</div>
                <SearchBar fetchNeo={fetchNeo}/>
            </div>
        } else if (isLoading) {
            return <div aria-busy={true}>Loading...</div>
        } else {
            return <div id='search'>
                <SearchBar fetchNeo={fetchNeo}/>
                <div className={styles.neoSection}>
                    { this.renderResults(results) }
                </div>
            </div>
        }
    }
}

const mapStateToProps = (state) => ({
    results: state.results,
    isLoading: state.isLoading,
    error: state.error
})

export default connect( mapStateToProps, ({ fetchNeo }))(SearchContainer)
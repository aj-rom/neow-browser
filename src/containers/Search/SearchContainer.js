import SearchBar from "../../components/Search/SearchBar";
import {connect} from "react-redux";
import styles from "./SearchContainer.module.css"
import NEO from "../../components/NEO/NEO";
import Loading from "../../components/Loading/Loading";

function SearchContainer(props) {

    const { error, isLoading, results } = props

    function renderResults(results) {
        return Object.entries(results).map((data, idx) => {
            const key = data[0]
            const list = data[1]
            let mapped = list.map((e, i) => { return <NEO key={i} data={e}/> })
            return (
                <div key={idx} className={styles.daySection}>
                    <h4>{key}</h4>
                    {mapped}
                </div>
            )
        })
    }

    if (error) {
        return <div id='search'>
            <div className={styles.error}>Error: {error}</div>
            <SearchBar/>
        </div>
    } else if (isLoading) {
        return <Loading/>
    } else {
        return <div id='search'>
            <SearchBar/>
            <div className={styles.neoSection}>
                { renderResults(results) }
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    results: state.search.results,
    isLoading: state.search.isLoading,
    error: state.search.error
})

export default connect( mapStateToProps, null )(SearchContainer)
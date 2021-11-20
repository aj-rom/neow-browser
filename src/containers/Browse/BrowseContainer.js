import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import {connect} from "react-redux";

function BrowseContainer(props) {
    const { error, isLoading, result } = props

    if (error) {
        return (
            <BrowseWrap>
                <Error error={error}/>
            {/*    add rest of browse components */}
            </BrowseWrap>
        )
    } else if (isLoading) {

    }

    return (
        <BrowseWrap>

        </BrowseWrap>
    )


}

const BrowseWrap = (props) => {
    return <div id='browse'>{ props.children }</div>
}

export default connect(null, null)(BrowseContainer)
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../../redux/shop/shopSelector";
import Spinner from "../spinner/spinner";
import CollectionOverview from "./collectionOverview";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionOverview)

export default CollectionOverviewContainer

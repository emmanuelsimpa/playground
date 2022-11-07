import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import { selectIsCollectionLoading } from "../../../redux/shop/shopSelector"
import Spinner from "../../components/spinner/spinner"
import Category from "./category"

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoading(state)
})

const CategoryContainer = compose(
    connect(mapStateToProps),
    Spinner
)(Category)

export default CategoryContainer
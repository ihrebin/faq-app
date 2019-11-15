import { connect } from 'react-redux';
import { selectCategory, stepBack } from '../actions';
import CategoryList from '../components/CategoryList';


const mapStateToProps = state => ({
  categories: state.categories,
  backVisible: state.history.length > 1
})

const mapDispatchToProps = dispatch => ({
  selectCategory: id => dispatch(selectCategory(id)),
  back: id => dispatch(stepBack(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)
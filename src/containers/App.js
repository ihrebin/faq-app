import { connect } from 'react-redux'
import App from '../components/App'


const mapStateToProps = state => ({
  isLoading: state.app.isLoading
})


export default connect(
  mapStateToProps
)(App)
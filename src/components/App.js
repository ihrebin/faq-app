import React from 'react';
import '../App.css';
import CategoryList from '../containers/CategoryList';
import QuestionList from '../containers/QuestionList';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.init(this.props.faqid);
  }
  render() {
    return (
      <div className="App container p-2">

        { this.props.isLoading && <Spinner animation="border" /> }
        { this.props.isLoading || (
          <div className="row">
            <div className="col-sm-5">
                <CategoryList />
            </div>
              <div className="col-sm-7">
                <QuestionList />
              </div>
            </div>
          ) }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  init: id => dispatch(selectCategory(id))
})
export default connect(
  null,
  mapDispatchToProps
)(App)

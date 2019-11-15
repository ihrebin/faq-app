import React from 'react'
import {createMarkup} from '../tools/helpers'
class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isExpanded: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
          isExpanded: !state.isExpanded
        }));
      }

      render(){
          return (
            <div className="card mb-3">
                  <h6 onClick={this.handleClick} className="card-header">
                      {this.props.question}
                  </h6>
                {this.state.isExpanded && <div className="card-body"><p className="card-text" dangerouslySetInnerHTML={createMarkup(this.props.answer)}></p></div> }
          </div>
        )
      }
}

export default Question;
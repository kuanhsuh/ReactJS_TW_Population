import React, { Component } from 'react';

//Import Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCity, searchCity } from '../actions/index'

class Input extends Component {
  constructor(props){
    super(props);
    this.state={
      term: ""
    }
  }

  onInputChange(event){
    this.setState({term: event.target.value});
    this.props.searchCity(event.target.value)
  }

  onFormSubmit(event){
    event.preventDefault();
    this.setState({term: ''});
  }

  componentWillMount(){
    this.props.fetchCity()
  }
  render() {
    return (
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              placeholder="請輸入台灣城市或區域 "
              onChange={this.onInputChange.bind(this)}
              value={this.state.term}
            />
          </div>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCity, searchCity}, dispatch)
}
export default connect(null, mapDispatchToProps)(Input)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Display extends Component {

  renderData(data){
    const district = data.site_id;
    const population = data.people_total;
    const density = data.population_density;

    return (
      <tr key={district}>
        <td>{district}</td>
        <td>{population}</td>
        <td>{density}</td>
      </tr>
    )
  }

  render() {
    const {city} = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>區域別({city.length})</th>
            <th>年底人口數</th>
            <th>人口密度</th>
          </tr>
        </thead>
        <tbody>
          {city === undefined ?
             console.log("loading"):
           city.map(this.renderData.bind(this))
          }
        </tbody>
      </table>
    );
  }
}
function mapStateToProps(state){
  const { city, searchText } = state.city

  return {
    city: _.filter(city, function(o) {
        const regex = new RegExp(searchText, 'gi');
        return o.site_id.match(regex);
      })

  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({sortPopulation}, dispatch)
// }

export default connect(mapStateToProps)(Display);

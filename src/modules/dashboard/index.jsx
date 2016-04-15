import React, { PropTypes } from 'react';
import Chart from './chart';
import Table from './table';
import { actionCreators } from './redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    ...state
  };
}

class Dashboard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    chartName: PropTypes.string,
    dispatch: PropTypes.func
  };
  static defaultProps = {
    title: 'Dashboard',
    chartName: 'Another way Chart'
  };
  constructor(props) {
    super(props);
    this.state = {
      chartValue: 1,
      sharedData: 'Mah Share'
    };
    //THIS IS NOT AUTOMATICALLY BOUND
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch } = this.props;
    this.setState({
      chartValue: this.bigCalculation(this.state.chartValue),
    });
    dispatch(actionCreators.fetchViewModel());
  }

  bigCalculation(param) {
    return param + 1;
  }

  render() {
    console.log(this.props); // eslint-disable-line no-console
    const { chartName, title } = this.props;
    const { sharedData, chartValue } = this.state;
    return (
      <div id="Dashboard">
          {title}
          <Chart
            title={chartName}
            sharedData={sharedData}
            value={chartValue}
          />
          <Table
            handleClick={this.handleClick}
            sharedData={sharedData}
          />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);

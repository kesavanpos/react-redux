import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import store from './store';
import { Provider, connect } from 'react-redux';
import FetchUsers from './actions/userActions';
import { bindActionCreators } from 'redux';

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ FetchUsers: FetchUsers }, dispatch);
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.FetchUsers());
  }

  render() {
    return (
      <div>
        {/* <Hello name={this.state.name} /> */}
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

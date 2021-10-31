import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import store from './store';
import { Provider, connect } from 'react-redux';
import { FetchUsers } from './actions/userActions';

// interface AppProps {}
// interface AppState {
//   name: string;
// }

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: 'react',
    // };
  }

  componentDidMount() {
    this.props.FetchUsers();
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
export default connect(null, { FetchUsers })(App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import store from './store';
import Provider from 'react-redux';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'fasdfads',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

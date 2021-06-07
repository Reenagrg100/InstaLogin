import React, {Component} from 'react';
import Login from './src/screens/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }
}

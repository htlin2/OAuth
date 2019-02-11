import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Login from './Login.jsx';
import Todo from './Todo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/todo" component={Todo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

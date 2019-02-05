import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Where',
            completed: false
        },
        {
            id: 2,
            title: 'When',
            completed: false
        },
        {
            id: 3,
            title: 'Why',
            completed: false
        },
    ]
}
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

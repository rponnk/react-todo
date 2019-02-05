import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    render() {
        return (
            this.props.todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    title={todo.title
                }/>
            ))
        );
    }
}

export default Todos;
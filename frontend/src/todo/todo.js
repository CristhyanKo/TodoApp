import React, { Component } from 'react'
import PageHeader from '../template/page-header'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

class Todo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}

export default Todo
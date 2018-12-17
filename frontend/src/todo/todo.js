import React, { Component } from 'react'
import PageHeader from '../template/page-header'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import axios from 'axios'
import ActionButton from 'antd/lib/modal/ActionButton';
import { message } from 'antd';

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refresh = this.refresh.bind(this)

        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createAt`).then((resp) => {
            this.setState({
                ...this.state,
                description: '',
                list: resp.data
            })
        })
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description }).then((resp) => {
            this.refresh()
        })
    }

    handleRemove(data){
        console.log('erro')
        axios.delete(`${URL}/${data._id}`).then((resp) => {
            message.success('Tarefa excluida com sucesso!')
            this.refresh()
         })
    }   

    handleMarkAsDone(data){
        axios.put(`${URL}/${data._id}`, { ...data, done: true }).then((resp) => {
            this.refresh()
         })
    } 

    handleMarkAsPending(data){
        axios.put(`${URL}/${data._id}`, { ...data, done: false }).then((resp) => {
            this.refresh()
         })
    } 

    handleChange(e){
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <br/>
                <TodoList 
                    data={this.state.list}
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                     />
            </div>
        )
    }
}

export default Todo
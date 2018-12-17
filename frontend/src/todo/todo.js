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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh = this.refresh.bind(this)

        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createAt${search}`).then((resp) => {
            this.setState({
                ...this.state,
                description: description,
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
            this.refresh(this.state.description)
         })
    }   

    handleMarkAsDone(data){
        axios.put(`${URL}/${data._id}`, { ...data, done: true }).then((resp) => {
            message.success('Tarefa finalizada com sucesso!')
            this.refresh(this.state.description)
         })
    } 

    handleMarkAsPending(data){
        axios.put(`${URL}/${data._id}`, { ...data, done: false }).then((resp) => {
            this.refresh(this.state.description)
         })
    } 

    handleChange(e){
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} handleClear={this.handleClear} handleSearch={this.handleSearch} />
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
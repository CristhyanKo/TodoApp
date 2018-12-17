import React from 'react'
import { Input, Col, Row, Button } from 'antd';
import IconButton from '../template/iconButton';

export default props => {
const keyHandler = (e) => {
    if (e.key === 'Enter') {
        e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
        props.handleClear()
    }
}

    return (
        <Row>
            <Col span={22}>
                <Input onKeyUp={keyHandler} placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></Input>
            </Col>


            <Col span={2}>
                <IconButton onClick={props.handleAdd} type='primary' icon={'plus'} />
                <IconButton onClick={props.handleSearch} type='primary' icon={'search'} />
                <IconButton onClick={props.handleClear} type='primary' icon={'times'} />
            </Col>
        </Row>
    )
}
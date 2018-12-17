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
            <Col xs={24} lg={22} sm={24} md={24}>
                <Input style={{margin: '0px 0px 10px 0px'}} onKeyUp={keyHandler} placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></Input>
            </Col>


            <Col xs={24} lg={2} sm={24} md={24}>
                <IconButton onClick={props.handleAdd} type='primary' icon={'plus'} />
                <IconButton onClick={props.handleSearch} type='primary' icon={'search'} />
                <IconButton onClick={props.handleClear} type='primary' icon={'times'} />
            </Col>
        </Row>
    )

    
}
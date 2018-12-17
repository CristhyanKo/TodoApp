import React from 'react'
import { Input, Col, Row, Button } from 'antd';
import IconButton from '../template/iconButton';

export default props => (
    <Row>
        <Col span={23}>
            <Input placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></Input>
        </Col>


        <Col span={1}>
            <IconButton onClick={props.handleAdd} type='primary' icon={'plus'} />
        </Col>
    </Row>
)
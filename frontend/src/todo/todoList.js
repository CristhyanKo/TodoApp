import React from 'react'
import { Table, Popconfirm, message } from 'antd';
import IconButton from '../template/iconButton';
import todoForm from './todoForm';

const { Column } = Table;

function cancel(e) {
    console.log(e);
    message.error('Exclusão cancelada!');
}

function confirm(e, data) {
    console.log(data);
    message.success('Exclusão cancelada!');
}

export default props => {
    return <Table rowClassName={(data) => { return (data.done ? 'markedAsDone' : '') }} rowKey="_id" bordered={true} dataSource={props.data}>
        <Column title="Descrição" dataIndex="description" key="description" />
        <Column className='todoActions' key='_id' title="Ações" render={(text, data) => (
            <div>
                <IconButton hide={data.done} key={data._id} type='success' icon='check' onClick={() => props.handleMarkAsDone(data)} />
                <IconButton hide={!data.done} key={data._id + 'x'} type='warning' icon='undo' onClick={() => props.handleMarkAsPending(data)} />
                <Popconfirm title="Tem certeza que deseja excluir?" onConfirm={(e) => confirm(e, data)} onCancel={cancel} okText="Sim" cancelText="Não">
                    <IconButton hide={!data.done} key={data._id + 'y'} type='danger' icon='trash' />
                </Popconfirm>
            </div>
        )} />
    </Table>
}
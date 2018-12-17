import React from 'react'
import { Table, Modal, message } from 'antd';
import IconButton from '../template/iconButton';

const confirm = Modal.confirm;
const { Column } = Table;

function warning(data, func) {
    confirm({
        title: 'Tem certeza que deseja excluir?',
        okText: 'Sim',
        okType: 'danger',
        cancelText: 'Não',
        onOk() {
          func(data)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
}

export default props => {
    return <Table pagination={{ pageSize: 8 }} rowClassName={(data) => { return (data.done ? 'markedAsDone' : '') + ' whiteRow' }} rowKey="_id" bordered={true} dataSource={props.data}>
        <Column title="Descrição" dataIndex="description" key="description" />
        <Column className='todoActions' key='_id' title="Ações" render={(text, data) => (
            <div>
                <IconButton hide={data.done} key={data._id} type='success' icon='check' onClick={() => props.handleMarkAsDone(data)} />
                <IconButton hide={!data.done} key={data._id + 'x'} type='warning' icon='undo' onClick={() => props.handleMarkAsPending(data)} />
                <IconButton hide={!data.done} key={data._id + 'y'} type='danger' icon='trash' onClick={() => warning(data, props.handleRemove)} />
            </div>
        )} />
    </Table>
}
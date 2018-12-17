import React from 'react'
import { Breadcrumb } from 'antd';

export default props => (
    <Breadcrumb style={{ margin: '0px 0px 16px 0px' }}>
        <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.small}</Breadcrumb.Item>
    </Breadcrumb>
)
import React from 'react'
import { Button } from 'antd';
import If from './if'

export default props => (
    <If test={!props.hide}>
        <Button onClick={props.onClick} shape="circle" style={{ marginLeft: '10px' }} type={props.type}>
            <i className={'fa fa-' + props.icon}></i>
        </Button>
    </If>
)